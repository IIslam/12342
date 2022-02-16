FROM node:14.15.1

RUN mkdir /backend
WORKDIR /backend

COPY package*.json ./
COPY src/ ./src
COPY secrets/ ./secrets
COPY .env   ./.env
COPY wait-for-it.sh ./wait-for-it.sh

RUN npm install
CMD ["npm", "run", "dev"]

EXPOSE 9090