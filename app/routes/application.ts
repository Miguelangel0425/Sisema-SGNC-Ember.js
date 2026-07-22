import Route from '@ember/routing/route';
import { service } from '@ember/service';
import type SeedService from '../services/seed';

export default class ApplicationRoute extends Route {
    @service declare seed: SeedService;

    beforeModel() {
        this.seed.ejecutar();
    }
}