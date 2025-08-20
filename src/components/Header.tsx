import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
            <span className="text-background font-bold text-xl">N</span>
          </div>
          <span className="text-2xl font-bold text-foreground">NexLNG</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </div>
        
        <Button variant="default" className="hidden md:flex bg-gradient-accent text-background hover:shadow-glow">
          Get Started
        </Button>
      </nav>
    </header>
  );
};

export default Header;