const express = require('express')
const app = express()

app.use(express.static('public'))

app.listen(process.env.PORT || 5000, function(){
  console.log('Server started! port 5000')
})