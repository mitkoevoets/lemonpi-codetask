FROM node:10-alpine

WORKDIR /home/node

COPY . /home/node

# --no-cache: download package index on-the-fly, no need to cleanup afterwards
# --virtual: bundle packages, remove whole bundle at once, when done
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install \
    && apk del build-dependencies

RUN npm install -g webpack webpack-dev-server webpack-cli

RUN npm link webpack

RUN npm run build

CMD ["npm", "run", "start"]
