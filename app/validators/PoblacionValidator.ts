import type { IResultadoValidacion } from './FechaValidator';
import type { PoblacionBeneficiaria } from '../models/PoblacionBeneficiaria';

export class PoblacionValidator {
  /** "Población objetivo menor o igual a población referencia" (y jerarquía completa objetivo<=potencial<=referencia). */
  public static validarJerarquia(
    poblacion: PoblacionBeneficiaria,
  ): IResultadoValidacion {
    if (!poblacion.validarJerarquia()) {
      return {
        valido: false,
        mensaje:
          'La población objetivo debe ser menor o igual a la potencial, y esta menor o igual a la de referencia.',
      };
    }
    return { valido: true };
  }
}
