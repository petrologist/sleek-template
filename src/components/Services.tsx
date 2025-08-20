import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "LNG Operations",
      description: "Comprehensive liquefied natural gas processing, storage, and distribution solutions with industry-leading efficiency and safety standards.",
      icon: "⚡"
    },
    {
      title: "Offshore Drilling",
      description: "Advanced offshore drilling operations utilizing state-of-the-art platforms and environmental protection technologies.",
      icon: "🏗️"
    },
    {
      title: "Energy Consulting",
      description: "Strategic energy consulting services to optimize operations, reduce costs, and implement sustainable energy solutions.",
      icon: "📊"
    },
    {
      title: "Transportation & Logistics",
      description: "Specialized LNG transportation services with modern tanker fleets and optimized logistics networks worldwide.",
      icon: "🚢"
    },
    {
      title: "Infrastructure Development",
      description: "Design and construction of energy infrastructure including terminals, pipelines, and processing facilities.",
      icon: "🏭"
    },
    {
      title: "Environmental Solutions",
      description: "Innovative environmental protection and sustainability initiatives that minimize ecological impact.",
      icon: "🌱"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-nexlng-muted max-w-3xl mx-auto">
            Comprehensive energy solutions tailored to meet the evolving needs of 
            the global energy market with uncompromising quality and reliability.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-nexlng-muted leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;