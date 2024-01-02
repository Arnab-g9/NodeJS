const path = require("path");
module.exports = path.dirname(
  process.mainModule.filename
); /* create our own helper function that will provide the path of root folder. and this is aneet process. -- visit lec 16 */
