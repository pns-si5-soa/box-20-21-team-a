FROM node:14

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app/back/missions-coordinator

# Installing dependencies
COPY ./back/missions-coordinator/package*.json /usr/src/app/back/missions-coordinator/
COPY ./logs-module /usr/src/app/logs-module

# Copying source files
COPY ./back/missions-coordinator-service /usr/src/app/back/missions-coordinator

RUN rm -rf node_modules
RUN npm install

EXPOSE 3007
# Running the app
CMD [ "npm", "start" ]