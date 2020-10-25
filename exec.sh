#!/bin/bash
PARAMS=""
HARG=0
UARG=0
DARG=0
PARG=""
while (("$#")); do
    case "$1" in
    -h | --help)
        HARG=1
        break
        ;;
    -u | --update)
        UARG=1
        break
        ;;
    -d | --docker)
        DARG=1
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
    echo "	-u, --update		Update project and install dependencies npm for each project"
    echo "	-d, --docker		Run project with docker"
    echo "	-p, --project <project>		Do to the specific project"

    echo "Action list:"
    echo "	start						start project"
    echo "	dev						start project at dev (with auto-reload)"
    echo "	test						run all tests"
    echo "	clean						removing all js files"
    echo ""
    exit
fi

if [[ $UARG == 1 ]]; then
    git pull origin develop
    cd front || exit
    npm install
    cd ../back/weather-service || exit
    npm install
    cd ../mission-service || exit
    npm install
    cd ../rocket-service || exit
    npm install
    cd ../weather-service || exit
    npm install
    cd ../telemetry-writer-service || exit
    npm install
    cd ../booster-service || exit
    npm install
    cd ../payload-service || exit
    npm install
    cd ../real-time-service || exit
    npm install
    cd ../anomaly-analyser-service || exit
    npm install
    exit
fi

if [[ $DARG == 1 ]]; then
    docker-compose up -d --build
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
        cd front || exit
    elif [[ $PROJECT == "weather" ]]; then
        cd back/weather-service || exit
    elif [[ $PROJECT == "rocket" ]]; then
        cd back/rocket-service || exit
    elif [[ $PROJECT == "mission" ]]; then
        cd back/mission-service || exit
    elif [[ $PROJECT == "telemetry-writer" ]]; then
        cd back/telemetry-writer-service || exit
    elif [[ $PROJECT == "telemetry-listener" ]]; then
        cd back/telemetry-listener-service || exit
    elif [[ $PROJECT == "booster" ]]; then
        cd back/booster-service || exit
    elif [[ $PROJECT == "payload" ]]; then
        cd back/payload-service || exit
    elif [[ $PROJECT == "real-time" ]]; then
        cd back/real-time-service || exit
    elif [[ $PROJECT == "anomaly-analyser" ]]; then
        cd back/anomaly-analyser-service || exit
    else
        echo "Project $PROJECT doesn't exist."
        echo "Exiting..."
        exit
    fi
}

function runstart() {
    changedirectory $1
    npm run start
}

function runtest() {
    changedirectory $1
    npm run test
}

function rundev() {
    changedirectory $1
    npm run dev
}

function runclean() {
    changedirectory $1
    rm -rf build/*
}

if [[ $PARAMS == "start" ]]; then
    if [[ -z $PARG ]]; then
        echo "Impossible to start all projects"
    else
        runstart $PARG
    fi
elif [[ $PARAMS == "dev" ]]; then
    if [[ -z $PARG ]]; then
        echo "Impossible to run at dev all projects"
    else
        rundev $PARG
    fi
elif [[ $PARAMS == "test" ]]; then
    if [[ -z $PARG ]]; then
        echo "Impossible to test all projects"
    else
        runtest $PARG
    fi
elif [[ $PARAMS == "clean" ]]; then
    if [[ -z $PARG ]]; then
        runclean "front"
        cd ..
        runclean "mission"
        cd ../..
        runclean "rocket"
        cd ../..
        runclean "weather"
        cd ../..
        runclean "telemetry-writer"
        cd ../..
        runclean "telemetry-listener"
        cd ../..
        runclean "booster"
        cd ../..
        runclean "payload"
        cd ../..
        runclean "real-time"
        cd ../..
        runclean "anomaly-analyser"
        cd ../..
    else
        runclean $PARG
    fi
else 
    echo "Action $PARAMS doesn't exist."
fi

echo "Exiting..."