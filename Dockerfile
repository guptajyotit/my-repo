FROM node:alpine
WORKDIR C:\Users\ANURAG\Desktop\empipro

COPY package*.json ./
RUN npm install
#ADD nodejs nodejs-npm


COPY . .

EXPOSE 8080


CMD node server_init.js

