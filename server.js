var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));


app.listen(8002, function() {
  console.log("Server is up on 8002");
});
