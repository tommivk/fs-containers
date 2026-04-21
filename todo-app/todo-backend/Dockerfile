FROM node:24

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci

USER node

ENV NODE_ENV=production

CMD ["npm", "start"]
