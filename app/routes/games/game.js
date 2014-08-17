import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(){
    // if (!this.get('auth.user')){
    //   this.transitionTo('login');
    // }


  },
  setupController: function(controller, model){
    this._super(controller, model);
    if (model.get('player1')){
      model.set('player2', this.get('auth.user.id'));
    } else{
      model.set('player1', this.get('auth.user.id'));
    }

    if(!model.get('currentPlayer')){
      model.set('currentPlayer', model.get('player1'));
    }
    model.save();

  }
});
