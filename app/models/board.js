import DS from 'ember-data';
import BoardLogicMixin from 'uttt/mixins/board-logic';

export default DS.Model.extend(BoardLogicMixin,{
    active: DS.attr('boolean', { defaultValue: true }),
    game: DS.belongsTo('game', { async: true }),
    name: DS.attr('string'),

    //
    // In use we define the squares as properties that follow x0y0 conventions
    // this means if you are looking for the middle square of this board you .get('x1y1') etc.
    // these start in the undefined/null state. (see bottom for how they are rendered)
    //

    checkState: function(squareArray){
      // console.log('square array', squareArray);
      return Ember.A(squareArray).every(function(square){
        // state can't be null (empty) and all states must be the same as the first.
        return square && (squareArray.get('firstObject') === square);
      });
    },

    winner: function(){
      return this.get('bounceState.firstObject');
    }.property('bounceState'),

    // The 9 squares of a tick-tac-toe board
    //

    // column 1
    x0y0: DS.attr('number'),
    x0y1: DS.attr('number'),
    x0y2: DS.attr('number'),
    // column 2
    x1y0: DS.attr('number'),
    x1y1: DS.attr('number'),
    x1y2: DS.attr('number'),
    // column 3
    x2y0: DS.attr('number'),
    x2y1: DS.attr('number'),
    x2y2: DS.attr('number'),

});
