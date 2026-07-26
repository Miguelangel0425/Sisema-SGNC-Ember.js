import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { Convocatoria } from '../models/Convocatoria';
import { Director } from '../models/Director';
import { NotaConceptual } from '../models/NotaConceptual';
import { EstadoNota } from '../enums/EstadoNota';
import { serializarSistema, restaurarSistema } from '../utils/persistencia';

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

const CLAVE_LOCAL_STORAGE = 'signc-datos-v1';

/** Fuente de verdad en memoria para toda la aplicación (reemplaza el singleton + EventBus original),
 *  con persistencia automática en localStorage tras cada cambio. */
export default class SistemaGestionService extends Service {
  @tracked convocatorias: Convocatoria[] = [];
  @tracked directores: Director[] = [];
  @tracked notasConceptuales: NotaConceptual[] = [];

  private persistir(): void {
    try {
      const json = serializarSistema(this.directores, this.convocatorias, this.notasConceptuales);
      localStorage.setItem(CLAVE_LOCAL_STORAGE, json);
    } catch (err) {
      console.error('No se pudo guardar en localStorage:', err);
    }
  }

  /** Intenta restaurar datos guardados. Devuelve true si había datos y se restauraron. */
  cargarDesdeLocalStorage(): boolean {
    const json = localStorage.getItem(CLAVE_LOCAL_STORAGE);
    if (!json) return false;
    try {
      const { directores, convocatorias, notas } = restaurarSistema(json);
      this.directores = directores;
      this.convocatorias = convocatorias;
      this.notasConceptuales = notas;
      return true;
    } catch (err) {
      console.error('No se pudo restaurar desde localStorage, se usarán datos iniciales:', err);
      return false;
    }
  }

  limpiarLocalStorage(): void {
    localStorage.removeItem(CLAVE_LOCAL_STORAGE);
  }

  registrarConvocatoria(c: Convocatoria): void {
    this.convocatorias = [...this.convocatorias, c];
    this.persistir();
  }

  eliminarConvocatoria(id: string): void {
    this.convocatorias = this.convocatorias.filter((c) => c.id !== id);
    this.persistir();
  }

  registrarDirector(d: Director): void {
    this.directores = [...this.directores, d];
    this.persistir();
  }

  eliminarDirector(id: string): void {
    this.directores = this.directores.filter((d) => d.id !== id);
    this.persistir();
  }

  registrarNota(n: NotaConceptual): void {
    this.notasConceptuales = [...this.notasConceptuales, n];
    this.persistir();
  }

  eliminarNota(id: string): void {
    this.notasConceptuales = this.notasConceptuales.filter((n) => n.id !== id);
    this.persistir();
  }

  /** "Toca" el array para forzar que Ember re-renderice todo lo que dependa de él,
   *  incluidos cambios en objetos anidados (cronograma, presupuesto, etc.) que no son @tracked. */
  tocarNotas(): void {
    this.notasConceptuales = [...this.notasConceptuales];
    this.persistir();
  }

  tocarConvocatorias(): void {
    this.convocatorias = [...this.convocatorias];
    this.persistir();
  }

  tocarDirectores(): void {
    this.directores = [...this.directores];
    this.persistir();
  }

  buscarPorCodigo(codigo: string): NotaConceptual | null {
    return this.notasConceptuales.find((n) => n.codigo === codigo) ?? null;
  }

  existeCodigoNota(codigo: string): boolean {
    return this.notasConceptuales.some((n) => n.codigo === codigo);
  }

  existeConvocatoriaConNombre(nombre: string): boolean {
    return this.convocatorias.some(
      (c) => c.nombre.trim().toLowerCase() === nombre.trim().toLowerCase()
    );
  }

  obtenerEstadisticas(): IEstadisticasDashboard {
    const notas = this.notasConceptuales;
    return {
      numeroConvocatorias: this.convocatorias.length,
      numeroNotas: notas.length,
      numeroDirectores: this.directores.length,
      presupuestoTotal: notas.reduce((acc, n) => acc + n.calcularPresupuestoTotal(), 0),
      notasAprobadas: notas.filter((n) => n.estado === EstadoNota.APROBADA).length,
      notasRechazadas: notas.filter((n) => n.estado === EstadoNota.RECHAZADA).length,
      notasEnRevision: notas.filter((n) => n.estado === EstadoNota.EN_REVISION).length,
      notasRegistradas: notas.filter((n) => n.estado === EstadoNota.REGISTRADA).length,
    };
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