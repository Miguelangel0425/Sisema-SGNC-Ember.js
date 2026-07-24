import Component from '@glimmer/component';
import { service } from '@ember/service';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import { FormatUtils } from '../utils/FormatUtils';
import {
  EstadoConvocatoria,
  etiquetaEstadoConvocatoria,
} from '../enums/EstadoConvocatoria';
import type ConvocatoriaService from '../services/convocatoria';
import type AlertaService from '../services/alerta';
import type ConfirmService from '../services/confirm';
import type { Convocatoria } from '../models/Convocatoria';

interface IFilaConvocatoria {
  id: string;
  nombre: string;
  inicio: string;
  fin: string;
  estadoTexto: string;
  estadoClase: string;
  numeroNotas: number;
  noPuedeCerrar: boolean;
  original: Convocatoria;
}

export default class ConvocatoriasTablaComponent extends Component {
  @service declare convocatoria: ConvocatoriaService;
  @service declare alerta: AlertaService;
  @service declare confirm: ConfirmService;

  get filas(): IFilaConvocatoria[] {
    return this.convocatoria.listar().map((c) => ({
      id: c.id,
      nombre: c.nombre,
      inicio: FormatUtils.formatearFecha(c.fechaInicio),
      fin: FormatUtils.formatearFecha(c.fechaFin),
      estadoTexto: etiquetaEstadoConvocatoria(c.estado),
      estadoClase: `badge-${c.estado.toLowerCase()}`,
      numeroNotas: c.notas.length,
      noPuedeCerrar: c.estado !== EstadoConvocatoria.ABIERTA,
      original: c,
    }));
  }

  cerrar = (c: Convocatoria): void => {
    const r = this.convocatoria.cerrar(c.id);
    if (r.valido) {
      this.alerta.exito('Convocatoria cerrada correctamente.');
    } else {
      this.alerta.error(r.mensaje ?? 'No se pudo cerrar.');
    }
  };

  eliminar = (c: Convocatoria): void => {
    this.confirm.confirmar(`¿Eliminar la convocatoria "${c.nombre}"?`, () => {
      const r = this.convocatoria.eliminar(c.id);
      if (r.valido) {
        this.alerta.exito('Convocatoria eliminada.');
      } else {
        this.alerta.error(r.mensaje ?? 'No se pudo eliminar.');
      }
    });
  };

  <template>
    <div class="card">
      {{#if this.filas.length}}
        <table class="tabla-elegante">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Inicio</th>
              <th>Fin</th>
              <th>Estado</th>
              <th>Notas</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {{#each this.filas as |f|}}
              <tr>
                <td>{{f.nombre}}</td>
                <td>{{f.inicio}}</td>
                <td>{{f.fin}}</td>
                <td><span
                    class="badge {{f.estadoClase}}"
                  >{{f.estadoTexto}}</span></td>
                <td>{{f.numeroNotas}}</td>
                <td class="celda-acciones">
                  <button
                    type="button"
                    class="btn btn-icono btn-secundario"
                    disabled={{f.noPuedeCerrar}}
                    {{on "click" (fn this.cerrar f.original)}}
                  >Cerrar</button>
                  <button
                    type="button"
                    class="btn btn-icono btn-peligro-outline"
                    {{on "click" (fn this.eliminar f.original)}}
                  >Eliminar</button>
                </td>
              </tr>
            {{/each}}
          </tbody>
        </table>
      {{else}}
        <p class="tabla-vacia">No hay convocatorias registradas todavía.</p>
      {{/if}}
    </div>
  </template>
}
