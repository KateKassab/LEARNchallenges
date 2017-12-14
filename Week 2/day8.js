function numGame() {
  var number = Math.floor(Math.random() * 100);
  var guesses = 7;
  var name = prompt("What is your name?");
  console.log(number);
    do {
      do{
          var ask = parseInt(prompt("GUESS A NUMBER"));
          if (ask === number) {
            alert("winner winner--ducky dinner for " + name);

            guesses = 0;
            //end game
          } else if (ask < number) {
            alert("too low");
            guesses --;
            alert("Guesses Left: " + guesses);
          } else {
            alert("too high");
            guesses --;
            alert("Guesses Left: " + guesses);
            }
            if (ask !== 0-100){
              alert ("Uhhh numbers only");
              break;
            }
            if (guesses === 0) {
              alert ("Gameover " + name);
              break;
            }
          }
      while (ask != number);
    }
    while (guesses != 0);  7
}
