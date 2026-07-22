import type { IPresupuesto } from '../types/IPresupuesto';

export class CalculadoraPresupuesto implements IPresupuesto {
    public calcularSubtotal(cantidad: number, valorUnitario: number): number {
        return cantidad * valorUnitario;
    }

    public calcularTotalGeneral(subtotales: number[]): number {
        return subtotales.reduce((acc, s) => acc + s, 0);
    }
}