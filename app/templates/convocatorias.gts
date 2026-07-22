import type { TOC } from '@ember/component/template-only';
import { pageTitle } from 'ember-page-title';

interface ConvocatoriasSignature {
  Args: {
    model: unknown;
    controller: unknown;
  };
}

<template>
  {{pageTitle "Convocatorias"}}
  {{outlet}}
</template> satisfies TOC<ConvocatoriasSignature>;
