FROM node:14

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app/back/mission-service

# Installing dependencies
COPY ./back/mission-service/package*.json /usr/src/app/back/mission-service/
COPY ./logs-module /usr/src/app/logs-module

# Copying source files
COPY ./back/mission-service /usr/src/app/back/mission-service

RUN rm -rf node_modules
RUN npm install

EXPOSE 3002
# Running the app
CMD [ "npm", "start" ]