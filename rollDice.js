function rollDice(sides) {
  var result;

  if(!sides) {
    sides = 6;
  }
  result = Math.floor(Math.random() * sides) + 1;
  console.log(result);
}

rollDice();
rollDice(10);
rollDice(7);