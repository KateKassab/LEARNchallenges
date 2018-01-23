let asciify = require('asciify')

var text = "I am an example text!"

asciify(text, {font: 'larry3d'}, function(err, result){
  if(err){
    console.log("error!")
  } else {
    console.log(result)
  }
})
