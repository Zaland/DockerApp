FROM node:16-alpine

WORKDIR /home/node/

EXPOSE 3001

COPY package.json .
RUN npm i
COPY . .

CMD ["npm", "start"]
