import { Phone, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ nombre: "", evento: "", fecha: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola Bruno, soy ${form.nombre}. Me interesa una cotización para un evento de tipo: ${form.evento}, en la fecha: ${form.fecha}`;
    window.open(`https://wa.me/62801759?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contacto" className="py-24 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-2xl text-center">
        <span className="font-serif text-xl gradient-gold font-semibold">Decoraciones Deluxe Bruno</span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold gradient-gold mt-2 mb-4">
          Haz Realidad Tu Evento
        </h2>
        <div className="gold-divider max-w-xs mx-auto mb-8" />

        <div className="flex items-center justify-center gap-2 text-gold mb-10 text-lg">
          <Phone size={20} />
          <span className="font-semibold">TEL: 628-01759</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1.5">Nombre</label>
            <input
              type="text"
              required
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="Tu nombre completo"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1.5">Tipo de Evento</label>
            <select
              required
              value={form.evento}
              onChange={(e) => setForm({ ...form, evento: e.target.value })}
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            >
              <option value="">Selecciona un tipo</option>
              <option value="Quinceañera">Quinceañera</option>
              <option value="Boda">Boda</option>
              <option value="Cumpleaños">Cumpleaños</option>
              <option value="Baby Shower">Baby Shower</option>
              <option value="Corporativo">Corporativo</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1.5">Fecha del Evento</label>
            <input
              type="date"
              required
              value={form.fecha}
              onChange={(e) => setForm({ ...form, fecha: e.target.value })}
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-full text-lg font-bold hover:bg-cyan-dark transition-all shadow-cyan hover:scale-[1.02]"
          >
            <Send size={20} />
            Enviar consulta ahora
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
