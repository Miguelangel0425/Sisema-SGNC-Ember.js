import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import type SistemaGestionService from '../services/sistema-gestion';
import type { NotaConceptual } from '../models/NotaConceptual';
import { Cobertura, ETIQUETAS_COBERTURA } from '../enums/Cobertura';
import { SectorBeneficiario, ETIQUETAS_SECTOR_BENEFICIARIO } from '../enums/SectorBeneficiario';
import {
  UBICACION_ECUADOR,
  obtenerCantonesPorProvincia,
  obtenerParroquiasPorCanton,
  type ICantonEc,
  type IParroquiaEc,
} from '../data/ubicacionEcuador.data';

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

  provincias = UBICACION_ECUADOR;

  @tracked provinciaId: number | null = null;
  @tracked cantonId: number | null = null;
  @tracked parroquiaId: number | null = null;

  get soloLectura(): boolean {
    return !this.args.nota.esEditable();
  }

  get cantonesDisponibles(): ICantonEc[] {
    return obtenerCantonesPorProvincia(this.provinciaId);
  }

  get parroquiasDisponibles(): IParroquiaEc[] {
    return obtenerParroquiasPorCanton(this.provinciaId, this.cantonId);
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

  cambiarProvincia = (event: Event): void => {
    const valor = (event.target as HTMLSelectElement).value;
    this.provinciaId = valor ? Number(valor) : null;
    this.cantonId = null;
    this.parroquiaId = null;

    const nombreProvincia = this.provincias.find((p) => p.id === this.provinciaId)?.nombre ?? '';
    this.args.nota.localizacion = {
      ...this.args.nota.localizacion,
      provincia: nombreProvincia,
      canton: '',
      parroquia: '',
    };
    this.sistemaGestion.tocarNotas();
  };

  cambiarCanton = (event: Event): void => {
    const valor = (event.target as HTMLSelectElement).value;
    this.cantonId = valor ? Number(valor) : null;
    this.parroquiaId = null;

    const nombreCanton = this.cantonesDisponibles.find((c) => c.id === this.cantonId)?.nombre ?? '';
    this.args.nota.localizacion = {
      ...this.args.nota.localizacion,
      canton: nombreCanton,
      parroquia: '',
    };
    this.sistemaGestion.tocarNotas();
  };

  cambiarParroquia = (event: Event): void => {
    const valor = (event.target as HTMLSelectElement).value;
    this.parroquiaId = valor ? Number(valor) : null;

    const nombreParroquia = this.parroquiasDisponibles.find((p) => p.id === this.parroquiaId)?.nombre ?? '';
    this.args.nota.localizacion = { ...this.args.nota.localizacion, parroquia: nombreParroquia };
    this.sistemaGestion.tocarNotas();
  };

  actualizarBarrio = (event: Event): void => {
    const valor = (event.target as HTMLInputElement).value;
    this.args.nota.localizacion = { ...this.args.nota.localizacion, barrioComunidad: valor };
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
          <select id="provincia" disabled={{this.soloLectura}} {{on "change" this.cambiarProvincia}}>
            <option value="">Seleccione una provincia</option>
            {{#each this.provincias as |p|}}
              <option value={{p.id}}>{{p.nombre}}</option>
            {{/each}}
          </select>
        </div>
        <div class="campo-formulario">
          <label for="canton">Cantón</label>
          <select id="canton" disabled={{this.soloLectura}} {{on "change" this.cambiarCanton}}>
            {{#if this.cantonesDisponibles.length}}
              <option value="">Seleccione un cantón</option>
              {{#each this.cantonesDisponibles as |c|}}
                <option value={{c.id}}>{{c.nombre}}</option>
              {{/each}}
            {{else}}
              <option value="">Seleccione primero una provincia</option>
            {{/if}}
          </select>
        </div>
        <div class="campo-formulario">
          <label for="parroquia">Parroquia</label>
          <select id="parroquia" disabled={{this.soloLectura}} {{on "change" this.cambiarParroquia}}>
            {{#if this.parroquiasDisponibles.length}}
              <option value="">Seleccione una parroquia</option>
              {{#each this.parroquiasDisponibles as |pq|}}
                <option value={{pq.id}}>{{pq.nombre}}</option>
              {{/each}}
            {{else}}
              <option value="">Seleccione primero un cantón</option>
            {{/if}}
          </select>
        </div>
        <div class="campo-formulario">
          <label for="barrioComunidad">Barrio o comunidad</label>
          <input type="text" id="barrioComunidad" value={{@nota.localizacion.barrioComunidad}} disabled={{this.soloLectura}} {{on "blur" this.actualizarBarrio}} />
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