import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Bell } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "Moolaikaraipatti, Tirunelveli" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "plantiva.green@gmail.com" },
  { icon: Clock, label: "Hours", value: "Mon – Sat: 9 AM – 7 PM | Sun: 10 AM – 5 PM" },
];

const Contact = () => {
  const heroRef = useScrollAnimation();
  const ref = useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", artworkType: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribe, setSubscribe] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [showSubscribeForm, setShowSubscribeForm] = useState(false);

  const SERVICE_ID = "service_spc8739";
  const ADMIN_TEMPLATE_ID = "template_ub95iyg";
  const USER_TEMPLATE_ID = "template_1nwxk99";
  const PUBLIC_KEY = "dZCiJoR3JdD0exoZl";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    setIsSubmitting(true);

    const templateParams = {
      name: form.name,
      email: form.email,
      artworkType: form.artworkType,
      message: form.message,
    };

    try {
      // Send admin notification email
      await emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParams, PUBLIC_KEY);

      // Send auto-reply to user
      await emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, templateParams, PUBLIC_KEY);

      toast({
        title: subscribe ? "Message Sent & Subscribed!" : "Message Sent!",
        description: subscribe
          ? "Thank you for reaching out and subscribing to updates 🎨"
          : "Thank you for reaching out. We'll get back to you within 24–48 hours 🎨",
      });

      setForm({ name: "", email: "", artworkType: "", message: "" });
      setSubscribe(false);
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribeEmail) {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to Plantiva updates and offers 🌿",
      });
      setSubscribeEmail("");
      setShowSubscribeForm(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="gradient-section py-20 sm:py-28 lg:py-32">
        <div className="section-container text-center max-w-3xl mx-auto" ref={heroRef}>
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 mb-6">
            <Mail className="w-4 h-4 text-primary" />
            <span className="font-body text-sm font-bold text-primary uppercase tracking-widest">Get in Touch</span>
          </div>
          <h1 className="section-title text-4xl sm:text-5xl lg:text-6xl">Contact & Subscribe</h1>
          <p className="section-subtitle mt-5 text-lg sm:text-xl leading-relaxed">Have a question or want to stay updated? Reach out to us or subscribe for the latest from Plantiva.</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background">
        <div className="section-container" ref={ref}>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-card border border-border/50 rounded-2xl p-8 sm:p-10 shadow-sm">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-body text-sm font-bold text-foreground mb-1.5 block">Your Name</label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="rounded-xl h-12 px-4 bg-background border-border focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-bold text-foreground mb-1.5 block">Email Address</label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="rounded-xl h-12 px-4 bg-background border-border focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-bold text-foreground mb-1.5 block">Artwork Type</label>
                  <Input
                    type="text"
                    placeholder="e.g., Portrait, Landscape, Abstract"
                    value={form.artworkType}
                    onChange={(e) => setForm({ ...form, artworkType: e.target.value })}
                    className="rounded-xl h-12 px-4 bg-background border-border focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-bold text-foreground mb-1.5 block">Your Message</label>
                  <Textarea
                    placeholder="Tell us about your query, feedback, or what plants you're looking for..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="rounded-xl px-4 py-3 bg-background min-h-[120px] border-border focus:border-primary transition-colors"
                  />
                </div>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={subscribe}
                    onChange={(e) => setSubscribe(e.target.checked)}
                    className="w-5 h-5 rounded border-border text-primary focus:ring-primary accent-primary cursor-pointer"
                  />
                  <span className="font-body text-sm text-foreground/65 group-hover:text-foreground transition-colors">
                    Subscribe to receive updates about new plants, offers & gardening tips
                  </span>
                </label>
                <Button type="submit" size="lg" disabled={isSubmitting} className="rounded-full w-full h-12 text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <Send className="w-4 h-4 mr-2" /> {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>

              {/* Separate Subscribe */}
              <div className="mt-8 pt-8 border-t border-border/50">
                {!showSubscribeForm ? (
                  <div className="text-center">
                    <p className="font-body text-sm text-foreground/60 mb-3">Want to receive updates and exclusive offers?</p>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="lg" 
                      className="rounded-full w-full h-12 text-base font-bold border-2 hover:scale-[1.02] transition-all duration-300"
                      onClick={() => setShowSubscribeForm(true)}
                    >
                      <Bell className="w-4 h-4 mr-2" /> Subscribe to Our Newsletter
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <h3 className="font-display text-lg font-semibold text-foreground">Subscribe for Updates</h3>
                    <p className="font-body text-sm text-foreground/60">Get the latest plants, offers & gardening tips delivered to your inbox.</p>
                    <div>
                      <label className="font-body text-sm font-bold text-foreground mb-1.5 block">Email Address</label>
                      <Input
                        type="email"
                        placeholder="Enter your email for subscription"
                        value={subscribeEmail}
                        onChange={(e) => setSubscribeEmail(e.target.value)}
                        required
                        className="rounded-xl h-12 px-4 bg-background border-border focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="flex gap-3">
                      <Button 
                        type="button" 
                        variant="ghost" 
                        className="flex-1 rounded-full h-12 font-bold"
                        onClick={() => setShowSubscribeForm(false)}
                      >
                        Cancel
                      </Button>
                      <Button type="submit" className="flex-1 rounded-full h-12 text-base font-bold shadow-md hover:shadow-lg transition-all duration-300">
                        Subscribe
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div className="space-y-3">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-5 rounded-xl border border-border/50 hover:bg-accent/40 hover:shadow-sm transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-foreground">{item.label}</h4>
                      <p className="font-body text-foreground/60 text-sm mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl overflow-hidden h-[300px] border border-border/50 shadow-sm">
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
