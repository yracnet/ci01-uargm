FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --force --omit=dev

COPY ./dist/ .

EXPOSE 3000

CMD cd ./server && node app.js
