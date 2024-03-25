const userInformation = require('./information');
console.log(`Hi, my name is ${userInformation.name} and I'm from ${userInformation.campus}`);

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));