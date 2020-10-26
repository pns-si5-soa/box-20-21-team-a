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

docker-compose build

