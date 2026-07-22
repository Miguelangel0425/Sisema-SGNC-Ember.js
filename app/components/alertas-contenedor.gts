import Component from '@glimmer/component';
import { service } from '@ember/service';
import type AlertaService from '../services/alerta';

export default class AlertasContenedorComponent extends Component {
  @service declare alerta: AlertaService;

  <template>
    <div id="alertas-contenedor">
      {{#each this.alerta.alertas as |a|}}
        <div class="alerta alerta-{{a.tipo}} {{if a.visible 'alerta-visible'}}">
          <span class="alerta-icono">{{a.icono}}</span>
          <span class="alerta-texto">{{a.mensaje}}</span>
        </div>
      {{/each}}
    </div>
  </template>
}
