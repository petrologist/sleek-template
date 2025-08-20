const Footer = () => {
  return (
    <footer className="bg-nexlng-navy py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-background font-bold">N</span>
              </div>
              <span className="text-xl font-bold text-foreground">NexLNG</span>
            </div>
            <p className="text-nexlng-muted text-sm leading-relaxed">
              Empowering energy, illuminating futures through innovative LNG solutions 
              and sustainable energy practices.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-nexlng-muted">
              <li><a href="#" className="hover:text-primary transition-colors">LNG Operations</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Offshore Drilling</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Energy Consulting</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Transportation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-nexlng-muted">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">News</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-nexlng-muted">
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-nexlng-muted text-sm">
            © 2024 NexLNG. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-nexlng-muted hover:text-primary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-nexlng-muted hover:text-primary text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-nexlng-muted hover:text-primary text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;