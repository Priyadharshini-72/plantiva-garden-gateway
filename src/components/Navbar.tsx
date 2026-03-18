import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Leaf, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About Garden", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background backdrop-blur-lg shadow-lg border-b border-border"
          : "bg-background/95 backdrop-blur-sm"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 sm:h-20">
        <Link to="/" className="flex items-center gap-2.5 group">
          <Leaf className="w-6 h-6 text-primary transition-transform duration-500 group-hover:rotate-12" />
          <span className="font-display text-2xl sm:text-[1.75rem] font-bold text-primary tracking-tight">
            Plantiva
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1.5">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-foreground/70 hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          className="md:hidden text-primary-foreground p-2 rounded-lg hover:bg-primary-foreground/15 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-primary/98 backdrop-blur-lg border-t border-primary-foreground/10 animate-fade-in-up">
          <ul className="flex flex-col py-3 px-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl text-sm font-bold tracking-wide transition-colors ${
                      isActive
                        ? "bg-primary-foreground text-primary"
                        : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/15"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
