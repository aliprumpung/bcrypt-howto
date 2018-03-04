require('dotenv').config();
var bcrypt = require('bcrypt');
var bcrypt = require('bcrypt');
const saltRounds = 10;
var password = process.env.PASSWORD;

bcrypt.hash(password,saltRounds,(error,hash)=>{
console.log(hash);
});

