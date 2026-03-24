import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-gold/10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
        <span>© 2024 Decoraciones Deluxe Bruno. Todos los derechos reservados.</span>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors">
            <Instagram size={22} />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-gold transition-colors">
            <Facebook size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
