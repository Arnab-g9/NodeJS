const express = require("express");
const path = require("path");

const router =
  express.Router(); /** this router method comes with express. It's like mini express app or plugable with othe express app, which we can export to the other file */

//  /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  // console.log("In the add-product middleWare!");
  /* res.send(
    '<form action="/admin/add-product" method="POST"> <input type="text" name="title"> <input type="number" name="age"> <button type="submit">Add Product</button> </form>'
  ); */
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

// /admin/add-product => POSt
router.post("/add-product", (req, res, next) => {
  /** path name can be same as the method are different like get and post */
  console.log(req.body);
  // console.log(req.body.title);
  // console.log(req.body.age);
  res.redirect("/");
});

module.exports = router;
