import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    login: function(){
      var firebase =  this.container.lookup('adapter:application').firebase;
      var auth = new FirebaseSimpleLogin(
      firebase, function(error, user) {
        if (error) {
          // an error occurred while attempting login
          console.log(error);
        } else if (user) {
          // user authenticated with Firebase
          console.log("User ID: " + user.uid + ", Provider: " + user.provider);
        } else {
          // user is logged out
        }
      }
    );
      auth.login('facebook', {
        rememberMe: true
      });
    }
  }
});
