import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  player1: DS.attr('string'),
  player2: DS.attr('string'),
  currentPlayer: DS.attr('string'),

  boards: DS.hasMany('board', { async: true }),
});
