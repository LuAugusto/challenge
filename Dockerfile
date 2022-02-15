FROM node:16.14.0-alpine

WORKDIR /user/src/app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build

EXPOSE 8080
CMD ["yarn","start"]