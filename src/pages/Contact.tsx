import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "123 Garden Lane, Green Valley, Bengaluru 560001" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "hello@plantiva.in" },
  { icon: Clock, label: "Hours", value: "Mon – Sat: 9 AM – 7 PM | Sun: 10 AM – 5 PM" },
];

const Contact = () => {
  const ref = useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [subscribe, setSubscribe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email) {
      toast({
        title: subscribe ? "Message Sent & Subscribed!" : "Message Sent!",
        description: subscribe
          ? "Thank you for reaching out and subscribing to Plantiva updates 🌿"
          : "Thank you for reaching out. We'll get back to you soon 🌿",
      });
      setForm({ name: "", email: "", message: "" });
      setSubscribe(false);
    }
  };

  return (
    <div className="page-wrapper">
      <section className="py-16 sm:py-24 bg-background">
        <div className="section-container" ref={ref}>
          <div className="text-center mb-14">
            <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-3">Get in Touch</p>
            <h1 className="section-title">Contact & Subscribe</h1>
            <p className="section-subtitle mt-4">Have a question or want to stay updated? Reach out to us or subscribe for the latest from Plantiva.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-card border border-border/50 rounded-2xl p-8 sm:p-10">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Your Name</label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="rounded-xl h-12 px-4 bg-background"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Email Address</label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="rounded-xl h-12 px-4 bg-background"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Your Message</label>
                  <Textarea
                    placeholder="Tell us about your query, feedback, or what plants you're looking for..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="rounded-xl px-4 py-3 bg-background min-h-[120px]"
                  />
                </div>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={subscribe}
                    onChange={(e) => setSubscribe(e.target.checked)}
                    className="w-5 h-5 rounded border-border text-primary focus:ring-primary accent-primary cursor-pointer"
                  />
                  <span className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    Subscribe to receive updates about new plants, offers & gardening tips
                  </span>
                </label>
                <Button type="submit" size="lg" className="rounded-full w-full h-12 text-base font-semibold">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl hover:bg-accent/50 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-foreground">{item.label}</h4>
                      <p className="font-body text-muted-foreground text-sm mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl overflow-hidden h-[300px] border border-border/50">
                <iframe
                  title="Plantiva Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5965!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
