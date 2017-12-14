


//highest number 3
var maxNum = [1000, 25, 39, 40, 54];
var max = 0; // setting max to a value of 0
maxNum.forEach(function (i){ // foreach same as for loop
  if (i>max){ // checking if i greatear than max
    max = i; // if greater max become i
    console.log(i)
  }

})


var minNum = [1,2,4,.036,8,9];
var min = Infinity;
minNum.forEach(function (i){
  if (i<min){
    min=i;
    console.log(i)
  }
})

var arr= [1,2,3]
for (var i=0; i<=arr.length; i++){


  console.log(arr[i]+i)
}

var sum = [1, 2 , 3, 10,100].reduce(add, 0);//

  function add(a, b) {
      return a + b;
  }
  console.log(sum);


// all arrays and string challenges below
  var parents = ["Kathy", "Tom"]
  var siblings = ["Gabriel", "Kennedy", "Bub"];
    siblings.concat(parents).sort().reverse();


}
function iseven(n) {
  for( n=0; n<=15; n++)
  if (n%2 == 0){
    console.log (n +" is even");
  } else {
    console.log(n + " is odd")
  }};
