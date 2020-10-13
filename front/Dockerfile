FROM node:14

# Setting working directory. All the path will be relative to WORKDIR
# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app/front

# Installing dependencies
COPY ./front/package*.json /usr/src/app/front/
COPY ./logs-module /usr/src/app/logs-module

# Copying source files
COPY ./front /usr/src/app/front

RUN rm -rf node_modules
RUN npm install

# Running the app
CMD [ "npm", "run", "demo"]