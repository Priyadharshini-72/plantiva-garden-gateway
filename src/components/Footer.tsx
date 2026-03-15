import { Leaf } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Plants", href: "#plants" },
  { label: "Flowers", href: "#flowers" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="section-container">
      <div className="grid sm:grid-cols-3 gap-8 items-start">
        {/* Logo */}
        <div>
          <a href="#home" className="flex items-center gap-2 mb-4">
            <Leaf className="w-6 h-6 text-secondary" />
            <span className="font-display text-xl font-bold text-primary-foreground">Plantiva</span>
          </a>
          <p className="font-body text-sm text-primary-foreground/60">
            Bringing nature closer to you since 2020.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="font-body text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">Follow Us</h4>
          <div className="flex gap-4">
            {["Facebook", "Instagram", "Twitter"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="font-body text-sm text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
        <p className="font-body text-sm text-primary-foreground/40">
          © 2026 Plantiva Botanical Garden. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
