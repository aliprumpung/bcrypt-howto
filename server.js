require('dotenv').config();
var bcrypt = require('bcrypt');
const saltRounds = 10;
var password = process.env.PASSWORD;

const hashingPwd = (password,saltRounds)=>{
	return new Promise((resolve,reject)=>{
		bcrypt.hash(password,saltRounds,(error,hash)=>{
			resolve(hash);
		});
	});
};
		

const compareRawPwdToHash = (pwd,hashToCompare)=>{
	return new Promise((resolve,reject)=>{
		bcrypt.compare(pwd,hashToCompare, (err,resp)=>{
			if(resp === true){
				resolve(resp);
			}else{
				reject(new Error(resp));
			}
		});
	});
};


hashingPwd(password,saltRounds)
.then(hashResponse=>{
	return compareRawPwdToHash('1234Aa$',hashResponse);
})
.then(isAuthenticated=>{
	console.log(`isAuthenticated = ${isAuthenticated}`);
})
.catch(err=>{ console.log(`isAuthenticated = ${isAuthenticated}`) });


/*
run in console 

output will be true or false 

*/









