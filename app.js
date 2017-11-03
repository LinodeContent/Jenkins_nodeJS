var express = require('express');
var app = express();
var os = ['Windows','macOS','Linux']

app.get('/os',function(req,res) {
  res.json(os);
});

app.listen(9000, function () {
	console.log('=== app is running at port 9000 ===')
})
