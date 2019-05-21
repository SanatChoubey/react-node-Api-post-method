const express = require('express');
const app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
const router = require('./router');
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())
app.use('/',router)
app.listen(5000)
