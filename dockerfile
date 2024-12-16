# Usa la imagen oficial de Node.js como base
FROM node:16

# Configura el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos del proyecto en el contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código fuente al contenedor
COPY . .

# Exponer el puerto en el que la app escuchará (puerto 3000 por defecto)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
