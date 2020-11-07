FROM node:14

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app/back/telemetry-analyser-service

# Installing dependencies
COPY ./back/telemetry-analyser-service/package*.json /usr/src/app/back/telemetry-analyser-service/
COPY ./logs-module /usr/src/app/logs-module

# Copying source files
COPY ./back/telemetry-analyser-service /usr/src/app/back/telemetry-analyser-service

RUN rm -rf node_modules
RUN npm install

EXPOSE 3006
# Running the app
CMD [ "npm", "start" ]