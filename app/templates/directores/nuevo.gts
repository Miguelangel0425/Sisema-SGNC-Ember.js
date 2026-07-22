import type { TOC } from '@ember/component/template-only';
import DirectorForm from '../../components/director-form';

interface DirectoresNuevoSignature {
  Args: {};
}

<template>
  <h2 class="vista-titulo">Nuevo director</h2>
  <DirectorForm />
</template> satisfies TOC<DirectoresNuevoSignature>;