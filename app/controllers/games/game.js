import Ember from 'ember';

export default Ember.Controller.extend({
  init: function(){
    var player1 = Ember.Object.create({
        id: '123',
        type: 1,
        name: 'player1 (Nick)'
      });
    var player2 = Ember.Object.create({
        id: '555',
        type: 2,
        name: 'player2 (Andre)'
      });
    this.set('player1',player1);
    this.set('player2',player2);
    this.set('currentPlayer', player1);

  },

  game: Ember.computed.alias('content'),
  player1: null,
  player2: null,
  currentPlayer: null,
  setPlayer1: false,

  actions: {
    changePlayer: function(){
      var playerNumber = this.get('setPlayer1') ? 1 : 2
      this.set('currentPlayer', this.get('player'+ playerNumber) );
      this.toggleProperty('setPlayer1');
    }
  }

});
