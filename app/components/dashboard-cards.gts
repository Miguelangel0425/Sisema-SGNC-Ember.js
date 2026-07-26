import Component from '@glimmer/component';
import { service } from '@ember/service';
import { FormatUtils } from '../utils/FormatUtils';
import type EstadisticasService from '../services/estadisticas';

interface ITarjeta {
  etiqueta: string;
  valor: string;
  icono: string;
  clase: string;
}

export default class DashboardCardsComponent extends Component {
  @service declare estadisticas: EstadisticasService;

  get tarjetas(): ITarjeta[] {
    const stats = this.estadisticas.obtener();
    return [
      { etiqueta: 'Convocatorias', valor: `${stats.numeroConvocatorias}`, icono: 'bi-megaphone-fill', clase: 'tarjeta-azul' },
      { etiqueta: 'Notas conceptuales', valor: `${stats.numeroNotas}`, icono: 'bi-file-earmark-text-fill', clase: 'tarjeta-morado' },
      { etiqueta: 'Directores', valor: `${stats.numeroDirectores}`, icono: 'bi-person-badge-fill', clase: 'tarjeta-verde' },
      { etiqueta: 'Presupuesto total', valor: FormatUtils.formatearMoneda(stats.presupuestoTotal), icono: 'bi-cash-stack', clase: 'tarjeta-dorado' },
      { etiqueta: 'Notas aprobadas', valor: `${stats.notasAprobadas}`, icono: 'bi-check-circle-fill', clase: 'tarjeta-verde' },
      { etiqueta: 'Notas rechazadas', valor: `${stats.notasRechazadas}`, icono: 'bi-x-circle-fill', clase: 'tarjeta-rojo' },
      { etiqueta: 'Notas en revisión', valor: `${stats.notasEnRevision}`, icono: 'bi-arrow-repeat', clase: 'tarjeta-naranja' },
      { etiqueta: 'Notas registradas', valor: `${stats.notasRegistradas}`, icono: 'bi-inbox-fill', clase: 'tarjeta-azul' },
    ];
  }

  <template>
    <div class="grid-tarjetas">
      {{#each this.tarjetas as |t|}}
        <div class="tarjeta {{t.clase}}">
          <i class="bi {{t.icono}} tarjeta-icono"></i>
          <div class="tarjeta-cuerpo">
            <span class="tarjeta-valor">{{t.valor}}</span>
            <span class="tarjeta-etiqueta">{{t.etiqueta}}</span>
          </div>
        </div>
      {{/each}}
    </div>
  </template>
}