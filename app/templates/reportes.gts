import type { TOC } from '@ember/component/template-only';
import { pageTitle } from 'ember-page-title';

interface ReportesSignature {
  Args: {
    model: unknown;
    controller: unknown;
  };
}

<template>
  {{pageTitle "Reportes"}}
  {{outlet}}
</template> satisfies TOC<ReportesSignature>;
