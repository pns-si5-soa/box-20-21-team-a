#!/bin/bash
PARAMS=""
HARG=0
PARG=""
BARG=0
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
    -b | --only-back)
        BARG=1
        break
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
    echo "	restart						restart project"
    echo "	logs						show logs"
    echo ""
    exit
fi

if [[ -z $PARAMS ]]; then
    echo "No action selected, exiting..."
    exit
fi
printf -v PARAMS '%s' $PARAMS

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
    elif [[ $PROJECT == "telemetry-writer" ]]; then
        cd back/telemetry-writer-service
        pm2 start ./src/app/app.ts --watch --name "telemetry-writer"
    elif [[ $PROJECT == "telemetry-listener" ]]; then
        cd back/telemetry-listener-service
        pm2 start ./src/app/app.ts --watch --name "telemetry-listener"
    elif [[ $PROJECT == "booster" ]]; then
        cd back/booster-service
        pm2 start ./src/app/app.ts --watch --name "booster"
    elif [[ $PROJECT == "payload" ]]; then
        cd back/payload-service
        pm2 start ./src/app/app.ts --watch --name "payload"
    elif [[ $PROJECT == "real-time" ]]; then
        cd back/real-time-service
        pm2 start ./src/app/app.ts --watch --name "real-time"
    elif [[ $PROJECT == "missions-coordinator" ]]; then
        cd back/missions-coordinator-service
        pm2 start ./src/app/app.ts --watch --name "missions-coordinator"
    elif [[ $PROJECT == "anomaly-analyser" ]]; then
        cd back/anomaly-analyser-service
        pm2 start ./src/app/app.ts --watch --name "anomaly-analyser"
    elif [[ $PROJECT == "poll" ]]; then
        cd back/poll-service
        pm2 start ./src/app/app.ts --watch --name "poll"
    else
        echo "Project $PROJECT doesn't exist."
        echo "Exiting..."
        exit
    fi
}

function runstop() {
    pm2 delete $1
}

function runrestart() {
    pm2 restart $1
}

function runlog() {
    pm2 logs $1
}

if [[ $PARAMS == "start" ]]; then
    if [[ -z $PARG ]]; then
        if [[ $BARG == 0  ]]; then
            runstart "front"
            cd ..
        fi
        runstart "mission"
        cd ../..
        runstart "weather"
        cd ../..
        runstart "telemetry-listener"
        cd ../..
        runstart "telemetry-writer"
        cd ../..
        runstart "rocket"
        cd ../..
        runstart "booster"
        cd ../..
        runstart "payload"
        cd ../..
        runstart "real-time"
        cd ../..
        runstart "missions-coordinator"
        cd ../..
        runstart "anomaly-analyser"
        cd ../..
        runstart "poll"
        

    else
        runstart $PARG
    fi
elif [[ $PARAMS == "stop" ]]; then
    if [[ -z $PARG ]]; then
        if [[ $BARG == 0  ]]; then
            runstop "front"
        fi
        runstop "mission"
        runstop "rocket"
        runstop "weather"
        runstop "telemetry-listener"
        runstop "telemetry-writer"
        runstop "booster"
        runstop "payload"
        runstop "real-time"
        runstop "missions-coordinator"
        runstop "anomaly-analyser"
        runstop "poll"  
    else
        runstop $PARG
    fi
elif [[ $PARAMS == "restart" ]]; then
    if [[ -z $PARG ]]; then
        if [[ $BARG == 0  ]]; then
            runrestart "front"
        fi
        runrestart "mission"
        runrestart "rocket"
        runrestart "weather"
        runrestart "telemetry-listener"
        runrestart "telemetry-writer"
        runrestart "booster"
        runrestart "payload"
        runrestart "real-time"
        runrestart "missions-coordinator"
        runrestart "poll"
        runrestart "mission"
    else
        runrestart $PARG
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