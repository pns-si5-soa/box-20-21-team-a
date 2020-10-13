FROM node:14

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app/back/booster-service

# Installing dependencies
COPY ./back/booster-service/package*.json /usr/src/app/back/booster-service/
COPY ./logs-module /usr/src/app/logs-module

# Copying source files
COPY ./back/booster-service /usr/src/app/back/booster-service
RUN cp ./src/app/wsdl/myservice.docker.wsdl ./src/app/wsdl/myservice.wsdl 

RUN rm -rf node_modules
RUN npm install

EXPOSE 3004
# Running the app
CMD [ "npm", "start" ]