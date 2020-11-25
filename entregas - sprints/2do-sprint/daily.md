# Dailies

## 📈 Sprint 4

### 🗓️ 25/11/20
  Terminado:
  - Problemas solucionados en Multer
  - Cambio del nombre del logo
  - Productos: Ahora todos los numeros con parseInt
  - Modificar usuarios:
    - Contraseña se hasheaba 2 veces (solucionado)
    - ID del usuario se pasaba como String (Ahora como number)
    - Eliminar usuarios problema del OnClick solucionado
    
  Para hacer hoy:
  - Chequeo general del sitio para presentacion del Sprint y agregar tareas necesarias en Trello

### 🗓️ 24/11/20
  Terminado:
  - Perfil: Boton "no" en ¿Seguro que desea eliminar este usuario? funcional (js)
  - usersAdmin:
    - Cortar palabra (contraseña) si es muy larga
    - Invertir flex, para que muestre los usuarios mas nuevos primero
    - ¿Seguro que desea eliminar este usuario? Agregar funcionalidad
    
  Para hacer hoy:
  - Chequeo general del sitio para presentacion del Sprint y agregar tareas necesarias en Trello
  
### 🗓️ 23/11/20
  Terminado:
  - Multer: Arreglar multiple carga de imagenes y bug al carga 1 sola
  - Home, border on click email y texto wrap en los productos
    
  Para hacer hoy:
  - Chequeo general del sitio para presentacion del Sprint y agregar tareas necesarias en Trello

### 🗓️ 22/11/20

  Terminado:
  - Perfil:
   - Avanzado estructura y estilo, HTML CSS
   - IDs funcionales
    
  Para hacer hoy:
  - Multer: Arreglar multiple carga de imagenes y bug al carga 1 sola
  - Home, border on click email y texto wrap en los productos
  
### 🗓️ 21/11/20

  Terminado:
  - home.css cambiado a index.css e implementado en styles.css
  - Session y Cookies funcionales (funcionalidad de recordame en login implementada)
  - Middlewares guest y auth creados
  - Permisos de administrador (userAdmin y productAdmin funcionales)
  - Perfil:
    - Si el usuario a ver el perfil no es el correcto, tira una vista de error
    - Si el usuario a ver el perfil es administrador, deja entrar sin problemas
    
  Para hacer hoy:
  - Cambios generales en el sitio para mejorar la visual (HTML y CSS)
  - Perfil: Mejorar HTML y CSS (Responsive)
  
### 🗓️ 20/11/20
 
  Terminado:
  - Parallax background en el home
  - Nav y nav2:
    - Especificarlos
    - Agregarlos al styles.css

  Para hacer hoy:
  - Cambiar home.css a index.css
  - Implementar Session (creacion de middlewares y uso en login)
  - Implementar Cookies (creacion de middlewares y uso en login)
  - Crear middlewares guest y auth
 
### 🗓️ 19/11/20
  
  Terminado:
  - Errores en ProductAdd responsive
  - Arreglar CSS del Login y Register (titulo)
  - logMiddleware
  - Agregar imagenes multiples con Multer
  - productDetail dinamico con las nuevas imagenes
  - Login y Register
    - Letra achicada en los errores
    - Footer alejado
    - Titulo alejado del nav
  
  Para hacer hoy:
  - Chequeo general de la pagina para buscar errores
  - Parallax background en el home
  - Perfil (HTML y CSS responsive)
  - Nav y nav2:
    - Especificarlos
    - Agregarlos al styles.css

### 🗓️ 18/11/20
  
  Terminado:
  - Middleware de Register
  - Middleware de login
  - Eliminar validaciones del Controller
  
  Para hacer hoy:
  - Errores en ProductAdd responsive
  - Arreglar CSS del Login y Register (titulo)
  - Errores en Login y Register responsive
  
### 🗓️ 17/11/20
  
  Terminado:
  - Trello actualizado para el Sprint 4
  - Retrospectiva del Sprint 3
  - Carpeta Middlewares creada
  - Traslado de "Multer" a la carpeta
  - Middleware de Productos
  
  Para hacer hoy:
  - Middleware de Register
  - Middleware de login
  - Eliminar validaciones del Controller

