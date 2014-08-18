import Ember from 'ember';

export default Ember.Component.extend({
  selectable: function(){
    return this.get('square') === null;
  }.property('square'),

  actions: {
    select: function(){
      this.set('square', this.get('currentPlayer.type'));
      console.log('select action, bubble now');
      this.sendAction();
    }
  }
});
