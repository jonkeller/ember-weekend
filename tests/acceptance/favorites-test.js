import { test } from 'qunit';
import moduleForAcceptance from 'mymail/tests/helpers/module-for-acceptance';

import folderPage from 'mail/tests/pages/folder'

moduleForAcceptance('Acceptance | inbox');

test('visiting /inbox', function(assert) {
  folderPage.visit();
  folderPage.emails(0).star();

  click('td i.fa-star');

  andThen(function() {
    assert.ok(folderPage.emails(0).starred, 'Wasn\'t starred');
  });
});
