import { relativeDateFormatter } from 'mymail/helpers/relative-date-formatter';
import { module, test } from 'qunit';
import moment from 'moment';

module('Unit | Helper | relative date formatter', {
  afterEach() {
    timekeeper.reset();
  }
});

const date = moment("07/27/2016 1:00:00 PM", "MM/DD/YYYY h:mm:ss A").toDate();

test('shows relative time for date\'s that are less than 24 hours old', function(assert) {
  const laterDate = moment(date).add(1, 'hour').toDate();
  timekeeper.freeze(laterDate);
  const actual = relativeDateFormatter([date], { relative: true });
  const expected = '1:00 PM (1 hour ago)';
  assert.equal(actual, expected);
});

test('shows 1 day ago', function(assert) {
  assert.ok(true);
});

test('shows formatted date for date\'s that are older than 24 hours old', function(assert) {
  assert.ok(true);
});

test('shows just date when relative is false', function(assert) {
  assert.ok(true);
});

