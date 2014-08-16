import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    login: function(){
      var _this = this;
      var controller = this.get('controller');
      var auth = this.get('auth');
      auth.login().then(function(user){
        console.log('success auth in the then');
        _this.store.find('player', user.uid).then(
          function(theUser){
          _this.auth.set('user', theUser);
          console.log('old user set successfully', user);
        },
        function(error){
          console.log('no user to find');
          var newPlayer = _this.store.createRecord('player', {
            id: user.uid,
            name: user.displayName,
            email: user.thirdPartyUserData.email
          });

          console.log('new player created', newPlayer);

          newPlayer.save().then(function(player){
            _this.auth.set('user', player);
            console.log('user set successfully', user);
          }, function(e){console.log('something went wrong', e)});
        });
      }, function(error){debugger;});
    }
  }
});
