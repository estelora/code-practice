var lines = 8;

for (i = 1; i <= lines; i++) {
  if(i % 2 === 0) {
    console.log(' # # # #');
  } else {
    console.log('# # # # ');
  }
}


chessBoardLine(8);

var size = 8;

var board = '';
//first loop is number of lines
for (var y = 0; y < size; y++) {

  //inner loop is width (size)
  for (var x = 0; x < size; x++) {
    
    //if even space, print ' '
    if ((x + y) % 2 == 0)
      board += ' ';
     //else, print '#'
    else
      board += '#';
  }
  //after finishing a line, determined by x, start a new line
  board += '\n';
}

console.log(board);