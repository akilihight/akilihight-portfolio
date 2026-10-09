const navLinks = [
  { label: "How I Can Help", href: "/#how-i-help" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#cta" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Shop", href: "/shop" },
  { label: "Resources", href: "/resources" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "AI Profile", href: "/ai-profile" },
];

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/akilihight" },
  { label: "GitHub", href: "https://github.com/AkiliHight" },
  { label: "YouTube", href: "https://youtube.com/@lucidfuturism" },
];

const Footer = () => (
  <footer className="border-t border-border/50 py-10">
    <div className="container mx-auto px-5 lg:px-16 max-w-5xl flex flex-col gap-6">
      <p className="text-sm text-muted-foreground">© 2026 Akili Hight</p>
      <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {l.label}
          </a>
        ))}
      </nav>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {social.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
