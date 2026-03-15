import gardenImg from "@/assets/garden-about.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="py-20 sm:py-28 bg-background">
      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={gardenImg}
              alt="Plantiva botanical garden pathway"
              className="w-full h-[400px] object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="section-title text-left mb-6">About Our Garden</h2>
            <p className="font-body text-muted-foreground leading-relaxed text-lg">
              Plantiva Botanical Garden is a peaceful green space where visitors can explore
              different plants and flowers and learn about nature. Spread across acres of
              carefully curated landscapes, our garden is home to hundreds of plant species
              from around the world.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed text-lg mt-4">
              Whether you're a seasoned gardener or just beginning your plant journey,
              Plantiva offers guided tours, workshops, and a fully stocked plant shop to
              help you bring a piece of nature home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
