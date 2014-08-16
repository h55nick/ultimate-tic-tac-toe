import DS from 'ember-data';

export default DS.Model.extend({
    // bounceState: function(){

    // }.property(''),

    rows: function(){
      var self = this;
       return [0,1,2].map(function(x){
        return self.column(x);
      });
    }.property(''),

    column: function(x){
      var self = this;
      return [0,1,2].map(function(y){
        return self.get('X'+ x + 'Y' + y );
      });
    },

    checkState: function(squareArray){
      return squareArray.every(function(square){
        // state can't be null (empty) and all states must be the same as the first.
        return square && (squareArray.get('firstObject') == square);
      });
    },

});
