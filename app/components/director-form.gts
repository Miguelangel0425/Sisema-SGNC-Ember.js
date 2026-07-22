import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { on } from '@ember/modifier';
import { LinkTo } from '@ember/routing';
import type RouterService from '@ember/routing/router-service';
import type DirectorService from '../services/director';
import type AlertaService from '../services/alerta';
import { DEPARTAMENTOS } from '../data/departamentos.data';

export default class DirectorFormComponent extends Component {
  @service declare director: DirectorService;
  @service declare alerta: AlertaService;
  @service declare router: RouterService;

  departamentos = DEPARTAMENTOS;

  @tracked nombres = '';
  @tracked apellidos = '';
  @tracked correo = '';
  @tracked telefono = '';
  @tracked departamento = '';

  actualizarNombres = (e: Event): void => {
    this.nombres = (e.target as HTMLInputElement).value;
  };
  actualizarApellidos = (e: Event): void => {
    this.apellidos = (e.target as HTMLInputElement).value;
  };
  actualizarCorreo = (e: Event): void => {
    this.correo = (e.target as HTMLInputElement).value;
  };
  actualizarTelefono = (e: Event): void => {
    this.telefono = (e.target as HTMLInputElement).value;
  };
  actualizarDepartamento = (e: Event): void => {
    this.departamento = (e.target as HTMLSelectElement).value;
  };

  guardar = (event: SubmitEvent): void => {
    event.preventDefault();

    if (!this.departamento) {
      this.alerta.advertencia('Debe seleccionar un departamento.');
      return;
    }

    const resultado = this.director.crear(
      this.nombres.trim(),
      this.apellidos.trim(),
      this.correo.trim(),
      this.telefono.trim(),
      this.departamento,
    );

    if (!resultado.valido) {
      this.alerta.error(resultado.mensaje ?? 'Datos inválidos.');
      return;
    }

    this.alerta.exito('Director registrado correctamente.');
    this.router.transitionTo('directores.index');
  };

  <template>
    <div class="card">
      <form class="formulario" {{on "submit" this.guardar}}>
        <div class="fila-campos">
          <div class="campo-formulario">
            <label for="nombres">Nombres
              <span class="obligatorio">*</span></label>
            <input
              type="text"
              id="nombres"
              value={{this.nombres}}
              {{on "input" this.actualizarNombres}}
            />
          </div>
          <div class="campo-formulario">
            <label for="apellidos">Apellidos
              <span class="obligatorio">*</span></label>
            <input
              type="text"
              id="apellidos"
              value={{this.apellidos}}
              {{on "input" this.actualizarApellidos}}
            />
          </div>
        </div>
        <div class="fila-campos">
          <div class="campo-formulario">
            <label for="correo">Correo institucional
              <span class="obligatorio">*</span></label>
            <input
              type="email"
              id="correo"
              placeholder="nombre@espe.edu.ec"
              value={{this.correo}}
              {{on "input" this.actualizarCorreo}}
            />
          </div>
          <div class="campo-formulario">
            <label for="telefono">Teléfono
              <span class="obligatorio">*</span></label>
            <input
              type="tel"
              id="telefono"
              placeholder="0999999999"
              value={{this.telefono}}
              {{on "input" this.actualizarTelefono}}
            />
          </div>
        </div>
        <div class="campo-formulario">
          <label for="departamento">Departamento
            <span class="obligatorio">*</span></label>
          <select id="departamento" {{on "change" this.actualizarDepartamento}}>
            <option value="">Seleccione un elemento</option>
            {{#each this.departamentos as |dep|}}
              <option value={{dep}}>{{dep}}</option>
            {{/each}}
          </select>
        </div>
        <div class="acciones-formulario">
          <LinkTo
            @route="directores.index"
            class="btn btn-secundario"
          >Cancelar</LinkTo>
          <button type="submit" class="btn btn-primario">Guardar director</button>
        </div>
      </form>
    </div>
  </template>
}
