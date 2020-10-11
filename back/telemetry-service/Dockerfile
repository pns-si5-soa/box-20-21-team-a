FROM node:14

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app/back/telemetry-service

# Installing dependencies
COPY ./back/telemetry-service/package*.json /usr/src/app/back/telemetry-service/
COPY ./logs-module /usr/src/app/logs-module

# Copying source files
COPY ./back/telemetry-service /usr/src/app/back/telemetry-service

RUN rm -rf node_modules
RUN npm install

EXPOSE 3003
# Running the app
CMD [ "npm", "start" ]