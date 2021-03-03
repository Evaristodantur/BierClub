# Requerimientos:

- Tener instalado [NodeJS](https://nodejs.org/en/)
- Tener instalado [XAMPP](https://www.apachefriends.org/es/index.html)

## Importar base de datos:

1. Iniciar XAMPP

![XAMPP](https://i.imgur.com/bUHmpdK.png)


3. Ir a https://localhost/phpmyadmin
4. Crear la base de datos 'bierclub_db'

![Base de datos](https://i.imgur.com/2yeMNjP.png)

6. Seleccionar la base de datos
7. Importar los datos y la estructura que se encuentra en '\entregas - sprints\6to-sprint (Base de Datos)\Estructura y Datos'

![Importar base de datos](https://i.imgur.com/CyqfPJA.png)

9. Apretar continuar

## Instalar modulos globales de node

- Iniciar la terminar y escribir en una terminal `npm nodemon -g`
- Iniciar la terminar y escribir en una terminal `npm sequelize-cli -g`

![Instalando modulos globales](https://i.imgur.com/Yasfl5z.png)

- Ingresar a la carpeta 'BierClub\BierClub-Page' y escribir en una terminal `npm install`
- Ingresar a la carpeta 'BierClub\bierclub-analysis' y escribir en una terminal `npm install`

## Iniciar y probar el E-commerce

- Ingresar a la carpeta 'BierClub\BierClub-Page' y escribir en una terminarl `npm start`
- Ingresar a 'http://localhost:3000/' para ver el e-commerce

![E-commerce](https://i.imgur.com/SBJZMC0.jpg)

## Iniciar la aplicacion de monitoreo hecha con React

- Ingresar a la carpeta 'BierClub\BierClub-Page' y escribir en una terminarl `npm start`
- Con una segunda terminal, ingresar a la carpeta 'BierClub\bierclub-analysis' y escribir en una terminarl `npm start`

![Aplicacion de monitoreo - React](https://i.imgur.com/SfQsME7.png)

## Posibles problemas al inicializar el proyecto

- Entrar con tu IDE, y abrir el archivo 'config.js' encontrado en la carpeta '\BierClub-Page\src\database\config'
- Verificar que el username, password y database se vinculen con tu base de datos local

![Posibles problemas al inicializar el proyecto](https://i.imgur.com/EDzum1Q.png)
