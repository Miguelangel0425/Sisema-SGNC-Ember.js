import Component from '@glimmer/component';
import { service } from '@ember/service';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import type DirectorService from '../services/director';
import type AlertaService from '../services/alerta';
import type ConfirmService from '../services/confirm';
import type { Director } from '../models/Director';

interface IFilaDirector {
  id: string;
  nombreCompleto: string;
  correo: string;
  telefono: string;
  departamento: string;
  original: Director;
}

export default class DirectoresTablaComponent extends Component {
  @service declare director: DirectorService;
  @service declare alerta: AlertaService;
  @service declare confirm: ConfirmService;

  get filas(): IFilaDirector[] {
    return this.director.listar().map((d) => ({
      id: d.id,
      nombreCompleto: d.obtenerNombreCompleto(),
      correo: d.correo,
      telefono: d.telefono,
      departamento: d.departamento,
      original: d,
    }));
  }

  eliminar = (d: Director): void => {
    this.confirm.confirmar(
      `¿Eliminar al director "${d.obtenerNombreCompleto()}"?`,
      () => {
        const r = this.director.eliminar(d.id);
        if (r.valido) {
          this.alerta.exito('Director eliminado.');
        } else {
          this.alerta.error(r.mensaje ?? 'No se pudo eliminar.');
        }
      },
    );
  };

  <template>
    <div class="card">
      {{#if this.filas.length}}
        <table class="tabla-elegante">
          <thead>
            <tr>
              <th>Nombres y apellidos</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Departamento</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {{#each this.filas as |f|}}
              <tr>
                <td>{{f.nombreCompleto}}</td>
                <td>{{f.correo}}</td>
                <td>{{f.telefono}}</td>
                <td>{{f.departamento}}</td>
                <td>
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
        <p class="tabla-vacia">No hay directores registrados todavía.</p>
      {{/if}}
    </div>
  </template>
}
