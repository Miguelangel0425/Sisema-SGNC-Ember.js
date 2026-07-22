import type { TOC } from '@ember/component/template-only';
import { pageTitle } from 'ember-page-title';

interface DashboardSignature {
  Args: {
    model: unknown;
    controller: unknown;
  };
}

<template>
  {{pageTitle "Dashboard"}}
  {{outlet}}
</template> satisfies TOC<DashboardSignature>;
