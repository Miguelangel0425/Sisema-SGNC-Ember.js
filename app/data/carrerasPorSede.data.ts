// Fuente: ESPE, "Oferta Académica 2024" (PDF institucional oficial)
// https://www.espe.edu.ec/wp-content/uploads/2024/03/oferta-academica-2024-digital.pdf
// Solo se incluyen las 3 sedes académicas civiles con oferta pública verificable.
// Las escuelas de formación militar (ESMIL, ESMA, ESSUNA, etc.) no tienen catálogo
// público equivalente, por lo que ahí el campo "Carrera" se mantiene como texto libre.

export const CARRERAS_POR_SEDE: Record<string, string[]> = {
    "ESPE sede Matriz Sangolquí": [
        "Administración de Empresas",
        "Agropecuaria",
        "Biotecnología",
        "Comercio Exterior",
        "Contabilidad y Auditoría",
        "Economía",
        "Educación Básica",
        "Educación Inicial",
        "Electrónica y Automatización",
        "Ingeniería Civil",
        "Ingeniería Geoespacial",
        "Mecánica",
        "Mecatrónica",
        "Medicina",
        "Mercadotecnia",
        "Pedagogía de la Actividad Física y Deporte",
        "Pedagogía de los Idiomas Nacionales y Extranjeros",
        "Relaciones Internacionales",
        "Software",
        "Tecnologías de la Información",
        "Telecomunicaciones",
        "Turismo",
    ],
    "ESPE sede Latacunga": [
        "Contabilidad y Auditoría",
        "Electromecánica",
        "Electrónica y Automatización",
        "Ingeniería Automotriz",
        "Mecatrónica",
        "Petroquímica",
        "Software",
        "Turismo",
        "Tecnología Superior en Automatización e Instrumentación",
        "Tecnología Superior en Electromecánica",
        "Tecnología Superior en Logística y Transporte",
        "Tecnología Superior en Mecánica Aeronáutica",
        "Tecnología Superior en Mecánica Automotriz",
        "Tecnología Superior en Redes y Telecomunicaciones",
        "Tecnología Superior en Seguridad y Prevención de Riesgos Laborales",
    ],
    "ESPE sede Santo Domingo de Tsáchilas": [
        "Agropecuaria",
        "Biotecnología",
        "Tecnologías de la Información",
    ],
};

/** Devuelve las carreras oficiales de la sede, o [] si la sede no tiene catálogo público
 *  (en ese caso el formulario debe permitir texto libre). */
export function obtenerCarrerasPorSede(sede: string): string[] {
    return CARRERAS_POR_SEDE[sede] ?? [];
}