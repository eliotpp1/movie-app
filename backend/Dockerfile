FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm config set strict-ssl false
RUN npm install

COPY . .

EXPOSE 3001

CMD ["node", "index.js"]