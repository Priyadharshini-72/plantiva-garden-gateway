import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About Garden", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => (
  <footer className="bg-foreground py-14">
    <div className="section-container">
      <div className="grid sm:grid-cols-3 gap-10 items-start">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <Leaf className="w-5 h-5 text-secondary" />
            <span className="font-display text-xl font-bold text-primary-foreground">Plantiva</span>
          </Link>
          <p className="font-body text-sm text-primary-foreground/50 leading-relaxed">
            Bringing nature closer to you since 2020.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="font-body text-sm text-primary-foreground/50 hover:text-secondary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">Follow Us</h4>
          <div className="flex gap-4">
            {["Facebook", "Instagram", "Twitter"].map((platform) => (
              <a key={platform} href="#" className="font-body text-sm text-primary-foreground/50 hover:text-secondary transition-colors">
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-10 pt-8 text-center">
        <p className="font-body text-sm text-primary-foreground/35">
          © 2026 Plantiva Botanical Garden. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
