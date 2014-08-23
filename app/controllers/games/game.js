import Ember from 'ember';

export default Ember.Controller.extend({

  game: Ember.computed.alias('content'),
  player1: Ember.computed.alias('content.player1'),
  player2: Ember.computed.alias('content.player2'),
  currentPlayer: Ember.computed.alias('content.currentPlayer'),
  // this doesn't make sense, computed alias for itself? ^^
  setPlayer1: false,

  actions: {
    changePlayer: function(){
      var playerNumber = this.get('setPlayer1') ? 1 : 2;
      this.set('currentPlayer', this.get('player'+ playerNumber) );
      this.set('currentPlayer.type', playerNumber );
      // ^^ this will need to be switched out or some logic added to tic-spot
      this.toggleProperty('setPlayer1');
    }
  }

});
