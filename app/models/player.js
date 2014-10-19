import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  games: DS.hasMany('game', { async: true }),
  type: null,
  // type is a terrible name.

  displayName: function(){
    return this.get('name') || this.get('email') || this.get('id');
  }.property('name', 'email')
});
