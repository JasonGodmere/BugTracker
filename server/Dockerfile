# Node Express

FROM node:16-alpine

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./

RUN npm install

# COPY app source code
COPY . .

EXPOSE 5000

CMD ["npm", "start"]