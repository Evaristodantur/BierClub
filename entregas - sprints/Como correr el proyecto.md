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
- Preferentemente usar Google Chrome

![Posibles problemas al inicializar el proyecto](https://i.imgur.com/EDzum1Q.png)



# Usuarios

## ¡Advertencia!
  - Para registrarte correctamente en la página, debes ingresar un email al que tengas acceso.
  - Se te enviará un email de verificación a tu correo, una vez actives la cuenta, podrás usarla correctamente.

## Usuario común:
  - Email user@user.com
  - Contraseña: usuario-comun
### Páginas afectadas al estar logueado como usuario comun:
  - /users/usersAdmin:
    - Si no estás logueado, te envia al form de login
    - No te deja entrar siendo usuario común 
  - /users/usersAdmin/:id
    - Si no estas logueado, te envia al form de login
    - No te deja entrar siendo usuario común
  - /users/register
    - Si estás logueado, te redirecciona a tu perfil
  - /users/login
    - Si estás logueado, te redirecciona a tu perfil
  - /users/perfil/:id
    - Si no estas logueado e intentas entrar a un perfil, te envía al form de login
    - Si entras a un perfil que no es el tuyo, te envia a la vista "No tienes permisos para entrar a esta página" (es necesario para nuestro proyecto)
  - /users/perfil/eliminar/:id
    - Si intentas eliminar un perfil y no es el perfil del usuario logueado, no te deja eliminarlo
  - /products/productAdmin
    - Si intentas entrar y no estas logueado, te envia al form de login
    - Si intentas entrar y no sos admin, no te deja entrar
  - /products/productAdd
    - Si intentas entrar y no estas logueado, te envia al form de login
    - Si intentas entrar y no sos admin, no te deja entrar
  - /products/productEdit/:id
    - Si intentas entrar y no estas logueado, te envia al form de login
    - Si intentas entrar y no sos admin, no te deja entrar
  - /products/productEdit/delete/:id
    - Si intentas eliminar el producto y no sos admin, no te deja entrar
    
## Administrador:
  - Email: admin@admin.com
  - Contraseña: administrador
### Páginas afectadas al estar logueado como administrador:
  - /users/usersAdmin:
    - Solo podés iniciar siendo administrador
  - /users/usersAdmin/:id
    - Solo podés iniciar siendo administrador
  - /users/perfil/:id
    - El administrador puede entrar a todos los perfiles, de todos los usuarios, ya sean usuarios comunes o administradores
  - /users/perfil/eliminar/:id
    - El administrador puede eliminar cualquier perfil
  - /products/productAdmin
    - Solo podés iniciar siendo administrador
  - /products/productAdd
    - Solo podés iniciar siendo administrador
  - /products/productEdit/:id
    - Solo podés iniciar siendo administrador
  - /products/productEdit/delete/:id
    - El administrador puede eliminar cualquier producto

## Usuario sin verificar email:
  - Email user-no-verificado@user.com
  - Contraseña: usuario-no-verificado
### Páginas afectadas al no estar verificado (un admin no puede no estar verificado):
  - /users/usersAdmin:
    - Si no estas verificado, pide verificar cuenta
  - /users/usersAdmin/:id
    - Si no estas verificado, pide verificar cuenta
  - /products/productAdmin
    - Si no estas verificado, pide verificar cuenta
  - /products/productAdd
    - Si no estas verificado, pide verificar cuenta
  - /products/productEdit/:id
    - Si no estas verificado, pide verificar cuenta
  
