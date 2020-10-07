FROM node:14

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./

RUN npm install

# Copying source files
COPY . .

EXPOSE 3005
# Running the app
CMD [ "npm", "start" ]