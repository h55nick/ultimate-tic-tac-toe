import Ember from 'ember';

export default Ember.Component.extend({
  selectable: function(){
    return this.get('square') === null;
  }.property('square'),

  actions: {
    select: function(){
      console.log('tic-spot component');
      this.set('square', this.get('currentPlayer.name'));
      this.sendAction();
    }
  }
});
