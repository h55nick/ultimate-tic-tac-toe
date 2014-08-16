import Ember from 'ember';

export default Ember.ArrayController.extend({

  actions: {
    createGame: function(){
      var _this = this;
      var game = this.store.createRecord('game', {
          name: 'autocreate'
        });
      game.save().then(function(g){
        var promises = [];
        [0,1,2].forEach(function(x){
          [0,1,2].forEach(function(y){
            promises.pushObject( _this.store.createRecord('board', { name: 'x'+ x+ 'y'+ y }).save());
          });
        });
        RSVP.Promise.all(promises).then(function(boards){
          g.get('boards').pushObjects(boards);
          g.save().then(function(){
            _this.transitionToRoute('games.game', g);
          });
        });


      });
    }
  }
});
