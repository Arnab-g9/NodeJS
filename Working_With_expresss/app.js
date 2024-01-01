const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorPage = require("./routes/404");
const app = express();
// app.use((req, res, next) => {
//   console.log("In the middleWare!");
//   next(); // -- this allowes the request to continue to the next middleware in line, if we don't call the next then we shoud send the response otherwise the request will die.
// }); /**  -- use allowes us to use new middleware function, It accepts array of request handlers. use method accept the callback in callback it accept the next method as a parameter which is provide by the express. */

app.use(
  bodyParser.urlencoded({ extended: true })
); /** parsing the body of the incoming request and the persing should be done on top and the urlencoded method which is present inside the bodyparser object has the next() method that helps to go the request to our middleware to */

app.use("/", (req, res, next) => {
  // console.log("This always runs!");
  next();
});

app.use(
  "/admin",
  adminRoutes
); /** importing adminRoute object that contains the admin related routes */

app.use(
  shopRoutes
); /** importing shopRoute object that contains the admin related routes */

// app.use("/review", (req, res, next) => {
//   console.log("In the review middleWare!");
//   res.send('<h1>The "Add Product" page</h1>');
// });

app.use(errorPage);

app.listen(3000);
