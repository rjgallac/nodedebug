FROM node:24
WORKDIR /app
COPY ./package.json /app
COPY ./tsconfig.json /app
COPY ./src /app/src
RUN cd /app && npm install
