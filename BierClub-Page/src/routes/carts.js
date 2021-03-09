// Routa de página de carrito "bierclub.com/carts/"

let express = require("express");
let router = express.Router();

//Controller
let cartsController = require("../controllers/cartsController");

/* ==========================================================================
   MIDDLEWARES
   ========================================================================== */
let guestMiddleware = require("../middlewares/guestMiddleware"); //Middleware de invitado, sin usuario
let verifyAccountMiddleware = require("../middlewares/verifyAccountMiddleware"); //Middleware de verified


/* ==========================================================================
   ROUTES /carts
   ========================================================================== */

/* GET     /productCart          */
router.get(
  "/productCart",
  guestMiddleware,
  verifyAccountMiddleware,
  cartsController.productCart
);

/* POST     /addProduct/:id      */
router.post("/addProduct/:id", cartsController.addProduct);

/* GET     /deleteProduct/:id    */
router.get("/deleteProduct/:id", cartsController.deleteProductFromCart);

/* POST     /deleteAllProducts   */
router.post("/deleteAllProducts", cartsController.deleteAllProducts);

/* POST     /procederAlPago      */
router.post("/procederAlPago", cartsController.procederAlPago);





module.exports = router;
