import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    login: function(){
      var auth = this.get('auth');
        auth.login('facebook', {
        rememberMe: true
      });
    }
  }
});
