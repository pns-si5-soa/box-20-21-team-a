FROM node:14

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app/back/weather-service

# Installing dependencies
COPY ./back/weather-service/package*.json /usr/src/app/back/weather-service/
COPY ./logs-module /usr/src/app/logs-module

RUN npm install

# Copying source files
COPY ./back/weather-service /usr/src/app/back/weather-service

EXPOSE 3001
# Running the app
CMD [ "npm", "start" ]