import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    changePlayer: function(){
      this.sendAction();
    }
  }
});
