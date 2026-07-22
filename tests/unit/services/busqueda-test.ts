import { module, test } from 'qunit';
import { setupTest } from 'sisema-sgnc-ember/tests/helpers';

module('Unit | Service | busqueda', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    const service = this.owner.lookup('service:busqueda');
    assert.ok(service);
  });
});
