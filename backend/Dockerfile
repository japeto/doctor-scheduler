# Utilice como imagen base node en su version 12
FROM node:12-slim 
# Carpeta en el contenedor - Donde reside la APP
WORKDIR /usr/app
# Copie el archivo de dependencias y paquetes
COPY package.json /usr/app/package.json
COPY package-lock.json /usr/app/package-lock.json
# Se instalan las dependias -- ci: clean-install
RUN npm ci
# Copie el codigo fuente
COPY ./app /usr/app/
# Abra el puerto 9030 del contenedor
EXPOSE 9030
## Levantate! y anda!
CMD ["npm", "start"]


