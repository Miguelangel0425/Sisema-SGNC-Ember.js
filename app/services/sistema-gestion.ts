import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { Convocatoria } from '../models/Convocatoria';
import { Director } from '../models/Director';
import { NotaConceptual } from '../models/NotaConceptual';
import { EstadoNota } from '../enums/EstadoNota';

export interface IEstadisticasDashboard {
  numeroConvocatorias: number;
  numeroNotas: number;
  numeroDirectores: number;
  presupuestoTotal: number;
  notasAprobadas: number;
  notasRechazadas: number;
  notasEnRevision: number;
  notasRegistradas: number;
}

/** Fuente de verdad en memoria para toda la aplicación (reemplaza el singleton + EventBus original). */
export default class SistemaGestionService extends Service {
  @tracked convocatorias: Convocatoria[] = [];
  @tracked directores: Director[] = [];
  @tracked notasConceptuales: NotaConceptual[] = [];

  registrarConvocatoria(c: Convocatoria): void {
    this.convocatorias = [...this.convocatorias, c];
  }

  eliminarConvocatoria(id: string): void {
    this.convocatorias = this.convocatorias.filter((c) => c.id !== id);
  }

  registrarDirector(d: Director): void {
    this.directores = [...this.directores, d];
  }

  eliminarDirector(id: string): void {
    this.directores = this.directores.filter((d) => d.id !== id);
  }

  registrarNota(n: NotaConceptual): void {
    this.notasConceptuales = [...this.notasConceptuales, n];
  }

  eliminarNota(id: string): void {
    this.notasConceptuales = this.notasConceptuales.filter((n) => n.id !== id);
  }

  buscarPorCodigo(codigo: string): NotaConceptual | null {
    return this.notasConceptuales.find((n) => n.codigo === codigo) ?? null;
  }

  existeCodigoNota(codigo: string): boolean {
    return this.notasConceptuales.some((n) => n.codigo === codigo);
  }

  existeConvocatoriaConNombre(nombre: string): boolean {
    return this.convocatorias.some(
      (c) => c.nombre.trim().toLowerCase() === nombre.trim().toLowerCase(),
    );
  }

  obtenerEstadisticas(): IEstadisticasDashboard {
    const notas = this.notasConceptuales;
    return {
      numeroConvocatorias: this.convocatorias.length,
      numeroNotas: notas.length,
      numeroDirectores: this.directores.length,
      presupuestoTotal: notas.reduce(
        (acc, n) => acc + n.calcularPresupuestoTotal(),
        0,
      ),
      notasAprobadas: notas.filter((n) => n.estado === EstadoNota.APROBADA)
        .length,
      notasRechazadas: notas.filter((n) => n.estado === EstadoNota.RECHAZADA)
        .length,
      notasEnRevision: notas.filter((n) => n.estado === EstadoNota.EN_REVISION)
        .length,
      notasRegistradas: notas.filter((n) => n.estado === EstadoNota.REGISTRADA)
        .length,
    };
  }

  /** "Toca" el array para forzar que Ember re-renderice todo lo que dependa de él,
   *  incluidos cambios en objetos anidados (cronograma, presupuesto, etc.) que no son @tracked. */
  tocarNotas(): void {
    this.notasConceptuales = [...this.notasConceptuales];
  }

  tocarConvocatorias(): void {
    this.convocatorias = [...this.convocatorias];
  }

  tocarDirectores(): void {
    this.directores = [...this.directores];
  }
}

// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:sistema-gestion')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('sistema-gestion') declare altName: SistemaGestionService;`.
declare module '@ember/service' {
  interface Registry {
    'sistema-gestion': SistemaGestionService;
  }
}
