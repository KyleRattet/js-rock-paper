// add code


//Player Constructor
var Player = function (person) {
  this.person = person;
};

Player.prototype.picks = function (move) {
  this.move = move;
};


//Game Constructor
var Game = function (player1, player2) {
 this.player1 = player1;
 this.player2 = player2;
};

Game.prototype.winner = function () {
  //rock > scissors
  //scissors > paper
  //paper > rock
  //win, lose, or tie


///tie scenario
 if(this.player1.move === this.player2.move) {
  return null;
 }

 //player 1 throws rock
 if(this.player1.move === "rock") {
    if(this.player2.move === "scissors")
      return this.player1;
        return this.player2;
 }

 //player 1 throws scissors
if(this.player1.move === "scissors") {
    if(this.player2.move === "rock")
      return this.player2;
        return this.player1;
 }

//player 1 throws paper
 if(this.player1.move === "paper") {
    if(this.player2.move === "rock")
      return this.player1;
        return this.player2;
 }


};


module.exports  = {
  Player: Player,
  Game: Game

};
