import Ember from 'ember';

export default Ember.Component.extend({
  currentPlayer: Ember.computed.alias('board.currentPlayer'),
  game: Ember.computed.alias('board.game'),

  actions: {
    changePlayer: function(){
      this.sendAction();
    }
  }
});
