const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const productsController = require("../controllers/products");
const router =
  express.Router(); /** this router method comes with express. It's like mini express app or plugable with othe express app, which we can export to the other file */

//  /admin/add-product => GET
router.get("/add-product", productsController.getAddProduct);

// /admin/add-product => POSt
router.post("/add-product", productsController.postAddProduct);

//  --exporting technique
module.exports = router;

//-- different exporting technique for multiple case
// exports.routes = router;
