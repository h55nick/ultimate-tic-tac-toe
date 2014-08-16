import DS from 'ember-data';

export default DS.Model.extend({
    // In use we define the squares as properties that follow x0y0 conventions
    // this means if you are looking for the middle square of this board you .get('x1y1') etc.
    // these start in the undefined/null state. (see bottom for how they are rendered)



    bounceState: function(){
      console.log('updateBounceState');
      var state = this.horizontalWin() || this.verticalWin();
      console.log(state);
      return state;
    }.property(
      'x0y0',
      'x0y1',
      'x0y2',
      'x1y0',
      'x1y1',
      'x1y2',
      'x2y0',
      'x2y1',
      'x2y2'
    ),

    horizontalWin: function(){
      var self = this;
      return [0,1,2].find(function(rowNumber){
        return self.checkState(self.row(rowNumber));
      });
    },

    verticalWin: function(){
      var self = this;
      return [0,1,2].find(function(colNumber){
        return self.checkState(self.column(colNumber));
      });
    },




    checkState: function(squareArray){
      return squareArray.every(function(square){
        // state can't be null (empty) and all states must be the same as the first.
        return square && (squareArray.get('firstObject') === square);
      });
    },


    // Square makers/getters
    //
    rows: function(){
      var self = this;
      return Ember.A([0, 1, 2]).map(function(y){
        return self.column(y);
      });
    }.property(''),

    row: function(x){
      var self = this;
      return Ember.A([0, 1, 2]).map(function(y){
        return self.get('x'+ x + 'y' + y );
      });
    },

    column: function(y){
      var self = this;
      return Ember.A([0, 1, 2]).map(function(x){
        return self.get('x'+ x + 'y' + y );
      });
    },

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
