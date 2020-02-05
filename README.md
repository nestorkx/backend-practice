# NodeJS, Express, Mongoose

> Implementación de una API RESTful que sirve a un sistema de tareas, este se guarda en una base de datos no relacional en MongoDb.

## ¿Cómo iniciar el entorno de desarrollo?
Antes de usar la aplicación deberá de tener instalado en caso de MacOS 
1. [homebrew](https://brew.sh/index_es) para instalar MongoDB.
2. MongoDB Comunity Edition 4.2 [How Install MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

Una vez instalado el MongoDB deberá ejecutar los siguientes comandos en la terminal:

``` bash
# Para listar los servicios en ejecución
$ brew services ls

# Si el servicio de "mongodb-community" esta "stopped" lo iniciamos con el siguiente comando
$ brew services start mongodb-community

# Para iniciar MongoDB ejecutamos
$ mongo
```
Para tener una mejor visualización de los datos se recomienda descargar MongoDB Compass Community: [How Install MongoDB Compass Community](https://docs.mongodb.com/compass/master/install/).

Por último creamos una base de datos desde la aplicación MongoDB Compass Community con el nombre `local-express` se te pedirá aparte un nombre de collection e ingresamos con el nombre `todos`.

``` bash
# Instalar dependencias
$ npm install

# Para iniciar en modo desarrollo en localhost:3001
$ npm run start
```