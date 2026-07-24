import type { TOC } from '@ember/component/template-only';
import { LinkTo } from '@ember/routing';
import type { NotaConceptual } from '../../models/NotaConceptual';
import Seccion1DatosGenerales from '../../components/seccion1-datos-generales';
import Seccion2Alineamiento from '../../components/seccion2-alineamiento';
import Seccion3DeptosCarreras from '../../components/seccion3-deptos-carreras';
import Seccion4Impactos from '../../components/seccion4-impactos';
import Seccion5Presupuesto from '../../components/seccion5-presupuesto';
import Seccion6Cronograma from '../../components/seccion6-cronograma';
import NotaEstadoSelector from '../../components/nota-estado-selector';
import NotaBotonRegistrar from '../../components/nota-boton-registrar';

interface NotasDetalleSignature {
  Args: {
    model: NotaConceptual | null;
  };
}

<template>
  {{#if @model}}
    <div class="vista-encabezado vista-encabezado-detalle">
      <div>
        <h2 class="vista-titulo">{{@model.codigo}} — {{@model.nombre}}</h2>
      </div>
      <div class="acciones-encabezado">
        <LinkTo @route="notas.index" class="btn btn-secundario">← Volver al
          listado</LinkTo>
        <NotaEstadoSelector @nota={{@model}} />
      </div>
    </div>

    <Seccion1DatosGenerales @nota={{@model}} />
    <Seccion2Alineamiento @nota={{@model}} />
    <Seccion3DeptosCarreras @nota={{@model}} />
    <Seccion4Impactos @nota={{@model}} />
    <Seccion5Presupuesto @nota={{@model}} />
    <Seccion6Cronograma @nota={{@model}} />

    <NotaBotonRegistrar @nota={{@model}} />
  {{else}}
    <p class="tabla-vacia">Nota conceptual no encontrada.</p>
  {{/if}}
</template> satisfies TOC<NotasDetalleSignature>;
