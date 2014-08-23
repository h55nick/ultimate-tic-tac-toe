import Ember from 'ember';

export default Ember.Mixin.create({

    bounceState: function(){
      var horizontalWin = this.horizontalWin();
      var verticalWin = this.verticalWin();
      var diagonalWin = this.diagonalWin();

      var state = horizontalWin || verticalWin || diagonalWin;

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

    notBounceState: function(){
      return !this.get('bounceState');
    }.property('bounceState'),

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

    // Getters for Diagonals
    //

    forwardDiagonal: function(){
      return  Ember.A([
                  this.get('x0y0'),
                  this.get('x1y1'),
                  this.get('x2y2')
                ]);
    }.property('x0y0','x1y1','x2y2'),

    backwardDiagonal: function(){
      return  Ember.A([
                  this.get('x2y0'),
                  this.get('x1y1'),
                  this.get('x0y2')
                ]);
    }.property('x2y0','x1y1','x0y2'),

    // Checkers for win state
    //

    horizontalWin: function(){
      var self = this;
      var potentialRow = [0,1,2].find(function(rowNumber){
        return self.checkState(self.row(rowNumber));
      });
      return potentialRow === undefined ? false : self.row(potentialRow);
    },

    verticalWin: function(){
      var self = this;
      var potentialCol = [0,1,2].find(function(colNumber){
        return self.checkState(self.column(colNumber));
      });
      return potentialCol === undefined ? false : self.column(potentialCol);
    },

    diagonalWin: function(){
      var self = this;
      var forwardDiagonal = this.get('forwardDiagonal');
      var backwardDiagonal = this.get('backwardDiagonal');

      if(self.checkState(forwardDiagonal)){
        return forwardDiagonal;
      }else if(self.checkState(backwardDiagonal)){
        return backwardDiagonal;
      }else{
        return false;
      }
    },

});
