import type { TOC } from '@ember/component/template-only';
import { pageTitle } from 'ember-page-title';
import ReportesPanel from '../components/reportes-panel';

interface ReportesSignature {
  Args: {
    model: unknown;
    controller: unknown;
  };
}

<template>
  {{pageTitle "Reportes"}}
  <h2 class="vista-titulo">Reportes</h2>
  <ReportesPanel />
</template> satisfies TOC<ReportesSignature>;