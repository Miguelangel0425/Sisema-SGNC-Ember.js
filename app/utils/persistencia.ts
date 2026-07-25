import { Director } from '../models/Director';
import { Convocatoria } from '../models/Convocatoria';
import { NotaConceptual } from '../models/NotaConceptual';
import { Departamento } from '../models/Departamento';
import { Carrera } from '../models/Carrera';
import { ImpactoEsperado } from '../models/ImpactoEsperado';
import { PoblacionBeneficiaria } from '../models/PoblacionBeneficiaria';
import { ItemPresupuesto } from '../models/ItemPresupuesto';
import { EntidadCooperante } from '../models/EntidadCooperante';
import { Actividad } from '../models/Actividad';
import { ODS } from '../models/ODS';
import type { Alineamiento } from '../models/Alineamiento';

// ---------- Director ----------
function serializarDirector(d: Director) {
  return {
    id: d.id,
    nombres: d.nombres,
    apellidos: d.apellidos,
    correo: d.correo,
    telefono: d.telefono,
    departamento: d.departamento,
  };
}

function deserializarDirector(o: ReturnType<typeof serializarDirector>): Director {
  return new Director(o.id, o.nombres, o.apellidos, o.correo, o.telefono, o.departamento);
}

// ---------- Convocatoria ----------
function serializarConvocatoria(c: Convocatoria) {
  return {
    id: c.id,
    nombre: c.nombre,
    fechaInicio: c.fechaInicio.toISOString(),
    fechaFin: c.fechaFin.toISOString(),
    estado: c.estado,
  };
}

function deserializarConvocatoria(o: ReturnType<typeof serializarConvocatoria>): Convocatoria {
  const c = new Convocatoria(o.id, o.nombre, new Date(o.fechaInicio), new Date(o.fechaFin));
  c.restaurarEstado(o.estado);
  return c;
}

// ---------- Actividad / Cronograma ----------
function serializarActividad(a: Actividad) {
  return { id: a.id, nombre: a.nombre, fechaInicio: a.fechaInicio.toISOString(), fechaFin: a.fechaFin.toISOString() };
}

function deserializarActividad(o: ReturnType<typeof serializarActividad>): Actividad {
  return new Actividad(o.id, o.nombre, new Date(o.fechaInicio), new Date(o.fechaFin));
}

// ---------- Presupuesto ----------
function serializarItem(i: ItemPresupuesto) {
  return {
    id: i.id,
    nroItem: i.nroItem,
    descripcionItem: i.descripcionItem,
    nombreBienServicio: i.nombreBienServicio,
    cantidad: i.cantidad,
    valorUnitario: i.valorUnitario,
  };
}

function deserializarItem(o: ReturnType<typeof serializarItem>): ItemPresupuesto {
  return new ItemPresupuesto(o.id, o.nroItem, o.descripcionItem, o.nombreBienServicio, o.cantidad, o.valorUnitario);
}

function serializarEntidad(e: EntidadCooperante) {
  return { id: e.id, nombre: e.nombre, items: e.items.map(serializarItem) };
}

function deserializarEntidad(o: ReturnType<typeof serializarEntidad>): EntidadCooperante {
  const e = new EntidadCooperante(o.id, o.nombre);
  o.items.forEach((i) => e.agregarItem(deserializarItem(i)));
  return e;
}

// ---------- Departamento / Carrera participante ----------
function serializarDeptoParticipante(d: Departamento) {
  return {
    id: d.id,
    nombre: d.nombre,
    sedeUnidadAcademica: d.sedeUnidadAcademica,
    objetivoNota: d.objetivoNota,
    nroDocentesPlanificados: d.nroDocentesPlanificados,
  };
}

function deserializarDeptoParticipante(o: ReturnType<typeof serializarDeptoParticipante>): Departamento {
  return new Departamento(o.id, o.nombre, o.sedeUnidadAcademica, o.objetivoNota, o.nroDocentesPlanificados);
}

function serializarCarreraParticipante(c: Carrera) {
  return {
    id: c.id,
    nombre: c.nombre,
    sedeUnidadAcademica: c.sedeUnidadAcademica,
    objetivoNota: c.objetivoNota,
    nroEstudiantesPlanificados: c.nroEstudiantesPlanificados,
  };
}

function deserializarCarreraParticipante(o: ReturnType<typeof serializarCarreraParticipante>): Carrera {
  return new Carrera(o.id, o.nombre, o.sedeUnidadAcademica, o.objetivoNota, o.nroEstudiantesPlanificados);
}

// ---------- Impactos / Población ----------
function serializarImpacto(i: ImpactoEsperado) {
  return { tipo: i.tipo, descripcion: i.descripcion };
}

function serializarPoblacion(p: PoblacionBeneficiaria) {
  return {
    poblacionReferencia: p.poblacionReferencia,
    poblacionPotencial: p.poblacionPotencial,
    poblacionObjetivo: p.poblacionObjetivo,
  };
}

// ---------- Alineamiento ----------
function serializarAlineamiento(a: Alineamiento) {
  return {
    ambitosPrioritarios: a.ambitosPrioritarios.map((x) => ({ nombre: x.nombre, aplica: x.aplica })),
    ods: a.ods.map((o) => ({ codigo: o.codigo, nombre: o.nombre, metaSeleccionada: o.metaSeleccionada })),
    lineasInvestigacion: a.lineasInvestigacion,
    dominioInstitucional: a.dominioInstitucional,
    dominioAcademico: a.dominioAcademico,
  };
}

