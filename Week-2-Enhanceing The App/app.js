const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorPage = require("./routes/404");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", (req, res, next) => {
  next();
});

app.use("/admin", adminRoutes);

app.use(shopRoutes);

app.use(errorPage);

app.listen(3000);
