import Component from '@glimmer/component';
import { service } from '@ember/service';
import type EstadisticasService from '../services/estadisticas';
import type NotaConceptualService from '../services/nota-conceptual';
import { etiquetaEstadoNota } from '../enums/EstadoNota';
import { FormatUtils } from '../utils/FormatUtils';
import type { NotaConceptual } from '../models/NotaConceptual';

interface IFilaReporte {
  id: string;
  codigo: string;
  nombre: string;
  sede: string;
  presupuesto: string;
  actividades: number;
  estado: string;
}

export default class ReportesPanelComponent extends Component {
  @service declare estadisticas: EstadisticasService;
  @service declare notaConceptual: NotaConceptualService;

  get stats() {
    return this.estadisticas.obtener();
  }

  get presupuestoTotalFormateado(): string {
    return FormatUtils.formatearMoneda(this.stats.presupuestoTotal);
  }

  get filas(): IFilaReporte[] {
    return this.notaConceptual.listar().map((n: NotaConceptual) => ({
      id: n.id,
      codigo: n.codigo,
      nombre: n.nombre,
      sede: n.sedeUnidadAcademica,
      presupuesto: FormatUtils.formatearMoneda(n.calcularPresupuestoTotal()),
      actividades: n.cronograma.actividades.length,
      estado: etiquetaEstadoNota(n.estado),
    }));
  }

  <template>
    <div class="card">
      <h3 class="seccion-titulo">Resumen general</h3>
      <ul class="lista-resumen">
        <li>Convocatorias registradas: <strong>{{this.stats.numeroConvocatorias}}</strong></li>
        <li>Notas conceptuales totales: <strong>{{this.stats.numeroNotas}}</strong></li>
        <li>Directores registrados: <strong>{{this.stats.numeroDirectores}}</strong></li>
        <li>Presupuesto total comprometido: <strong>{{this.presupuestoTotalFormateado}}</strong></li>
        <li>
          Notas aprobadas: <strong>{{this.stats.notasAprobadas}}</strong> ·
          Rechazadas: <strong>{{this.stats.notasRechazadas}}</strong> ·
          En revisión: <strong>{{this.stats.notasEnRevision}}</strong> ·
          Registradas: <strong>{{this.stats.notasRegistradas}}</strong>
        </li>
      </ul>
    </div>

    <div class="card">
      <h3 class="seccion-titulo">Detalle de notas conceptuales</h3>
      {{#if this.filas.length}}
        <table class="tabla-elegante">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Sede</th>
              <th>Presupuesto</th>
              <th>Actividades</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {{#each this.filas as |f|}}
              <tr>
                <td>{{f.codigo}}</td>
                <td>{{f.nombre}}</td>
                <td>{{f.sede}}</td>
                <td>{{f.presupuesto}}</td>
                <td>{{f.actividades}}</td>
                <td>{{f.estado}}</td>
              </tr>
            {{/each}}
          </tbody>
        </table>
      {{else}}
        <p class="tabla-vacia">No hay notas conceptuales registradas para reportar.</p>
      {{/if}}
    </div>
  </template>
}