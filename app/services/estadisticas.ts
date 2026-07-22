import Service, { service } from '@ember/service';
import type { IEstadisticasDashboard } from './sistema-gestion';
import type SistemaGestionService from './sistema-gestion';

export default class EstadisticasService extends Service {
  @service declare sistemaGestion: SistemaGestionService;

  public obtener(): IEstadisticasDashboard {
    return this.sistemaGestion.obtenerEstadisticas();
  }
}
// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:estadisticas')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('estadisticas') declare altName: EstadisticasService;`.
declare module '@ember/service' {
  interface Registry {
    'estadisticas': EstadisticasService;
  }
}
