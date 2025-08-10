import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex space-x-4 justify-center mt-4">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/casacoramty?igsh=cmliYmZoYzd5OGts"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#d4af37] text-[#0f0e17] p-3 rounded-full hover:bg-[#ffd1dc] transition-colors duration-300"
      >
        <FaInstagram size={20} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/528132497377"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#d4af37] text-[#0f0e17] p-3 rounded-full hover:bg-[#ffd1dc] transition-colors duration-300"
      >
        <FaWhatsapp size={20} />
      </a>
    </div>
  );
}
