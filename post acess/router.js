const express = require('express');
const app = express()
var route = express.Router()
route.get('/',(req,res)=>{

res.send('hiii')


})
route.post('/send/',(req,res,next)=>{
name=req.body.name

res.send(name)

})
module.exports = route
