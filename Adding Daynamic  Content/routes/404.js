const express = require("express");
const path = require("path");

const router = express.Router();

router.use((req, res, next) => {
  /*  res
    .status(404)
    .send(
      "<h1>Page not found</h1>"
    ); -- this type of one by one method is called method chaining. As we can send the status code and remember the send method will always be at last. we can set the header also */

  // res
  //   .status(404)
  //   .sendFile(
  //     path.join(__dirname, "..", "views", "404.html")
  //   ); /** sendFile method send the static files to the client like html pages. here we use a express core module that is path module. if we dont use path module then it will give error that is file not found because sendfile does not get the absolute path of the file thats why path.join() method join the substring path and make them into one path depend on your machine rrequirement like in windows the file structure is (d.\data\) but in ubuntu the file path is (./data/fa). it besicallly helps to serve the file. */
  res.status(404).render("404");
});

module.exports = router;
