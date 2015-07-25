function chessBoard(n) {
  for (i = 1; i <= n; i++) {
    if(i % 2 === 0) {
      console.log(' # # # #');
    } else {
      console.log('# # # # ');
    }
  }
}

chessBoard(8);