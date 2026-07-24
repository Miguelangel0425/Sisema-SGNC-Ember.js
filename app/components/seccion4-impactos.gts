import Component from '@glimmer/component';
import { service } from '@ember/service';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import type SistemaGestionService from '../services/sistema-gestion';
import type AlertaService from '../services/alerta';
import type Owner from '@ember/owner';
import type { NotaConceptual } from '../models/NotaConceptual';
import { TipoImpacto, ETIQUETAS_TIPO_IMPACTO } from '../enums/TipoImpacto';
import { ImpactoEsperado } from '../models/ImpactoEsperado';
import { PoblacionValidator } from '../validators/PoblacionValidator';

interface Seccion4Args {
  nota: NotaConceptual;
}

export default class Seccion4ImpactosComponent extends Component<{
  Args: Seccion4Args;
}> {
  @service declare sistemaGestion: SistemaGestionService;
  @service declare alerta: AlertaService;

  constructor(owner: Owner, args: Seccion4Args) {
    super(owner, args);
    if (this.args.nota.impactosEsperados.length === 0) {
      Object.values(TipoImpacto).forEach((tipo) => {
        this.args.nota.impactosEsperados.push(new ImpactoEsperado(tipo));
      });
    }
  }

  get soloLectura(): boolean {
    return !this.args.nota.esEditable();
  }

  etiquetaTipo = (tipo: TipoImpacto): string => ETIQUETAS_TIPO_IMPACTO[tipo];

  descripcionBase = (impacto: ImpactoEsperado): string =>
    impacto.obtenerDescripcionBase();

  actualizarDescripcion = (impacto: ImpactoEsperado, event: Event): void => {
    impacto.descripcion = (event.target as HTMLTextAreaElement).value;
    this.sistemaGestion.tocarNotas();
  };

  actualizarPoblacion = (
    campo: 'poblacionReferencia' | 'poblacionPotencial' | 'poblacionObjetivo',
    event: Event,
  ): void => {
    const valor = Number((event.target as HTMLInputElement).value);
    this.args.nota.poblacionBeneficiaria[campo] = valor;

    const resultado = PoblacionValidator.validarJerarquia(
      this.args.nota.poblacionBeneficiaria,
    );
    if (!resultado.valido) {
      this.alerta.advertencia(
        resultado.mensaje ?? 'Jerarquía de población inválida.',
      );
    }
    this.sistemaGestion.tocarNotas();
  };

  <template>
    <section class="seccion-form card">
      <h3 class="seccion-titulo">4. Impactos esperados</h3>

      <table class="tabla-elegante">
        <thead>
          <tr>
            <th>Tipo de impacto</th>
            <th>Descripción base (Anexo 1)</th>
            <th>Elaboración específica</th>
          </tr>
        </thead>
        <tbody>
          {{#each @nota.impactosEsperados as |impacto|}}
            <tr>
              <td>{{this.etiquetaTipo impacto.tipo}}</td>
              <td class="texto-descripcion-base">{{this.descripcionBase
                  impacto
                }}</td>
              <td>
                <textarea
                  rows="2"
                  disabled={{this.soloLectura}}
                  {{on "blur" (fn this.actualizarDescripcion impacto)}}
                >{{impacto.descripcion}}</textarea>
              </td>
            </tr>
          {{/each}}
        </tbody>
      </table>

      <div class="subseccion">
        <h4>Identificación y caracterización de la población objetivo</h4>
        <div class="fila-campos">
          <div class="campo-formulario">
            <label for="poblacionReferencia">Población de referencia</label>
            <input
              type="number"
              id="poblacionReferencia"
              min="0"
              value={{@nota.poblacionBeneficiaria.poblacionReferencia}}
              disabled={{this.soloLectura}}
              {{on "blur" (fn this.actualizarPoblacion "poblacionReferencia")}}
            />
          </div>
          <div class="campo-formulario">
            <label for="poblacionPotencial">Población potencial</label>
            <input
              type="number"
              id="poblacionPotencial"
              min="0"
              value={{@nota.poblacionBeneficiaria.poblacionPotencial}}
              disabled={{this.soloLectura}}
              {{on "blur" (fn this.actualizarPoblacion "poblacionPotencial")}}
            />
          </div>
          <div class="campo-formulario">
            <label for="poblacionObjetivo">Población objetivo (beneficiario
              directo)</label>
            <input
              type="number"
              id="poblacionObjetivo"
              min="0"
              value={{@nota.poblacionBeneficiaria.poblacionObjetivo}}
              disabled={{this.soloLectura}}
              {{on "blur" (fn this.actualizarPoblacion "poblacionObjetivo")}}
            />
          </div>
        </div>
      </div>
    </section>
  </template>
}
