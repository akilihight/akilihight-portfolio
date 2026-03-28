import akiliLogo from "@/assets/akili-logo.png";

const Header = () => (
  <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
    <div className="container mx-auto px-6 lg:px-16 flex items-center justify-between h-16">
      <a href="#" className="block">
        <img
          src={akiliLogo}
          alt="Akili Hight"
          className="h-8 w-auto"
          width={200}
          height={40}
        />
      </a>
      <nav className="hidden md:flex items-center gap-8">
        <a href="#offers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Offers</a>
        <a href="#ecosystem" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Ecosystem</a>
        <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
        <a href="#cta" className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          Book a Session
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
