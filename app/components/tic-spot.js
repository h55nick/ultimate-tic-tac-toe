import Ember from 'ember';

export default Ember.Component.extend({
  selectable: function(){
    return this.get('square') == null;
  }.property('square'),

  actions: {
    select: function(){
      console.log('selecting..')
      this.set('square', this.get('currentPlayer.type'));
      this.get('currentPlayer').toggle();
    }
  }
});
