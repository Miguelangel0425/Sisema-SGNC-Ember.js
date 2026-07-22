import type { TOC } from '@ember/component/template-only';
import { pageTitle } from 'ember-page-title';

interface ConsultasSignature {
  Args: {
    model: unknown;
    controller: unknown;
  };
}

<template>
  {{pageTitle "Consultas"}}
  {{outlet}}
</template> satisfies TOC<ConsultasSignature>;
