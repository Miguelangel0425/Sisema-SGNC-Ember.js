import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import type CronogramaService from '../services/cronograma';
import type AlertaService from '../services/alerta';
import type { NotaConceptual } from '../models/NotaConceptual';
import type { Actividad } from '../models/Actividad';
import { FormatUtils } from '../utils/FormatUtils';

interface Seccion6Args {
  nota: NotaConceptual;
}

export default class Seccion6CronogramaComponent extends Component<{
  Args: Seccion6Args;
}> {
  @service declare cronograma: CronogramaService;
  @service declare alerta: AlertaService;

  @tracked private version = 0;

  get soloLectura(): boolean {
    return !this.args.nota.esEditable();
  }

  private refrescar(): void {
    this.version++;
  }

  get actividades(): Actividad[] {
    void this.version;
    return this.args.nota.cronograma.actividades;
  }

  fechaInicioFmt = (a: Actividad): string =>
    FormatUtils.formatearFecha(a.fechaInicio);
  fechaFinFmt = (a: Actividad): string =>
    FormatUtils.formatearFecha(a.fechaFin);
  duracion = (a: Actividad): number => a.duracionDias();

  ordenar = (): void => {
    this.cronograma.ordenarPorFecha(this.args.nota);
    this.refrescar();
  };

  eliminar = (act: Actividad): void => {
    const r = this.cronograma.eliminarActividad(this.args.nota, act.id);
    if (r.valido) {
      this.refrescar();
    } else {
      this.alerta.error(r.mensaje ?? 'No se pudo eliminar la actividad.');
    }
  };

  agregar = (event: SubmitEvent): void => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const nombre = (
      form.elements.namedItem('nombreAct') as HTMLInputElement
    ).value.trim();
    const inicioStr = (form.elements.namedItem('inicioAct') as HTMLInputElement)
      .value;
    const finStr = (form.elements.namedItem('finAct') as HTMLInputElement)
      .value;

    if (!inicioStr || !finStr) {
      this.alerta.advertencia(
        'Debe indicar la fecha de inicio y fin de la actividad.',
      );
      return;
    }

    const resultado = this.cronograma.agregarActividad(
      this.args.nota,
      nombre,
      FormatUtils.desdeFechaInput(inicioStr),
      FormatUtils.desdeFechaInput(finStr),
    );
    if (!resultado.valido) {
      this.alerta.error(
        resultado.mensaje ?? 'No se pudo agregar la actividad.',
      );
      return;
    }
    form.reset();
    this.refrescar();
  };

  <template>
    <section class="seccion-form card">
      <h3 class="seccion-titulo">6. Cronograma de ejecución</h3>

      <button
        type="button"
        class="btn btn-secundario btn-pequeno"
        {{on "click" this.ordenar}}
      >Ordenar por fecha</button>

      {{#if this.actividades.length}}
        <table class="tabla-elegante">
          <thead>
            <tr>
              <th>Actividad</th>
              <th>Fecha inicio</th>
              <th>Fecha fin</th>
              <th>Duración (días)</th>
              {{#unless this.soloLectura}}<th>Acciones</th>{{/unless}}
            </tr>
          </thead>
          <tbody>
            {{#each this.actividades as |a|}}
              <tr>
                <td>{{a.nombre}}</td>
                <td>{{this.fechaInicioFmt a}}</td>
                <td>{{this.fechaFinFmt a}}</td>
                <td>{{this.duracion a}}</td>
                {{#unless this.soloLectura}}
                  <td><button
                      type="button"
                      class="btn btn-icono btn-peligro-outline"
                      {{on "click" (fn this.eliminar a)}}
                    >Eliminar</button></td>
                {{/unless}}
              </tr>
            {{/each}}
          </tbody>
        </table>
      {{else}}
        <p class="tabla-vacia">No hay actividades registradas todavía.</p>
      {{/if}}

      {{#unless this.soloLectura}}
        <form class="formulario-inline" {{on "submit" this.agregar}}>
          <input
            type="text"
            name="nombreAct"
            placeholder="Nombre de la actividad"
          />
          <input type="date" name="inicioAct" />
          <input type="date" name="finAct" />
          <button type="submit" class="btn btn-secundario">+ Agregar actividad</button>
        </form>
      {{/unless}}
    </section>
  </template>
}
