import gardenImg from "@/assets/garden-about.jpg";
import greenhouseImg from "@/assets/garden-greenhouse.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TreePine, Users, ShieldCheck, Leaf, Heart, Globe } from "lucide-react";

const keyAspects = [
  { icon: TreePine, title: "Diverse Collection", desc: "Over 500 species of tropical, medicinal, ornamental, and rare plants curated from around the world." },
  { icon: Users, title: "Guided Tours", desc: "Expert-led garden tours every weekend, perfect for families, students, and nature enthusiasts." },
  { icon: ShieldCheck, title: "Organic Practices", desc: "We use 100% organic soil, natural pest control, and sustainable water management techniques." },
  { icon: Leaf, title: "Plant Shop", desc: "Take home your favorite plants from our fully stocked shop with care guides included." },
  { icon: Heart, title: "Community Events", desc: "Monthly workshops, plant swaps, and seasonal festivals that bring the plant community together." },
  { icon: Globe, title: "Eco Education", desc: "Programs for schools and colleges promoting environmental awareness and conservation." },
];

const About = () => {
  const heroRef = useScrollAnimation();
  const ref = useScrollAnimation();
  const aspectsRef = useScrollAnimation();
  const missionRef = useScrollAnimation();

  return (
    <div>
      {/* Hero */}
      <section className="gradient-section py-20 sm:py-28 lg:py-32">
        <div className="section-container text-center max-w-3xl mx-auto" ref={heroRef}>
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 mb-6">
            <Leaf className="w-4 h-4 text-primary" />
            <span className="font-body text-sm font-bold text-primary uppercase tracking-widest">Our Story</span>
          </div>
          <h1 className="section-title text-4xl sm:text-5xl lg:text-6xl">About Plantiva Garden</h1>
          <p className="section-subtitle mt-5 text-lg sm:text-xl leading-relaxed">A living sanctuary where nature, community, and sustainability come together.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="section-container" ref={ref}>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={gardenImg} alt="Plantiva botanical garden pathway" className="w-full h-[420px] object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">A Peaceful Green Space</h2>
              <p className="font-body text-foreground/70 leading-relaxed text-lg mb-4">
                Plantiva Botanical Garden is a sprawling green space dedicated to the preservation, study, and celebration of plant life. 
                Spread across acres of meticulously curated landscapes, our garden is home to hundreds of plant species from tropical regions, 
                arid climates, and temperate zones.
              </p>
              <p className="font-body text-foreground/70 leading-relaxed text-lg mb-4">
                Founded in 2020, Plantiva started as a small nursery with a big dream — to connect people with nature in meaningful ways. 
                Today, we welcome thousands of visitors each year who come to explore, learn, and find their perfect plant companion.
              </p>
              <p className="font-body text-foreground/70 leading-relaxed text-lg">
                Whether you're a seasoned botanist or someone just discovering the joy of houseplants, Plantiva has something special for you.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6 text-center">
                <div className="p-4 rounded-xl bg-primary/5">
                  <p className="font-display text-3xl font-bold text-primary">500+</p>
                  <p className="font-body text-sm text-foreground/60 mt-1">Plant Species</p>
                </div>
                <div className="p-4 rounded-xl bg-primary/5">
                  <p className="font-display text-3xl font-bold text-primary">10K+</p>
                  <p className="font-body text-sm text-foreground/60 mt-1">Happy Visitors</p>
                </div>
                <div className="p-4 rounded-xl bg-primary/5">
                  <p className="font-display text-3xl font-bold text-primary">5+</p>
                  <p className="font-body text-sm text-foreground/60 mt-1">Years of Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Aspects */}
      <section className="py-16 sm:py-24 gradient-section">
        <div className="section-container" ref={aspectsRef}>
          <div className="text-center mb-14">
            <p className="font-body text-sm font-bold text-primary uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="section-title">Key Aspects of Plantiva</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyAspects.map((item, i) => (
              <div key={item.title} className="p-7 rounded-2xl bg-card border border-border/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="font-body text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="section-container" ref={missionRef}>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="font-body text-sm font-bold text-primary uppercase tracking-widest mb-3">Our Purpose</p>
              <h2 className="section-title text-left mb-6">Mission & Vision</h2>
              <div className="space-y-6">
                <div className="p-5 rounded-xl border border-border/50 hover:bg-accent/30 transition-all duration-300">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Our Mission</h3>
                  <p className="font-body text-foreground/70 leading-relaxed text-lg">
                    To inspire people to embrace nature by providing access to a diverse collection of plants, 
                    offering expert guidance, and creating a welcoming space where everyone can learn about sustainable gardening.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-border/50 hover:bg-accent/30 transition-all duration-300">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Our Vision</h3>
                  <p className="font-body text-foreground/70 leading-relaxed text-lg">
                    To become the leading botanical destination that nurtures a greener, healthier future — one plant at a time. 
                    We envision a community where every home has a touch of nature.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-border/50 hover:bg-accent/30 transition-all duration-300">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Our Values</h3>
                  <p className="font-body text-foreground/70 leading-relaxed text-lg">
                    Sustainability, community, education, and a deep love for all things green. Every decision we make 
                    is rooted in respect for nature and commitment to our visitors.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={greenhouseImg} alt="Plantiva greenhouse interior" className="w-full h-[450px] object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
