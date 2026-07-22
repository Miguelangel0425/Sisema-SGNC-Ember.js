import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ConfirmService extends Service {
  @tracked abierto = false;
  @tracked mensaje = '';
  @tracked tituloBoton = 'Eliminar';
  private accionConfirmar: (() => void) | null = null;

  confirmar(mensaje: string, alConfirmar: () => void, tituloBoton = 'Eliminar'): void {
    this.mensaje = mensaje;
    this.tituloBoton = tituloBoton;
    this.accionConfirmar = alConfirmar;
    this.abierto = true;
  }

  aceptar = (): void => {
    this.abierto = false;
    this.accionConfirmar?.();
    this.accionConfirmar = null;
  };

  cancelar = (): void => {
    this.abierto = false;
    this.accionConfirmar = null;
  };
}


// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:confirm')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('confirm') declare altName: ConfirmService;`.
declare module '@ember/service' {
  interface Registry {
    'confirm': ConfirmService;
  }
}
