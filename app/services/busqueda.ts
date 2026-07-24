import Service, { service } from '@ember/service';
import type { NotaConceptual } from '../models/NotaConceptual';
import type { EstadoNota } from '../enums/EstadoNota';
import type SistemaGestionService from './sistema-gestion';

export default class BusquedaService extends Service {
  @service declare sistemaGestion: SistemaGestionService;

  public porCodigo(codigo: string): NotaConceptual | null {
    return this.sistemaGestion.buscarPorCodigo(codigo.trim());
  }

  public porDirector(nombreDirector: string): NotaConceptual[] {
    const t = nombreDirector.trim().toLowerCase();
    return this.sistemaGestion.notasConceptuales.filter((n) =>
      n.director.obtenerNombreCompleto().toLowerCase().includes(t),
    );
  }

  public porNombre(nombre: string): NotaConceptual[] {
    const t = nombre.trim().toLowerCase();
    return this.sistemaGestion.notasConceptuales.filter((n) =>
      n.nombre.toLowerCase().includes(t),
    );
  }

  public porEstado(estado: EstadoNota): NotaConceptual[] {
    return this.sistemaGestion.notasConceptuales.filter(
      (n) => n.estado === estado,
    );
  }

  public porConvocatoria(convocatoriaId: string): NotaConceptual[] {
    return this.sistemaGestion.notasConceptuales.filter(
      (n) => n.convocatoriaId === convocatoriaId,
    );
  }
}
// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:busqueda')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('busqueda') declare altName: BusquedaService;`.
declare module '@ember/service' {
  interface Registry {
    busqueda: BusquedaService;
  }
}
