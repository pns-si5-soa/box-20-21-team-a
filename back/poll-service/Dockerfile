FROM node:14

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app/back/poll-service

# Installing dependencies
COPY ./back/poll-service/package*.json /usr/src/app/back/poll-service/
COPY ./logs-module /usr/src/app/logs-module

# Copying source files
COPY ./back/poll-service /usr/src/app/back/poll-service

RUN rm -rf node_modules
RUN npm install

EXPOSE 3012
# Running the app
CMD [ "npm", "start" ]