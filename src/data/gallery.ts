// src/data/gallery.ts
export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  title?: string;
  desc?: string;
  tags?: string[];
  date?: string;
};

export const gallery: GalleryItem[] = [
  {
    id: "g-01",
    src: "/galeria/casa_cora_imagen_1.png",
    alt: "Zona de Bongs",
    title: "Bongs",
    desc: "Zona de bongs",
    tags: ["Bongs"],
    date: "2025-01-12",
  },
  {
    id: "g-02",
    src: "/galeria/casa_cora_imagen_2.png",
    alt: "Círculo de palabra en Casa CORA",
    title: "Círculo de palabra",
    desc: "Acompañamiento comunitario.",
    tags: ["comunidad"],
  },
  {
    id: "g-03",
    src: "/galeria/casa_cora_imagen_3.png",
    alt: "Espacio de trabajo terapéutico",
    title: "Espacio terapéutico",
    tags: ["cultivo"],
  },
  {
    id: "g-04",
    src: "/galeria/casa_cora_imagen_4.png",
    alt: "Espacio de trabajo terapéutico",
    title: "Espacio terapéutico",
    tags: ["espacio"],
  },
  {
    id: "g-05",
    src: "/galeria/casa_cora_imagen_5.png",
    alt: "Decoracion",
    title: "Decoración",
    tags: ["comunidad"],
  },
];
