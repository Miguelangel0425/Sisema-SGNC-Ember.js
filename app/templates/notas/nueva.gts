import type { TOC } from '@ember/component/template-only';
import NotaCrearForm from '../../components/nota-crear-form';

interface NotasNuevaSignature {
  Args: {};
}

<template>
  <h2 class="vista-titulo">Nueva nota conceptual — 1. Datos generales</h2>
  <NotaCrearForm />
</template> satisfies TOC<NotasNuevaSignature>;