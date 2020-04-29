const routes = require('express').Router()
const { User } = require('./app/models')
User.create({name: 'Agmar',
 email:'agmartorres@gmail.com', 
 password_hash: '2131231'})

module.exports= routes;