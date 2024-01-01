const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  res
    .status(404)
    .send(
      "<h1>Page not found</h1>"
    ); /** this type of one by one method is called method chaining. As we can send the status code and remember the send method will always be at last. we can set the header also */
});

module.exports = router;
