import Component from '@glimmer/component';
import { service } from '@ember/service';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import { LinkTo } from '@ember/routing';
import { FormatUtils } from '../utils/FormatUtils';
import { etiquetaEstadoNota } from '../enums/EstadoNota';
import type NotaConceptualService from '../services/nota-conceptual';
import type AlertaService from '../services/alerta';
import type ConfirmService from '../services/confirm';
import type { NotaConceptual } from '../models/NotaConceptual';

interface IFilaNota {
  id: string;
  codigo: string;
  nombre: string;
  director: string;
  presupuesto: string;
  estadoTexto: string;
  estadoClase: string;
  noPuedeEliminar: boolean;
}

export default class NotasTablaComponent extends Component {
  @service declare notaConceptual: NotaConceptualService;
  @service declare alerta: AlertaService;
  @service declare confirm: ConfirmService;

  get filas(): IFilaNota[] {
    return this.notaConceptual.listar().map((n) => ({
      id: n.id,
      codigo: n.codigo,
      nombre: n.nombre,
      director: n.director.obtenerNombreCompleto(),
      presupuesto: FormatUtils.formatearMoneda(n.calcularPresupuestoTotal()),
      estadoTexto: etiquetaEstadoNota(n.estado),
      estadoClase: `badge-${n.estado.toLowerCase()}`,
      noPuedeEliminar: !n.puedeEliminarse(),
    }));
  }

  eliminar = (id: string, nombre: string, codigo: string): void => {
    this.confirm.confirmar(`¿Eliminar la nota "${nombre}" (${codigo})?`, () => {
      const r = this.notaConceptual.eliminar(id);
      if (r.valido) {
        this.alerta.exito('Nota conceptual eliminada.');
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
              <th>Código</th>
              <th>Nombre</th>
              <th>Director</th>
              <th>Presupuesto</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {{#each this.filas as |f|}}
              <tr>
                <td>{{f.codigo}}</td>
                <td>{{f.nombre}}</td>
                <td>{{f.director}}</td>
                <td>{{f.presupuesto}}</td>
                <td><span
                    class="badge {{f.estadoClase}}"
                  >{{f.estadoTexto}}</span></td>
                <td class="celda-acciones">
                  <LinkTo
                    @route="notas.detalle"
                    @model={{f.id}}
                    class="btn btn-icono btn-secundario"
                  >Ver / Editar</LinkTo>
                  <button
                    type="button"
                    class="btn btn-icono btn-peligro-outline"
                    disabled={{f.noPuedeEliminar}}
                    {{on "click" (fn this.eliminar f.id f.nombre f.codigo)}}
                  >Eliminar</button>
                </td>
              </tr>
            {{/each}}
          </tbody>
        </table>
      {{else}}
        <p class="tabla-vacia">No hay notas conceptuales registradas todavía.</p>
      {{/if}}
    </div>
  </template>
}
