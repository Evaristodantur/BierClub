# Usuarios

## Usuario comun:
  - Email user@user.com
  - Contraseña: usuario-comun
### Paginas afectadas al estar logueado como usuario comun:
  - /users/usersAdmin:
    - Si no estas logueado, te envia al form de login
    - No te deja entrar siendo usuario comun 
  - /users/usersAdmin/:id:
    - Si no estas logueado, te envia al form de login
    - No te deja entrar siendo usuario comun
  - /users/register
    - Si estas logueado, te redirecciona a tu perfil
  - /users/login
    - Si estas logueado, te redirecciona a tu perfil
  - /users/perfil/:id:
    - Si no estas logueado e intentas entrar a un perfil, te envia al form de login
    - Si entras a un perfil que no es el tuyo, te envia a la vista "No tienes permisos para entrar a esta pagina" (es necesario para nuestro proyecto)
  - /users/perfil/eliminar/:id
    - Si intentas eliminar un perfil y no es el perfil del usuario logueado, no te deja eliminarlo

## Administrador:
  - Email: admin@admin.com
  - Contraseña: administrador
### Paginas afectadas al estar logueado como administrador:
  
