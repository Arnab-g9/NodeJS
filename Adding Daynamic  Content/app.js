const express = require("express");
const bodyParser = require("body-parser");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorPage = require("./routes/404");
const path = require("path");
const app = express();

app.set("view engine", "ejs"); /** setting view engine to ejs  */
app.set("views", "views");
// app.use((req, res, next) => {
//   console.log("In the middleWare!");
//   next(); // -- this allowes the request to continue to the next middleware in line, if we don't call the next then we shoud send the response otherwise the request will die.
// }); /**  -- use allowes us to use new middleware function, It accepts array of request handlers. use method accept the callback in callback it accept the next method as a parameter which is provide by the express. */

app.use(
  bodyParser.urlencoded({ extended: true })
); /** parsing the body of the incoming request and the persing should be done on top and the urlencoded method which is present inside the bodyparser object has the next() method that helps to go the request to our middleware to */

app.use(
  express.static(path.join(__dirname, "public"))
); /** for serve the static files like css html and images we can use the middleware express.static(); inside that we have to specify the path from where we can get the files like in this case we actuallly into the root folder and from there we spcify the public folder. and in that the rest of the files are stay. thats how it works */

app.use("/", (req, res, next) => {
  // console.log("This always runs!");
  next();
});

app.use(
  "/admin",
  adminData.routes /** adminData here all the exports u can say or object u can say that u export */
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
