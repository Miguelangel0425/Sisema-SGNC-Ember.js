import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import type PresupuestoService from '../services/presupuesto';
import type AlertaService from '../services/alerta';
import type { NotaConceptual } from '../models/NotaConceptual';
import type { ItemPresupuesto } from '../models/ItemPresupuesto';
import type { EntidadCooperante } from '../models/EntidadCooperante';
import { FormatUtils } from '../utils/FormatUtils';

interface Seccion5Args {
  nota: NotaConceptual;
}

export default class Seccion5PresupuestoComponent extends Component<{
  Args: Seccion5Args;
}> {
  @service declare presupuesto: PresupuestoService;
  @service declare alerta: AlertaService;

  @tracked private version = 0;

  get soloLectura(): boolean {
    return !this.args.nota.esEditable();
  }

  private refrescar(): void {
    this.version++;
  }

  get total(): number {
    void this.version;
    return this.args.nota.presupuesto.calcularTotal();
  }

  get totalFormateado(): string {
    return FormatUtils.formatearMoneda(this.total);
  }

  get limiteFormateado(): string {
    return FormatUtils.formatearMoneda(20000);
  }

  get excedeLimite(): boolean {
    return this.total > 20000;
  }

  get items(): ItemPresupuesto[] {
    void this.version;
    return this.args.nota.presupuesto.items;
  }

  formatearMoneda = (valor: number): string =>
    FormatUtils.formatearMoneda(valor);
  subtotal = (item: ItemPresupuesto): string =>
    FormatUtils.formatearMoneda(item.calcularSubtotal());

  eliminarItem = (item: ItemPresupuesto): void => {
    const r = this.presupuesto.eliminarItem(this.args.nota, item.id);
    if (r.valido) {
      this.refrescar();
    } else {
      this.alerta.error(r.mensaje ?? 'No se pudo eliminar el ítem.');
    }
  };

  agregarItem = (event: SubmitEvent): void => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const nroItem = (
      form.elements.namedItem('nroItem') as HTMLInputElement
    ).value.trim();
    const descItem = (
      form.elements.namedItem('descItem') as HTMLInputElement
    ).value.trim();
    const bienServicio = (
      form.elements.namedItem('bienServicio') as HTMLInputElement
    ).value.trim();
    const cantidad = Number(
      (form.elements.namedItem('cantidadItem') as HTMLInputElement).value,
    );
    const valorUnitario = Number(
      (form.elements.namedItem('valorItem') as HTMLInputElement).value,
    );

    const resultado = this.presupuesto.agregarItem(
      this.args.nota,
      nroItem,
      descItem,
      bienServicio,
      cantidad,
      valorUnitario,
    );
    if (!resultado.valido) {
      this.alerta.error(resultado.mensaje ?? 'No se pudo agregar el ítem.');
      return;
    }
    form.reset();
    this.refrescar();
  };

  get entidad(): EntidadCooperante | null {
    void this.version;
    return this.args.nota.presupuesto.entidadCooperante;
  }

  get itemsEntidad(): ItemPresupuesto[] {
    void this.version;
    return this.entidad?.items ?? [];
  }

  get totalAporteEntidad(): string {
    return FormatUtils.formatearMoneda(
      this.entidad?.calcularTotalAporte() ?? 0,
    );
  }

  asignarEntidad = (event: SubmitEvent): void => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const nombre = (
      form.elements.namedItem('nombreEntidad') as HTMLInputElement
    ).value.trim();
    if (!nombre) {
      this.alerta.advertencia('Ingrese el nombre de la entidad cooperante.');
      return;
    }
    this.presupuesto.asignarEntidadCooperante(this.args.nota, nombre);
    form.reset();
    this.refrescar();
  };

  eliminarItemEntidad = (item: ItemPresupuesto): void => {
    this.entidad?.eliminarItem(item.id);
    this.refrescar();
  };

  agregarItemEntidad = (event: SubmitEvent): void => {
    event.preventDefault();
    if (!this.entidad) return;
    const form = event.target as HTMLFormElement;
    const detalle = (
      form.elements.namedItem('detalleEnt') as HTMLInputElement
    ).value.trim();
    const cantidad = Number(
      (form.elements.namedItem('cantidadEnt') as HTMLInputElement).value,
    );
    const valorUnitario = Number(
      (form.elements.namedItem('valorEnt') as HTMLInputElement).value,
    );

    const resultado = this.presupuesto.agregarItemEntidadCooperante(
      this.entidad,
      detalle,
      cantidad,
      valorUnitario,
    );
    if (!resultado.valido) {
      this.alerta.error(resultado.mensaje ?? 'No se pudo agregar el ítem.');
      return;
    }
    form.reset();
    this.refrescar();
  };

  <template>
    <section class="seccion-form card">
      <h3 class="seccion-titulo">5. Financiamiento y presupuesto</h3>

      <div class="badge-total {{if this.excedeLimite 'badge-total-excedido'}}">
        TOTAL:
        {{this.totalFormateado}}
        / Límite:
        {{this.limiteFormateado}}
      </div>

      {{#if this.items.length}}
        <table class="tabla-elegante">
          <thead>
            <tr>
              <th>Nro. ítem</th>
              <th>Descripción</th>
              <th>Bien o servicio</th>
              <th>Cantidad</th>
              <th>V. unitario</th>
              <th>Total</th>
              {{#unless this.soloLectura}}<th>Acciones</th>{{/unless}}
            </tr>
          </thead>
          <tbody>
            {{#each this.items as |item|}}
              <tr>
                <td>{{item.nroItem}}</td>
                <td>{{item.descripcionItem}}</td>
                <td>{{item.nombreBienServicio}}</td>
                <td>{{item.cantidad}}</td>
                <td>{{this.formatearMoneda item.valorUnitario}}</td>
                <td>{{this.subtotal item}}</td>
                {{#unless this.soloLectura}}
                  <td><button
                      type="button"
                      class="btn btn-icono btn-peligro-outline"
                      {{on "click" (fn this.eliminarItem item)}}
                    >Eliminar</button></td>
                {{/unless}}
              </tr>
            {{/each}}
            <tr class="fila-totales">
              <td>TOTAL $</td>
              <td></td><td></td><td></td><td></td>
              <td>{{this.totalFormateado}}</td>
              {{#unless this.soloLectura}}<td></td>{{/unless}}
            </tr>
          </tbody>
        </table>
      {{else}}
        <p class="tabla-vacia">No hay ítems presupuestarios agregados todavía.</p>
      {{/if}}

      {{#unless this.soloLectura}}
        <form class="formulario-inline" {{on "submit" this.agregarItem}}>
          <input
            type="text"
            name="nroItem"
            placeholder="Nro. ítem"
            style="width:80px"
          />
          <input
            type="text"
            name="descItem"
            placeholder="Descripción del ítem"
          />
          <input
            type="text"
            name="bienServicio"
            placeholder="Bien o servicio"
          />
          <input
            type="number"
            name="cantidadItem"
            placeholder="Cantidad"
            min="1"
            style="width:100px"
          />
          <input
            type="number"
            name="valorItem"
            placeholder="V. unitario"
            min="0"
            step="0.01"
            style="width:120px"
          />
          <button type="submit" class="btn btn-secundario">+ Agregar ítem</button>
        </form>
      {{/unless}}

      <div class="subseccion">
        <h4>5.2 Presupuesto de entidad auspiciante / cooperante</h4>

        {{#if this.entidad}}
          <p><strong>Entidad:</strong> {{this.entidad.nombre}}</p>

          {{#if this.itemsEntidad.length}}
            <table class="tabla-elegante">
              <thead>
                <tr>
                  <th>Detalle</th>
                  <th>Cantidad</th>
                  <th>V.U. $</th>
                  <th>V. Total $</th>
                  {{#unless this.soloLectura}}<th>Acciones</th>{{/unless}}
                </tr>
              </thead>
              <tbody>
                {{#each this.itemsEntidad as |item|}}
                  <tr>
                    <td>{{item.descripcionItem}}</td>
                    <td>{{item.cantidad}}</td>
                    <td>{{this.formatearMoneda item.valorUnitario}}</td>
                    <td>{{this.subtotal item}}</td>
                    {{#unless this.soloLectura}}
                      <td><button
                          type="button"
                          class="btn btn-icono btn-peligro-outline"
                          {{on "click" (fn this.eliminarItemEntidad item)}}
                        >Eliminar</button></td>
                    {{/unless}}
                  </tr>
                {{/each}}
                <tr class="fila-totales">
                  <td>Total $</td><td></td><td></td>
                  <td>{{this.totalAporteEntidad}}</td>
                  {{#unless this.soloLectura}}<td></td>{{/unless}}
                </tr>
              </tbody>
            </table>
          {{else}}
            <p class="tabla-vacia">La entidad cooperante no tiene ítems
              registrados.</p>
          {{/if}}

          {{#unless this.soloLectura}}
            <form
              class="formulario-inline"
              {{on "submit" this.agregarItemEntidad}}
            >
              <input
                type="text"
                name="detalleEnt"
                placeholder="Detalle bien/servicio"
              />
              <input
                type="number"
                name="cantidadEnt"
                placeholder="Cantidad"
                min="1"
                style="width:100px"
              />
              <input
                type="number"
                name="valorEnt"
                placeholder="V. unitario"
                min="0"
                step="0.01"
                style="width:120px"
              />
              <button type="submit" class="btn btn-secundario">+ Agregar</button>
            </form>
          {{/unless}}
        {{else}}
          {{#if this.soloLectura}}
            <p class="tabla-vacia">No se registró entidad cooperante.</p>
          {{else}}
            <form class="formulario-inline" {{on "submit" this.asignarEntidad}}>
              <input
                type="text"
                name="nombreEntidad"
                placeholder="Nombre de la entidad cooperante"
              />
              <button type="submit" class="btn btn-secundario">+ Asignar entidad</button>
            </form>
          {{/if}}
        {{/if}}
      </div>
    </section>
  </template>
}
