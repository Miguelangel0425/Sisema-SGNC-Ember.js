import Component from '@glimmer/component';
import { service } from '@ember/service';
import { on } from '@ember/modifier';
import type NotaConceptualService from '../services/nota-conceptual';
import type AlertaService from '../services/alerta';
import type { NotaConceptual } from '../models/NotaConceptual';
import { EstadoNota, etiquetaEstadoNota } from '../enums/EstadoNota';

interface Args {
  nota: NotaConceptual;
}

interface IOpcionEstado {
  valor: EstadoNota;
  etiqueta: string;
  seleccionado: boolean;
}

export default class NotaEstadoSelectorComponent extends Component<{
  Args: Args;
}> {
  @service declare notaConceptual: NotaConceptualService;
  @service declare alerta: AlertaService;

  get soloLectura(): boolean {
    return !this.args.nota.esEditable();
  }

  get claseEstado(): string {
    return this.args.nota.estado.toLowerCase();
  }

  get etiquetaEstadoActual(): string {
    return etiquetaEstadoNota(this.args.nota.estado);
  }

  get estadosOpciones(): IOpcionEstado[] {
    return Object.values(EstadoNota).map((e) => ({
      valor: e,
      etiqueta: etiquetaEstadoNota(e),
      seleccionado: e === this.args.nota.estado,
    }));
  }

  cambiarEstado = (event: Event): void => {
    const nuevoEstado = (event.target as HTMLSelectElement).value as EstadoNota;
    const resultado = this.notaConceptual.cambiarEstado(
      this.args.nota.id,
      nuevoEstado,
    );
    if (resultado.valido) {
      this.alerta.exito('Estado actualizado correctamente.');
    } else {
      this.alerta.error(resultado.mensaje ?? 'No se pudo cambiar el estado.');
    }
  };

  <template>
    <span
      class="badge badge-{{this.claseEstado}}"
    >{{this.etiquetaEstadoActual}}</span>
    {{#if this.soloLectura}}
      <span class="aviso-solo-lectura">Esta nota no es editable en su estado
        actual.</span>
    {{else}}
      <select class="select-estado" {{on "change" this.cambiarEstado}}>
        {{#each this.estadosOpciones as |op|}}
          <option
            value={{op.valor}}
            selected={{op.seleccionado}}
          >{{op.etiqueta}}</option>
        {{/each}}
      </select>
    {{/if}}
  </template>
}
