import Ember from 'ember';
import BoardLogicMixin from 'uttt/mixins/board-logic';

module('BoardLogicMixin');

// Replace this with your real tests.
test('it works', function() {
  var BoardLogicObject = Ember.Object.extend(BoardLogicMixin);
  var subject = BoardLogicObject.create();
  ok(subject);
});
