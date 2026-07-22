import { module, test } from 'qunit';
import { setupTest } from 'sisema-sgnc-ember/tests/helpers';

module('Unit | Route | directores/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:directores/index');
    assert.ok(route);
  });
});
