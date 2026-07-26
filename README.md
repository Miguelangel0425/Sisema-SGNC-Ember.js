# SISEMA SGNC · Sistema de Gestión de Notas Conceptuales

Aplicación web (Ember.js + TypeScript) para la gestión integral de **Notas Conceptuales** presentadas en el marco de la Convocatoria de Notas Conceptuales, siguiendo la estructura y reglas de negocio del **Anexo 1**: convocatorias, directores de proyecto, formulario de 6 secciones, presupuesto, cronograma, consultas y reportes.

## Tabla de contenido

- [Descripción general](#descripción-general)
- [Funcionalidades principales](#funcionalidades-principales)
- [Patrones de arquitectura usados](#patrones-de-arquitectura-usados)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Modelo de datos](#modelo-de-datos)
- [Rutas de la aplicación](#rutas-de-la-aplicación)
- [Evidencia de uso del Anexo 1](#evidencia-de-uso-del-anexo-1)
- [Requisitos previos](#requisitos-previos)
- [Instalación y ejecución en desarrollo](#instalación-y-ejecución-en-desarrollo)
- [Scripts disponibles](#scripts-disponibles)
- [Calidad de código: lint, formato y tipos](#calidad-de-código-lint-formato-y-tipos)
- [Pruebas](#pruebas)
- [Build de producción](#build-de-producción)
- [Persistencia de datos](#persistencia-de-datos)
- [Despliegue con Docker](#despliegue-con-docker)
- [Stack tecnológico](#stack-tecnológico)
- [Licencia](#licencia)

## Descripción general

SISEMA SGNC permite administrar el ciclo de vida completo de una nota conceptual dentro de una convocatoria institucional:

1. Se crean **convocatorias** con un período de vigencia y un tope presupuestario.
2. Se registran **directores** responsables de los proyectos.
3. Se completa el **formulario de nota conceptual** (6 secciones basadas en el Anexo 1), asociado a una convocatoria y a un director.
4. La nota transita por distintos **estados** (registrada → en revisión → aprobada/rechazada) según reglas de negocio.
5. Se realizan **consultas** y se generan **reportes/estadísticas** sobre el conjunto de notas registradas.

Toda la aplicación corre en el navegador: no depende de un backend, ya que el estado se mantiene en memoria (vía un servicio Ember) y se persiste automáticamente en `localStorage`.

## Funcionalidades principales

- **Dashboard**: tarjetas con estadísticas globales (número de convocatorias, notas, directores, presupuesto total, notas por estado).
- **Convocatorias**: alta, listado y validación de período de vigencia; una convocatoria vencida o cerrada no admite nuevas notas ni modificaciones.
- **Directores**: alta y listado de directores de proyecto.
- **Notas conceptuales**: formulario multi-sección, listado, detalle, cambio de estado y eliminación (solo si el estado lo permite).
- **Consultas**: panel de búsqueda/filtrado sobre convocatorias, directores y notas.
- **Reportes**: panel de reportes y estadísticas agregadas.
- **Persistencia local**: los datos se guardan automáticamente en `localStorage` y se restauran al recargar la página.

## Patrones de arquitectura usados

- **Service Layer**: toda la lógica de negocio vive en `app/services/`, inyectada vía `@service` en componentes y rutas.
- **Fuente de verdad reactiva**: `SistemaGestionService` centraliza el estado (`@tracked`), reemplazando el patrón Singleton + Observer manual de versiones anteriores del proyecto — Ember re-renderiza automáticamente cualquier componente que dependa de datos que cambian.
- **Persistencia por serialización**: `app/utils/persistencia.ts` convierte las clases de dominio a JSON plano y viceversa, para guardarlas en `localStorage` sin perder su comportamiento (validaciones, cálculos) al recargar.
- **Componentes por sección**: cada una de las 6 secciones del Anexo 1 es un componente Glimmer independiente y reutilizable (`seccion1-datos-generales.gts` ... `seccion6-cronograma.gts`).
- **Modelos de dominio ricos**: las entidades (`NotaConceptual`, `Convocatoria`, `Presupuesto`, `Cronograma`, etc.) encapsulan sus propias reglas de negocio (p. ej. `esEditable()`, `puedeEliminarse()`, `calcularPresupuestoTotal()`) en lugar de dejarlas dispersas en la UI.
- **Validadores desacoplados**: `app/validators/` contiene validadores independientes (fechas, presupuesto, población beneficiaria, reglas de negocio) reutilizables desde distintos formularios.
- **Catálogos como datos estáticos**: `app/data/` centraliza los catálogos oficiales (ODS, PND, CINE-UNESCO, sedes/unidades académicas, departamentos, carreras, líneas de investigación, ubicación de Ecuador) usados en los selects en cascada.

## Estructura del proyecto

```
app/
├── components/        # Componentes Glimmer (.gts): formularios, tablas, secciones del Anexo 1, dashboard
├── controllers/
├── data/               # Catálogos estáticos (ODS, PND, CINE, sedes, departamentos, carreras, ubicación)
├── enums/              # Estados y catálogos de dominio (EstadoNota, EstadoConvocatoria, Cobertura, etc.)
├── helpers/
├── models/             # Clases de dominio (NotaConceptual, Convocatoria, Director, Presupuesto, Cronograma, ...)
├── routes/             # Rutas de Ember (dashboard, convocatorias, directores, notas, consultas, reportes)
├── services/           # Lógica de negocio y estado de la aplicación
├── styles/             # Estilos de la aplicación
├── templates/
├── types/              # Interfaces TypeScript (INota, etc.)
├── utils/              # Utilidades: generación de IDs, formateo, parsing, persistencia
├── validators/         # Validadores de reglas de negocio
├── app.ts              # Punto de entrada de la aplicación
└── router.ts            # Definición de rutas
config/                 # Configuración de Ember (entorno, features opcionales, targets)
public/                 # Archivos estáticos servidos tal cual (css, robots.txt)
tests/                  # Pruebas unitarias e de integración (QUnit)
Dockerfile              # Build multi-etapa (Node → Nginx)
nginx.conf              # Configuración de Nginx para servir el build estático
```

## Modelo de datos

Las clases de dominio en `app/models/` representan las entidades principales:

| Clase | Responsabilidad |
|---|---|
| `Convocatoria` | Período de vigencia, tope presupuestario y estado (abierta/cerrada/vencida) de una convocatoria |
| `Director` | Datos del director responsable de un proyecto |
| `NotaConceptual` | Entidad central del formulario; agrupa todas las secciones del Anexo 1 y expone reglas de negocio (`esEditable`, `puedeEliminarse`, `validarFechasDentroDeConvocatoria`, `calcularPresupuestoTotal`) |
| `Alineamiento` | Alineación estratégica: ODS, PND, plan estratégico institucional, líneas de investigación |
| `Departamento` / `Carrera` | Unidades académicas participantes en la nota |
| `ImpactoEsperado` | Impactos esperados del proyecto por tipo |
| `PoblacionBeneficiaria` | Sector y cobertura de la población beneficiaria |
| `Presupuesto` / `ItemPresupuesto` / `CalculadoraPresupuesto` | Presupuesto del proyecto y cálculo de totales |
| `EntidadCooperante` | Entidades externas que cooperan con el proyecto |
| `Cronograma` / `Actividad` | Cronograma de actividades planificadas |
| `GAD` | Gobierno Autónomo Descentralizado relacionado, cuando aplica |

Los **enums** (`app/enums/`) encapsulan los estados válidos y las reglas asociadas a cada transición, por ejemplo:

- `EstadoNota`: `REGISTRADA`, `EN_REVISION`, `APROBADA`, `RECHAZADA` — solo `REGISTRADA` y `EN_REVISION` son editables o eliminables.
- `EstadoConvocatoria`: `ABIERTA`, `CERRADA`, `VENCIDA` — solo una convocatoria `ABIERTA` admite nuevas notas o modificaciones.

## Rutas de la aplicación

| Ruta | Descripción |
|---|---|
| `/` | Página de inicio |
| `/dashboard` | Estadísticas globales del sistema |
| `/convocatorias` | Listado de convocatorias |
| `/convocatorias/nueva` | Formulario de registro de convocatoria |
| `/directores` | Listado de directores |
| `/directores/nuevo` | Formulario de registro de director |
| `/notas` | Listado de notas conceptuales |
| `/notas/nueva` | Formulario de registro de nota conceptual (6 secciones) |
| `/notas/:nota_id` | Detalle de una nota conceptual |
| `/consultas` | Panel de consultas y filtros |
| `/reportes` | Panel de reportes y estadísticas |

## Evidencia de uso del Anexo 1

El modelo de datos (`app/models/NotaConceptual.ts` y sus clases relacionadas) y las 6 secciones del formulario mapean 1:1 los campos y reglas del Anexo 1 de la Convocatoria de Notas Conceptuales 2026, incluyendo la numeración exacta de secciones, los límites de selección (máx. 2 ODS, máx. 2 líneas de investigación), el tope presupuestario institucional (USD 20,000), y los catálogos oficiales referenciados en el documento (sedes/unidades académicas, departamentos, ODS, PND, CINE-UNESCO).

Las 6 secciones del formulario, implementadas como componentes independientes:

1. **Datos generales** (`seccion1-datos-generales.gts`)
2. **Alineamiento estratégico** (`seccion2-alineamiento.gts`)
3. **Departamentos y carreras participantes** (`seccion3-deptos-carreras.gts`)
4. **Impactos esperados** (`seccion4-impactos.gts`)
5. **Presupuesto** (`seccion5-presupuesto.gts`)
6. **Cronograma** (`seccion6-cronograma.gts`)

## Requisitos previos

- Node.js 20+
- npm 10+
- **Windows**: activar el "Modo de desarrollador" (Configuración → Privacidad y seguridad → Para desarrolladores), requerido por Ember CLI/Vite para crear symlinks durante el desarrollo y el build.

## Instalación y ejecución en desarrollo

```bash
npm install
npm start
```

La aplicación queda disponible en `http://localhost:4200`.

## Scripts disponibles

| Script | Descripción |
|---|---|
| `npm start` | Levanta el servidor de desarrollo (Vite) con recarga en caliente |
| `npm run build` | Genera el build de producción en `dist/` |
| `npm test` | Compila en modo desarrollo y ejecuta la suite de pruebas con Ember CLI |
| `npm run lint` | Ejecuta todos los linters (JS/TS, plantillas `.hbs`, CSS) en modo solo verificación |
| `npm run lint:fix` | Corrige automáticamente lo que sea posible y aplica formato con Prettier |
| `npm run format` | Formatea todo el proyecto con Prettier |

## Calidad de código: lint, formato y tipos

El proyecto usa un conjunto de herramientas para mantener consistencia y detectar errores:

- **ESLint** (`eslint.config.mjs`) para JavaScript/TypeScript, incluyendo reglas específicas de Ember, QUnit y Warp Drive.
- **ember-template-lint** para las plantillas `.hbs`/`.gts`.
- **Stylelint** (`.stylelintrc.mjs`) para los estilos CSS.
- **Prettier** (`.prettierrc.mjs`), incluyendo soporte para *template tags* de Ember.
- **Glint / ember-tsc** para verificación de tipos TypeScript integrada con las plantillas de Ember.

Comandos individuales relevantes:

```bash
npm run lint:js       # Solo ESLint
npm run lint:hbs      # Solo plantillas
npm run lint:css      # Solo estilos
npm run lint:format   # Solo verificación de formato (sin escribir)
npm run lint:types    # Solo verificación de tipos
```

## Pruebas

La suite de pruebas usa **QUnit** junto con `ember-qunit` y `@ember/test-helpers`, e incluye pruebas unitarias y de integración (`tests/unit`, `tests/integration`):

```bash
npm test
```

Este comando compila la aplicación en modo desarrollo y ejecuta las pruebas mediante `ember test` (configurado a través de `testem.cjs`).

## Build de producción

```bash
npm run build
```

Genera los archivos estáticos optimizados en `dist/`.

## Persistencia de datos

La aplicación no requiere backend: `SistemaGestionService` mantiene el estado en memoria (`@tracked`) y lo serializa automáticamente en `localStorage` (clave `signc-datos-v1`) después de cada operación de creación, eliminación o modificación, usando `app/utils/persistencia.ts` para convertir entre las clases de dominio y JSON plano. Al recargar la página, los datos se restauran desde `localStorage` sin perder el comportamiento de las clases (validaciones, cálculos, reglas de negocio).

## Despliegue con Docker

La imagen se construye en dos etapas: compila la app con Node 20 y sirve los archivos estáticos resultantes con Nginx.

### Construir la imagen

```bash
docker build -t m3nm4/signc-ember:latest .
```

### Probar localmente

```bash
docker run --rm -p 80:80 m3nm4/signc-ember:latest
```

La aplicación queda disponible en `http://localhost`.

### Publicar en Docker Hub

```bash
docker login
docker push m3nm4/signc-ember:latest
```

Imagen publicada: [`m3nm4/signc-ember`](https://hub.docker.com/r/m3nm4/signc-ember)

### Ejecutar la imagen publicada

```bash
docker pull m3nm4/signc-ember:latest
docker run -d -p 8080:80 --name signc-ember m3nm4/signc-ember:latest
```

## Stack tecnológico

- **Ember.js** (edición Octane) con **Embroider** como sistema de build
- **Vite** como bundler/dev server
- **TypeScript** en toda la base de código, incluyendo plantillas (`.gts`)
- **Glimmer Components**
- **Warp Drive** (`@warp-drive/*`) como capa de datos
- **QUnit** + **qunit-dom** para pruebas
- **ESLint**, **ember-template-lint**, **Stylelint** y **Prettier** para calidad de código
- **Docker** + **Nginx** para despliegue de producción

## Licencia

Este proyecto se distribuye bajo licencia **MIT**. Ver el archivo [`LICENSE`](./LICENSE) para más detalles.