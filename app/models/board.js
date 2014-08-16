import DS from 'ember-data';

export default DS.Model.extend({
    // In use we define the squares as properties that follow x0y0 conventions
    // this means if you are looking for the middle square of this board you .get('x1y1') etc.
    // these start in the undefined/null state. (see bottom for how they are rendered)



    // bounceState: function(){

    // }.property(''),

    horizontalWin: function(){
      var self = this;
      return [0,1,2].find(function(rowNumber){
        self.checkState(self.row(rowNumber));
      });
    },




    checkState: function(squareArray){
      return squareArray.every(function(square){
        // state can't be null (empty) and all states must be the same as the first.
        return square && (squareArray.get('firstObject') == square);
      });
    },


    // Square makers/getters
    //
    rows: function(){
      var self = this;
      return [0, 1, 2].map(function(x){
        return self.column(x);
      });
    }.property(''),

    column: function(x){
      var self = this;
      return [0,1,2].map(function(y){
        return self.get('x'+ x + 'y' + y );
      });
    },

    row: function(y){
      var self = this;
      return [0,1,2].map(function(x){
        return self.get('x'+ x + 'y' + y );
      });
    },


    x0y0: DS.attr('number'),
    x0y1: DS.attr('number'),
    x0y2: DS.attr('number'),

    x1y0: DS.attr('number'),
    x1y1: DS.attr('number'),
    x1y2: DS.attr('number'),

    x2y0: DS.attr('number'),
    x2y1: DS.attr('number'),
    x2y2: DS.attr('number'),

});
