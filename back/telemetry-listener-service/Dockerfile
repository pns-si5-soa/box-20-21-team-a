FROM node:14

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app/back/telemetry-listener-service

# Installing dependencies
COPY ./back/telemetry-listener-service/package*.json /usr/src/app/back/telemetry-listener-service/
COPY ./logs-module /usr/src/app/logs-module

# Copying source files
COPY ./back/telemetry-listener-service /usr/src/app/back/telemetry-listener-service

RUN rm -rf node_modules
RUN npm install

EXPOSE 3003
# Running the app
CMD [ "npm", "start" ]