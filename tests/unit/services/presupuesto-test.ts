import { module, test } from 'qunit';
import { setupTest } from 'sisema-sgnc-ember/tests/helpers';

module('Unit | Service | presupuesto', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    const service = this.owner.lookup('service:presupuesto');
    assert.ok(service);
  });
});
