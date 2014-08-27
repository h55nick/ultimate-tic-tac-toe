import Ember from 'ember';
import BoardLogicMixin from 'uttt/mixins/board-logic';

export default Ember.Controller.extend(BoardLogicMixin,{

  game: Ember.computed.alias('content'),
  // these are aliases for the game/content so that everything is synced
  player1: Ember.computed.alias('content.player1'),
  player2: 'local:20003', // Ember.computed.alias('content.player2'),
  currentPlayer: Ember.computed.alias('content.currentPlayer'),


  actions: {
    changePlayer: function(){
      this.get('game').changePlayer();
    }
  }

});
