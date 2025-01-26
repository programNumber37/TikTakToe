  //still missing : tie the game if moves goes to 9.
  //check diagonals for wins
  //dom integration
  
  class TicTacToe{
    constructor(){
      this.board = this.makeBoard();
      this.playerX = new Player("X");
      this.playerO = new Player("O");
      this.currentPlayer = this.playerX;
      this.moves = 0; 
    }

    makeBoard(){
        var board = [];

        for(let i = 0; i<3;i++){
            board[i]= [1,1,1];
        }
        return board;
    }

      makeMove(row, col) {
    
      if(this.board[row][col] !== 1 ){
        console.log("This space is occupied!");
        return false;
      }
      
        this.board[row][col] = this.currentPlayer.getSymbol();
        this.moves++;
        console.log(this.board);//for debugging 

      const winner = this.checkWinner();
      if(winner){
        alert(`${winner} wins!`);
        return true;
      }

      //swap players
      this.currentPlayer = this.currentPlayer===this.playerX ? this.playerO : this.playerX;


    }

    checkWinner(){

    for(let r=0;r<3;r++){
      let xCount = 0;
      let oCount = 0;

      for(let c=0;c<3;c++){
        if(this.board[r][c]=="X"){
          xCount++;
        }
        if(this.board[r][c]=="O"){
          oCount++;
        }
        if(xCount >=3 ){
          console.log("X WINS")
          return "X";
        }
        if(oCount >=3 ){

          console.log("O WINS");
          return "O";
        }
      }
    }

    for(let c=0;c<3;c++){
      let xCount = 0;
      let oCount = 0;

      for(let r=0;r<3;r++){
        if(this.board[r][c]=="X"){
          xCount++;
        }
        if(this.board[r][c]=="O"){
          oCount++;
        }
        if(xCount >=3 ){
          console.log("X WINS");
          return "X";
          
        }
        if(oCount >=3 ){
          console.log("O WINS")
          return "O";
          
        }

        return null;
      }
    }


    
    
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
  





  //function to make rotating moves between the players (shouldnt this be in start game or seperated )



  //and also check if one player is winning. how do i check if a player is winning.











