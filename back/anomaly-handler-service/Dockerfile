FROM node:14

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app/back/anomaly-handler-service

# Installing dependencies
COPY ./back/anomaly-handler-service/package*.json /usr/src/app/back/anomaly-handler-service/
COPY ./logs-module /usr/src/app/logs-module

# Copying source files
COPY ./back/anomaly-handler-service /usr/src/app/back/anomaly-handler-service

RUN rm -rf node_modules
RUN npm install

EXPOSE 3012
# Running the app
CMD [ "npm", "start" ]