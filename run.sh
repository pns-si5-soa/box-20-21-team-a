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
    cd front
    npm install
    cd ../back/weather-service
    npm install
    cd ../mission-service
    npm install
    cd ../rocket-service
    npm install
    cd ../weather-service
    npm install
    cd ../telemetry-service
    npm install
    cd ../payload-service
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
        cd front
    elif [[ $PROJECT == "weather" ]]; then
        cd back/weather-service
    elif [[ $PROJECT == "rocket" ]]; then
        cd back/rocket-service
    elif [[ $PROJECT == "mission" ]]; then
        cd back/mission-service
    elif [[ $PROJECT == "telemetry" ]]; then
        cd back/telemetry-service
    elif [[ $PROJECT == "payload" ]]; then
        cd back/payload-service
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
        runclean "telemetry"
        cd ../..
        runclean "payload"
        cd ../..
    else
        runclean $PARG
    fi
else 
    echo "Action $PARAMS doesn't exist."
fi

echo "Exiting..."