### 🗓️ 16/11/20
  
  Terminado:
  - Sitio listo para el Sprint 4
  
  Para hacer hoy:
  - Actualizar Trello para el Sprint 4
  - Retrospectiva del Sprint 3
  - Actualizar perfil (Responsive)
  - Crear carpeta Middlewares
  - Traslado del Middleware "Multer" a la carpeta
  - Middleware de Productos 
  
## 📈 Sprint 3

### 🗓️ 15/11/20
  
  Terminado:
  - Terminado pagina de Envios (HTML Y CSS)
  
  Para hacer hoy:
  - Crear variable "dbDirectory" para hacer mas limpios los controladores

### 🗓️ 13/11/20
  
  Terminado:
  - Modificar productos funcional
  - Pagina Envios avanzada (No terminada)
  
  Para hacer hoy:
  - Terminar pagina de Envios (HTML Y CSS)
  - Actualizar perfil (Responsive)

### 🗓️ 12/11/20
  
  Terminado:
  - Contraseñas encriptadas en el ABM de usuarios
  - Lógica de register avanzada:
    - Verificación de que "Contraseña" y "Confirmar contraseña" sean iguales
    - Verificación de que "Términos y condiciones" esté aceptado
    - Verificación de que todos los campos estén completados
  - Lógica de login avanzada: 
    - Verificación de que el email exista
    - Verificación de que la contraseña este bien puesta
    - Verificación de que ambos campos están completados
  
  Para hacer hoy:
  - Hacer la modificacion de productos funcional
  - Terminar con la pagina Envios
  
### 🗓️ 11/11/20

  Terminado:
  - /product y /productAdmin terminados
  - productDetail dinamico terminado
  
  Para hacer hoy:
  - Encriptar contraseña
  - Avanzar con lógica de register
  - Avanzar con lógica de logueo

### 🗓️ 10/11/20
  
  Terminado:
  - Perfil avanzado
  - Descuentos agregados
  - "Mis pedidos" agregado al controlador y a la vista
  
  Para hacer hoy:
  - Terminar /product y /productAdmin
  - Comenzar el HTML y CSS de "Mis pedidos" (/users/perfil/pedidos/:id)
  
### 🗓️ 9/11/20

  Terminado:
  - productAdmin Hover arreglado
  - productAdd se pueden agregar imagenes
  - productDetail rutas arregladas
  - productAdmin responsive
  
  Para hacer hoy:
  - Avanzar con Perfil (CSS)
  - Home solucionar problema de repetición de código
  - Agregar descuentos en productAdd y productEdit (si no hay descuentos, se envía como "0")
  - Validar usuarios.json para que no se buguee cuando es un array vacío
  - Terminar envios (HTML y CSS)

### 🗓️ 7/11/20

Terminado:
  - Perfil avanzado (HTML y CSS)
  - productAdmin creado y logica hecha
  
Para hacer hoy:
  - Avanzar con Perfil (CSS)
  - productAdmin arreglar hover
  - productAdd poder agregar imagenes
  
### 🗓️ 6/11/20

Terminado:
  - ABM de productAdd funcional
  - ABM de register funcional
  
Para hacer hoy:
  - Terminar perfil (HTML y CSS, ya que logica ya esta terminada)
  - Crear productAdmin

### 🗓️ 5/11/20

Terminado:
  - productEdit actualizado
  - Logica de productDetail/:id empezada con: ID, nombre, precio, stock, y foto
  - /envios empezada: HTML y css

Para hacer hoy:
  - Logica de productAdd
  - Logica de register (sin validación de datos)

### 🗓️ 4/11/20

Terminado:
  - Rutas separadas en carpeta users y carpeta products
  - Controladores agregados: main, products y user
  - Creación de la carpeta "Partials" y agregado en la misma: footer, nav, productosRelacionados y head
  - Creamos pagina de error 404
  - Creamos vistas nuevas (productEdit, suscripcion, perfil, productAdmin y products)
  - Creamos base de controladores con su documentación (main, products y user)
  - Creamos base de datos estatica con el .JSON de los productos y de perfil de usuario
  
Para hacer hoy:
  - Modificar y actualizar productEdit
  - Crear logica de productDetail/:id
  - Crear /envios, css, html, route y controlador

### 🗓️ 3/11/20

