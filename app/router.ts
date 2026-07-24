import EmberRouter from '@embroider/router';
import config from 'sisema-sgnc-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('dashboard');
  this.route('convocatorias', function () {
    this.route('nueva');
  });
  this.route('directores', function () {
    this.route('nuevo');
  });
  this.route('notas', function () {
    this.route('nueva');
    this.route('detalle', { path: '/:nota_id' });
  });
  this.route('consultas');
  this.route('reportes');
});
