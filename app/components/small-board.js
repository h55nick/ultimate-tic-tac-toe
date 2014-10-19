import Ember from 'ember';

export default Ember.Component.extend({
  currentPlayer: Ember.computed.alias('game.currentPlayer'),


  actions: {
    changePlayer: function(){
      console.log('changing player(small board)');
      this.sendAction();
    }
  }
});
