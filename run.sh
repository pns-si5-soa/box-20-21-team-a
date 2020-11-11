yellow=`tput setaf 3`
docker-compose down -v
docker-compose -f docker-compose.yml up \
    --abort-on-container-exit \
    --exit-code-from front
echo $yellow 
echo "You can see logs in the container-logs directory"