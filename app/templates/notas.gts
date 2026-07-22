import type { TOC } from '@ember/component/template-only';
import { pageTitle } from 'ember-page-title';

interface NotasSignature {
  Args: {
    model: unknown;
    controller: unknown;
  };
}

<template>
  {{pageTitle "Notas"}}
  {{outlet}}
</template> satisfies TOC<NotasSignature>;
