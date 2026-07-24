import type { TOC } from '@ember/component/template-only';
import { LinkTo } from '@ember/routing';
import DirectoresTabla from '../../components/directores-tabla';

interface DirectoresIndexSignature {
  Args: Record<string, never>;
}

<template>
  <div class="vista-encabezado">
    <h2 class="vista-titulo">Directores de Nota Conceptual</h2>
    <LinkTo @route="directores.nuevo" class="btn btn-primario">+ Nuevo director</LinkTo>
  </div>

  <DirectoresTabla />
</template> satisfies TOC<DirectoresIndexSignature>;
