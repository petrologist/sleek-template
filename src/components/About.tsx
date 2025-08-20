import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Core <span className="text-primary">Values</span>
          </h2>
          <p className="text-xl text-nexlng-muted max-w-3xl mx-auto">
            Founded in 2024, NexLNG emerged as a beacon of innovation and sustainability 
            in the global energy industry, transforming stranded gas resources into valuable, clean energy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Vision</h3>
              </div>
              <p className="text-lg text-nexlng-muted leading-relaxed">
                To lead the global energy transition by pioneering innovative, small-scale LNG solutions that 
                <span className="text-primary font-semibold"> transform underutilised natural gas resources and flare gas into sustainable energy</span>, 
                empowering communities and driving a cleaner, brighter future.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-nexlng-green rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-lg text-nexlng-muted leading-relaxed">
                To deliver cutting-edge micro and mini LNG solutions that enable small to medium-scale natural gas producers 
                to unlock the full potential of their resources, including flare gas recovery. Through our proprietary cryogenic 
                technology and modular systems, we provide efficient, scalable, and environmentally responsible energy solutions 
                that reduce emissions, eliminate flaring, and create value for our clients and the planet.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-secondary border-border shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">2024</div>
                <div className="text-sm text-nexlng-muted">Founded</div>
              </CardContent>
            </Card>
            <Card className="bg-secondary border-border shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <div className="text-sm text-nexlng-muted">Pilot LNG Plant</div>
              </CardContent>
            </Card>
            <Card className="bg-secondary border-border shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">CO₂</div>
                <div className="text-sm text-nexlng-muted">Removal Technology</div>
              </CardContent>
            </Card>
            <Card className="bg-secondary border-border shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-nexlng-muted">Innovation Focus</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;