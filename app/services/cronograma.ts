import Service, { service } from '@ember/service';
import type { NotaConceptual } from '../models/NotaConceptual';
import { Actividad } from '../models/Actividad';
import { IdGenerator } from '../utils/IdGenerator';
import { FechaValidator } from '../validators/FechaValidator';
import type { IResultadoValidacion } from '../validators/FechaValidator';
import { ReglasNegocioValidator } from '../validators/ReglasNegocioValidator';
import type SistemaGestionService from './sistema-gestion';

export default class CronogramaService extends Service {
  @service declare sistemaGestion: SistemaGestionService;

  public agregarActividad(
    nota: NotaConceptual,
    nombre: string,
    fechaInicio: Date,
    fechaFin: Date
  ): IResultadoValidacion {
    const vEditable = ReglasNegocioValidator.validarNotaEsEditable(nota);
    if (!vEditable.valido) return vEditable;

    const vFechas = FechaValidator.validarActividad(
      fechaInicio,
      fechaFin,
      nota.fechaInicioPlanificada,
      nota.fechaFinPlanificada
    );
    if (!vFechas.valido) return vFechas;

    const actividad = new Actividad(IdGenerator.generar('ACT'), nombre, fechaInicio, fechaFin);
    nota.cronograma.agregar(actividad);
    this.sistemaGestion.tocarNotas();
    return { valido: true };
  }

  /** "Eliminar una actividad valida que continúe existiendo al menos una." */
  public eliminarActividad(nota: NotaConceptual, idActividad: string): IResultadoValidacion {
    if (nota.cronograma.actividades.length <= 1) {
      return { valido: false, mensaje: 'Debe existir al menos una actividad en el cronograma.' };
    }
    nota.cronograma.eliminar(idActividad);
    this.sistemaGestion.tocarNotas();
    return { valido: true };
  }

  public ordenarPorFecha(nota: NotaConceptual): void {
    nota.cronograma.ordenarPorFecha();
    this.sistemaGestion.tocarNotas();
  }
}
// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:cronograma')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('cronograma') declare altName: CronogramaService;`.
declare module '@ember/service' {
  interface Registry {
    'cronograma': CronogramaService;
  }
}
