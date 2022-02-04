# React client

# Build react client
FROM node:16-alpine

# Working directory of app
WORKDIR /usr/src/app

COPY package*.json ./

# Install dependencies
RUN npm install --silent

# copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["npm", "start"]