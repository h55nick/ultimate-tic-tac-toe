import { test, moduleForModel } from 'ember-qunit';

moduleForModel('board', 'Board', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(model);
});

test('it can determine if there is a winner', function(){
  var b1 = this.store().createRecord('board', {
    x0y0: 1,
    x0y1: 1,
    x0y2: 1
  });
  equal(b1.get('notBounceState'), true);
});
