const express = require("express");
const path = require("path");
const router = express.Router();
const shopController = require("../controllers/shop");

router.get("/", shopController.getIndex);
router.get("/products", shopController.getProducts);
router.get("/products/:productId", shopController.getProduct);
/** here /products/:productId is dynamic where /products is a static path or route but after/:productId is variable part of different request through which we can extract the information of the products */
router.get("/cart", shopController.getCart);
router.post("/cart", shopController.postCart);
router.get("/orders", shopController.getOrders);
router.get("/checkout", shopController.getCheckout);

module.exports = router;
