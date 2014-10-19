import Ember from 'ember';
import BoardLogicMixin from 'uttt/mixins/board-logic';

export default Ember.Controller.extend(BoardLogicMixin,{

  game: Ember.computed.alias('content'),
  // these are aliases for the game/content so that everything is synced
  player1: Ember.computed.alias('game.player1'),
  player2: Ember.computed.alias('game.player2'),
  currentPlayer: Ember.computed.alias('game.currentPlayer'),


  actions: {
    changePlayer: function(){
      console.log('changing player (controller)');
      this.get('game').changePlayer();
    }
  }

});
