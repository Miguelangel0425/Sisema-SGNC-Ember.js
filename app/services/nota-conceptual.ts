import Service, { service } from '@ember/service';
import { NotaConceptual } from '../models/NotaConceptual';
import type { Director } from '../models/Director';
import type { Convocatoria } from '../models/Convocatoria';
import type { EstadoNota } from '../enums/EstadoNota';
import { IdGenerator } from '../utils/IdGenerator';
import { Validator } from '../validators/Validator';
import { FechaValidator } from '../validators/FechaValidator';
import type { IResultadoValidacion } from '../validators/FechaValidator';
import { ReglasNegocioValidator } from '../validators/ReglasNegocioValidator';
import type SistemaGestionService from './sistema-gestion';

export default class NotaConceptualService extends Service {
  @service declare sistemaGestion: SistemaGestionService;

  public listar(): NotaConceptual[] {
    return this.sistemaGestion.notasConceptuales;
  }

  public obtenerPorId(id: string): NotaConceptual | null {
    return (
      this.sistemaGestion.notasConceptuales.find((n) => n.id === id) ?? null
    );
  }

  public crear(
    nombre: string,
    sedeUnidadAcademica: string,
    director: Director,
    fechaInicio: Date,
    fechaFin: Date,
    convocatoria: Convocatoria,
  ): IResultadoValidacion & { nota?: NotaConceptual } {
    const vNombre = Validator.validarNombreObligatorio(nombre);
    if (!vNombre.valido) return vNombre;

    const vDirector = ReglasNegocioValidator.validarDebeExistirDirector(
      director?.id ?? null,
    );
    if (!vDirector.valido) return vDirector;

    const vConvAdmite =
      ReglasNegocioValidator.validarConvocatoriaAdmiteNotas(convocatoria);
    if (!vConvAdmite.valido) return vConvAdmite;

    const vFechas = FechaValidator.validarNotaDentroDeConvocatoria(
      fechaInicio,
      fechaFin,
      convocatoria.fechaInicio,
      convocatoria.fechaFin,
    );
    if (!vFechas.valido) return vFechas;

    const secuencia = this.sistemaGestion.notasConceptuales.length + 1;
    const codigo = IdGenerator.generarCodigoNota(secuencia);
    const vCodigo = Validator.validarCodigoUnico(
      codigo,
      this.sistemaGestion.notasConceptuales.map((n) => n.codigo),
    );
    if (!vCodigo.valido) return vCodigo;

    const nota = new NotaConceptual(
      IdGenerator.generar('NOTA'),
      codigo,
      nombre,
      sedeUnidadAcademica,
      director,
      fechaInicio,
      fechaFin,
      convocatoria.id,
    );
    this.sistemaGestion.registrarNota(nota);
    convocatoria.agregarNota(nota);
    this.sistemaGestion.tocarConvocatorias();
    return { valido: true, nota };
  }

  public eliminar(id: string): IResultadoValidacion {
    const nota = this.obtenerPorId(id);
    if (!nota)
      return { valido: false, mensaje: 'Nota conceptual no encontrada.' };

    const vEliminable = ReglasNegocioValidator.validarNotaEsEliminable(nota);
    if (!vEliminable.valido) return vEliminable;

    this.sistemaGestion.eliminarNota(id);
    const convocatoria = this.sistemaGestion.convocatorias.find(
      (c) => c.id === nota.convocatoriaId,
    );
    convocatoria?.removerNota(id);
    this.sistemaGestion.tocarConvocatorias();
    return { valido: true };
  }

  /** "Cambiar el estado actualiza automáticamente todas las tablas" -> se "toca" el array global. */
  public cambiarEstado(
    id: string,
    nuevoEstado: EstadoNota,
  ): IResultadoValidacion {
    const nota = this.obtenerPorId(id);
    if (!nota)
      return { valido: false, mensaje: 'Nota conceptual no encontrada.' };
    nota.cambiarEstado(nuevoEstado);
    this.sistemaGestion.tocarNotas();
    return { valido: true };
  }

  public validarEsEditable(nota: NotaConceptual): IResultadoValidacion {
    return ReglasNegocioValidator.validarNotaEsEditable(nota);
  }

  /**
   * Validación integral usada por el botón "Registrar nota conceptual": recorre las reglas
   * obligatorias de todas las secciones antes de confirmar el registro definitivo de la nota.
   */
  public validarFormularioCompleto(nota: NotaConceptual): IResultadoValidacion {
    if (!nota.alineamiento.validarAlMenosUnAmbito()) {
      return {
        valido: false,
        mensaje:
          'Sección 2 (Alineamiento): seleccione al menos un ámbito prioritario de actuación.',
      };
    }
    if (nota.presupuesto.items.length === 0) {
      return {
        valido: false,
        mensaje:
          'Sección 5 (Presupuesto): debe existir al menos un ítem presupuestario.',
      };
    }
    if (nota.presupuesto.excedeLimite()) {
      return {
        valido: false,
        mensaje:
          'Sección 5 (Presupuesto): el total excede el límite permitido de $20 000.',
      };
    }
    if (!nota.poblacionBeneficiaria.validarJerarquia()) {
      return {
        valido: false,
        mensaje:
          'Sección 4 (Impactos): la jerarquía población objetivo ≤ potencial ≤ referencia no se cumple.',
      };
    }
    if (!nota.cronograma.validarAlMenosUna()) {
      return {
        valido: false,
        mensaje: 'Sección 6 (Cronograma): debe existir al menos una actividad.',
      };
    }
    if (
      !nota.cronograma.estanDentroDeNota(
        nota.fechaInicioPlanificada,
        nota.fechaFinPlanificada,
      )
    ) {
      return {
        valido: false,
        mensaje:
          'Sección 6 (Cronograma): hay actividades fuera del período de ejecución de la nota.',
      };
    }
    return { valido: true };
  }
}
// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:nota-conceptual')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('nota-conceptual') declare altName: NotaConceptualService;`.
declare module '@ember/service' {
  interface Registry {
    'nota-conceptual': NotaConceptualService;
  }
}
