import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "123 Garden Lane, Green Valley, Bengaluru 560001" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "hello@plantiva.in" },
  { icon: Clock, label: "Hours", value: "Mon – Sat: 9 AM – 7 PM | Sun: 10 AM – 5 PM" },
];

const Contact = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-16 sm:py-24 bg-background min-h-screen">
      <div className="section-container" ref={ref}>
        <div className="text-center mb-14">
          <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="section-title">Visit Us</h1>
          <p className="section-subtitle mt-4">We'd love to welcome you to Plantiva.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
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
          <div className="rounded-2xl overflow-hidden h-[380px] border border-border/50">
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
    </section>
  );
};

export default Contact;
