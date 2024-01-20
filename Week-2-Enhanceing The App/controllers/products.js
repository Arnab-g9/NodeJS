// const products = [];
const Product = require("../models/product"); //importing product class
exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  // products.push({ title: req.body.title });
  const product = new Product(req.body.title); //creating product object using model
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", { prods: products, pageTitle: "shop", path: "/" });
  }); // get product list by static method of fetch all of product controller
};
