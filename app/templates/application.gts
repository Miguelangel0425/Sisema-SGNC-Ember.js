import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';
import AlertasContenedor from '../components/alertas-contenedor';
import ConfirmacionModal from '../components/confirmacion-modal';
<template>
  {{pageTitle "Sistema de Notas Conceptuales 2026"}}

  <div class="app-layout">
    <aside class="sidebar">
      <div class="sidebar-marca">
        <i class="bi bi-journal-bookmark-fill sidebar-marca-icono"></i>
        <span>SIGNC</span>
      </div>

      <nav class="sidebar-nav">
        <LinkTo @route="dashboard" @activeClass="activo" class="sidebar-link">
          <i class="bi bi-speedometer2 sidebar-link-icono"></i>
          <span>Dashboard</span>
        </LinkTo>
        <LinkTo @route="convocatorias" @activeClass="activo" class="sidebar-link">
          <i class="bi bi-megaphone-fill sidebar-link-icono"></i>
          <span>Convocatorias</span>
        </LinkTo>
        <LinkTo @route="directores" @activeClass="activo" class="sidebar-link">
          <i class="bi bi-person-badge-fill sidebar-link-icono"></i>
          <span>Directores</span>
        </LinkTo>
        <LinkTo @route="notas" @activeClass="activo" class="sidebar-link">
          <i class="bi bi-file-earmark-text-fill sidebar-link-icono"></i>
          <span>Notas Conceptuales</span>
        </LinkTo>
        <LinkTo @route="consultas" @activeClass="activo" class="sidebar-link">
          <i class="bi bi-search sidebar-link-icono"></i>
          <span>Consultas</span>
        </LinkTo>
        <LinkTo @route="reportes" @activeClass="activo" class="sidebar-link">
          <i class="bi bi-bar-chart-line-fill sidebar-link-icono"></i>
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

  <AlertasContenedor />
  <ConfirmacionModal />
</template>
