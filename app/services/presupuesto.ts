import Service, { service } from '@ember/service';
import type { NotaConceptual } from '../models/NotaConceptual';
import { ItemPresupuesto } from '../models/ItemPresupuesto';
import { EntidadCooperante } from '../models/EntidadCooperante';
import { IdGenerator } from '../utils/IdGenerator';
import { PresupuestoValidator } from '../validators/PresupuestoValidator';
import { ReglasNegocioValidator } from '../validators/ReglasNegocioValidator';
import type { IResultadoValidacion } from '../validators/FechaValidator';
import type SistemaGestionService from './sistema-gestion';

export default class PresupuestoService extends Service {
  @service declare sistemaGestion: SistemaGestionService;

  public agregarItem(
    nota: NotaConceptual,
    nroItem: string,
    descripcionItem: string,
    nombreBienServicio: string,
    cantidad: number,
    valorUnitario: number
  ): IResultadoValidacion {
    const vEditable = ReglasNegocioValidator.validarPresupuestoEditable(nota);
    if (!vEditable.valido) return vEditable;

    const vCantidad = PresupuestoValidator.validarCantidad(cantidad);
    if (!vCantidad.valido) return vCantidad;

    const vValor = PresupuestoValidator.validarValorUnitario(valorUnitario);
    if (!vValor.valido) return vValor;

    const subtotalNuevo = cantidad * valorUnitario;
    const vLimite = PresupuestoValidator.validarLimiteTotal(nota.presupuesto.calcularTotal() + subtotalNuevo);
    if (!vLimite.valido) return vLimite;

    const item = new ItemPresupuesto(
      IdGenerator.generar('ITEM'),
      nroItem,
      descripcionItem,
      nombreBienServicio,
      cantidad,
      valorUnitario
    );
    nota.presupuesto.agregarItem(item);
    this.sistemaGestion.tocarNotas();
    return { valido: true };
  }

  public eliminarItem(nota: NotaConceptual, idItem: string): IResultadoValidacion {
    const vEditable = ReglasNegocioValidator.validarPresupuestoEditable(nota);
    if (!vEditable.valido) return vEditable;

    nota.presupuesto.eliminarItem(idItem);
    this.sistemaGestion.tocarNotas();
    return { valido: true };
  }

  public asignarEntidadCooperante(nota: NotaConceptual, nombreEntidad: string): EntidadCooperante {
    const entidad = new EntidadCooperante(IdGenerator.generar('ENT'), nombreEntidad);
    nota.presupuesto.entidadCooperante = entidad;
    nota.entidadesCooperantes.push(entidad);
    this.sistemaGestion.tocarNotas();
    return entidad;
  }

  public agregarItemEntidadCooperante(
    entidad: EntidadCooperante,
    detalle: string,
    cantidad: number,
    valorUnitario: number
  ): IResultadoValidacion {
    const vCantidad = PresupuestoValidator.validarCantidad(cantidad);
    if (!vCantidad.valido) return vCantidad;
    const vValor = PresupuestoValidator.validarValorUnitario(valorUnitario);
    if (!vValor.valido) return vValor;

    entidad.agregarItem(
      new ItemPresupuesto(IdGenerator.generar('ITEMENT'), '', detalle, detalle, cantidad, valorUnitario)
    );
    this.sistemaGestion.tocarNotas();
    return { valido: true };
  }

  public validarPresupuestoCompleto(nota: NotaConceptual): IResultadoValidacion {
    return PresupuestoValidator.validarAlMenosUnItem(nota.presupuesto.items.length);
  }
}
// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:presupuesto')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('presupuesto') declare altName: PresupuestoService;`.
declare module '@ember/service' {
  interface Registry {
    'presupuesto': PresupuestoService;
  }
}
