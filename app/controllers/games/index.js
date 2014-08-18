import Ember from 'ember';

export default Ember.ArrayController.extend({

  actions: {
    createGame: function(){
      var _this = this;
      var game = this.store.createRecord('game', {
          name: 'autocreate- ' + Math.random()
        });
      game.save().then(function(g){
        var promises = [];

        // For creating all 9

        [0,1,2].forEach(function(x){
          [0,1,2].forEach(function(y){
            promises.pushObject(
              _this.store.createRecord('board', {
               name: 'x'+ x + 'y'+ y,
               game: g
              }).save());
          });
        });
        Ember.RSVP.Promise.all(promises).then(function(boards){
          g.get('boards').then(function(currentBoards){
            currentBoards.pushObjects(boards);
              g.save().then(function(){
                _this.transitionToRoute('games.game', g);
              });
          });

        });


      });
    }
  }
});
