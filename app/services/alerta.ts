import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export type TipoAlerta = 'exito' | 'error' | 'advertencia' | 'info';

export interface IAlerta {
  id: number;
  mensaje: string;
  tipo: TipoAlerta;
  icono: string;
  visible: boolean;
}

const ICONOS: Record<TipoAlerta, string> = {
  exito: '✔',
  error: '✖',
  advertencia: '⚠',
  info: 'ℹ',
};

let contadorAlertas = 0;

export default class AlertaService extends Service {
  @tracked alertas: IAlerta[] = [];

  mostrar(mensaje: string, tipo: TipoAlerta = 'info', duracionMs = 4000): void {
    contadorAlertas += 1;
    const id = contadorAlertas;
    const nueva: IAlerta = { id, mensaje, tipo, icono: ICONOS[tipo], visible: false };
    this.alertas = [...this.alertas, nueva];

    requestAnimationFrame(() => {
      this.alertas = this.alertas.map((a) => (a.id === id ? { ...a, visible: true } : a));
    });

    setTimeout(() => {
      this.alertas = this.alertas.map((a) => (a.id === id ? { ...a, visible: false } : a));
      setTimeout(() => {
        this.alertas = this.alertas.filter((a) => a.id !== id);
      }, 300);
    }, duracionMs);
  }

  exito(mensaje: string): void {
    this.mostrar(mensaje, 'exito');
  }
  error(mensaje: string): void {
    this.mostrar(mensaje, 'error');
  }
  advertencia(mensaje: string): void {
    this.mostrar(mensaje, 'advertencia');
  }
  info(mensaje: string): void {
    this.mostrar(mensaje, 'info');
  }
}

// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:alerta')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('alerta') declare altName: AlertaService;`.
declare module '@ember/service' {
  interface Registry {
    'alerta': AlertaService;
  }
}
