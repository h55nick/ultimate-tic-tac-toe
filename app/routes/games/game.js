import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(){
    if (!this.get('auth.user')){
      this.transitionTo('login');
    }
  },
  setupController: function(controller, model){
    this._super(controller, model);
    var players = model.get('players');
    var user = this.get('auth.user');
    if (players.get('length') < 2 && !players.contains(user)){
      players.pushObject(user);
    }
    model.save();
  }
});
