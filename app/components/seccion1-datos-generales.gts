import Component from '@glimmer/component';
import { service } from '@ember/service';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import type SistemaGestionService from '../services/sistema-gestion';
import type { NotaConceptual } from '../models/NotaConceptual';
import { Cobertura, ETIQUETAS_COBERTURA } from '../enums/Cobertura';
import { SectorBeneficiario, ETIQUETAS_SECTOR_BENEFICIARIO } from '../enums/SectorBeneficiario';

interface Seccion1Args {
  nota: NotaConceptual;
}

interface IOpcionCheckbox {
  valor: string;
  etiqueta: string;
}

export default class Seccion1DatosGeneralesComponent extends Component<{ Args: Seccion1Args }> {
  @service declare sistemaGestion: SistemaGestionService;

  opcionesCobertura: IOpcionCheckbox[] = Object.values(Cobertura).map((v) => ({
    valor: v,
    etiqueta: ETIQUETAS_COBERTURA[v],
  }));

  opcionesSector: IOpcionCheckbox[] = Object.values(SectorBeneficiario).map((v) => ({
    valor: v,
    etiqueta: ETIQUETAS_SECTOR_BENEFICIARIO[v],
  }));

  get soloLectura(): boolean {
    return !this.args.nota.esEditable();
  }

  coberturaChecked = (valor: string): boolean => {
    return this.args.nota.cobertura.includes(valor as Cobertura);
  };

  sectorChecked = (valor: string): boolean => {
    return this.args.nota.sectorBeneficiario.includes(valor as SectorBeneficiario);
  };

  toggleCobertura = (valor: Cobertura, event: Event): void => {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      if (!this.args.nota.cobertura.includes(valor)) {
        this.args.nota.cobertura = [...this.args.nota.cobertura, valor];
      }
    } else {
      this.args.nota.cobertura = this.args.nota.cobertura.filter((c) => c !== valor);
    }
    this.sistemaGestion.tocarNotas();
  };

  toggleSector = (valor: SectorBeneficiario, event: Event): void => {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      if (!this.args.nota.sectorBeneficiario.includes(valor)) {
        this.args.nota.sectorBeneficiario = [...this.args.nota.sectorBeneficiario, valor];
      }
    } else {
      this.args.nota.sectorBeneficiario = this.args.nota.sectorBeneficiario.filter((s) => s !== valor);
    }
    this.sistemaGestion.tocarNotas();
  };

  actualizarLocalizacion = (
    campo: 'provincia' | 'canton' | 'parroquia' | 'barrioComunidad',
    event: Event
  ): void => {
    const valor = (event.target as HTMLInputElement).value;
    this.args.nota.localizacion = { ...this.args.nota.localizacion, [campo]: valor };
    this.sistemaGestion.tocarNotas();
  };

  <template>
    <section class="seccion-form card">
      <h3 class="seccion-titulo">1. Datos generales</h3>

      <div class="campo-formulario">
        <label>Cobertura</label>
        <div class="grupo-checkbox">
          {{#each this.opcionesCobertura as |op|}}
            <label class="checkbox-item">
              <input
                type="checkbox"
                checked={{this.coberturaChecked op.valor}}
                disabled={{this.soloLectura}}
                {{on "change" (fn this.toggleCobertura op.valor)}}
              />
              {{op.etiqueta}}
            </label>
          {{/each}}
        </div>
      </div>

      <div class="fila-campos">
        <div class="campo-formulario">
          <label for="provincia">Provincia</label>
          <input type="text" id="provincia" value={{@nota.localizacion.provincia}} disabled={{this.soloLectura}} {{on "blur" (fn this.actualizarLocalizacion "provincia")}} />
        </div>
        <div class="campo-formulario">
          <label for="canton">Cantón</label>
          <input type="text" id="canton" value={{@nota.localizacion.canton}} disabled={{this.soloLectura}} {{on "blur" (fn this.actualizarLocalizacion "canton")}} />
        </div>
        <div class="campo-formulario">
          <label for="parroquia">Parroquia</label>
          <input type="text" id="parroquia" value={{@nota.localizacion.parroquia}} disabled={{this.soloLectura}} {{on "blur" (fn this.actualizarLocalizacion "parroquia")}} />
        </div>
        <div class="campo-formulario">
          <label for="barrioComunidad">Barrio o comunidad</label>
          <input type="text" id="barrioComunidad" value={{@nota.localizacion.barrioComunidad}} disabled={{this.soloLectura}} {{on "blur" (fn this.actualizarLocalizacion "barrioComunidad")}} />
        </div>
      </div>

      <div class="campo-formulario">
        <label>Sector de población beneficiaria</label>
        <div class="grupo-checkbox">
          {{#each this.opcionesSector as |op|}}
            <label class="checkbox-item">
              <input
                type="checkbox"
                checked={{this.sectorChecked op.valor}}
                disabled={{this.soloLectura}}
                {{on "change" (fn this.toggleSector op.valor)}}
              />
              {{op.etiqueta}}
            </label>
          {{/each}}
        </div>
      </div>
    </section>
  </template>
}