FROM node:14

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app/back/payload-service

# Installing dependencies
COPY ./back/payload-service/package*.json /usr/src/app/back/payload-service/
COPY ./logs-module /usr/src/app/logs-module

# Copying source files
COPY ./back/payload-service /usr/src/app/back/payload-service

RUN rm -rf node_modules
RUN npm install

EXPOSE 3005
# Running the app
CMD [ "npm", "start" ]