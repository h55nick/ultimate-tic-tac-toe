import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(){
    //need to fire auth to make sure
    var f = this.get('auth.firebaseSimpleLogin');
   }
});
