FROM node:14-alpine

WORKDIR /app

COPY package.json yarn.lock tsconfig.json ./
COPY ./src ./src

RUN rm -rf node_modules && yarn install --frozen-lockfile && yarn cache clean
RUN npm run build

CMD ["node", "./dist/server.js"]