red=`tput setaf 1`
green=`tput setaf 2`
blue=`tput setaf 4`
reset=`tput sgr0`
echo $blue
echo "###################################"
echo "#                                 #"
echo "#                                 #"
echo "#          Blue Origin            #"
echo "#                                 #"
echo "#                                 #"
echo "###################################"
echo $green
echo "Preparing project"
echo $reset
echo "Building docker images with dependencies"

echo $red 
echo "Installing Booster-service"
echo $reset
cd back/booster-service
npm install

echo $red 
echo "Installing Mission-service"
echo $reset
cd ../mission-service
npm install

echo $red 
echo "Installing Payload-service"
echo $reset
cd ../payload-service
npm install

echo $red 
echo "Installing Rocket-service"
echo $reset
cd ../rocket-service
npm install

echo $red 
echo "Installing Telemetry-service"
echo $reset
cd ../telemetry-writer-service
npm install

echo $red 
echo "Installing Weather-service"
echo $reset
cd ../weather-service
npm install

echo $green
echo "All modules are installed"

cd ../..
echo "Building images docker"
echo $reset

docker-compose build

