import Ember from 'ember';

export default Ember.Object.extend({
  firebase: function(){
    return this.container.lookup('adapter:application').firebase;
  }.property(),
  firebaseSimpleLogin: function(){
    var firebase = this.get('firebase');
    var _this = this;
    if (firebase){
      return new FirebaseSimpleLogin(firebase,
        function(error, user) {
        if (error) {
          _this.set('error', error);
          console.log(error);
        } else if (user) {
          console.log("User ID: " + user.uid + ", Provider: " + user.provider);
          _this.set('user', user);
        } else {
          // user is logged out
        }
      }
      );
    }
  }.property('firebase'),

  login: function(){
    return this.get('firebaseSimpleLogin').login('facebook', {
        rememberMe: true
      });
  }
});
