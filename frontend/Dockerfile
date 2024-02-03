## Stage 1
# Utilice como imagen base node en su version 15
FROM node:15-slim AS build
# Carpeta en el contenedor - Donde reside la APP
WORKDIR /usr/app
# Copie el archivo de dependencias y paquetes
COPY package.json /usr/app/package.json
COPY package-lock.json /usr/app/package-lock.json
# Se instalan las dependias -- ci: clean-install
RUN npm ci
# Copie el codigo fuente
COPY . /usr/app/
# Abra el puerto 3000 del contenedor
EXPOSE 3000
# Compila la imagen base
RUN npm run build

## Stage 2 -- 
FROM nginx
EXPOSE 3000
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/app/build /usr/share/nginx/html

## Levantate! y anda!
# CMD ["npm", "start"]
