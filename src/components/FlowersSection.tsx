import roseImg from "@/assets/rose.jpg";
import lilyImg from "@/assets/lily.jpg";
import jasmineImg from "@/assets/jasmine.jpg";
import sunflowerImg from "@/assets/sunflower.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const flowers = [
  { name: "Rose", desc: "The timeless queen of flowers, symbolizing love and beauty.", img: roseImg },
  { name: "Lily", desc: "Elegant white blooms representing purity and grace.", img: lilyImg },
  { name: "Jasmine", desc: "Fragrant star-shaped blossoms that perfume the evening air.", img: jasmineImg },
  { name: "Sunflower", desc: "Cheerful golden faces that follow the sun across the sky.", img: sunflowerImg },
];

const FlowersSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="flowers" className="py-20 sm:py-28 bg-accent/40">
      <div className="section-container" ref={ref}>
        <div className="text-center mb-14">
          <h2 className="section-title">Beautiful Flowers</h2>
          <p className="section-subtitle mt-4">
            Explore our vibrant collection of garden blooms.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {flowers.map((flower) => (
            <div key={flower.name} className="plant-card group">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={flower.img}
                  alt={flower.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-foreground">{flower.name}</h3>
                <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">{flower.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlowersSection;
