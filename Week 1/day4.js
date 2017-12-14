//class notes--how to return the amount of dogs
function dogHouse () {
  var dogs = 8;
  return function () {
      console.log(dogs); //you can also use return.both act as closure
  };
}


//story one

var car = {
  make: "honda civic",
  year: "2005",
  color: "red",
  getData: function () { return this.make+"-"+this.year+"-"+this.color }
};
car.getData();


//story two
speed:0
  getSpeed: function () { return this.speed },
  accelerate: function () { return this.speed + 10 + "mph" },
  brake: function () { return this.speed - 7 + "mph"},
}
  console.log (getSpeed());
