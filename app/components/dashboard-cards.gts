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
      { etiqueta: 'Convocatorias', valor: `${stats.numeroConvocatorias}`, icono: '📢', clase: 'tarjeta-azul' },
      { etiqueta: 'Notas conceptuales', valor: `${stats.numeroNotas}`, icono: '📝', clase: 'tarjeta-morado' },
      { etiqueta: 'Directores', valor: `${stats.numeroDirectores}`, icono: '👤', clase: 'tarjeta-verde' },
      { etiqueta: 'Presupuesto total', valor: FormatUtils.formatearMoneda(stats.presupuestoTotal), icono: '💰', clase: 'tarjeta-dorado' },
      { etiqueta: 'Notas aprobadas', valor: `${stats.notasAprobadas}`, icono: '✅', clase: 'tarjeta-verde' },
      { etiqueta: 'Notas rechazadas', valor: `${stats.notasRechazadas}`, icono: '❌', clase: 'tarjeta-rojo' },
      { etiqueta: 'Notas en revisión', valor: `${stats.notasEnRevision}`, icono: '🔄', clase: 'tarjeta-naranja' },
      { etiqueta: 'Notas registradas', valor: `${stats.notasRegistradas}`, icono: '📥', clase: 'tarjeta-azul' },
    ];
  }

  <template>
    <div class="grid-tarjetas">
      {{#each this.tarjetas as |t|}}
        <div class="tarjeta {{t.clase}}">
          <div class="tarjeta-icono">{{t.icono}}</div>
          <div class="tarjeta-cuerpo">
            <span class="tarjeta-valor">{{t.valor}}</span>
            <span class="tarjeta-etiqueta">{{t.etiqueta}}</span>
          </div>
        </div>
      {{/each}}
    </div>
  </template>
}