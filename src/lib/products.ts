// src/lib/products.ts
export type Product = {
  id: string;
  category: "Programas" | "Consultas" | "Terapias" | "Productos"; // 👈 añadimos "Productos"
  name: string;
  price: number;      // MXN (usa 0 si es “Cotización”)
  unit?: string;      // "mes", "sesión", "kit", "pieza", etc.
  desc?: string;
  badge?: string;     // “En línea”, “Híbrido”, “Cotiza”, etc.
};

export const PRODUCTS: Product[] = [
  // ===== Programas (paquetes) =====
  {
    id: "online",
    category: "Programas",
    name: "EN LÍNEA – Consulta Integrativa a Distancia",
    price: 1200, unit: "mes", badge: "100% en línea",
    desc: "Evaluación médica y psicológica, plan personalizado, seguimiento 24/7 y ajustes semanales."
  },
  {
    id: "integral",
    category: "Programas",
    name: "INTEGRAL – Medicina y Psicología en Sinergia",
    price: 1500, unit: "mes", badge: "Presencial/Híbrido",
    desc: "Médico + psicología, plan de vitaminas/herbolarios, seguimiento por chat."
  },
  {
    id: "premium",
    category: "Programas",
    name: "AVANZADO – Terapia Integrativa Premium",
    price: 2800, unit: "mes", badge: "Mixto",
    desc: "Equipo multidisciplinario, acupuntura semanal, psicoterapia 1–2/semana, plan con CBD (aparte)."
  },
  {
    id: "onco",
    category: "Programas",
    name: "Protocolo Oncológico Especial (3 meses)",
    price: 35000, unit: "programa", badge: "Entrevista previa",
    desc: "Acompañamiento oncológico integrativo. Desde $35,000 MXN."
  },

  // ===== Productos individuales =====
  {
    id: "kit-microdosis",
    category: "Productos",
    name: "Kit de microdosis guiadas (evaluación previa)",
    price: 1200, unit: "kit",
    desc: "Incluye guía de uso. Requiere valoración médica."
  },
  {
    id: "cbd-medicinal",
    category: "Productos",
    name: "CBD medicinal (cotización)",
    price: 0, badge: "Cotiza",
    desc: "Precio según dosis y proveedor. Se define tras la evaluación."
  },
  {
    id: "vitaminas-b",
    category: "Productos",
    name: "Complejo de Vitaminas B",
    price: 450, unit: "frasco",
    desc: "Apoyo metabólico y energético. Presentación de 60 cápsulas."
  },

  // ===== Consultas y Terapias (opcional) =====
  {
    id: "consulta-medica",
    category: "Consultas",
    name: "Consulta médico-farmacológica integrativa",
    price: 800, unit: "sesión",
    desc: "Historia clínica, ajuste/optimización de tratamiento, plan de hábitos."
  },
  {
    id: "acupuntura",
    category: "Terapias",
    name: "Acupuntura + diagnóstico herbolario",
    price: 650, unit: "sesión",
    desc: "Sesión clínica con orientación de fitoterapia."
  }
];
