import Ember from 'ember';

export default Ember.Component.extend({
  currentPlayer: Ember.Object.create({
    id: '123',
    type: 'X',
    toggle: function(){
      this.get('type') == 'X' ? this.set('type', 'O') : this.set('type', 'X');
    }
  }),

  board: function(){ return this.store.createRecord('board'); }.property(''),



});
