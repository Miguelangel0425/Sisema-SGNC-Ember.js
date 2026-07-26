### Patrones de arquitectura usados

- **Service Layer**: toda la lógica de negocio vive en `app/services/`, inyectada vía `@service` en componentes y rutas.
- **Fuente de verdad reactiva**: `SistemaGestionService` centraliza el estado (`@tracked`), reemplazando el patrón Singleton + Observer manual de versiones anteriores del proyecto — Ember re-renderiza automáticamente cualquier componente que dependa de datos que cambian.
- **Persistencia por serialización**: `app/utils/persistencia.ts` convierte las clases de dominio a JSON plano y viceversa, para guardarlas en `localStorage` sin perder su comportamiento (validaciones, cálculos) al recargar.
- **Componentes por sección**: cada una de las 6 secciones del Anexo 1 es un componente Glimmer independiente y reutilizable (`seccion1-datos-generales.gts` ... `seccion6-cronograma.gts`).

## Evidencia de uso del Anexo 1

El modelo de datos (`app/models/NotaConceptual.ts` y sus clases relacionadas) y las 6 secciones del formulario mapean 1:1 los campos y reglas del Anexo 1 de la Convocatoria de Notas Conceptuales 2026, incluyendo la numeración exacta de secciones, los límites de selección (máx. 2 ODS, máx. 2 líneas de investigación), el tope presupuestario institucional (USD 20,000), y los catálogos oficiales referenciados en el documento (sedes/unidades académicas, departamentos, ODS, PND, CINE-UNESCO).

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

## Build de producción

```bash
npm run build
```

Genera los archivos estáticos optimizados en `dist/`.

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
