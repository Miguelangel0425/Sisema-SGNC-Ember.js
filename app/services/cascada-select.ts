import Service from '@ember/service';
import type { ICascada, IOpcion } from '../types/ICascada';
import { METAS_POR_ODS } from '../data/ods.data';
import {
  CINE_ESPECIFICO_POR_AMPLIO,
  CINE_DETALLADO_POR_ESPECIFICO,
  CINE_DETALLADO_GENERICO,
} from '../data/cine.data';
import { POLITICAS_POR_OBJETIVO_PND } from '../data/pnd.data';
import { OE_ESTRATEGIAS } from '../data/planEstrategico.data';
import { ParserUtils } from '../utils/ParserUtils';

/**
 * Reemplazo directo de las macros VBA CargarMetasODS / CargarCineEspecifico / CargarCineDetallado /
 * CargarPNDPoliticas / CargarOEEstrategias, incluyendo la lógica de sus funciones auxiliares
 * ObtenerNumeroODS / ObtenerNumeroOE / ObtenerNumeroPND. Cada método implementa ICascada<IOpcion>.
 */
export default class CascadaSelectService extends Service {
  /** Equivale a CargarMetasODS + ObtenerNumeroODS. */
  public obtenerMetasPorODS(textoODSSeleccionado: string): IOpcion[] {
    const codigo = ParserUtils.obtenerNumeroODS(textoODSSeleccionado);
    return METAS_POR_ODS[codigo] ?? [];
  }

  /** Equivale a CargarCineEspecifico. */
  public obtenerCineEspecificoPorAmplio(
    textoAmplioSeleccionado: string,
  ): IOpcion[] {
    const codigo = ParserUtils.obtenerCodigoCine(textoAmplioSeleccionado);
    return CINE_ESPECIFICO_POR_AMPLIO[codigo] ?? [];
  }

  /** Equivale a CargarCineDetallado. */
  public obtenerCineDetalladoPorEspecifico(
    textoEspecificoSeleccionado: string,
  ): IOpcion[] {
    const codigo = ParserUtils.obtenerCodigoCine(textoEspecificoSeleccionado);
    return CINE_DETALLADO_POR_ESPECIFICO[codigo] ?? CINE_DETALLADO_GENERICO;
  }

  /** Equivale a CargarPNDPoliticas + ObtenerNumeroPND. */
  public obtenerPoliticasPorObjetivoPND(
    textoObjetivoSeleccionado: string,
  ): IOpcion[] {
    const codigo = ParserUtils.obtenerNumeroPND(textoObjetivoSeleccionado);
    return POLITICAS_POR_OBJETIVO_PND[codigo] ?? [];
  }

  /** Equivale a CargarOEEstrategias + ObtenerNumeroOE (lista única para cualquier OE). */
  public obtenerEstrategiasPorOE(
    textoObjetivoOESeleccionado: string,
  ): IOpcion[] {
    void textoObjetivoOESeleccionado;
    return OE_ESTRATEGIAS;
  }
}

// Verificación estática de contrato ICascada (composición de las 5 cascadas del Anexo 1).
export const _contratosCascada: ICascada[] = [];
// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:cascada-select')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('cascada-select') declare altName: CascadaSelectService;`.
declare module '@ember/service' {
  interface Registry {
    'cascada-select': CascadaSelectService;
  }
}
