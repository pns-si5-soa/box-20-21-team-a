cd back 

cd anomaly-analyser-service
echo "anomaly : "
cat .env | grep PORT=

cd ../booster-service
echo "booster : "
cat .env | grep PORT=

cd ../mission-service
echo "mission : "
cat .env | grep PORT=

cd ../missions-coordinator-service
echo "missions-coordonator : "
cat .env | grep PORT=

cd ../payload-service
echo "payload : "
cat .env | grep PORT=

cd ../real-time-service
echo "real-time : "
cat .env | grep PORT=

cd ../rocket-service
echo "rocket : "
cat .env | grep PORT=

cd ../telemetry-listener-service
echo "telemetry-listener : "
cat .env | grep PORT=

cd ../telemetry-writer-service
echo "telemetry-writer : "
cat .env | grep PORT=

cd ../weather-service
echo "weather : "
cat .env | grep PORT=
