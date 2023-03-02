function chessBoard(rows, columns) {
    let chessboard = [];
    let chessrow = [];
    for (let i = 0; i < columns; i++) {
      if (i % 2 == 0) {
        chessrow.push("O");
      } else {
        chessrow.push("X");
      }
    }
    for (let j = 0; j < rows; j++) {
      chessboard.push(chessrow);
      console.log(chessboard)
    }
    return chessboard;
  }