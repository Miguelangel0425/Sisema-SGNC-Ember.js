import Service, { service } from '@ember/service';
import { Convocatoria } from '../models/Convocatoria';
import { Director } from '../models/Director';
import { IdGenerator } from '../utils/IdGenerator';
import { DEPARTAMENTOS } from '../data/departamentos.data';
import type SistemaGestionService from './sistema-gestion';

/**
 * Precarga datos base para que el sistema no arranque completamente vacío.
 * Se ejecuta manualmente llamando a `ejecutar()` (lo conectamos al arranque de la app
 * en un paso posterior, cuando construyamos las rutas).
 */
export default class SeedService extends Service {
  @service declare sistemaGestion: SistemaGestionService;

  public ejecutar(): void {
    if (this.sistemaGestion.convocatorias.length === 0) {
      const hoy = new Date();
      const fechaFin = new Date(hoy);
      fechaFin.setMonth(fechaFin.getMonth() + 6);

      const convocatoriaBase = new Convocatoria(
        IdGenerator.generar('CONV'),
        'Convocatoria de Notas Conceptuales 2026',
        hoy,
        fechaFin
      );
      this.sistemaGestion.registrarConvocatoria(convocatoriaBase);
    }

    if (this.sistemaGestion.directores.length === 0) {
      const directoresBase: [string, string, string, string, string][] = [
        ['María', 'Torres Vega', 'mtorres@espe.edu.ec', '0991234567', DEPARTAMENTOS[0] ?? ''],
        ['Carlos', 'Ramírez Ponce', 'cramirez@espe.edu.ec', '0987654321', DEPARTAMENTOS[1] ?? ''],
      ];
      directoresBase.forEach(([nombres, apellidos, correo, telefono, departamento]) => {
        this.sistemaGestion.registrarDirector(
          new Director(IdGenerator.generar('DIR'), nombres, apellidos, correo, telefono, departamento)
        );
      });
    }
  }
}
// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:seed')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('seed') declare altName: SeedService;`.
declare module '@ember/service' {
  interface Registry {
    'seed': SeedService;
  }
}
