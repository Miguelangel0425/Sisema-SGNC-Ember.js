import Service, { service } from '@ember/service';
import { Convocatoria } from '../models/Convocatoria';
import { IdGenerator } from '../utils/IdGenerator';
import { FechaValidator } from '../validators/FechaValidator';
import { Validator } from '../validators/Validator';
import { ReglasNegocioValidator } from '../validators/ReglasNegocioValidator';
import type { IResultadoValidacion } from '../validators/FechaValidator';
import type SistemaGestionService from './sistema-gestion';

export default class ConvocatoriaService extends Service {
  @service declare sistemaGestion: SistemaGestionService;

  public listar(): Convocatoria[] {
    this.sistemaGestion.convocatorias.forEach((c) => c.marcarVencidaSiCorresponde());
    return this.sistemaGestion.convocatorias;
  }

  public obtenerPorId(id: string): Convocatoria | null {
    return this.sistemaGestion.convocatorias.find((c) => c.id === id) ?? null;
  }

  public crear(
    nombre: string,
    fechaInicio: Date,
    fechaFin: Date
  ): IResultadoValidacion & { convocatoria?: Convocatoria } {
    const vNombre = Validator.validarNombreObligatorio(nombre);
    if (!vNombre.valido) return vNombre;

    const vUnico = Validator.validarNombreConvocatoriaUnico(
      nombre,
      this.sistemaGestion.existeConvocatoriaConNombre(nombre)
    );
    if (!vUnico.valido) return vUnico;

    const vInicio = FechaValidator.validarInicioConvocatoria(fechaInicio);
    if (!vInicio.valido) return vInicio;

    const vRango = FechaValidator.validarRangoConvocatoria(fechaInicio, fechaFin);
    if (!vRango.valido) return vRango;

    const convocatoria = new Convocatoria(IdGenerator.generar('CONV'), nombre, fechaInicio, fechaFin);
    this.sistemaGestion.registrarConvocatoria(convocatoria);
    return { valido: true, convocatoria };
  }

  public editar(id: string, nombre: string, fechaInicio: Date, fechaFin: Date): IResultadoValidacion {
    const convocatoria = this.obtenerPorId(id);
    if (!convocatoria) return { valido: false, mensaje: 'Convocatoria no encontrada.' };

    const vModificable = ReglasNegocioValidator.validarConvocatoriaEsModificable(convocatoria);
    if (!vModificable.valido) return vModificable;

    const vRango = FechaValidator.validarRangoConvocatoria(fechaInicio, fechaFin);
    if (!vRango.valido) return vRango;

    convocatoria.nombre = nombre;
    convocatoria.fechaInicio = fechaInicio;
    convocatoria.fechaFin = fechaFin;
    this.sistemaGestion.tocarConvocatorias();
    return { valido: true };
  }

  public eliminar(id: string): IResultadoValidacion {
    const convocatoria = this.obtenerPorId(id);
    if (!convocatoria) return { valido: false, mensaje: 'Convocatoria no encontrada.' };
    if (convocatoria.notas.length > 0) {
      return { valido: false, mensaje: 'No se puede eliminar: la convocatoria tiene notas conceptuales asociadas.' };
    }
    this.sistemaGestion.eliminarConvocatoria(id);
    return { valido: true };
  }

  public cerrar(id: string): IResultadoValidacion {
    const convocatoria = this.obtenerPorId(id);
    if (!convocatoria) return { valido: false, mensaje: 'Convocatoria no encontrada.' };
    convocatoria.cerrar();
    this.sistemaGestion.tocarConvocatorias();
    return { valido: true };
  }
}
// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:convocatoria')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('convocatoria') declare altName: ConvocatoriaService;`.
declare module '@ember/service' {
  interface Registry {
    'convocatoria': ConvocatoriaService;
  }
}
