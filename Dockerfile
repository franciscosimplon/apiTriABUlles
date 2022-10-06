FROM node:lts-alpine
WORKDIR /appTriABulles
COPY package.json .
RUN npm install
RUN npm install pm2 -g
COPY . .
EXPOSE 3001
CMD [ "pm2-runtime", "index.js"]

