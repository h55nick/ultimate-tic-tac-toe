import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  player1: DS.attr('string'),
  player2: DS.attr('string'),
  currentPlayer: DS.attr('string'),

  boards: DS.hasMany('board', { async: true }),

  // The 9 squares of a tick-tac-toe board
  //

  // column 1
  x0y0: function(){ return this.get('boards').objectAt(0); }.property('boards.[]'),
  x0y1: function(){ return this.get('boards').objectAt(1); }.property('boards.[]'),
  x0y2: function(){ return this.get('boards').objectAt(2); }.property('boards.[]'),
  // column 2
  x1y0: function(){ return this.get('boards').objectAt(3); }.property('boards.[]'),
  x1y1: function(){ return this.get('boards').objectAt(4); }.property('boards.[]'),
  x1y2: function(){ return this.get('boards').objectAt(5); }.property('boards.[]'),
  // column 3
  x2y0: function(){ return this.get('boards').objectAt(6); }.property('boards.[]'),
  x2y1: function(){ return this.get('boards').objectAt(7); }.property('boards.[]'),
  x2y2: function(){ return this.get('boards').objectAt(8); }.property('boards.[]'),
});
