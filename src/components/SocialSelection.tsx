"use client";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IconType } from "react-icons";
import Link from "next/link";

type NetworkKey = "instagram" | "whatsapp";
type SocialLinks = Partial<Record<NetworkKey, string>>;
type Variant = "ribbon" | "cards";

interface SocialSectionProps {
  title?: string;
  subtitle?: string;
  links: SocialLinks;
  align?: "left" | "center";
  variant?: Variant;
}

/** Colores de marca */
const cc = {
  fondo: "#0f0e17",
  oro: "#d4af37",
};

const items: { key: NetworkKey; label: string; Icon: IconType }[] = [
  { key: "instagram", label: "Instagram", Icon: FaInstagram },
  { key: "whatsapp", label: "WhatsApp", Icon: FaWhatsapp },
];

export default function SocialSection({
  title = "Conecta con Casa Cora",
  subtitle = "Sigue nuestras redes y mantente en contacto directo.",
  links,
  align = "center",
  variant = "ribbon",
}: SocialSectionProps) {
  const enabled = items.filter((i) => links[i.key]);
  if (!enabled.length) return null;

  const isCenter = align === "center";
  const wrapperAlign = isCenter
    ? "items-center text-center"
    : "items-start text-left";
  const gridAlign = isCenter ? "justify-center" : "justify-start";

  return (
    <section className="py-16 px-6 bg-white text-[#0f0e17] dark:bg-[#0f0e17] dark:text-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <header className={`${wrapperAlign}`}>
          <h2
            className="font-serif text-3xl md:text-4xl tracking-tight"
            style={{ color: cc.oro }}
          >
            {title}
          </h2>
          <div className="w-full flex justify-center">
            <p className="text-center text-lg font-medium mb-6 max-w-xl">
              {subtitle}
            </p>
          </div>
        </header>

        {variant === "ribbon" ? (
          <div className={`flex flex-wrap ${gridAlign} gap-3`}>
            {enabled.map(({ key, label, Icon }) => (
              <Link
                key={key}
                href={links[key]!}
                target="_blank"
                aria-label={label}
                className="group relative"
              >
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2
                             bg-[#111]/5 dark:bg-white/5 border border-[#111]/10 dark:border-white/10
                             backdrop-blur-sm transition-transform hover:-translate-y-0.5"
                >
                  <span
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                               blur-xl transition-opacity"
                    style={{
                      background: `radial-gradient(60% 60% at 50% 50%, ${cc.oro}33, transparent)`,
                    }}
                  />
                  <Icon className="relative" size={18} />
                  <span className="relative text-sm font-medium">{label}</span>
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div
            className={`grid ${
              isCenter ? "md:grid-cols-2" : "md:grid-cols-2"
            } grid-cols-1 gap-4`}
          >
            {enabled.map(({ key, label, Icon }) => (
              <Link
                key={key}
                href={links[key]!}
                target="_blank"
                aria-label={label}
                className="group relative rounded-2xl p-4 border
                           border-[#111]/10 dark:border-white/10 bg-white/50 dark:bg-white/5
                           hover:shadow-xl transition-transform hover:-translate-y-1"
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                             pointer-events-none transition-opacity"
                  style={{
                    background: `radial-gradient(70% 70% at 50% 0%, ${cc.oro}26, transparent)`,
                  }}
                />
                <div className="relative flex items-center gap-3">
                  <div className="rounded-xl p-2 bg-white text-[#0f0e17] dark:bg-[#0f0e17] dark:text-white">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{label}</p>
                    <p className="text-xs opacity-60">Abrir chat/perfil</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
