const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res, next) => {
  // console.log("In the another ==== middleWare!");
  // res.send("<h1>Hello from express</h1>");
  // console.log(__dirname); op: D:\Node Js\Projects\Working_With_expresss\routes
  res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
});

module.exports = router;
