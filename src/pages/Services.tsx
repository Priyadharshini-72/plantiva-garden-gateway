import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Droplets, Sun, Leaf, Sprout, Flower2 } from "lucide-react";
import moneyPlantImg from "@/assets/money-plant.jpg";
import aloeVeraImg from "@/assets/aloe-vera.jpg";
import snakePlantImg from "@/assets/snake-plant.jpg";
import tulsiImg from "@/assets/tulsi-plant.jpg";
import roseImg from "@/assets/rose.jpg";
import lilyImg from "@/assets/lily.jpg";
import jasmineImg from "@/assets/jasmine.jpg";
import sunflowerImg from "@/assets/sunflower.jpg";
import gardeningImg from "@/assets/gardening-service.jpg";

const plants = [
  { name: "Money Plant", image: moneyPlantImg, desc: "A popular indoor plant that purifies air and brings prosperity.", price: "₹149" },
  { name: "Aloe Vera", image: aloeVeraImg, desc: "Known for its medicinal properties and easy-care nature.", price: "₹199" },
  { name: "Snake Plant", image: snakePlantImg, desc: "Excellent air purifier, perfect for bedrooms and offices.", price: "₹249" },
  { name: "Tulsi Plant", image: tulsiImg, desc: "A sacred herb with aromatic leaves and healing benefits.", price: "₹99" },
];

const flowers = [
  { name: "Rose", image: roseImg, desc: "The timeless symbol of love, available in red, white, pink & yellow.", price: "₹49/stem" },
  { name: "Lily", image: lilyImg, desc: "Elegant white blooms that bring grace and fragrance to any space.", price: "₹89/bunch" },
  { name: "Jasmine", image: jasmineImg, desc: "Delicate, intensely fragrant flowers perfect for gardens and garlands.", price: "₹39/bunch" },
  { name: "Sunflower", image: sunflowerImg, desc: "Bright, cheerful blooms that follow the sun and light up any garden.", price: "₹59/stem" },
];

const tips = [
  { icon: Droplets, title: "Watering Wisdom", desc: "Water early morning or late evening. Check soil moisture before watering — overwatering is the #1 plant killer." },
  { icon: Sun, title: "Right Light, Right Plant", desc: "Place sun-loving plants near south-facing windows. Shade plants thrive in indirect light or north-facing spots." },
  { icon: Leaf, title: "Soil & Nutrition", desc: "Use well-draining potting mix. Add compost or organic fertilizer every 2–4 weeks during growing season." },
  { icon: Sprout, title: "Seasonal Care", desc: "Reduce watering in winter. Prune dead leaves regularly. Repot every 12–18 months for healthy root growth." },
];

const Services = () => {
  const heroRef = useScrollAnimation();
  const plantsRef = useScrollAnimation();
  const flowersRef = useScrollAnimation(100);
  const tipsRef = useScrollAnimation();

  return (
    <div>
      {/* Hero banner */}
      <section className="gradient-section py-12 sm:py-16">
        <div className="section-container text-center" ref={heroRef}>
          <p className="font-body text-sm font-bold text-primary uppercase tracking-widest mb-3">What We Offer</p>
          <h1 className="section-title mb-4">Our Services & Collection</h1>
          <p className="section-subtitle">Explore our wide range of indoor plants, fresh flowers, and expert gardening guidance.</p>
        </div>
      </section>

      {/* Plants */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="section-container" ref={plantsRef}>
          <div className="flex items-center gap-3 mb-2">
            <Sprout className="w-6 h-6 text-primary" />
            <p className="font-body text-sm font-bold text-primary uppercase tracking-widest">Indoor & Outdoor</p>
          </div>
          <h2 className="section-title text-left mb-4">Plants Available</h2>
          <p className="font-body text-foreground/70 text-lg mb-10 max-w-2xl">
            From air-purifying houseplants to medicinal herbs, find the perfect green companion for your home or office.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plants.map((plant, i) => (
              <div key={plant.name} className="plant-card group" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="relative overflow-hidden">
                  <img src={plant.image} alt={plant.name} className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm text-foreground text-sm font-bold px-3 py-1.5 rounded-full shadow-sm">{plant.price}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{plant.name}</h3>
                  <p className="font-body text-sm text-foreground/60 leading-relaxed">{plant.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flowers */}
      <section className="py-16 sm:py-24 gradient-section">
        <div className="section-container" ref={flowersRef}>
          <div className="flex items-center gap-3 mb-2">
            <Flower2 className="w-6 h-6 text-primary" />
            <p className="font-body text-sm font-bold text-primary uppercase tracking-widest">Fresh & Seasonal</p>
          </div>
          <h2 className="section-title text-left mb-4">Flowers Collection</h2>
          <p className="font-body text-foreground/70 text-lg mb-10 max-w-2xl">
            Browse our selection of garden-fresh flowers — perfect for gifting, decoration, or adding color to your garden.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flowers.map((flower, i) => (
              <div key={flower.name} className="plant-card group" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="relative overflow-hidden">
                  <img src={flower.image} alt={flower.name} className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-sm font-bold px-3 py-1.5 rounded-full shadow-md">{flower.price}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{flower.name}</h3>
                  <p className="font-body text-sm text-foreground/60 leading-relaxed">{flower.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gardening Tips */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="section-container" ref={tipsRef}>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="font-body text-sm font-bold text-primary uppercase tracking-widest mb-3">Expert Advice</p>
              <h2 className="section-title text-left mb-8">Gardening Tips</h2>
              <div className="space-y-6">
                {tips.map((tip, i) => (
                  <div key={tip.title} className="flex gap-4 items-start p-4 rounded-xl hover:bg-accent/50 transition-all duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <tip.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-1">{tip.title}</h3>
                      <p className="font-body text-sm text-foreground/60 leading-relaxed">{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={gardeningImg} alt="Gardening hands planting seedlings" className="w-full h-[450px] object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
