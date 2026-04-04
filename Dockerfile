FROM node:24
WORKDIR /app
COPY ./package.json /app
RUN cd /app && npm install
