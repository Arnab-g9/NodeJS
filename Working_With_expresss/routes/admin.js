const express = require("express");

const router =
  express.Router(); /** this router method comes with express. It's like mini express app or plugable with othe express app, which we can export to the other file */

router.get("/add-product", (req, res, next) => {
  // console.log("In the add-product middleWare!");
  res.send(
    '<form action="/product" method="POST"> <input type="text" name="title"> <input type="number" name="age"> <button type="submit">Add Product</button> </form>'
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  // console.log(req.body.title);
  // console.log(req.body.age);
  res.redirect("/");
});

module.exports = router;
