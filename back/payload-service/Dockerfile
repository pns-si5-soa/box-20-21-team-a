FROM node:14

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app/back/payload-service

# Installing dependencies
COPY ./back/payload-service/package*.json /usr/src/app/back/payload-service/
COPY ./logs-module /usr/src/app/logs-module

RUN npm install

# Copying source files
COPY ./back/payload-service /usr/src/app/back/payload-service

EXPOSE 3005
# Running the app
CMD [ "npm", "start" ]