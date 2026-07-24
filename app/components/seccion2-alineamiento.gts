import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import type SistemaGestionService from '../services/sistema-gestion';
import type AlertaService from '../services/alerta';
import type CascadaSelectService from '../services/cascada-select';
import type { NotaConceptual } from '../models/NotaConceptual';
import type { IAmbitoPrioritario } from '../models/Alineamiento';
import type { IOpcion } from '../types/ICascada';
import { ODS_LISTA } from '../data/ods.data';
import { CINE_AMPLIO } from '../data/cine.data';
import { PND_OBJETIVOS } from '../data/pnd.data';
import { OE_OBJETIVOS } from '../data/planEstrategico.data';
import { LINEAS_INVESTIGACION } from '../data/lineasInvestigacion.data';
import {
  DOMINIOS_INSTITUCIONALES,
  DOMINIOS_ACADEMICOS,
} from '../data/dominiosAcademicos.data';

interface Seccion2Args {
  nota: NotaConceptual;
}

export default class Seccion2AlineamientoComponent extends Component<{
  Args: Seccion2Args;
}> {
  @service declare sistemaGestion: SistemaGestionService;
  @service declare alerta: AlertaService;
  @service declare cascadaSelect: CascadaSelectService;

  odsLista = ODS_LISTA;
  cineAmplioLista = CINE_AMPLIO;
  pndObjetivos = PND_OBJETIVOS;
  oeObjetivos = OE_OBJETIVOS;
  lineasInvestigacionCatalogo = LINEAS_INVESTIGACION;
  dominiosInstitucionales = DOMINIOS_INSTITUCIONALES;
  dominiosAcademicos = DOMINIOS_ACADEMICOS;

  // --- Estado local de las cascadas: al igual que en el original, estos selects
  //     encadenados no se guardan en el modelo, solo sirven para poblar el siguiente select. ---
  @tracked metasOds: IOpcion[] = [];
  @tracked cineEspecificos: IOpcion[] = [];
  @tracked cineDetallados: IOpcion[] = [];
  @tracked pndPoliticas: IOpcion[] = [];
  @tracked oeEstrategias: IOpcion[] = [];

  get soloLectura(): boolean {
    return !this.args.nota.esEditable();
  }

  get puedeAgregarLinea(): boolean {
    return this.args.nota.alineamiento.lineasInvestigacion.length >= 2;
  }

  // ---- Ámbitos prioritarios ----
  ambitoAplica = (ambito: IAmbitoPrioritario, opcion: 'SI' | 'NO'): boolean => {
    return (opcion === 'SI') === ambito.aplica;
  };

  cambiarAmbito = (ambito: IAmbitoPrioritario, opcion: 'SI' | 'NO'): void => {
    ambito.aplica = opcion === 'SI';
    this.sistemaGestion.tocarNotas();
  };

  // ---- Cascada ODS ----
  cambiarOds = (event: Event): void => {
    const valor = (event.target as HTMLSelectElement).value;
    this.metasOds = this.cascadaSelect.obtenerMetasPorODS(valor);
  };

  // ---- Cascada CINE ----
  cambiarCineAmplio = (event: Event): void => {
    const valor = (event.target as HTMLSelectElement).value;
    this.cineEspecificos =
      this.cascadaSelect.obtenerCineEspecificoPorAmplio(valor);
    this.cineDetallados = [];
  };

  cambiarCineEspecifico = (event: Event): void => {
    const valor = (event.target as HTMLSelectElement).value;
    this.cineDetallados =
      this.cascadaSelect.obtenerCineDetalladoPorEspecifico(valor);
  };

  // ---- Cascada PND ----
  cambiarPndObjetivo = (event: Event): void => {
    const valor = (event.target as HTMLSelectElement).value;
    this.pndPoliticas =
      this.cascadaSelect.obtenerPoliticasPorObjetivoPND(valor);
  };

  // ---- Plan estratégico OE ----
  cambiarOe = (event: Event): void => {
    const valor = (event.target as HTMLSelectElement).value;
    this.oeEstrategias = this.cascadaSelect.obtenerEstrategiasPorOE(valor);
  };

  // ---- Líneas de investigación ----
  agregarLinea = (event: Event): void => {
    const select = event.target as HTMLSelectElement;
    const valor = select.value;
    if (!valor) return;
    try {
      this.args.nota.alineamiento.agregarLineaInvestigacion(valor);
      this.sistemaGestion.tocarNotas();
    } catch (err) {
      this.alerta.advertencia((err as Error).message);
    }
    select.value = '';
  };

  quitarLinea = (linea: string): void => {
    this.args.nota.alineamiento.removerLineaInvestigacion(linea);
    this.sistemaGestion.tocarNotas();
  };

  // ---- Dominios ----
  actualizarDominioInstitucional = (event: Event): void => {
    this.args.nota.alineamiento.dominioInstitucional = (
      event.target as HTMLSelectElement
    ).value;
    this.sistemaGestion.tocarNotas();
  };

  actualizarDominioAcademico = (event: Event): void => {
    this.args.nota.alineamiento.dominioAcademico = (
      event.target as HTMLSelectElement
    ).value;
    this.sistemaGestion.tocarNotas();
  };

  <template>
    <section class="seccion-form card">
      <h3 class="seccion-titulo">2. Alineamiento</h3>

      {{! Ámbitos prioritarios }}
      <div class="campo-formulario">
        <label>Ámbitos prioritarios de actuación (SI/NO)</label>
        <table class="tabla-elegante">
          <tbody>
            {{#each @nota.alineamiento.ambitosPrioritarios as |ambito|}}
              <tr>
                <td>{{ambito.nombre}}</td>
                <td>
                  <label class="radio-item">
                    <input
                      type="radio"
                      name="ambito-{{ambito.nombre}}"
                      checked={{this.ambitoAplica ambito "SI"}}
                      disabled={{this.soloLectura}}
                      {{on "change" (fn this.cambiarAmbito ambito "SI")}}
                    />
                    SI
                  </label>
                  <label class="radio-item">
                    <input
                      type="radio"
                      name="ambito-{{ambito.nombre}}"
                      checked={{this.ambitoAplica ambito "NO"}}
                      disabled={{this.soloLectura}}
                      {{on "change" (fn this.cambiarAmbito ambito "NO")}}
                    />
                    NO
                  </label>
                </td>
              </tr>
            {{/each}}
          </tbody>
        </table>
      </div>

      {{! Cascada ODS }}
      <div class="fila-campos">
        <div class="campo-formulario">
          <label for="selectOds">ODS (Objetivo de Desarrollo Sostenible)</label>
          <select
            id="selectOds"
            disabled={{this.soloLectura}}
            {{on "change" this.cambiarOds}}
          >
            <option value="">Elija un elemento</option>
            {{#each this.odsLista as |o|}}
              <option value={{o.texto}}>{{o.texto}}</option>
            {{/each}}
          </select>
        </div>
        <div class="campo-formulario">
          <label for="selectMetaOds">Meta ODS</label>
          <select id="selectMetaOds" disabled={{this.soloLectura}}>
            {{#if this.metasOds.length}}
              <option value="">Elija un elemento</option>
              {{#each this.metasOds as |m|}}
                <option value={{m.texto}}>{{m.texto}}</option>
              {{/each}}
            {{else}}
              <option value="">Seleccione primero un ODS</option>
            {{/if}}
          </select>
        </div>
      </div>

      {{! Cascada CINE }}
      <div class="fila-campos">
        <div class="campo-formulario">
          <label for="selectCineAmplio">Campo amplio (CINE-UNESCO)</label>
          <select
            id="selectCineAmplio"
            disabled={{this.soloLectura}}
            {{on "change" this.cambiarCineAmplio}}
          >
            <option value="">Elija un elemento</option>
            {{#each this.cineAmplioLista as |c|}}
              <option value={{c.texto}}>{{c.texto}}</option>
            {{/each}}
          </select>
        </div>
        <div class="campo-formulario">
          <label for="selectCineEspecifico">Campo específico</label>
          <select
            id="selectCineEspecifico"
            disabled={{this.soloLectura}}
            {{on "change" this.cambiarCineEspecifico}}
          >
            {{#if this.cineEspecificos.length}}
              <option value="">Elija un elemento</option>
              {{#each this.cineEspecificos as |e|}}
                <option value={{e.texto}}>{{e.texto}}</option>
              {{/each}}
            {{else}}
              <option value="">Seleccione primero un campo amplio</option>
            {{/if}}
          </select>
        </div>
        <div class="campo-formulario">
          <label for="selectCineDetallado">Campo detallado</label>
          <select id="selectCineDetallado" disabled={{this.soloLectura}}>
            {{#if this.cineDetallados.length}}
              <option value="">Elija un elemento</option>
              {{#each this.cineDetallados as |d|}}
                <option value={{d.texto}}>{{d.texto}}</option>
              {{/each}}
            {{else}}
              <option value="">Seleccione primero un campo específico</option>
            {{/if}}
          </select>
        </div>
      </div>

      {{! Cascada PND }}
      <div class="fila-campos">
        <div class="campo-formulario">
          <label for="selectPndObjetivo">Objetivo PND</label>
          <select
            id="selectPndObjetivo"
            disabled={{this.soloLectura}}
            {{on "change" this.cambiarPndObjetivo}}
          >
            <option value="">Elija un elemento</option>
            {{#each this.pndObjetivos as |p|}}
              <option value={{p.texto}}>{{p.texto}}</option>
            {{/each}}
          </select>
        </div>
        <div class="campo-formulario">
          <label for="selectPndPolitica">Política PND</label>
          <select id="selectPndPolitica" disabled={{this.soloLectura}}>
            {{#if this.pndPoliticas.length}}
              <option value="">Elija un elemento</option>
              {{#each this.pndPoliticas as |p|}}
                <option value={{p.texto}}>{{p.texto}}</option>
              {{/each}}
            {{else}}
              <option value="">Seleccione primero un objetivo</option>
            {{/if}}
          </select>
        </div>
      </div>

      {{! Plan estratégico institucional }}
      <div class="fila-campos">
        <div class="campo-formulario">
          <label for="selectOe">Objetivo estratégico institucional (OE)</label>
          <select
            id="selectOe"
            disabled={{this.soloLectura}}
            {{on "change" this.cambiarOe}}
          >
            <option value="">Elija un elemento</option>
            {{#each this.oeObjetivos as |o|}}
              <option value={{o.texto}}>{{o.texto}}</option>
            {{/each}}
          </select>
        </div>
        <div class="campo-formulario">
          <label for="selectEstrategia">Estrategia</label>
          <select id="selectEstrategia" disabled={{this.soloLectura}}>
            {{#if this.oeEstrategias.length}}
              <option value="">Elija un elemento</option>
              {{#each this.oeEstrategias as |e|}}
                <option value={{e.texto}}>{{e.texto}}</option>
              {{/each}}
            {{else}}
              <option value="">Seleccione primero un objetivo estratégico</option>
            {{/if}}
          </select>
        </div>
      </div>

      {{! Líneas de investigación }}
      <div class="campo-formulario">
        <label>Líneas de investigación (máximo 2)</label>
        <div class="chips-lista">
          {{#each @nota.alineamiento.lineasInvestigacion as |linea|}}
            <span class="chip">
              {{linea}}
              {{#unless this.soloLectura}}
                <button
                  type="button"
                  {{on "click" (fn this.quitarLinea linea)}}
                >×</button>
              {{/unless}}
            </span>
          {{/each}}
        </div>
        <select
          disabled={{this.puedeAgregarLinea}}
          {{on "change" this.agregarLinea}}
        >
          <option value="">Elija un elemento</option>
          {{#each this.lineasInvestigacionCatalogo as |linea|}}
            <option value={{linea}}>{{linea}}</option>
          {{/each}}
        </select>
      </div>

      {{! Dominios }}
      <div class="fila-campos">
        <div class="campo-formulario">
          <label for="selectDominioInst">Dominio institucional</label>
          <select
            id="selectDominioInst"
            disabled={{this.soloLectura}}
            {{on "change" this.actualizarDominioInstitucional}}
          >
            <option value="">Seleccione un elemento</option>
            {{#each this.dominiosInstitucionales as |d|}}
              <option value={{d}}>{{d}}</option>
            {{/each}}
          </select>
        </div>
        <div class="campo-formulario">
          <label for="selectDominioAcad">Dominio académico</label>
          <select
            id="selectDominioAcad"
            disabled={{this.soloLectura}}
            {{on "change" this.actualizarDominioAcademico}}
          >
            <option value="">Seleccione un elemento</option>
            {{#each this.dominiosAcademicos as |d|}}
              <option value={{d}}>{{d}}</option>
            {{/each}}
          </select>
        </div>
      </div>
    </section>
  </template>
}
