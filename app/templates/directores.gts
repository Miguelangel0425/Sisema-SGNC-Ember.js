import type { TOC } from '@ember/component/template-only';
import { pageTitle } from 'ember-page-title';

interface DirectoresSignature {
  Args: {
    model: unknown;
    controller: unknown;
  };
}

<template>
  {{pageTitle "Directores"}}
  {{outlet}}
</template> satisfies TOC<DirectoresSignature>;
