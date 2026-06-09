import ahLogo from "@/assets/ah-logo.png.asset.json";

const Header = () => (
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
        <a href="/#how-i-help" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How I Help</a>
        <a href="/workshops" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Workshops</a>
        <a href="/#ecosystem" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Ecosystem</a>
        <a href="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
        <a href="https://calendly.com/hightnetworksconsulting/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          Book a Free Intro Call
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
