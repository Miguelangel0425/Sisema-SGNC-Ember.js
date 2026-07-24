import type { TOC } from '@ember/component/template-only';
import { LinkTo } from '@ember/routing';
import NotasTabla from '../../components/notas-tabla';

interface NotasIndexSignature {
  Args: Record<string, never>;
}

<template>
  <div class="vista-encabezado">
    <h2 class="vista-titulo">Notas Conceptuales</h2>
    <LinkTo @route="notas.nueva" class="btn btn-primario">+ Nueva nota
      conceptual</LinkTo>
  </div>

  <NotasTabla />
</template> satisfies TOC<NotasIndexSignature>;
