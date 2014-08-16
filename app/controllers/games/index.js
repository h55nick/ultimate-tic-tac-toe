import Ember from 'ember';

export default Ember.ArrayController.extend({

  actions: {
    createGame: function(){
      var _this = this;
      var game = this.store.createRecord('game', {name: 'autocreate'})
      game.save().then(function(g){
        _this.transitionToRoute('games.game', g);
      });
    }
  }
});
