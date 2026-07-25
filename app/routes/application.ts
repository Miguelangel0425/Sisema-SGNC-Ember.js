import Route from '@ember/routing/route';
import { service } from '@ember/service';
import type SeedService from '../services/seed';
import type SistemaGestionService from '../services/sistema-gestion';

export default class ApplicationRoute extends Route {
    @service declare seed: SeedService;
    @service declare sistemaGestion: SistemaGestionService;

    beforeModel() {
        const seRestauraron = this.sistemaGestion.cargarDesdeLocalStorage();
        if (!seRestauraron) {
            this.seed.ejecutar();
        }
    }
}