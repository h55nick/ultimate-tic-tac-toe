import Ember from 'ember';

export default Ember.Controller.extend({
  game: Ember.computed.alias('content'),

  player1: function(){
    return Ember.Object.create({
    id: '123',
    type: 1,
    name: 'player1 (Nick)'
    });
  }.property(),
  player2: function(){
    return Ember.Object.create({
    id: '555',
    type: 2,
    name: 'player2 (Andre)'
    });
  }.property(),

  currentPlayer: Ember.computed.alias('player1'),

});
