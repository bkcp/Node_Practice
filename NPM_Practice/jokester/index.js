const jokes = require('give-me-a-joke');
jokes.getRandomDadJoke(function(joke){
    console.log(joke);
});
const colors = require('colors');
console.log("OMG a rainbow".rainbow);


const cowsay = require('cowsay');
console.log(cowsay.say({
    text:'Moo mf'
}));