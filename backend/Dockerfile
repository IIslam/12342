FROM node:14.15.1

RUN mkdir /backend
WORKDIR /backend

COPY package*.json ./
COPY src/ ./src
COPY secrets/ ./secrets
COPY wait-for-it.sh ./wait-for-it.sh

RUN npm install
CMD ["npm", "start"]

EXPOSE 9090