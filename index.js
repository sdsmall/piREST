var express = require('express')
 
var app = express()
 
app.get('/test', function(req, res) {
  res.json({test: "testing rest service"})
})
 
app.listen(3000)