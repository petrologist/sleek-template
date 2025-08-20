import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Flare Gas Recovery & Monetization",
      description: "Transforming waste gas into LNG while meeting regulatory compliance, converting flare gas from onshore oil fields and industrial facilities into clean, transportable LNG.",
      icon: "🔥",
      highlight: "Environmental Impact"
    },
    {
      title: "Scalable & Modular LNG Systems",
      description: "Providing mobile, cost-efficient LNG process and facility for remote and stranded onshore/offshore locations with rapid deployment capabilities.",
      icon: "📦",
      highlight: "Modular Design"
    },
    {
      title: "LNG Conversion Solutions",
      description: "Converting existing power generation and boiler systems to LNG-fueled operations, delivering customized end-to-end systems for cleaner energy.",
      icon: "⚡",
      highlight: "Clean Energy"
    },
    {
      title: "Gas Conditioning & Treatment Facilities",
      description: "Offering various sour & heavy gas removal and filtration systems with proprietary cryogenic technology for high CO₂ and condensate removal.",
      icon: "🏭",
      highlight: "Advanced Technology"
    },
    {
      title: "Cryogenic Vaporizers",
      description: "Delivering a full range of vaporizers for seamless LNG regasification and industrial applications with superior efficiency and reliability.",
      icon: "❄️",
      highlight: "Regasification"
    },
    {
      title: "LNG Storage & Logistics",
      description: "Integrated LNG logistics chain ensuring reliable delivery of liquefied natural gas with versatile storage solutions including horizontal isotanks and vertical tanks.",
      icon: "🚚",
      highlight: "Supply Chain"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-xl text-nexlng-muted max-w-4xl mx-auto">
            NexLNG provides innovative LNG solutions that address the industry's most pressing challenges, 
            enabling businesses to transition towards cost-effective, sustainable, and scalable energy systems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="inline-block bg-primary text-background px-3 py-1 text-sm rounded-full mb-4 font-semibold">
                  {service.highlight}
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