import {franc, francAll} from 'franc';
import langs from 'langs';
import colors from 'colors';

const phrase = process.argv;
const francCode = franc(`${phrase.slice(2)}`);


if(francCode === 'und'){
    console.log("ERROR< PHRASE NOT LONG ENOUGH".red)
}
else{
    const langsInfo = langs.where("3",francCode).name;
    console.log(phrase.slice(2));
    console.log(langsInfo.yellow);
}