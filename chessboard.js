function chessBoardLine(lines) {
  for (i = 1; i <= lines; i++) {
    if(i % 2 === 0) {
      console.log(' # # # #');
    } else {
      console.log('# # # # ');
    }
  }
}

chessBoardLine(8);

