var express = require('express');
var app = express();
var os = ['Windows','macOS','Linux']

app.get('/',function(req,res) {
  res.json(os);
});

app.listen(9000);
