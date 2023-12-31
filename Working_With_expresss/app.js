const http = require("http");
const express = require("express");
const app = express();
app.use((req, res, next) => {
  console.log("In the middleWare!");
  next(); // -- this allowes the request to continue to the next middleware in line, if we don't call the next then we shoud send the response otherwise the request will die.
}); /**  -- use allowes us to use new middleware function, It accepts array of request handlers. use method accept the callback in callback it accept the next method as a parameter which is provide by the express. */

app.use((req, res, next) => {
  console.log("In the another middleWare!");
});

const server = http.createServer(app);
app.listen(3000);
