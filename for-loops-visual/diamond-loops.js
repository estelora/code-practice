//top half of triangle, lines 1-5
//i increases by 2 each time
for (var i = 1; i < 10; i += 2) {

  //number of spaces is equal to i - 1 / 2 or it will grow too fast
  for (var j = 0; j < 9 - i / 2; j++) {
    console.log(' ');
  }
  //j is increasing by 2 each time
  for (var j = 0; j < i; j++){
    console.log('*');
  }
}
//top half of triangle, lines 6-9
//i decreases by 2 each time
for (var i = 7; i >= 0; i -= 2) {
  //number of spaces is equal to i - 1 / 2 or it will grow too fast
  for (var j = 0; j < 9 - i / 2; j++) {
    console.log('');
  }
  //follows i, i is decreasing
  for (var j = 0; j < i; j++) {
  console.log('*');
  }
}