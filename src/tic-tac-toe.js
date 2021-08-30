class TicTacToe {

  constructor() {
  }
  currentPlayer = 'x';
  board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]
  getCurrentPlayerSymbol() {
    return this.currentPlayer;
  }
  nextTurn(rowIndex, columnIndex) {
    if (this.board[rowIndex][columnIndex]) return;
    this.board[rowIndex][columnIndex] = this.currentPlayer;
    this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
  }
  isFinished() {
    return !!this.getWinner() || this.noMoreTurns();
  }
  getWinner() {
    if (this.board[0][0] === this.board[0][1] && this.board[0][0] === this.board[0][2] && this.board[0][0]!=null)
      return this.board[0][0];
    if (this.board[1][0] === this.board[1][1] && this.board[1][0] === this.board[1][2]&&this.board[1][0] != null)
      return this.board[1][0];
    if (this.board[2][0] === this.board[2][1] && this.board[2][0] === this.board[2][2] && this.board[2][0] != null)
      return this.board[2][0];
    if (this.board[0][0] === this.board[1][0] && this.board[0][0] === this.board[2][0] && this.board[0][0] != null)
      return this.board[0][0];
    if (this.board[0][1] === this.board[1][1] && this.board[0][1] === this.board[2][1] && this.board[0][1] != null)
      return this.board[0][1];
    if (this.board[0][2] === this.board[1][2] && this.board[0][2] === this.board[2][2] && this.board[0][2] != null)
      return this.board[0][2];
    if (this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2] && this.board[0][0] != null)
      return this.board[0][0];
    if (this.board[0][2] === this.board[1][1] && this.board[0][2] === this.board[2][0] && this.board[0][2] != null)
      return this.board[0][2];
    return null;
  }
  noMoreTurns() {
    return this.board.every(row => row.every(col => col));
  }
  isDraw() {
    return this.noMoreTurns() && !this.getWinner();
  }
  getFieldValue(rowIndex, colIndex) {
    return this.board[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
