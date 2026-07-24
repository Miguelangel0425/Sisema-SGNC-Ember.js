import Component from '@glimmer/component';
import { service } from '@ember/service';
import { on } from '@ember/modifier';
import type NotaConceptualService from '../services/nota-conceptual';
import type AlertaService from '../services/alerta';
import type { NotaConceptual } from '../models/NotaConceptual';

interface Args {
  nota: NotaConceptual;
}

export default class NotaBotonRegistrarComponent extends Component<{
  Args: Args;
}> {
  @service declare notaConceptual: NotaConceptualService;
  @service declare alerta: AlertaService;

  get mostrar(): boolean {
    return this.args.nota.esEditable();
  }

  registrar = (): void => {
    const resultado = this.notaConceptual.validarFormularioCompleto(
      this.args.nota,
    );
    if (!resultado.valido) {
      this.alerta.error(
        resultado.mensaje ??
          'El formulario tiene datos incompletos o inválidos.',
      );
      return;
    }
    this.alerta.exito(
      `Nota conceptual ${this.args.nota.codigo} registrada correctamente con todos sus datos.`,
    );
  };

  <template>
    {{#if this.mostrar}}
      <div class="card acciones-registro">
        <button
          type="button"
          class="btn btn-primario btn-registrar"
          {{on "click" this.registrar}}
        >✔ Registrar nota conceptual</button>
      </div>
    {{/if}}
  </template>
}
