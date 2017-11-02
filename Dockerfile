FROM node:4.8.5-alpine

USER: root
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
 
# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
 
# Bundle app source
COPY . /usr/src/app
 
EXPOSE 9000
CMD [ "npm", "app.js" ]
