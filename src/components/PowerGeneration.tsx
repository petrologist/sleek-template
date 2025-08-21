import { Card, CardContent } from "@/components/ui/card";

const PowerGeneration = () => {
  return (
    <section id="power-generation" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Gas Utilities and <span className="text-primary">LNG Power Generation</span>
          </h2>
          <p className="text-xl text-nexlng-muted max-w-4xl mx-auto">
            Comprehensive power generation solutions including combined heat and power systems, 
            boiler conversions, and integrated LNG logistics for cleaner, more efficient energy.
          </p>
        </div>
        
        <div className="space-y-16">
          {/* LNG Power Generation & CHP */}
          <Card className="bg-card border-border shadow-elegant">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block bg-primary text-background px-4 py-2 text-sm rounded-full mb-6 font-semibold">
                    Power Generation
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    LNG Power Generation & Combined Heat and Power (CHP)
                  </h3>
                  <p className="text-nexlng-muted leading-relaxed mb-6">
                    When you're ready to embrace cleaner, more sustainable, and cost-effective energy, NexLNG is here to help. 
                    Whether you're looking to <span className="text-primary font-semibold">convert your existing power generation systems to liquefied natural gas (LNG)</span> 
                    or <span className="text-primary font-semibold">build new gas-fired facilities from the ground up</span>, 
                    we deliver customized solutions tailored to your unique needs.
                  </p>
                  <p className="text-nexlng-muted leading-relaxed mb-6">
                    At NexLNG, we specialize in designing and implementing <span className="text-primary font-semibold">LNG power-generation solutions</span> 
                    that maximize efficiency and minimize costs. Our expertise in <span className="text-primary font-semibold">LNG combined heat and power (CHP)</span> 
                    plants ensures that your operations run at peak performance, reducing emissions while enhancing energy reliability.
                  </p>
                  <p className="text-nexlng-muted leading-relaxed">
                    From feasibility studies to turnkey installations, we work closely with you to create a solution that aligns with your goals and drives your success. 
                    With NexLNG, you're not just adopting cleaner energy—you're investing in a sustainable future.
                  </p>
                </div>
                <div className="bg-secondary p-8 rounded-lg border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-6">Our Expertise</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-nexlng-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">System Conversion</h5>
                        <p className="text-nexlng-muted text-sm">Convert existing power generation to LNG</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-nexlng-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">New Installations</h5>
                        <p className="text-nexlng-muted text-sm">Build gas-fired facilities from the ground up</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-nexlng-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">CHP Systems</h5>
                        <p className="text-nexlng-muted text-sm">Combined heat and power for maximum efficiency</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-nexlng-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">Turnkey Solutions</h5>
                        <p className="text-nexlng-muted text-sm">From feasibility studies to full implementation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* LNG Boiler Conversion */}
          <Card className="bg-card border-border shadow-elegant">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block bg-nexlng-green text-background px-4 py-2 text-sm rounded-full mb-6 font-semibold">
                    Boiler Conversion
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    LNG Boiler Conversion
                  </h3>
                  <p className="text-nexlng-muted leading-relaxed mb-6">
                    At NexLNG, we're dedicated to helping your business achieve greater efficiency, cost savings, and sustainability by converting your 
                    commercial and industrial facilities to operate on <span className="text-primary font-semibold">liquefied natural gas (LNG)</span>. 
                    Whether you're running <span className="text-primary font-semibold">mills, factories</span>, or any other operation, transitioning to LNG—
                    <span className="text-primary font-semibold">including boiler conversions</span>—is a smart, forward-thinking choice that delivers 
                    immediate and long-term benefits.
                  </p>
                  <p className="text-nexlng-muted leading-relaxed mb-6">
                    We don't just provide LNG solutions—we deliver <span className="text-primary font-semibold">customized, end-to-end systems</span> designed to meet your specific needs. 
                    From <span className="text-primary font-semibold">LNG boiler conversions</span> to full facility upgrades, our team manages every step of the process, 
                    ensuring a smooth transition to cleaner, more efficient operations.
                  </p>
                  <p className="text-nexlng-muted leading-relaxed mb-6">
                    With NexLNG, you can focus on growing your business while we handle the details, helping you reduce costs, improve efficiency, and lower your environmental footprint.
                  </p>
                  <p className="text-nexlng-muted leading-relaxed">
                    Choosing NexLNG means choosing a partner committed to your success. Let us help you unlock the power of LNG and transform the way you operate.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="bg-background p-6 rounded-lg border border-border">
                    <h4 className="text-lg font-bold text-foreground mb-4">Industrial Applications</h4>
                    <ul className="space-y-2 text-nexlng-muted">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span> 
                        Manufacturing facilities
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span> 
                        Processing plants
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span> 
                        Commercial buildings
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span> 
                        Industrial complexes
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-background p-6 rounded-lg border border-border">
                    <h4 className="text-lg font-bold text-foreground mb-4">Benefits</h4>
                    <ul className="space-y-2 text-nexlng-muted">
                      <li className="flex items-start">
                        <span className="text-nexlng-green mr-2">•</span> 
                        Reduced operating costs
                      </li>
                      <li className="flex items-start">
                        <span className="text-nexlng-green mr-2">•</span> 
                        Enhanced efficiency
                      </li>
                      <li className="flex items-start">
                        <span className="text-nexlng-green mr-2">•</span> 
                        Lower emissions
                      </li>
                      <li className="flex items-start">
                        <span className="text-nexlng-green mr-2">•</span> 
                        Environmental compliance
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vaporizer Solutions */}
          <Card className="bg-card border-border shadow-elegant">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <div className="inline-block bg-nexlng-green text-background px-4 py-2 text-sm rounded-full mb-6 font-semibold">
                  Vaporizer Solutions
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Cryogenic Vaporizers
                </h3>
                <p className="text-nexlng-muted leading-relaxed max-w-4xl mx-auto">
                  NexLNG offers a <span className="text-primary font-semibold">full range of cryogenic vaporizers</span> designed to meet the 
                  diverse needs of industries working with air gases, LNG, CO2, helium, and hydrogen. Whatever your application, 
                  we provide the precise vaporizing solution to match the unique demands of your site.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-background p-6 rounded-lg border border-border text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Ambient Air Vaporizers</h4>
                  <p className="text-nexlng-muted text-sm">Energy-efficient atmospheric vaporization</p>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-border text-center">
                  <div className="w-16 h-16 bg-nexlng-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-nexlng-green rounded-full"></div>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">ThermaBlock Electric</h4>
                  <p className="text-nexlng-muted text-sm">Precise electric heating systems</p>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-border text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-accent rounded-full"></div>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Circulating Water</h4>
                  <p className="text-nexlng-muted text-sm">Water-based heat exchange systems</p>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-border text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Water Bath Vaporizers</h4>
                  <p className="text-nexlng-muted text-sm">High-capacity water bath systems</p>
                </div>
              </div>
              
              <div className="mt-12 bg-secondary p-8 rounded-lg border border-border">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-4">Versatility & Reliability</h4>
                    <p className="text-nexlng-muted mb-4">
                      Our vaporizers are built for <span className="text-primary font-semibold">versatility and reliability</span>, 
                      making them the industry standard for a wide range of applications.
                    </p>
                    <ul className="space-y-2 text-nexlng-muted">
                      <li className="flex items-start">
                        <span className="text-nexlng-green mr-2">•</span> 
                        Standalone units to integrated systems
                      </li>
                      <li className="flex items-start">
                        <span className="text-nexlng-green mr-2">•</span> 
                        Storage and transfer piping solutions
                      </li>
                      <li className="flex items-start">
                        <span className="text-nexlng-green mr-2">•</span> 
                        Optimal performance and efficiency
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-4">Applications</h4>
                    <p className="text-nexlng-muted mb-4">
                      Whether you're handling LNG or specialized gases, our vaporizers deliver the flexibility and precision you need.
                    </p>
                    <ul className="space-y-2 text-nexlng-muted">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span> 
                        LNG regasification
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span> 
                        Industrial gas applications
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span> 
                        Specialized gas handling
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* LNG Storage & Logistics */}
          <Card className="bg-card border-border shadow-elegant">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block bg-accent text-background px-4 py-2 text-sm rounded-full mb-6 font-semibold">
                    Storage & Logistics
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    LNG Supply & Logistics
                  </h3>
                  <p className="text-nexlng-muted leading-relaxed mb-6">
                    Whether you're a large corporation or a small business, located in a bustling city or a remote town, NexLNG's 
                    <span className="text-primary font-semibold"> integrated LNG logistics</span> chain ensures reliable and efficient delivery of 
                    <span className="text-primary font-semibold"> liquefied natural gas (LNG)</span> to your doorstep.
                  </p>
                  <p className="text-nexlng-muted leading-relaxed mb-6">
                    No matter where your business operates, you can count on our proven logistics network to provide the energy you need, when you need it. 
                    Already using natural gas or another energy source? We'll help you transition to LNG seamlessly, with 
                    <span className="text-primary font-semibold"> no disruption to your operations</span>.
                  </p>
                  <p className="text-nexlng-muted leading-relaxed">
                    Our team ensures a smooth switch, allowing you to start enjoying the benefits of LNG—cleaner energy, cost savings, and improved efficiency—without any downtime. 
                    At NexLNG, we're committed to making LNG accessible and hassle-free for businesses of all sizes.
                  </p>
                </div>
                <div className="bg-secondary p-8 rounded-lg border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-6">Storage Solutions</h4>
                  <p className="text-nexlng-muted mb-4">
                    NexLNG provide versatile storage solutions for Liquefied Natural Gas (LNG), including horizontal isotanks and vertical tanks, 
                    designed to meet diverse customer requirements.
                  </p>
                  <p className="text-nexlng-muted mb-6">
                    Constructed from stainless steel with protective coatings, our isotanks and vertical tanks offer superior resistance to leaks. 
                    Each cylindrical unit features a top manhole and a bottom valve for easy drainage and cleaning.
                  </p>
                  <div className="bg-background p-4 rounded-lg border border-border">
                    <h5 className="font-semibold text-foreground mb-2">Key Features</h5>
                    <ul className="text-sm text-nexlng-muted space-y-1">
                      <li>• Stringent inspections and certifications</li>
                      <li>• International standards compliance</li>
                      <li>• Scalable and monitored performance</li>
                      <li>• Superior leak resistance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PowerGeneration;