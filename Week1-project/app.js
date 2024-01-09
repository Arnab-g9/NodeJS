const express = require("express");
const app = express();
app.get('/', (req, res, next)=>{
    res.render();
});
app.get('/users', (req, res, next));
app.post();
app.listen(3000, () => {
  console.log("server running on port 3000");
});
