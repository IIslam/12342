FROM node:14.15.1

RUN mkdir /frontend
WORKDIR /frontend

COPY package*.json ./
COPY src/ ./src
COPY public/ ./public

RUN npm install
CMD ["npm", "start"]

EXPOSE 3000