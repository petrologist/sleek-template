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
            Specializing in Micro and Mini LNG Solutions
          </h2>
          
          <p className="text-xl md:text-2xl text-primary font-medium mb-8 leading-relaxed">
            "Empowering Energy, Illuminating Futures"
          </p>
          
          <p className="text-lg text-nexlng-muted mb-6 max-w-4xl mx-auto leading-relaxed">
            A cutting-edge energy solutions company under the <span className="text-primary font-semibold">Vertis Technology group</span>, 
            founded in 2024 to revolutionize the way natural gas is processed, stored, and transported.
          </p>
          
          <p className="text-base text-nexlng-muted mb-12 max-w-3xl mx-auto leading-relaxed">
            At the heart of NexLNG's innovation is its proprietary cryogenic technology, which not only removes 
            high concentrations of CO₂, H₂S and condensates from natural gas streams through its 
            <span className="text-nexlng-green font-semibold"> gas conditioning and treatment technology</span>, 
            but also converts the remaining gas into LNG.
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