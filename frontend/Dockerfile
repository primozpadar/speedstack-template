FROM node:14-alpine3.12 as base

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY ./public ./public
COPY ./next.config.js ./next.config.js
COPY ./src ./src
COPY tsconfig.json tsconfig.json

ENV NODE_ENV development

FROM base as prod

ENV NODE_END production

RUN yarn build

CMD [ "yarn", "start" ]