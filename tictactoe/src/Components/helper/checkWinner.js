function isWinner(board, CurrSymbol){
  if(board[0]===board[1] && board[1]===board[2] && board[2]==CurrSymbol) return CurrSymbol;
  if(board[3]===board[4] && board[4]===board[5] && board[5]==CurrSymbol) return CurrSymbol;
  if(board[6]===board[7] && board[7]===board[8] && board[8]==CurrSymbol) return CurrSymbol;

  if(board[0]===board[3] && board[3]===board[6] && board[6]==CurrSymbol) return CurrSymbol;
  if(board[1]===board[4] && board[4]===board[7] && board[7]==CurrSymbol) return CurrSymbol;
  if(board[2]===board[5] && board[5]===board[8] && board[8]==CurrSymbol) return CurrSymbol;

  if(board[0]===board[4] && board[4]===board[8] && board[8]==CurrSymbol) return CurrSymbol;
  if(board[2]===board[4] && board[4]===board[6] && board[6]==CurrSymbol) return CurrSymbol;

  return "";

}

export default isWinner;