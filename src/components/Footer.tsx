import { Link } from "react-router-dom";
import { Leaf, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About Garden", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

const Footer = () => (
  <footer className="bg-foreground py-16">
    <div className="section-container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <Leaf className="w-5 h-5 text-secondary" />
            <span className="font-display text-xl font-bold text-primary-foreground">Plantiva</span>
          </Link>
          <p className="font-body text-sm text-primary-foreground/60 leading-relaxed mb-4">
            Nurturing nature, one plant at a time. 🌿
          </p>
          <p className="font-body text-xs text-primary-foreground/40 italic">
            "Where every leaf tells a story"
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-lg font-semibold text-primary-foreground mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="font-body text-sm text-primary-foreground/55 hover:text-secondary transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-secondary/50" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-display text-lg font-semibold text-primary-foreground mb-5">Visit Us</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
              <span className="font-body text-sm text-primary-foreground/55">123 Garden Lane, Green Valley, Bengaluru</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
              <span className="font-body text-sm text-primary-foreground/55">+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
              <span className="font-body text-sm text-primary-foreground/55">hello@plantiva.in</span>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-display text-lg font-semibold text-primary-foreground mb-5">Connect With Us</h4>
          <div className="flex gap-3 mb-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary/30 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 text-primary-foreground/60 group-hover:text-secondary transition-colors" />
              </a>
            ))}
          </div>
          <p className="font-body text-xs text-primary-foreground/40">
            Follow us for plant care tips, new arrivals & seasonal offers.
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm text-primary-foreground/35">
          © 2026 Plantiva Botanical Garden. All rights reserved.
        </p>
        <p className="font-body text-xs text-primary-foreground/25">
          Crafted with 🌱 for plant lovers everywhere
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
