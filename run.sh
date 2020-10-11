yellow=`tput setaf 3`
docker-compose up
cat container-logs/*.log
echo $yellow 
echo "You can see logs in the container-logs directory"