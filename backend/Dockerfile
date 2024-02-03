# Utilice como imagen base node en su version 15
FROM node:15-slim 
# Carpeta en el contenedor - Donde reside la APP
WORKDIR /usr/app
# Copie el archivo de dependencias y paquetes
COPY package.json /usr/app/package.json
# COPY package-lock.json /usr/app/package-lock.json
# Se instalan las dependias -- ci: clean-install
RUN npm i
# Copie el codigo fuente
COPY . /usr/app/
# Abra el puerto 9030 del contenedor
EXPOSE 9030
## Levantate! y anda!
CMD ["node", "app/api.js"]


