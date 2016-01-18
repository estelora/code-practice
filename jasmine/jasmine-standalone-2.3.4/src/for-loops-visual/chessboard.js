var lines = 8;

for (i = 1; i <= lines; i++) {
  if(i % 2 === 0) {
    console.log(' # # # #');
  } else {
    console.log('# # # # ');
  }
}

//first loop is number of lines
function chessBoardLine(lines) {
  var board = '';

  for (var y = 0; y < lines; y++) {

    //inner loop is width (size)
    for (var x = 0; x < lines; x++) {
      
      //if even space, print ' '
      if ((x + y) % 2 == 0)
        board +=' ';
       //else, print '#'
      else
        board +='#';
    }
    //after finishing a line, determined by x, start a new line
    board += '\n';
  }
  return board;
}

// chessBoardLine(8);