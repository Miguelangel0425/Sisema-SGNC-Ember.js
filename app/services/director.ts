import Service, { service } from '@ember/service';
import { Director } from '../models/Director';
import { IdGenerator } from '../utils/IdGenerator';
import { Validator } from '../validators/Validator';
import type { IResultadoValidacion } from '../validators/FechaValidator';
import type SistemaGestionService from './sistema-gestion';

export default class DirectorService extends Service {
  @service declare sistemaGestion: SistemaGestionService;

  public listar(): Director[] {
    return this.sistemaGestion.directores;
  }

  public obtenerPorId(id: string): Director | null {
    return this.sistemaGestion.directores.find((d) => d.id === id) ?? null;
  }

  public buscarPorNombre(termino: string): Director[] {
    const t = termino.trim().toLowerCase();
    return this.sistemaGestion.directores.filter((d) =>
      d.obtenerNombreCompleto().toLowerCase().includes(t),
    );
  }

  private validarDatos(
    nombres: string,
    apellidos: string,
    correo: string,
    telefono: string,
  ): IResultadoValidacion {
    let v = Validator.validarNombreObligatorio(nombres);
    if (!v.valido) return v;
    v = Validator.validarCampoObligatorio(apellidos, 'Apellidos');
    if (!v.valido) return v;
    v = Validator.validarCorreoObligatorio(correo);
    if (!v.valido) return v;
    v = Validator.validarCorreoValido(correo);
    if (!v.valido) return v;
    v = Validator.validarTelefonoValido(telefono);
    if (!v.valido) return v;
    return { valido: true };
  }

  public crear(
    nombres: string,
    apellidos: string,
    correo: string,
    telefono: string,
    departamento: string,
  ): IResultadoValidacion & { director?: Director } {
    const v = this.validarDatos(nombres, apellidos, correo, telefono);
    if (!v.valido) return v;

    const director = new Director(
      IdGenerator.generar('DIR'),
      nombres,
      apellidos,
      correo,
      telefono,
      departamento,
    );
    this.sistemaGestion.registrarDirector(director);
    return { valido: true, director };
  }

  public editar(
    id: string,
    nombres: string,
    apellidos: string,
    correo: string,
    telefono: string,
    departamento: string,
  ): IResultadoValidacion {
    const director = this.obtenerPorId(id);
    if (!director) return { valido: false, mensaje: 'Director no encontrado.' };

    const v = this.validarDatos(nombres, apellidos, correo, telefono);
    if (!v.valido) return v;

    director.nombres = nombres;
    director.apellidos = apellidos;
    director.correo = correo;
    director.telefono = telefono;
    director.departamento = departamento;
    this.sistemaGestion.tocarDirectores();
    return { valido: true };
  }

  public eliminar(id: string): IResultadoValidacion {
    const enUso = this.sistemaGestion.notasConceptuales.some(
      (n) => n.director.id === id,
    );
    if (enUso) {
      return {
        valido: false,
        mensaje:
          'No se puede eliminar: el director está asignado a una o más notas conceptuales.',
      };
    }
    this.sistemaGestion.eliminarDirector(id);
    return { valido: true };
  }
}

// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:director')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('director') declare altName: DirectorService;`.
declare module '@ember/service' {
  interface Registry {
    director: DirectorService;
  }
}
