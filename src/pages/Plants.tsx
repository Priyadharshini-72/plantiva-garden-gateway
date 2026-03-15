import moneyPlant from "@/assets/money-plant.jpg";
import aloeVera from "@/assets/aloe-vera.jpg";
import snakePlant from "@/assets/snake-plant.jpg";
import tulsiPlant from "@/assets/tulsi-plant.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const plants = [
  { name: "Money Plant", desc: "A lucky charm that purifies indoor air and thrives in low light.", price: "₹149", img: moneyPlant },
  { name: "Aloe Vera", desc: "A medicinal succulent known for soothing skin and healing burns.", price: "₹199", img: aloeVera },
  { name: "Snake Plant", desc: "A hardy air-purifier that converts CO₂ to oxygen at night.", price: "₹249", img: snakePlant },
  { name: "Tulsi Plant", desc: "Sacred holy basil with immunity-boosting and aromatic properties.", price: "₹99", img: tulsiPlant },
];

const Plants = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-16 sm:py-24 bg-background min-h-screen">
      <div className="section-container" ref={ref}>
        <div className="text-center mb-14">
          <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-3">Shop</p>
          <h1 className="section-title">Our Plants</h1>
          <p className="section-subtitle mt-4">
            Handpicked green companions for your home and garden.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {plants.map((plant) => (
            <div key={plant.name} className="plant-card group cursor-pointer">
              <div className="aspect-square overflow-hidden">
                <img
                  src={plant.img}
                  alt={plant.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">{plant.name}</h3>
                <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">{plant.desc}</p>
                <p className="font-body text-lg font-bold text-primary mt-4">{plant.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plants;
