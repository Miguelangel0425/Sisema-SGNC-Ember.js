import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { on } from '@ember/modifier';
import { LinkTo } from '@ember/routing';
import type RouterService from '@ember/routing/router-service';
import type NotaConceptualService from '../services/nota-conceptual';
import type ConvocatoriaService from '../services/convocatoria';
import type DirectorService from '../services/director';
import type AlertaService from '../services/alerta';
import { FormatUtils } from '../utils/FormatUtils';
import { SEDES_UNIDADES_ACADEMICAS } from '../data/sedesUnidadesAcademicas.data';

export default class NotaCrearFormComponent extends Component {
  @service declare notaConceptual: NotaConceptualService;
  @service declare convocatoria: ConvocatoriaService;
  @service declare director: DirectorService;
  @service declare alerta: AlertaService;
  @service declare router: RouterService;

  sedes = SEDES_UNIDADES_ACADEMICAS;

  @tracked nombre = '';
  @tracked sede = '';
  @tracked directorId = '';
  @tracked convocatoriaId = '';
  @tracked fechaInicio = '';
  @tracked fechaFin = '';

  get convocatoriasDisponibles() {
    return this.convocatoria.listar().filter((c) => c.admiteNuevasNotas());
  }

  get directoresDisponibles() {
    return this.director.listar();
  }

  get directoresParaSelect(): { id: string; nombreCompleto: string }[] {
    return this.directoresDisponibles.map((d) => ({
      id: d.id,
      nombreCompleto: d.obtenerNombreCompleto(),
    }));
  }

  get sinDatosPrevios(): boolean {
    return (
      this.convocatoriasDisponibles.length === 0 ||
      this.directoresDisponibles.length === 0
    );
  }

  get mensajeSinDatosPrevios(): string {
    return this.convocatoriasDisponibles.length === 0
      ? 'No hay convocatorias abiertas disponibles. Registre una convocatoria antes de crear una nota.'
      : 'No hay directores registrados. Registre un director antes de crear una nota.';
  }

  actualizarNombre = (e: Event): void => {
    this.nombre = (e.target as HTMLInputElement).value;
  };
  actualizarSede = (e: Event): void => {
    this.sede = (e.target as HTMLSelectElement).value;
  };
  actualizarDirector = (e: Event): void => {
    this.directorId = (e.target as HTMLSelectElement).value;
  };
  actualizarConvocatoria = (e: Event): void => {
    this.convocatoriaId = (e.target as HTMLSelectElement).value;
  };
  actualizarFechaInicio = (e: Event): void => {
    this.fechaInicio = (e.target as HTMLInputElement).value;
  };
  actualizarFechaFin = (e: Event): void => {
    this.fechaFin = (e.target as HTMLInputElement).value;
  };

  guardar = (event: SubmitEvent): void => {
    event.preventDefault();

    if (
      !this.sede ||
      !this.directorId ||
      !this.convocatoriaId ||
      !this.fechaInicio ||
      !this.fechaFin
    ) {
      this.alerta.advertencia('Complete todos los campos obligatorios.');
      return;
    }

    const director = this.directoresDisponibles.find(
      (d) => d.id === this.directorId,
    );
    const convocatoria = this.convocatoriasDisponibles.find(
      (c) => c.id === this.convocatoriaId,
    );
    if (!director || !convocatoria) {
      this.alerta.error('Director o convocatoria no válidos.');
      return;
    }

    const resultado = this.notaConceptual.crear(
      this.nombre.trim(),
      this.sede,
      director,
      FormatUtils.desdeFechaInput(this.fechaInicio),
      FormatUtils.desdeFechaInput(this.fechaFin),
      convocatoria,
    );

    if (!resultado.valido || !resultado.nota) {
      this.alerta.error(
        resultado.mensaje ?? 'No se pudo crear la nota conceptual.',
      );
      return;
    }

    this.alerta.exito(
      `Nota conceptual ${resultado.nota.codigo} creada. Continúe completando el resto de secciones.`,
    );
    this.router.transitionTo('notas.detalle', resultado.nota.id);
  };

  <template>
    <div class="card">
      {{#if this.sinDatosPrevios}}
        <p class="tabla-vacia">{{this.mensajeSinDatosPrevios}}</p>
      {{else}}
        <form class="formulario" {{on "submit" this.guardar}}>
          <div class="campo-formulario">
            <label for="nombreNota">Nombre del proyecto
              <span class="obligatorio">*</span></label>
            <input
              type="text"
              id="nombreNota"
              placeholder="Nombre de la nota conceptual"
              value={{this.nombre}}
              {{on "input" this.actualizarNombre}}
            />
          </div>
          <div class="fila-campos">
            <div class="campo-formulario">
              <label for="sedeNota">Sede/Unidad Académica
                <span class="obligatorio">*</span></label>
              <select id="sedeNota" {{on "change" this.actualizarSede}}>
                <option value="">Seleccione un elemento</option>
                {{#each this.sedes as |s|}}
                  <option value={{s}}>{{s}}</option>
                {{/each}}
              </select>
            </div>
            <div class="campo-formulario">
              <label for="directorNota">Director
                <span class="obligatorio">*</span></label>
              <select id="directorNota" {{on "change" this.actualizarDirector}}>
                <option value="">Seleccione un elemento</option>
                {{#each this.directoresParaSelect as |d|}}
                  <option value={{d.id}}>{{d.nombreCompleto}}</option>
                {{/each}}
              </select>
            </div>
          </div>
          <div class="fila-campos">
            <div class="campo-formulario">
              <label for="convocatoriaNota">Convocatoria
                <span class="obligatorio">*</span></label>
              <select
                id="convocatoriaNota"
                {{on "change" this.actualizarConvocatoria}}
              >
                <option value="">Seleccione un elemento</option>
                {{#each this.convocatoriasDisponibles as |c|}}
                  <option value={{c.id}}>{{c.nombre}}</option>
                {{/each}}
              </select>
            </div>
          </div>
          <div class="fila-campos">
            <div class="campo-formulario">
              <label for="inicioNota">Fecha inicio planificada
                <span class="obligatorio">*</span></label>
              <input
                type="date"
                id="inicioNota"
                value={{this.fechaInicio}}
                {{on "input" this.actualizarFechaInicio}}
              />
            </div>
            <div class="campo-formulario">
              <label for="finNota">Fecha fin planificada
                <span class="obligatorio">*</span></label>
              <input
                type="date"
                id="finNota"
                value={{this.fechaFin}}
                {{on "input" this.actualizarFechaFin}}
              />
            </div>
          </div>
          <div class="acciones-formulario">
            <LinkTo
              @route="notas.index"
              class="btn btn-secundario"
            >Cancelar</LinkTo>
            <button type="submit" class="btn btn-primario">Crear y continuar con
              el formulario completo</button>
          </div>
        </form>
      {{/if}}
    </div>
  </template>
}
