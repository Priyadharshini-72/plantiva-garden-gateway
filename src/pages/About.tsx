import gardenImg from "@/assets/garden-about.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import TipsSection from "@/components/TipsSection";

const About = () => {
  const ref = useScrollAnimation();

  return (
    <>
      <section className="py-16 sm:py-24 bg-background">
        <div className="section-container" ref={ref}>
          <div className="text-center mb-14">
            <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-3">Our Story</p>
            <h1 className="section-title">About Our Garden</h1>
          </div>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={gardenImg}
                alt="Plantiva botanical garden pathway"
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p className="font-body text-muted-foreground leading-relaxed text-lg">
                Plantiva Botanical Garden is a peaceful green space where visitors can explore
                different plants and flowers and learn about nature. Spread across acres of
                carefully curated landscapes, our garden is home to hundreds of plant species
                from around the world.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-lg mt-5">
                Whether you're a seasoned gardener or just beginning your plant journey,
                Plantiva offers guided tours, workshops, and a fully stocked plant shop to
                help you bring a piece of nature home.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="font-display text-3xl font-bold text-primary">500+</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">Plant Species</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-primary">10K+</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">Happy Visitors</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-primary">5+</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">Years of Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TipsSection />
    </>
  );
};

export default About;
