import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background image */}
    <img
      src={heroBg}
      alt="Lush botanical garden with greenhouse"
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-foreground/40" />

    {/* Content */}
    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
      <div className="glass-overlay px-8 py-12 sm:px-12 sm:py-16">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
          Plantiva
          <span className="block text-secondary text-lg sm:text-2xl lg:text-3xl font-body font-light mt-2">
            Botanical Garden & Plant Shop
          </span>
        </h1>
        <p className="font-body text-lg sm:text-xl text-muted-foreground mb-8">
          Bring Nature Home
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <a href="#plants">Explore Plants</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#subscribe">Subscribe</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
