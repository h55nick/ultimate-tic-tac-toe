import Ember from 'ember';

export default Ember.Component.extend({
  board: function(){ return this.store.createRecord('board'); }.property(''),

  currentPlayer: Ember.Object.create({
    id: '123',
    type: 1,
    toggle: function(){
      this.get('type') == 1 ? this.set('type', 2) : this.set('type', 1);
    }
  }),





});
