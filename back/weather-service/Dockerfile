FROM node:14

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app/back/weather-service

# Installing dependencies
COPY ./back/weather-service/package*.json /usr/src/app/back/weather-service/
COPY ./logs-module /usr/src/app/logs-module

# Copying source files
COPY ./back/weather-service /usr/src/app/back/weather-service

RUN rm -rf node_modules
RUN npm install

EXPOSE 3001
# Running the app
CMD [ "npm", "start" ]