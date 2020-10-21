FROM node:14

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app/back/telemetry-writer-service

# Installing dependencies
COPY ./back/telemetry-writer-service/package*.json /usr/src/app/back/telemetry-writer-service/
COPY ./logs-module /usr/src/app/logs-module

# Copying source files
COPY ./back/telemetry-writer-service /usr/src/app/back/telemetry-writer-service

RUN rm -rf node_modules
RUN npm install

EXPOSE 3003
# Running the app
CMD [ "npm", "start" ]