import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { EXTERNAL_LINKS } from "@/config/platform";
import ahLogo from "@/assets/ah-monogram-flyer.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/learning" },
  { label: "Resources", href: "/resources" },
  { label: "Shop", href: "/shop" },
  { label: "Workshops", href: "/workshops" },
  { label: "About", href: "/#about" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:bg-card focus:p-3 focus:text-primary">Skip to content</a>
      <div className="container mx-auto px-5 lg:px-10 flex items-center justify-between gap-5 h-20">
        <Link to="/" className="flex items-center shrink-0" aria-label="Akili Hight home">
          <img
            src={ahLogo}
            alt="Akili Hight"
            className="h-10 md:h-11 w-auto object-contain"
          />
        </Link>
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-normal text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild><a
            href={EXTERNAL_LINKS.introCall}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Free Intro Call
          </a></Button>
        </nav>
        <Button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          variant="ghost" size="icon" className="lg:hidden h-11 w-11"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile navigation" className="lg:hidden max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-border/50 bg-background">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-normal text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/newsletter" onClick={() => setOpen(false)} className="py-2.5 text-sm text-primary">The Everyday AI Digest</Link>
            <Button asChild><a
              href={EXTERNAL_LINKS.introCall}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              Book a Free Intro Call
            </a></Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
