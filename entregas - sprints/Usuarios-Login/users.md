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
  
