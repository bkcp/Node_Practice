const figlet = require("figlet");
const colors = require('colors');

figlet('Hello World',function(error,data){
    if(error){
        console.log('Something is wrong');
        console.dir(error);
        return;
    }
    console.log(data.yellow);

});


