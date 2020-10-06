#!/bin/bash
PARAMS=""
HARG=0
PARG=""
while (("$#")); do
    case "$1" in
    -h | --help)
        HARG=1
        break
        ;;
    -p | --project)
        PARG=$2
        shift 2
        ;;
    --) # end argument parsing
        shift
        break
        ;;
    -* | --*=) # unsupported flags
        echo "Error: Unsupported flag $1" >&2
        exit 1
        ;;
    *) # preserve positional arguments
        PARAMS="$PARAMS $1"
        shift
        ;;
    esac
done
# set positional arguments in their proper place
eval set -- "$PARAMS"
if [[ $HARG == 1 ]]; then
    echo ""
    echo "Usage: $0 [options] [action]"
    echo ""
    echo "Options:"
    echo "	-h, --help		Print this help"
    echo "	-p, --project <project>		Do to the specific project"

    echo "Action list:"
    echo "	start						start project"
    echo "	stop						stop project"
    echo "	logs						show logs"
    echo ""
    exit
fi

if [[ -z $PARAMS ]]; then
    echo "No action selected, exiting..."
    exit
fi
printf -v PARAMS '%s' $PARAMS

function changedirectory() {
    PROJECT=$1
    if [[ $PROJECT == "front" ]]; then
        cd front
    elif [[ $PROJECT == "weather" ]]; then
        cd back/weather-service
    elif [[ $PROJECT == "rocket" ]]; then
        cd back/rocket-service
    elif [[ $PROJECT == "mission" ]]; then
        cd back/mission-service
    elif [[ $PROJECT == "telemetry" ]]; then
        cd back/telemetry-service
    else
        echo "Project $PROJECT doesn't exist."
        echo "Exiting..."
        exit
    fi
}

function runstart() {
    PROJECT=$1
    if [[ $PROJECT == "front" ]]; then
        cd front
        pm2 start npm --name "front" -- run dev
    elif [[ $PROJECT == "weather" ]]; then
        cd back/weather-service
        pm2 start ./src/app/app.ts --watch --name "weather"
    elif [[ $PROJECT == "rocket" ]]; then
        cd back/rocket-service
        pm2 start ./src/app/app.ts --watch --name "rocket"
    elif [[ $PROJECT == "mission" ]]; then
        cd back/mission-service
        pm2 start ./src/app/app.ts --watch --name "mission"
    elif [[ $PROJECT == "telemetry" ]]; then
        cd back/telemetry-service
        pm2 start ./src/app/app.ts --watch --name "telemetry"
    else
        echo "Project $PROJECT doesn't exist."
        echo "Exiting..."
        exit
    fi
}

function runstop() {
    pm2 delete $1
}

function runlog() {
    pm2 logs $1
}

if [[ $PARAMS == "start" ]]; then
    if [[ -z $PARG ]]; then
        runstart "front"
        cd ..
        runstart "mission"
        cd ../..
        runstart "rocket"
        cd ../..
        runstart "weather"
        cd ../..
        runstart "telemetry"
    else
        runstart $PARG
    fi
elif [[ $PARAMS == "stop" ]]; then
    if [[ -z $PARG ]]; then
        runstop "front"
        runstop "mission"
        runstop "rocket"
        runstop "weather"
        runstop "telemetry"
    else
        runstop $PARG
    fi
elif [[ $PARAMS == "logs" ]]; then
    if [[ -z $PARG ]]; then
        echo "Impossible to log all projects"
    else
        runlog $PARG
    fi
else 
    echo "Action $PARAMS doesn't exist."
fi

echo "Exiting..."