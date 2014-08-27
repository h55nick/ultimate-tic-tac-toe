import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  currentPlayerInt: DS.attr('number'),
  boards: DS.hasMany('board', { async: true }),


  // Player Management
  //
  players: DS.hasMany('player', { async: true }),
  player1: Ember.computed.alias('players.firstObject'),
  player2: function(){
    if(this.get('players.length') == 2){
      return this.get('players.lastObject');
    } 
  }.property('players.length'),

  currentPlayerType: function(){
    return this.get('currentPlayerInt') === 1 ? 'x': 'o';
  }.property('currentPlayerInt'),

  currentPlayer: function(){
    var player = this.get('player'+ this.get('currentPlayerInt'));
    return Ember.Object.create({name: player.get('name'), id: player.get('id'), type: this.get('currentPlayerType')});
  }.property('currentPlayerInt'),

  changePlayer: function(){
      var playerNumber = this.get('currentPlayerInt') != 1 ? 1 : 2;
      this.set('currentPlayerInt', playerNumber );
  },


  // State Management
  //

  checkState: function(boardArray){
    // console.log('square array', squareArray);
    return Ember.A(boardArray).every(function(board){
      // state can't be null (empty) and all states must be the same as the first.
      return square && (squareArray.get('firstObject') === square);
    });
  },

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
