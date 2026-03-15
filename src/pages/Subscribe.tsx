import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail } from "lucide-react";

const Subscribe = () => {
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
    <section className="py-16 sm:py-24 bg-background min-h-screen flex items-center">
      <div className="section-container w-full" ref={ref}>
        <div className="max-w-xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
            <Mail className="w-7 h-7 text-primary" />
          </div>
          <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-3">Newsletter</p>
          <h1 className="section-title mb-4">Stay Connected</h1>
          <p className="font-body text-muted-foreground text-lg mb-10 leading-relaxed">
            Subscribe to receive updates about new plants, gardening tips, and special offers from Plantiva.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-full h-12 px-5 bg-card border-border"
            />
            <Button type="submit" size="lg" className="rounded-full h-12 px-8 font-semibold">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
