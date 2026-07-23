import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { on } from '@ember/modifier';
import { LinkTo } from '@ember/routing';
import type RouterService from '@ember/routing/router-service';
import type ConvocatoriaService from '../services/convocatoria';
import type AlertaService from '../services/alerta';
import { FormatUtils } from '../utils/FormatUtils';

export default class ConvocatoriaFormComponent extends Component {
  @service declare convocatoria: ConvocatoriaService;
  @service declare alerta: AlertaService;
  @service declare router: RouterService;

  @tracked nombre = '';
  @tracked fechaInicio = '';
  @tracked fechaFin = '';
  @tracked mensajeError = '';

  actualizarNombre = (e: Event): void => {
    this.nombre = (e.target as HTMLInputElement).value;
  };
  actualizarFechaInicio = (e: Event): void => {
    this.fechaInicio = (e.target as HTMLInputElement).value;
  };
  actualizarFechaFin = (e: Event): void => {
    this.fechaFin = (e.target as HTMLInputElement).value;
  };

  guardar = (event: SubmitEvent): void => {
    event.preventDefault();
    this.mensajeError = '';

    if (!this.fechaInicio || !this.fechaFin) {
      this.alerta.advertencia('Debe completar ambas fechas.');
      return;
    }

    const resultado = this.convocatoria.crear(
      this.nombre.trim(),
      FormatUtils.desdeFechaInput(this.fechaInicio),
      FormatUtils.desdeFechaInput(this.fechaFin),
    );

    if (!resultado.valido) {
      this.mensajeError = resultado.mensaje ?? 'Datos inválidos.';
      this.alerta.error(
        resultado.mensaje ?? 'No se pudo guardar la convocatoria.',
      );
      return;
    }

    this.alerta.exito('Convocatoria registrada correctamente.');
    this.router.transitionTo('convocatorias.index');
  };

  <template>
    <div class="card">
      <form class="formulario" {{on "submit" this.guardar}}>
        <div class="campo-formulario">
          <label for="nombre">Nombre de la convocatoria
            <span class="obligatorio">*</span></label>
          <input
            type="text"
            id="nombre"
            placeholder="Ej. Convocatoria Notas Conceptuales 2026"
            value={{this.nombre}}
            {{on "input" this.actualizarNombre}}
          />
          {{#if this.mensajeError}}
            <span class="mensaje-error">{{this.mensajeError}}</span>
          {{/if}}
        </div>
        <div class="fila-campos">
          <div class="campo-formulario">
            <label for="fechaInicio">Fecha de inicio
              <span class="obligatorio">*</span></label>
            <input
              type="date"
              id="fechaInicio"
              value={{this.fechaInicio}}
              {{on "input" this.actualizarFechaInicio}}
            />
          </div>
          <div class="campo-formulario">
            <label for="fechaFin">Fecha de fin
              <span class="obligatorio">*</span></label>
            <input
              type="date"
              id="fechaFin"
              value={{this.fechaFin}}
              {{on "input" this.actualizarFechaFin}}
            />
          </div>
        </div>
        <div class="acciones-formulario">
          <LinkTo
            @route="convocatorias.index"
            class="btn btn-secundario"
          >Cancelar</LinkTo>
          <button type="submit" class="btn btn-primario">Guardar convocatoria</button>
        </div>
      </form>
    </div>
  </template>
}
