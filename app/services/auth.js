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
          _this.store.find('player', user.uid).then(function(dataUser){
            _this.set('user', dataUser);
            console.log("User  found in data ID: " + dataUser.get('id'));
          });
        } else {
          console.log('there is no logged in user, should redirect to login');
          // user is logged out
        }
      }
      );
    }
  }.property('firebase'),

  login: function(){
    return this.get('firebaseSimpleLogin').login('facebook', {
        rememberMe: true,
        scope: 'email'
      });
  }
});
