import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(){
    // This still isn't working properly. Logs me out when I refresh?
    // if (!this.get('auth.user')){
    //   this.transitionTo('login');
    // }
  },
  setupController: function(controller, model){
    // Here we are trying to enter a game. Add to game or reject if already two people.
    this._super(controller, model);
    var players = model.get('players');
    var user = this.get('auth.user');

    // already in the game.
    if(players.contains(user)){
      // Already in the game?
      console.log('already in the game');

      // Too many players.
    }else if (players.get('length') >= 2 ){
      alert('You have entered a full game.');


    // Ensure user isn't already in the game
    }else if(!players.contains(user) ){

      // hmmm.. problem with transitions here.

      // players.then(function(playas){
      //   playas.pushObject(user);
      //   model.save();
      // });

    // Error State.
    }else{


    }

  }
});
