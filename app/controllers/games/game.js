import Ember from 'ember';

export default Ember.Controller.extend({

  game: Ember.computed.alias('content'),
  player1: Ember.computed.alias('content.player1'),
  player2: Ember.computed.alias('content.player2'),
  currentPlayer: Ember.computed.alias('content.currentPlayer'),
  setPlayer1: false,

  actions: {
    changePlayer: function(){
      var playerNumber = this.get('setPlayer1') ? 1 : 2
      this.set('currentPlayer', this.get('player'+ playerNumber) );
      this.toggleProperty('setPlayer1');
    }
  }

});
