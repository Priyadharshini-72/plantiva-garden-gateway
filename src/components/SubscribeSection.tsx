import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const ref = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({ title: "Subscribed!", description: "Thank you for joining the Plantiva family 🌿" });
      setEmail("");
    }
  };

  return (
    <section id="subscribe" className="py-20 sm:py-28 bg-primary">
      <div className="section-container text-center" ref={ref}>
        <h2 className="section-title text-primary-foreground mb-4">Stay Connected</h2>
        <p className="font-body text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
          Subscribe to receive updates about new plants, gardening tips, and special offers.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-full bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:ring-primary-foreground"
          />
          <Button type="submit" variant="secondary" size="lg" className="rounded-full font-semibold">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;
