import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Sistema de Notas Conceptuales 2026"}}

  <div class="app-layout">
    <aside class="sidebar">
      <div class="sidebar-marca">
        <span class="sidebar-marca-icono">📋</span>
        <span>SIGNC</span>
      </div>

      <nav class="sidebar-nav">
        <LinkTo @route="dashboard" @activeClass="activo" class="sidebar-link">
          <span class="sidebar-link-icono">🏠</span>
          <span>Dashboard</span>
        </LinkTo>
        <LinkTo
          @route="convocatorias"
          @activeClass="activo"
          class="sidebar-link"
        >
          <span class="sidebar-link-icono">📢</span>
          <span>Convocatorias</span>
        </LinkTo>
        <LinkTo @route="directores" @activeClass="activo" class="sidebar-link">
          <span class="sidebar-link-icono">👤</span>
          <span>Directores</span>
        </LinkTo>
        <LinkTo @route="notas" @activeClass="activo" class="sidebar-link">
          <span class="sidebar-link-icono">📝</span>
          <span>Notas Conceptuales</span>
        </LinkTo>
        <LinkTo @route="consultas" @activeClass="activo" class="sidebar-link">
          <span class="sidebar-link-icono">🔍</span>
          <span>Consultas</span>
        </LinkTo>
        <LinkTo @route="reportes" @activeClass="activo" class="sidebar-link">
          <span class="sidebar-link-icono">📊</span>
          <span>Reportes</span>
        </LinkTo>
      </nav>
    </aside>

    <div class="app-contenido">
      <main class="app-main">
        {{outlet}}
      </main>
    </div>
  </div>
</template>
