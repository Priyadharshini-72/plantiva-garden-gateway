import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import gardenImg from "@/assets/garden-about.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import TipsSection from "@/components/TipsSection";

const Home = () => {
  const aboutRef = useScrollAnimation();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden -mt-20">
        <img
          src={heroBg}
          alt="Lush botanical garden"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/35" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <div className="glass-overlay px-8 py-14 sm:px-14 sm:py-16">
            <div className="flex justify-center mb-5">
              <Leaf className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-3">
              Plantiva
            </h1>
            <p className="font-display text-xl sm:text-2xl text-muted-foreground font-medium mb-2">
              Botanical Garden & Plant Shop
            </p>
            <p className="font-body text-base text-muted-foreground mb-10">
              Bring Nature Home
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" asChild>
                <Link to="/plants">
                  Explore Plants <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/subscribe">Subscribe</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brief About */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="section-container" ref={aboutRef}>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={gardenImg}
                alt="Plantiva botanical garden"
                className="w-full h-[380px] object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-3">Welcome to Plantiva</p>
              <h2 className="section-title text-left mb-6">A Peaceful Green Space</h2>
              <p className="font-body text-muted-foreground leading-relaxed text-lg mb-6">
                Plantiva Botanical Garden is a peaceful green space where visitors can explore
                different plants and flowers and learn about nature. Whether you're a seasoned
                gardener or just beginning your plant journey, we have something for everyone.
              </p>
              <Button variant="outline" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <TipsSection />
    </>
  );
};

export default Home;
