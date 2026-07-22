import Component from '@glimmer/component';
import { service } from '@ember/service';
import { on } from '@ember/modifier';
import type ConfirmService from '../services/confirm';

export default class ConfirmacionModalComponent extends Component {
  @service declare confirm: ConfirmService;

  onOverlayClick = (event: MouseEvent): void => {
    if (event.target === event.currentTarget) {
      this.confirm.cancelar();
    }
  };

  <template>
    {{#if this.confirm.abierto}}
      <div
        class="modal-overlay modal-visible"
        {{on "click" this.onOverlayClick}}
      >
        <div class="modal">
          <div class="modal-header">
            <h3>Confirmar acción</h3>
            <button
              type="button"
              class="modal-cerrar"
              aria-label="Cerrar"
              {{on "click" this.confirm.cancelar}}
            >&times;</button>
          </div>
          <div class="modal-body">
            <p>{{this.confirm.mensaje}}</p>
            <div class="confirmacion-acciones">
              <button
                type="button"
                class="btn btn-secundario"
                {{on "click" this.confirm.cancelar}}
              >Cancelar</button>
              <button
                type="button"
                class="btn btn-peligro"
                {{on "click" this.confirm.aceptar}}
              >{{this.confirm.tituloBoton}}</button>
            </div>
          </div>
        </div>
      </div>
    {{/if}}
  </template>
}
