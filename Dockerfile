FROM node:latest

WORKDIR /home/ankur0101/covid_assingment

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install

COPY . /usr/src/app/


EXPOSE 9999

CMD ["npm","start"]