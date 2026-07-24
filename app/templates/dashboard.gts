import type { TOC } from '@ember/component/template-only';
import { pageTitle } from 'ember-page-title';
import DashboardCards from '../components/dashboard-cards';

interface DashboardSignature {
  Args: {
    model: unknown;
    controller: unknown;
  };
}

<template>
  {{pageTitle "Dashboard"}}

  <div class="vista vista-dashboard">
    <h2 class="vista-titulo">Dashboard institucional</h2>
    <DashboardCards />
  </div>
</template> satisfies TOC<DashboardSignature>;
