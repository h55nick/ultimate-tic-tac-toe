import DS from 'ember-data';

export default DS.Model.extend({
    // x0y0: Ember.Object.create({state: null }),
    // x0y1: Ember.Object.create({state: null }),
    // x0y2: Ember.Object.create({state: null }),

    // x1y0: Ember.Object.create({state: null}),
    // x1y1: Ember.Object.create({state: null}),
    // x1y2: Ember.Object.create({state: null}),

    // x2y0: Ember.Object.create({state: null}),
    // x2y1: Ember.Object.create({state: null}),
    // x2y2: Ember.Object.create({state: null}),

    // bounceState: function(){

    // }.property(''),

    checkState: function(squareArray){
      return squareArray.every(function(square){
        // state can't be null (empty) and all states must be the same as the first.
        return square && (squareArray.get('firstObject') == square);
      });
    },

});
