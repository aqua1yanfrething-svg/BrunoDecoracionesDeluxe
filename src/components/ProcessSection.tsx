import { MessageCircle, Palette, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Contáctanos",
    description: "Dinos qué necesitas por WhatsApp. Escuchamos tu visión y tus ideas.",
    step: "01",
  },
  {
    icon: Palette,
    title: "Diseño",
    description: "Creamos una propuesta personalizada con todos los detalles de tu evento.",
    step: "02",
  },
  {
    icon: PartyPopper,
    title: "Montaje",
    description: "Nos encargamos de todo el día del evento. Tú solo disfruta.",
    step: "03",
  },
];

const ProcessSection = () => {
  return (
    <section id="proceso" className="py-24 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-center gradient-gold mb-4">
          Nuestro Proceso
        </h2>
        <div className="gold-divider max-w-xs mx-auto mb-16" />

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.step} className="text-center group">
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-card border-2 border-gold/30 mb-6 group-hover:border-gold transition-colors duration-500">
                <step.icon className="text-primary" size={32} />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold text-accent-foreground text-xs font-bold flex items-center justify-center">
                  {step.step}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-gold mb-3">{step.title}</h3>
              <p className="text-muted-foreground max-w-xs mx-auto leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
