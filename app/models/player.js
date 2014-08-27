import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  games: DS.hasMany('game'),
  type: null,
  // type is a terrible name.
});
