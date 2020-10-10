FROM node:14

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app/back/mission-service

# Installing dependencies
COPY ./back/mission-service/package*.json /usr/src/app/back/mission-service/
COPY ./logs-module /usr/src/app/logs-module

RUN npm install

# Copying source files
COPY ./back/mission-service /usr/src/app/back/mission-service

EXPOSE 3002
# Running the app
CMD [ "npm", "start" ]