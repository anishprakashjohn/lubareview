console.log('Starting appp.. ');
const fs = require('fs');
const os = require ('os');
var user= os.userInfo();
console.log(user.username);
fs.appendFile('greetings.txt', `Hello ${user.username}`, function (err){
	if (err){
		console.log('Unable to write to file');
	}
});