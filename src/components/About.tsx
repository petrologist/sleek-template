import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">NexLNG</span>
          </h2>
          <p className="text-xl text-nexlng-muted max-w-3xl mx-auto">
            At the forefront of energy innovation, we deliver world-class LNG solutions 
            that bridge today's energy needs with tomorrow's sustainable future.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Mission</h3>
            <p className="text-lg text-nexlng-muted mb-6 leading-relaxed">
              To be the global leader in sustainable energy solutions, providing reliable, 
              efficient, and environmentally responsible LNG operations that power communities 
              and industries worldwide.
            </p>
            <p className="text-lg text-nexlng-muted leading-relaxed">
              We combine decades of expertise with cutting-edge technology to deliver 
              energy solutions that meet today's demands while building a cleaner tomorrow.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-secondary border-border shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-nexlng-muted">Years Experience</div>
              </CardContent>
            </Card>
            <Card className="bg-secondary border-border shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-nexlng-muted">Global Projects</div>
              </CardContent>
            </Card>
            <Card className="bg-secondary border-border shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-nexlng-muted">Countries Served</div>
              </CardContent>
            </Card>
            <Card className="bg-secondary border-border shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-nexlng-muted">Safety Record</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;