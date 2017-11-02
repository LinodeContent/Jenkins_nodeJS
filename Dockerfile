FROM node:4.8.5-alpine

RUN mkdir /app
WORKDIR /app
 
# Install app dependencies
COPY package.json /app/
RUN npm install
RUN npm i -g mocha  

# Bundle app source
COPY . /app
 
EXPOSE 9000
ENTRYPOINT [ "npm", "start" ]
