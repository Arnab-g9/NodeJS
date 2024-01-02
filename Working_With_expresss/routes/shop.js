const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res, next) => {
  // console.log("In the another ==== middleWare!");
  // res.send("<h1>Hello from express</h1>");
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
