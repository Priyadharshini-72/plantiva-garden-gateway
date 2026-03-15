import { Droplets, Sun, Sprout } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const tips = [
  {
    icon: Droplets,
    title: "How to Water Plants",
    desc: "Water deeply but less frequently. Check soil moisture before watering — most plants prefer slightly dry soil between waterings.",
  },
  {
    icon: Sun,
    title: "Best Sunlight for Plants",
    desc: "Most indoor plants thrive in bright, indirect light. Rotate your pots weekly so every side gets equal sun exposure.",
  },
  {
    icon: Sprout,
    title: "Soil Care Tips",
    desc: "Use well-draining potting mix enriched with compost. Repot plants every 1-2 years to refresh nutrients and prevent root-binding.",
  },
];

const TipsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 sm:py-28 bg-accent/30">
      <div className="section-container" ref={ref}>
        <div className="text-center mb-14">
          <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-3">Learn</p>
          <h2 className="section-title">Gardening Tips</h2>
          <p className="section-subtitle mt-4">Simple advice to keep your plants happy and healthy.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {tips.map((tip) => (
            <div key={tip.title} className="plant-card p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
                <tip.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{tip.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsSection;