Terminado:
  - Organización del Sprint 3 en Trello
  - Retrospectiva del Sprint 2
  - Horario de reunión diaria establecido: Martes, Miércoles y Jueves de 15:00 a 17:00 (Fines de semana a conveniencia)
  - Console.log del server.listen aclarando el puerto utilizado
  
Para hacer hoy:
  - Separar las rutas de las vistas
  - Crear controladores para main, product y user
  - Creación de la carpeta "Partials"
  - Incluir en "Partials" footer, nav, nav2 y productosRelacionados 
  - Crear pagina de error 404
  - Crear vistas nuevas (productEdit, suscripcion, perfil, productAdmin y products)
  - Crear base de controladores con su documentación (main, products y user)
  - Crear base de datos estatica con el .JSON de los productos

### 🗓️ 2/11/20

Terminado:
  - Testeo general de las views, maquetado listo para la entrega del Sprint 2
  
Para hacer hoy:
  - Retrospectiva del Sprint 2
  - Actualizar Trello conforme al incio del Sprint 3
  - Organizar un horario para juntarnos (no necesariamente todos los dias)
  
--------------------------------------

## 📈 Sprint 2

### 🗓️ 29/10/20

Terminado:
  - Corregimos faltas de ortografía
  - Arreglamos la sección "Productos" en responsive mobile
  - Hover de productDetail eliminado en mobile
  - Carrito: Links agregados en los botones, cambio de dirección arreglado, código especificado y comentado
  - productDetail agregado en styles.css, código comentado, ruta especificada en css y productos relacionados agregados
  - Banner arreglado en Home responsive (iPad y mobile)
  - Agregar margin-top al Footer en Login y Carrito (responsive)
  - productAdd imagen de iPad achicada y la de mobile aumentada
  - Detalle de producto, agregar descripción en mobile
  
Para hacer hoy:
  - Testeo general del sitio terminado y listo para entrega del sprint 2
  
### 🗓️ 28/10/20

Terminado:
  - Agregamos "Productos relacionados" en el carrito y mejoramos estética del titulo del producto en resoluciones bajas
  - ProductDetail - Responsive: Mejorado hasta 800PX, mejorar la versión mobile
  - ProductDetail - Mejoramos estetica (imágenes en la izquierda agregadas)
  - Cambiamos las imágenes de todos los productos por imágenes reales, de productos reales
  - ProductDetail documentado (falta documentar mobile)
  
Para hacer hoy:
  - Corregir faltas de ortografía
  - Cambiar la sección "Productos" en -520PX
  - Eliminar hover en resoluciones mobile de productDetail
  - Carrito: Agregar <a> a los botones, arreglar cambio de dirección, documentar el código y especificarlo
  - Poner productDetail en styles.css, comentar el código, especificar la ruta y agregar productos relacionados

### 🗓️ 27/10/20

- Menú hamburguesa del nav1 y nav2 completado
- Nav1 y nav2 hechos responsive por completo
- Cambios en el Home para hacerlo un poco mas estetico
- Seguimos con problemas en el productDetail, tenemos que solucionar eso hoy
- Hay que arreglar animación del footer
- Mejorar botones de agregar al carrito (Home)
- Agregar comentarios en el Home para hacerlo más fácil de entender
- Documentar el footer
- Documentar register y  login
- Documentar productAdd
- Documentar productDetail

### 🗓️ 26/10/20

- Menú hamburguesa en el nav casi completado.
- Nuevo banner en el home.
- Mejor estética en los productos en el home.
- Hoy tenemos que resolver el problema del productDetail.
- También hay que terminar el menú hamburguesa del nav para mobile.
- Verificar login, register y productAdd para chequear mejoras y cambios.

### 🗓️ 25/10/20

- Agregamos disponibilidad de productos en el home.
- Solucionamos parte del nav.
- Comenzamos el desarrollo del menú hamburguesa para las resoluciones menores.
- Todavía hay que arreglar detalle de producto y parte del nav.

### 🗓️ 24/10/20

- Actualizamos e hicimos responsive el home, login, register, agregar producto y el carrito.
- Tuvimos problemas con el nav, se está buscando una solución.
- Tuvimos problemas con el detalle del producto. Hay que arreglar el estilo del mismo.

