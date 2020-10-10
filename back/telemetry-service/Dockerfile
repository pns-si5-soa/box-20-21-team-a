FROM node:14

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app/back/telemetry-service

# Installing dependencies
COPY ./back/telemetry-service/package*.json /usr/src/app/back/telemetry-service/
COPY ./logs-module /usr/src/app/logs-module

RUN npm install

# Copying source files
COPY ./back/telemetry-service /usr/src/app/back/telemetry-service

EXPOSE 3003
# Running the app
CMD [ "npm", "start" ]