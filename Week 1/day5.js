//day 5 promises
//a promise is an object that becomes a placeholder
//let and var can be both be used, though let is better in this scenario because we want to keep it contained


let myPromise = new Promise(function(resolve, reject){ //

  let isSuccess = true //just as an example, change this

  if(isSuccess){
    resolve("the data")
  }else{
    reject("reason it failed")
  }
})

myPromise.then(function(result){
  console.log("success: " + result)
}).catch(function(err){
  console.log("failed: " + err)
})


//challenges
var thisPromise = new Promise(function(resolve, reject){
  var text = "example"
  var splitText = text.split("")
  var reverseArray = splitText.reverse()

  if (text){
    resolve("the result:")
  } else {
    reject("that is not text")
  }
})

  thisPromise.then(function(result){
    console.log(reverseArray)
  }).catch(function(err){
    console.log(reverseArray)
  })
  //


})
