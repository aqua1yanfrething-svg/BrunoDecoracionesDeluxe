import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/62801759?text=Hola%20Bruno%2C%20me%20interesa%20una%20cotización%20para%20un%20evento";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-float"
    >
      <MessageCircle size={28} className="text-foreground" />
    </a>
  );
};

export default WhatsAppButton;
