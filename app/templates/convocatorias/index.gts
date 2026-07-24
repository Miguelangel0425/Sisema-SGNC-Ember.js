import type { TOC } from '@ember/component/template-only';
import { LinkTo } from '@ember/routing';
import ConvocatoriasTabla from '../../components/convocatorias-tabla';

interface ConvocatoriasIndexSignature {
  Args: Record<string, never>;
}

<template>
  <div class="vista-encabezado">
    <h2 class="vista-titulo">Convocatorias</h2>
    <LinkTo @route="convocatorias.nueva" class="btn btn-primario">+ Nueva
      convocatoria</LinkTo>
  </div>

  <ConvocatoriasTabla />
</template> satisfies TOC<ConvocatoriasIndexSignature>;
