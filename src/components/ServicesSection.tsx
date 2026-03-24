import serviceQuince from "@/assets/service-quince.jpg";
import serviceBoda from "@/assets/service-boda.jpg";
import serviceEventos from "@/assets/service-eventos.jpg";

const services = [
  {
    title: "Quinceañeras",
    description: "Magia y color para tus 15. Creamos escenarios de ensueño que marcan un antes y un después.",
    image: serviceQuince,
  },
  {
    title: "Bodas",
    description: "Elegancia y romance inolvidable. Cada detalle diseñado para hacer tu día perfecto.",
    image: serviceBoda,
  },
  {
    title: "Eventos Especiales",
    description: "Cumpleaños, baby showers y corporativos. Transformamos cualquier celebración en algo extraordinario.",
    image: serviceEventos,
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 px-4">
      <div className="container mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-center gradient-gold mb-4">
          Nuestros Servicios
        </h2>
        <div className="gold-divider max-w-xs mx-auto mb-16" />

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-gold"
            >
              <div className="overflow-hidden h-56">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={640}
                  height={512}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-gold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
