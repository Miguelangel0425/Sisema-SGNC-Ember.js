import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import type SistemaGestionService from '../services/sistema-gestion';
import type AlertaService from '../services/alerta';
import type ConfirmService from '../services/confirm';
import type { NotaConceptual } from '../models/NotaConceptual';
import { Departamento } from '../models/Departamento';
import { Carrera } from '../models/Carrera';
import { IdGenerator } from '../utils/IdGenerator';
import { SEDES_UNIDADES_ACADEMICAS } from '../data/sedesUnidadesAcademicas.data';

interface Seccion3Args {
  nota: NotaConceptual;
}

export default class Seccion3DeptosCarrerasComponent extends Component<{
  Args: Seccion3Args;
}> {
  @service declare sistemaGestion: SistemaGestionService;
  @service declare alerta: AlertaService;
  @service declare confirm: ConfirmService;

  sedes = SEDES_UNIDADES_ACADEMICAS;

  @tracked private version = 0;

  get soloLectura(): boolean {
    return !this.args.nota.esEditable();
  }

  get departamentos(): Departamento[] {
    void this.version;
    return this.args.nota.departamentosParticipantes;
  }

  get totalDocentes(): number {
    return this.departamentos.reduce(
      (acc, d) => acc + d.nroDocentesPlanificados,
      0,
    );
  }

  get carreras(): Carrera[] {
    void this.version;
    return this.args.nota.carrerasParticipantes;
  }

  get totalEstudiantes(): number {
    return this.carreras.reduce(
      (acc, c) => acc + c.nroEstudiantesPlanificados,
      0,
    );
  }

  private refrescar(): void {
    this.version++;
    this.sistemaGestion.tocarNotas();
  }

  agregarDepartamento = (event: SubmitEvent): void => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const sede = (form.elements.namedItem('sedeDepto') as HTMLSelectElement)
      .value;
    const nombre = (
      form.elements.namedItem('nombreDepto') as HTMLInputElement
    ).value.trim();
    const objetivo = (
      form.elements.namedItem('objetivoDepto') as HTMLInputElement
    ).value.trim();
    const docentes = Number(
      (form.elements.namedItem('docentesDepto') as HTMLInputElement).value,
    );

    const depto = new Departamento(
      IdGenerator.generar('DEPTO'),
      nombre,
      sede,
      objetivo,
      docentes,
    );
    if (!depto.validar()) {
      this.alerta.advertencia(
        'Complete todos los campos del departamento con valores válidos.',
      );
      return;
    }
    this.args.nota.departamentosParticipantes.push(depto);
    form.reset();
    this.refrescar();
  };

  eliminarDepartamento = (depto: Departamento): void => {
    this.confirm.confirmar(
      `¿Eliminar el departamento "${depto.nombre}"?`,
      () => {
        const lista = this.args.nota.departamentosParticipantes;
        lista.splice(lista.indexOf(depto), 1);
        this.refrescar();
      },
    );
  };

  agregarCarrera = (event: SubmitEvent): void => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const sede = (form.elements.namedItem('sedeCarrera') as HTMLSelectElement)
      .value;
    const nombre = (
      form.elements.namedItem('nombreCarrera') as HTMLInputElement
    ).value.trim();
    const objetivo = (
      form.elements.namedItem('objetivoCarrera') as HTMLInputElement
    ).value.trim();
    const estudiantes = Number(
      (form.elements.namedItem('estudiantesCarrera') as HTMLInputElement).value,
    );

    const carrera = new Carrera(
      IdGenerator.generar('CARR'),
      nombre,
      sede,
      objetivo,
      estudiantes,
    );
    if (!carrera.validar()) {
      this.alerta.advertencia(
        'Complete todos los campos de la carrera con valores válidos.',
      );
      return;
    }
    this.args.nota.carrerasParticipantes.push(carrera);
    form.reset();
    this.refrescar();
  };

  eliminarCarrera = (carrera: Carrera): void => {
    this.confirm.confirmar(`¿Eliminar la carrera "${carrera.nombre}"?`, () => {
      const lista = this.args.nota.carrerasParticipantes;
      lista.splice(lista.indexOf(carrera), 1);
      this.refrescar();
    });
  };

  <template>
    <section class="seccion-form card">
      <h3 class="seccion-titulo">3. Departamentos y carreras participantes</h3>

      <div class="subseccion">
        <h4>3.1 Departamentos participantes</h4>
        {{#if this.departamentos.length}}
          <table class="tabla-elegante">
            <thead>
              <tr>
                <th>Sede/Unidad</th>
                <th>Departamento</th>
                <th>Objetivo de la nota</th>
                <th>Nro. docentes</th>
                {{#unless this.soloLectura}}<th>Acciones</th>{{/unless}}
              </tr>
            </thead>
            <tbody>
              {{#each this.departamentos as |d|}}
                <tr>
                  <td>{{d.sedeUnidadAcademica}}</td>
                  <td>{{d.nombre}}</td>
                  <td>{{d.objetivoNota}}</td>
                  <td>{{d.nroDocentesPlanificados}}</td>
                  {{#unless this.soloLectura}}
                    <td><button
                        type="button"
                        class="btn btn-icono btn-peligro-outline"
                        {{on "click" (fn this.eliminarDepartamento d)}}
                      >Eliminar</button></td>
                  {{/unless}}
                </tr>
              {{/each}}
              <tr class="fila-totales">
                <td>TOTALES</td>
                <td></td>
                <td></td>
                <td>{{this.totalDocentes}}</td>
                {{#unless this.soloLectura}}<td></td>{{/unless}}
              </tr>
            </tbody>
          </table>
        {{else}}
          <p class="tabla-vacia">No hay departamentos agregados todavía.</p>
        {{/if}}

        {{#unless this.soloLectura}}
          <form
            class="formulario-inline"
            {{on "submit" this.agregarDepartamento}}
          >
            <select name="sedeDepto">
              <option value="">Seleccione un elemento</option>
              {{#each this.sedes as |s|}}
                <option value={{s}}>{{s}}</option>
              {{/each}}
            </select>
            <input type="text" name="nombreDepto" placeholder="Departamento" />
            <input
              type="text"
              name="objetivoDepto"
              placeholder="Objetivo de la nota"
            />
            <input
              type="number"
              name="docentesDepto"
              placeholder="Nro. docentes"
              min="1"
            />
            <button type="submit" class="btn btn-secundario">+ Agregar</button>
          </form>
        {{/unless}}
      </div>

      <div class="subseccion">
        <h4>3.2 Carreras participantes</h4>
        {{#if this.carreras.length}}
          <table class="tabla-elegante">
            <thead>
              <tr>
                <th>Sede/Unidad</th>
                <th>Carrera</th>
                <th>Objetivo de la nota</th>
                <th>Nro. estudiantes</th>
                {{#unless this.soloLectura}}<th>Acciones</th>{{/unless}}
              </tr>
            </thead>
            <tbody>
              {{#each this.carreras as |c|}}
                <tr>
                  <td>{{c.sedeUnidadAcademica}}</td>
                  <td>{{c.nombre}}</td>
                  <td>{{c.objetivoNota}}</td>
                  <td>{{c.nroEstudiantesPlanificados}}</td>
                  {{#unless this.soloLectura}}
                    <td><button
                        type="button"
                        class="btn btn-icono btn-peligro-outline"
                        {{on "click" (fn this.eliminarCarrera c)}}
                      >Eliminar</button></td>
                  {{/unless}}
                </tr>
              {{/each}}
              <tr class="fila-totales">
                <td>TOTALES</td>
                <td></td>
                <td></td>
                <td>{{this.totalEstudiantes}}</td>
                {{#unless this.soloLectura}}<td></td>{{/unless}}
              </tr>
            </tbody>
          </table>
        {{else}}
          <p class="tabla-vacia">No hay carreras agregadas todavía.</p>
        {{/if}}

        {{#unless this.soloLectura}}
          <form class="formulario-inline" {{on "submit" this.agregarCarrera}}>
            <select name="sedeCarrera">
              <option value="">Seleccione un elemento</option>
              {{#each this.sedes as |s|}}
                <option value={{s}}>{{s}}</option>
              {{/each}}
            </select>
            <input type="text" name="nombreCarrera" placeholder="Carrera" />
            <input
              type="text"
              name="objetivoCarrera"
              placeholder="Objetivo de la nota"
            />
            <input
              type="number"
              name="estudiantesCarrera"
              placeholder="Nro. estudiantes"
              min="1"
            />
            <button type="submit" class="btn btn-secundario">+ Agregar</button>
          </form>
        {{/unless}}
      </div>
    </section>
  </template>
}
