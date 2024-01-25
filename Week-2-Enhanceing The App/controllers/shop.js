const Product = require("../models/product"); //importing product class
const Cart = require("../models/cart"); //importing cart model

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All products",
      path: "/products",
    });
  }); // get product list by static method of fetch all of product controller
};

exports.getProduct = (req, res, next) => {
  // console.log(req);
  const prodId = req.params.productId; //request.params helps to access the parameter of the request/url like here product id
  // console.log(prodId);
  Product.findById(prodId, (product) => {
    //console.log(product);
    res.render("shop/product-detail", {
      product: product,
      pageTitle: "product.title",
      path: "/products",
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "shop",
      path: "/",
    });
  }); // get product list by static method of fetch all of product controller
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart",
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  // console.log(prodId);
  Product.findById(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect("/cart");
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
