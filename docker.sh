if [[ -z $1 ]]; then
    docker-compose up --build
    exit
fi

PROJECT=$1
if [[ $PROJECT == "front" ]]; then
    docker build -f ./front/Dockerfile . -t blue-origin/front
elif [[ $PROJECT == "weather" ]]; then
    docker build -f ./back/weather-service/Dockerfile . -t blue-origin/weather-service
elif [[ $PROJECT == "rocket" ]]; then
    docker build -f ./back/rocket-service/Dockerfile . -t blue-origin/rocket-service
elif [[ $PROJECT == "mission" ]]; then
    docker build -f ./back/mission-service/Dockerfile . -t blue-origin/mission-service
elif [[ $PROJECT == "telemetry" ]]; then
    docker build -f ./back/telemetry-service/Dockerfile . -t blue-origin/telemetry-service
elif [[ $PROJECT == "booster" ]]; then
    docker build -f ./back/booster-service/Dockerfile . -t blue-origin/booster-service
elif [[ $PROJECT == "payload" ]]; then
    docker build -f ./back/payload-service/Dockerfile . -t blue-origin/payload-service
else
    echo "Project $PROJECT doesn't exist."
    echo "Exiting..."
    exit
fi

docker-compose up