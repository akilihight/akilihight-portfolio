import { useState } from "react";
import { Menu, X } from "lucide-react";
import ahLogo from "@/assets/ah-logo.png.asset.json";

const navItems = [
  { label: "How I Can Help", href: "/#how-i-help" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#cta" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-16 flex items-center justify-between h-20">
        <a href="/" className="flex items-center" aria-label="Akili Hight — Home">
          <img
            src={ahLogo.url}
            alt="Akili Hight"
            className="h-10 md:h-11 w-auto object-contain"
          />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-normal text-muted-foreground/70 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://calendly.com/hightnetworksconsulting/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold shadow-sm text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book a Free Intro Call
          </a>
        </nav>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="md:hidden border-t border-border/50 bg-background">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-normal text-muted-foreground/70 hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://calendly.com/hightnetworksconsulting/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Book a Free Intro Call
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
