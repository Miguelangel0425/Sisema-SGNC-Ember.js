import { module, test } from 'qunit';
import { setupTest } from 'sisema-sgnc-ember/tests/helpers';

module('Unit | Service | cronograma', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    const service = this.owner.lookup('service:cronograma');
    assert.ok(service);
  });
});
