const math = require('./math');
console.log(math);
console.log(math.square(9));

const cats = require('./Shelter');
console.log("Directory required:", cats);

const cowsay = require('cowsay');
console.log(cowsay.say({
    text:'Moo mf'
}));