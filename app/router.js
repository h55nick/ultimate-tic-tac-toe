import Ember from 'ember';

var Router = Ember.Router.extend({
  location: 'hash'
  //UtttENV.locationType
});

Router.map(function() {
  this.resource('games', function(){
    this.route('game', { path : '/:game_id' });
  });
  this.route('login');
});

export default Router;