function restaurarAlineamiento(o: ReturnType<typeof serializarAlineamiento>, destino: Alineamiento): void {
  o.ambitosPrioritarios.forEach((x) => {
    const ambito = destino.ambitosPrioritarios.find((a) => a.nombre === x.nombre);
    if (ambito) ambito.aplica = x.aplica;
  });
  o.ods.forEach((x) => {
    try {
      destino.agregarODS(new ODS(x.codigo, x.nombre, x.metaSeleccionada));
    } catch {
      // Ya existían 2 ODS; se ignora silenciosamente al restaurar.
    }
  });
  o.lineasInvestigacion.forEach((linea) => {
    try {
      destino.agregarLineaInvestigacion(linea);
    } catch {
      // Ya existían 2 líneas; se ignora silenciosamente al restaurar.
    }
  });
  destino.dominioInstitucional = o.dominioInstitucional;
  destino.dominioAcademico = o.dominioAcademico;
}

// ---------- Nota Conceptual ----------
function serializarNota(n: NotaConceptual) {
  return {
    id: n.id,
    codigo: n.codigo,
    nombre: n.nombre,
    sedeUnidadAcademica: n.sedeUnidadAcademica,
    fechaInicioPlanificada: n.fechaInicioPlanificada.toISOString(),
    fechaFinPlanificada: n.fechaFinPlanificada.toISOString(),
    directorId: n.director.id,
    cobertura: n.cobertura,
    localizacion: n.localizacion,
    sectorBeneficiario: n.sectorBeneficiario,
    alineamiento: serializarAlineamiento(n.alineamiento),
    departamentosParticipantes: n.departamentosParticipantes.map(serializarDeptoParticipante),
    carrerasParticipantes: n.carrerasParticipantes.map(serializarCarreraParticipante),
    impactosEsperados: n.impactosEsperados.map(serializarImpacto),
    poblacionBeneficiaria: serializarPoblacion(n.poblacionBeneficiaria),
    presupuesto: {
      items: n.presupuesto.items.map(serializarItem),
      entidadCooperante: n.presupuesto.entidadCooperante ? serializarEntidad(n.presupuesto.entidadCooperante) : null,
    },
    cronograma: { actividades: n.cronograma.actividades.map(serializarActividad) },
    estado: n.estado,
    convocatoriaId: n.convocatoriaId,
  };
}

function deserializarNota(o: ReturnType<typeof serializarNota>, directores: Director[]): NotaConceptual {
  const director = directores.find((d) => d.id === o.directorId);
  if (!director) {
    throw new Error(`Director no encontrado al restaurar la nota ${o.codigo}.`);
  }

  const n = new NotaConceptual(
    o.id,
    o.codigo,
    o.nombre,
    o.sedeUnidadAcademica,
    director,
    new Date(o.fechaInicioPlanificada),
    new Date(o.fechaFinPlanificada),
    o.convocatoriaId
  );

  n.cobertura = o.cobertura;
  n.localizacion = o.localizacion;
  n.sectorBeneficiario = o.sectorBeneficiario;

  restaurarAlineamiento(o.alineamiento, n.alineamiento);

  o.departamentosParticipantes.forEach((d) => n.departamentosParticipantes.push(deserializarDeptoParticipante(d)));
  o.carrerasParticipantes.forEach((c) => n.carrerasParticipantes.push(deserializarCarreraParticipante(c)));

  o.impactosEsperados.forEach((io) => {
    const impacto = new ImpactoEsperado(io.tipo, io.descripcion);
    n.impactosEsperados.push(impacto);
  });

  n.poblacionBeneficiaria.poblacionReferencia = o.poblacionBeneficiaria.poblacionReferencia;
  n.poblacionBeneficiaria.poblacionPotencial = o.poblacionBeneficiaria.poblacionPotencial;
  n.poblacionBeneficiaria.poblacionObjetivo = o.poblacionBeneficiaria.poblacionObjetivo;

  o.presupuesto.items.forEach((i) => n.presupuesto.agregarItem(deserializarItem(i)));
  if (o.presupuesto.entidadCooperante) {
    n.presupuesto.entidadCooperante = deserializarEntidad(o.presupuesto.entidadCooperante);
  }

  o.cronograma.actividades.forEach((a) => n.cronograma.agregar(deserializarActividad(a)));

  n.cambiarEstado(o.estado);

  return n;
}

// ---------- API pública del módulo ----------
export interface IDatosRestaurados {
  directores: Director[];
  convocatorias: Convocatoria[];
  notas: NotaConceptual[];
}

export function serializarSistema(directores: Director[], convocatorias: Convocatoria[], notas: NotaConceptual[]): string {
  return JSON.stringify({
    version: 1,
    directores: directores.map(serializarDirector),
    convocatorias: convocatorias.map(serializarConvocatoria),
    notas: notas.map(serializarNota),
  });
}

export function restaurarSistema(json: string): IDatosRestaurados {
  const data = JSON.parse(json) as {
    directores: ReturnType<typeof serializarDirector>[];
    convocatorias: ReturnType<typeof serializarConvocatoria>[];
    notas: ReturnType<typeof serializarNota>[];
  };

  const directores = data.directores.map(deserializarDirector);
  const convocatorias = data.convocatorias.map(deserializarConvocatoria);
  const notas = data.notas.map((o) => deserializarNota(o, directores));

  notas.forEach((n) => {
    const conv = convocatorias.find((c) => c.id === n.convocatoriaId);
    conv?.agregarNota(n);
  });

  return { directores, convocatorias, notas };
}