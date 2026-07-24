import Route from '@ember/routing/route';
import { service } from '@ember/service';
import type NotaConceptualService from '../../services/nota-conceptual';
import type { NotaConceptual } from '../../models/NotaConceptual';

interface IParamsDetalle {
    nota_id: string;
}

export default class NotasDetalleRoute extends Route {
    @service declare notaConceptual: NotaConceptualService;

    model(params: Record<string, unknown>): NotaConceptual | null {
        const { nota_id } = params as unknown as IParamsDetalle;
        return this.notaConceptual.obtenerPorId(nota_id);
    }
}