//haiku
let fs = require('fs');
fs.readFile('example.txt','ascii', function (err, data){
  if(err){
    console.log('where the fuck is your file you slut.')
  }else{
    console.log(data);
  }
});
