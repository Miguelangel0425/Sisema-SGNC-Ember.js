import type { EstadoNota } from "../enums/EstadoNota";

export interface INota{
    codigo: string;
    estado: EstadoNota;
    esEditable(): boolean;
    cambiarEstado(nuevo: EstadoNota): void;
}