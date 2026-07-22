import EmberRouter from '@embroider/router';
import config from 'sisema-sgnc-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('dashboard');
  this.route('convocatorias');
  this.route('directores', function () {
    this.route('nuevo');
  });
  this.route('notas');
  this.route('consultas');
  this.route('reportes');
});
