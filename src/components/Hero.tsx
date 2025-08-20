import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/6e466add-0abd-40dd-a473-2805ede368fb.png')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
              <span className="text-background font-bold text-3xl">N</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4">
              Nex<span className="text-primary">LNG</span>
            </h1>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-light text-nexlng-muted mb-6">
            Corporate Introduction
          </h2>
          
          <p className="text-xl md:text-2xl text-primary font-medium mb-12 leading-relaxed">
            "Empowering Energy, Illuminating Futures"
          </p>
          
          <p className="text-lg text-nexlng-muted mb-12 max-w-3xl mx-auto leading-relaxed">
            Leading the future of energy with cutting-edge LNG technology, offshore operations, 
            and sustainable solutions that power tomorrow's world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-accent text-background hover:shadow-glow">
              Explore Our Solutions
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-background">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;