const fs = require('fs');


// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("I come in the callback");
//     if (err) throw err;
//   });
  
const folderName = process.argv[2] || 'Project'
try{
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`,'');
  fs.writeFileSync(`${folderName}/style.css`,'');
  fs.writeFileSync(`${folderName}/app.js`,'');
}
catch (e){
    console.log("ERROR", e);
}