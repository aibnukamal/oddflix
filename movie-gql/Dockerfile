FROM node:alpine as builder

WORKDIR /movie-gql

COPY . .

RUN yarn install && yarn build

CMD [ "yarn", "start" ]