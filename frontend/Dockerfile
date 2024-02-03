# Utilice como imagen base node en su version 12
FROM node:15-slim 

WORKDIR /usr/app

COPY . .

RUN npm install

CMD ["npm", "start"]