import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, ArrowRight, Sprout, Sun, Droplets, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import plantCollection from "@/assets/plant-collection.jpg";
import roseImg from "@/assets/rose.jpg";
import lilyImg from "@/assets/lily.jpg";
import moneyPlantImg from "@/assets/money-plant.jpg";
import snakePlantImg from "@/assets/snake-plant.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const featuredItems = [
  { name: "Money Plant", image: moneyPlantImg, tag: "Indoor" },
  { name: "Rose", image: roseImg, tag: "Flower" },
  { name: "Snake Plant", image: snakePlantImg, tag: "Indoor" },
  { name: "Lily", image: lilyImg, tag: "Flower" },
];

const highlights = [
  { icon: Sprout, title: "500+ Species", desc: "A curated collection of rare and everyday plants from around the world." },
  { icon: Sun, title: "Expert Guidance", desc: "Our botanists are always available to help you pick the perfect plant." },
  { icon: Droplets, title: "Sustainable Care", desc: "Eco-friendly practices and organic soil mixes for healthier growth." },
];

const Home = () => {
  const aboutRef = useScrollAnimation();
  const featuredRef = useScrollAnimation();
  const highlightRef = useScrollAnimation();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20">
        <img
          src={heroBg}
          alt="Lush botanical garden"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/15 rounded-full px-6 py-2.5 mb-8 animate-fade-in">
            <Leaf className="w-4 h-4 text-secondary" />
            <span className="font-body text-sm text-primary-foreground/90 tracking-wider font-medium">Botanical Garden & Plant Shop</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-primary-foreground leading-[1.05] tracking-tight mb-6 animate-slide-up">
            Bring Nature
            <br />
            <span className="italic font-light text-secondary">Home</span>
          </h1>
          <p className="font-body text-lg sm:text-xl text-primary-foreground/75 max-w-xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Discover the beauty of over 500 plant species. Visit our garden, shop your favorites, and bring nature home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button size="lg" asChild className="rounded-full px-10 h-14 text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-primary border-0">
              <Link to="/services">
                Explore Collection <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" asChild className="rounded-full px-10 h-14 text-base font-bold bg-primary-foreground/10 backdrop-blur-md border-2 border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground/40 transition-all duration-300 hover:scale-105">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary-foreground/50" />
        </div>
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About preview */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="section-container" ref={aboutRef}>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={plantCollection}
                alt="Plantiva plant shop collection"
                className="w-full h-[420px] object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div>
              <p className="font-body text-sm font-bold text-primary uppercase tracking-widest mb-3">Welcome to Plantiva</p>
              <h2 className="section-title text-left mb-6">Your Gateway to a Greener World</h2>
              <p className="font-body text-foreground/75 leading-relaxed text-lg mb-4">
                Plantiva Botanical Garden is more than just a garden — it's a living experience. Walk through lush pathways,
                discover exotic species, and find the perfect plant to brighten your space.
              </p>
              <p className="font-body text-foreground/75 leading-relaxed text-lg mb-8">
                From ornamental flowers to air-purifying indoor plants, our curated collection caters to every plant lover.
              </p>
              <Button variant="outline" asChild className="rounded-full px-8 h-12 font-bold border-2 hover:scale-105 transition-all duration-300">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 sm:py-24 gradient-section">
        <div className="section-container" ref={highlightRef}>
          <div className="text-center mb-14">
            <p className="font-body text-sm font-bold text-primary uppercase tracking-widest mb-3">Why Plantiva</p>
            <h2 className="section-title">What Makes Us Special</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <div key={item.title} className="text-center p-8 rounded-2xl bg-card border border-border/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="font-body text-foreground/65 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Plants & Flowers */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="section-container" ref={featuredRef}>
          <div className="text-center mb-14">
            <p className="font-body text-sm font-bold text-primary uppercase tracking-widest mb-3">Featured</p>
            <h2 className="section-title">Popular Plants & Flowers</h2>
            <p className="section-subtitle mt-4">Hand-picked favorites from our collection that customers love.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <div key={item.name} className="plant-card group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {item.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild className="rounded-full px-8 h-12 font-bold border-2 hover:scale-105 transition-all duration-300">
              <Link to="/services">View All Collection <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
