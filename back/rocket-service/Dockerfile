FROM node:14

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app/back/rocket-service

# Installing dependencies
COPY ./back/rocket-service/package*.json /usr/src/app/back/rocket-service/
COPY ./logs-module /usr/src/app/logs-module

RUN npm install

# Copying source files
COPY ./back/rocket-service /usr/src/app/back/rocket-service

EXPOSE 3001
# Running the app
CMD [ "npm", "start" ]