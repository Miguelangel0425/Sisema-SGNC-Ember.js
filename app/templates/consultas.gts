import type { TOC } from '@ember/component/template-only';
import { pageTitle } from 'ember-page-title';
import ConsultasPanel from '../components/consultas-panel';

interface ConsultasSignature {
  Args: {
    model: unknown;
    controller: unknown;
  };
}

<template>
  {{pageTitle "Consultas"}}
  <h2 class="vista-titulo">Consultas</h2>
  <ConsultasPanel />
</template> satisfies TOC<ConsultasSignature>;