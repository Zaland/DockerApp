FROM node:16-alpine

WORKDIR /home/node/

EXPOSE 3000

COPY package.json .
RUN npm i
COPY src .

CMD npm start