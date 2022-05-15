FROM node:14.16.0-alpine3.13

RUN addgroup app && adduser -S -G app app
USER app

WORKDIR /back-end
COPY package*.json ./
RUN npm install
COPY . .

ENV Name="Khizer Jan"

EXPOSE 9000 

CMD ["npm", "start"]