import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { on } from '@ember/modifier';
import { LinkTo } from '@ember/routing';
import type BusquedaService from '../services/busqueda';
import type ConvocatoriaService from '../services/convocatoria';
import type { NotaConceptual } from '../models/NotaConceptual';
import { EstadoNota, etiquetaEstadoNota } from '../enums/EstadoNota';
import { FormatUtils } from '../utils/FormatUtils';

interface IFilaResultado {
  id: string;
  codigo: string;
  nombre: string;
  director: string;
  presupuesto: string;
  estado: string;
}

export default class ConsultasPanelComponent extends Component {
  @service declare busqueda: BusquedaService;
  @service declare convocatoria: ConvocatoriaService;

  @tracked resultados: NotaConceptual[] = [];
  @tracked buscoAlguna = false;

  estadosOpciones = Object.values(EstadoNota).map((e) => ({ valor: e, etiqueta: etiquetaEstadoNota(e) }));

  get convocatoriasOpciones() {
    return this.convocatoria.listar();
  }

  get filas(): IFilaResultado[] {
    return this.resultados.map((n) => ({
      id: n.id,
      codigo: n.codigo,
      nombre: n.nombre,
      director: n.director.obtenerNombreCompleto(),
      presupuesto: FormatUtils.formatearMoneda(n.calcularPresupuestoTotal()),
      estado: etiquetaEstadoNota(n.estado),
    }));
  }

  private mostrar(notas: NotaConceptual[]): void {
    this.resultados = notas;
    this.buscoAlguna = true;
  }

  buscarPorCodigo = (event: SubmitEvent): void => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const valor = (form.elements.namedItem('codigo') as HTMLInputElement).value.trim();
    const nota = this.busqueda.porCodigo(valor);
    this.mostrar(nota ? [nota] : []);
  };

  buscarPorDirector = (event: SubmitEvent): void => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const valor = (form.elements.namedItem('director') as HTMLInputElement).value.trim();
    this.mostrar(this.busqueda.porDirector(valor));
  };

  buscarPorNombre = (event: SubmitEvent): void => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const valor = (form.elements.namedItem('nombre') as HTMLInputElement).value.trim();
    this.mostrar(this.busqueda.porNombre(valor));
  };

  filtrarPorEstado = (event: Event): void => {
    const valor = (event.target as HTMLSelectElement).value as EstadoNota;
    if (!valor) return;
    this.mostrar(this.busqueda.porEstado(valor));
  };

  filtrarPorConvocatoria = (event: Event): void => {
    const id = (event.target as HTMLSelectElement).value;
    if (!id) return;
    this.mostrar(this.busqueda.porConvocatoria(id));
  };

  <template>
    <div class="card">
      <div class="tabs-consulta">
        <form class="panel-consulta" {{on "submit" this.buscarPorCodigo}}>
          <label>Buscar por código</label>
          <div class="grupo-input-boton">
            <input type="text" name="codigo" placeholder="Ej. NC-2026-0001" />
            <button type="submit" class="btn btn-secundario">Buscar</button>
          </div>
        </form>

        <form class="panel-consulta" {{on "submit" this.buscarPorDirector}}>
          <label>Buscar por director</label>
          <div class="grupo-input-boton">
            <input type="text" name="director" placeholder="Nombre del director" />
            <button type="submit" class="btn btn-secundario">Buscar</button>
          </div>
        </form>

        <form class="panel-consulta" {{on "submit" this.buscarPorNombre}}>
          <label>Buscar por nombre</label>
          <div class="grupo-input-boton">
            <input type="text" name="nombre" placeholder="Nombre de la nota" />
            <button type="submit" class="btn btn-secundario">Buscar</button>
          </div>
        </form>

        <div class="panel-consulta">
          <label>Filtrar por estado</label>
          <select {{on "change" this.filtrarPorEstado}}>
            <option value="">Seleccione un estado</option>
            {{#each this.estadosOpciones as |op|}}
              <option value={{op.valor}}>{{op.etiqueta}}</option>
            {{/each}}
          </select>
        </div>

        <div class="panel-consulta">
          <label>Filtrar por convocatoria</label>
          <select {{on "change" this.filtrarPorConvocatoria}}>
            <option value="">Seleccione una convocatoria</option>
            {{#each this.convocatoriasOpciones as |c|}}
              <option value={{c.id}}>{{c.nombre}}</option>
            {{/each}}
          </select>
        </div>
      </div>

      <div class="resultados-consulta">
        {{#if this.buscoAlguna}}
          {{#if this.filas.length}}
            <table class="tabla-elegante">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Nombre</th>
                  <th>Director</th>
                  <th>Presupuesto</th>
                  <th>Estado</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {{#each this.filas as |f|}}
                  <tr>
                    <td>{{f.codigo}}</td>
                    <td>{{f.nombre}}</td>
                    <td>{{f.director}}</td>
                    <td>{{f.presupuesto}}</td>
                    <td>{{f.estado}}</td>
                    <td><LinkTo @route="notas.detalle" @model={{f.id}} class="btn btn-icono btn-secundario">Ver</LinkTo></td>
                  </tr>
                {{/each}}
              </tbody>
            </table>
          {{else}}
            <p class="tabla-vacia">No se encontraron resultados.</p>
          {{/if}}
        {{/if}}
      </div>
    </div>
  </template>
}