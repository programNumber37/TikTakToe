
  
  class TicTacToe{
    constructor(){
      this.board = this.makeBoard();
      this.playerX = new Player("X");
      this.playerO = new Player("O");
      this.currentPlayer = this.playerX;
      this.moves = 0; 
    }

    makeBoard() {
      return Array(3).fill().map(() => Array(3).fill(null));
    }

    makeMove(row, col) {
      
      if (this.board[row][col] !== null) return false;
    
      this.board[row][col] = this.currentPlayer.getSymbol();
      this.moves++;
    
      const winner = this.checkWinner();
      if (winner) {
        alert(winner === "TIE" ? "It's a tie!" : `${winner} wins!`);
        return true;
      }
    
      this.currentPlayer = this.currentPlayer === this.playerX ? this.playerO : this.playerX;
      return true;
    }

    checkWinner() {
      // Check rows
      for (let row = 0; row < 3; row++) {
        if (this.board[row][0] === this.board[row][1] && 
            this.board[row][1] === this.board[row][2] && 
            this.board[row][0] !== null) {
          return this.board[row][0];
        }
      }
    
      // Check columns
      for (let col = 0; col < 3; col++) {
        if (this.board[0][col] === this.board[1][col] && 
            this.board[1][col] === this.board[2][col] && 
            this.board[0][col] !== null) {
          return this.board[0][col];
        }
      }
    
      // Check diagonals
      if (this.board[0][0] === this.board[1][1] && 
          this.board[1][1] === this.board[2][2] && 
          this.board[0][0] !== null) {
        return this.board[0][0];
      }
    
      if (this.board[0][2] === this.board[1][1] && 
          this.board[1][1] === this.board[2][0] && 
          this.board[0][2] !== null) {
        return this.board[0][2];
      }
    
      // Check tie
      if (this.moves === 9) return "TIE";
    
      return null;
    }

  }

  class Player{
    constructor(symbol){
      if (symbol !== 'X' && symbol !== 'O') {
        throw new Error('Player symbol must be "X" or "O"');
      }
      this.symbol = symbol;
    }

    getSymbol(){
      return this.symbol;
    }

  }

  
  


  const game = new TicTacToe();
  

  const buttons = document.querySelectorAll(".buttons");

buttons.forEach(button => {
  button.addEventListener("click", (e) => { 
    const row1 = parseInt(e.target.dataset.row);
    const col1 = parseInt(e.target.dataset.col);
    console.log(row1);
    console.log(col1);
    
   
    const currentSymbol = game.currentPlayer.getSymbol();
    
    const moveSuccessful = game.makeMove(row1, col1);
    
    if (moveSuccessful) {
      e.target.textContent = currentSymbol; 
    }
  });
});
 














