import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/62801759?text=Hola%20Bruno%2C%20me%20interesa%20una%20cotización%20para%20un%20evento";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-2">
          <span className="font-serif text-xl font-bold gradient-gold">Decoraciones Deluxe Bruno</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#servicios" className="hover:text-gold transition-colors">Servicios</a>
          <a href="#proceso" className="hover:text-gold transition-colors">Proceso</a>
          <a href="#galeria" className="hover:text-gold transition-colors">Galería</a>
          <a href="#contacto" className="hover:text-gold transition-colors">Contacto</a>
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-cyan-dark transition-colors"
        >
          <MessageCircle size={18} />
          Cotizar por WhatsApp
        </a>

        <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-4 py-4 space-y-4">
          <a href="#servicios" onClick={() => setMenuOpen(false)} className="block text-muted-foreground hover:text-gold transition-colors">Servicios</a>
          <a href="#proceso" onClick={() => setMenuOpen(false)} className="block text-muted-foreground hover:text-gold transition-colors">Proceso</a>
          <a href="#galeria" onClick={() => setMenuOpen(false)} className="block text-muted-foreground hover:text-gold transition-colors">Galería</a>
          <a href="#contacto" onClick={() => setMenuOpen(false)} className="block text-muted-foreground hover:text-gold transition-colors">Contacto</a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold justify-center"
          >
            <MessageCircle size={18} />
            Cotizar por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
