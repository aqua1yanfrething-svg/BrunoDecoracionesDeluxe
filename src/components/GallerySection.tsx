import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Decoración de quinceañera" },
  { src: gallery2, alt: "Decoración de boda elegante" },
  { src: gallery3, alt: "Decoración corporativa" },
  { src: gallery4, alt: "Baby shower decoración" },
  { src: gallery5, alt: "Fiesta de cumpleaños" },
  { src: gallery6, alt: "Arco floral de boda" },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-24 px-4">
      <div className="container mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-center gradient-gold mb-4">
          Nuestros Trabajos
        </h2>
        <div className="gold-divider max-w-xs mx-auto mb-16" />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl aspect-square"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/20 transition-colors duration-500" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/40 rounded-xl transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
