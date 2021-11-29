FROM node:alpine as builder

WORKDIR /movie-web

COPY . .

RUN yarn install && yarn build

CMD [ "yarn", "start" ]