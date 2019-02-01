FROM node:8-alpine

RUN mkdir -p /home/app/nodejs

COPY ./package.json /home/app/nodejs/package.json
WORKDIR /home/app/nodejs/
RUN npm install

COPY . /home/app/nodejs

EXPOSE 3000

CMD ["npm", "start"]
