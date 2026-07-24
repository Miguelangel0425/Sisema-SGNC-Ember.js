import type { TOC } from '@ember/component/template-only';
import ConvocatoriaForm from '../../components/convocatoria-form';

interface ConvocatoriasNuevaSignature {
  Args: Record<string, never>;
}

<template>
  <h2 class="vista-titulo">Nueva convocatoria</h2>
  <ConvocatoriaForm />
</template> satisfies TOC<ConvocatoriasNuevaSignature>;
