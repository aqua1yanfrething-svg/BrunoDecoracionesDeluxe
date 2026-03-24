import { MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL = "https://wa.me/62801759?text=Hola%20Bruno%2C%20me%20interesa%20una%20cotización%20para%20un%20evento";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Decoración espectacular de evento premium"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-gold leading-tight mb-6">
          Hacemos Realidad el Evento de Tus Sueños
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed">
          <span className="text-gold font-semibold">Decoraciones Deluxe Bruno:</span> Expertos en transformar espacios para 15 Años, Bodas y Eventos Corporativos.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold hover:bg-cyan-dark transition-all shadow-cyan hover:scale-105"
        >
          <MessageCircle size={24} />
          Solicitar Presupuesto Gratis
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
