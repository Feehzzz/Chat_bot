require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false, limit: '5mb'}));


app.use(require('./src/Routes/routes'))

app.listen(process.env.PORT || 3000, () => {
  console.log('SERVER UP')
})
