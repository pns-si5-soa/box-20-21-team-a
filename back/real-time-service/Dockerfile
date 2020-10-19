FROM node:14

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app/back/real-time-service

# Installing dependencies
COPY ./back/real-time-service/package*.json /usr/src/app/back/real-time-service/
COPY ./logs-module /usr/src/app/logs-module

# Copying source files
COPY ./back/real-time-service /usr/src/app/back/real-time-service

RUN rm -rf node_modules
RUN npm install

EXPOSE 3006
# Running the app
CMD [ "npm", "start" ]