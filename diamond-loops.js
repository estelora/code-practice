
//top half of triangle, lines 1-5
//i increases by 2 each time
for (var i = 1; i < 10; i += 2) {

  for (var j = 0; j < 9 - i / 2; j++)
    console.log(' ');
  for (var j = 0; j < i; j++) 
    console.log('*');
}

for (var i = 7; i >= 0; i -= 2) {
  
  for (var j = 0; j < 9 - i / 2; j++)
    console.log('');
  }
  for (var j = 0; j < i; j++) {
  console.log('*');
  }
}