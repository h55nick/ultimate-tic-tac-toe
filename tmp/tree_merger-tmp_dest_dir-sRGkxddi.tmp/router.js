import Ember from 'ember';

var Router = Ember.Router.extend({
  location: UtttENV.locationType
});

Router.map(function() {
  this.resource('games', function(){
    this.route('game', { path : '/:game_id' });
  });
});

export default Router;
