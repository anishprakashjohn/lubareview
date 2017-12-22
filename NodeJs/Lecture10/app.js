console.log('Starting app.js');

const fs = require ('fs');
const os = require ('os');
const notes = require('./notes.js');

//var res = notes.addNote();
//console.log(res);

var res = notes.add(2,-3);
console.log('Result ' , res);

//var user=os.userInfo();

//fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);


