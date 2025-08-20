import { Card, CardContent } from "@/components/ui/card";

const LNGSolutions = () => {
  return (
    <section id="lng-solutions" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            LNG <span className="text-primary">Liquefaction</span>
          </h2>
          <p className="text-xl text-nexlng-muted max-w-3xl mx-auto">
            Comprehensive liquefaction solutions for marginal and stranded gas field development, 
            both onshore and offshore applications.
          </p>
        </div>
        
        <div className="space-y-16">
          {/* Offshore Solutions */}
          <Card className="bg-background border-border shadow-elegant">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block bg-nexlng-green text-background px-4 py-2 text-sm rounded-full mb-6 font-semibold">
                    Offshore Solutions
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    Marginal/Stranded Gas Field Development
                  </h3>
                  <p className="text-nexlng-muted leading-relaxed mb-6">
                    At NexLNG, we specialize in unlocking the potential of marginal and stranded offshore gas fields using a 
                    mobile or fixed production platform paired with an LNG Carrier repurposed as a Floating Storage Unit (FSU).
                  </p>
                  <p className="text-nexlng-muted leading-relaxed mb-6">
                    Our integrated system brings stranded gas to life by processing, liquefying, and storing LNG directly offshore. 
                    This eliminates the need for costly pipeline infrastructure and ensures rapid deployment to market.
                  </p>
                  <p className="text-nexlng-muted leading-relaxed">
                    Once processed and stored onboard the FSU, then transferred to LNG carriers for global distribution. With this 
                    model, NexLNG offers a scalable, low-footprint, and economically viable solution for remote offshore gas monetization.
                  </p>
                </div>
                <div className="bg-secondary p-8 rounded-lg border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-4">Key Benefits</h4>
                  <ul className="space-y-3 text-nexlng-muted">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span> 
                      Eliminates costly pipeline infrastructure
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span> 
                      Rapid deployment to market
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span> 
                      Scalable and economically viable
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span> 
                      Low environmental footprint
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Onshore Solutions */}
          <Card className="bg-background border-border shadow-elegant">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block bg-nexlng-green text-background px-4 py-2 text-sm rounded-full mb-6 font-semibold">
                    Onshore Solutions
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    Modular LNG Facilities
                  </h3>
                  <p className="text-nexlng-muted leading-relaxed mb-6">
                    NexLNG provides <span className="text-primary font-semibold">modular LNG facilities</span> designed to 
                    <span className="text-primary font-semibold"> monetise stranded and marginal onshore gas reserves</span>. 
                    These <span className="text-primary font-semibold">pre-engineered units</span> are 
                    <span className="text-primary font-semibold">fabricated offsite, transported to remote locations</span>, 
                    and <span className="text-primary font-semibold">rapidly commissioned to process and liquefy natural gas at source</span>.
                  </p>
                  <p className="text-nexlng-muted leading-relaxed mb-6">
                    <span className="text-primary font-semibold">Compact</span> and 
                    <span className="text-primary font-semibold">scalable for associated and non-associated gas</span>, 
                    our systems are ideal for <span className="text-primary font-semibold">regions lacking major infrastructure</span>, 
                    offering a <span className="text-primary font-semibold">cost-effective solution</span> to unlock 
                    <span className="text-primary font-semibold">previously uneconomical resources</span> while supporting 
                    <span className="text-primary font-semibold">local energy security</span> and 
                    <span className="text-primary font-semibold">cleaner fuel access</span>.
                  </p>
                  
                  <div className="bg-secondary p-6 rounded-lg border border-border">
                    <h4 className="text-lg font-bold text-foreground mb-4">Modular LNG Facility Sizes Offered:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-primary font-bold text-lg">Small</div>
                        <div className="text-nexlng-muted text-sm">5 – 15 MMSCFD</div>
                      </div>
                      <div className="text-center">
                        <div className="text-primary font-bold text-lg">Medium</div>
                        <div className="text-nexlng-muted text-sm">15 – 25 MMSCFD</div>
                      </div>
                      <div className="text-center">
                        <div className="text-primary font-bold text-lg">Large</div>
                        <div className="text-nexlng-muted text-sm">25 – 100 MMSCFD and above</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h4 className="text-lg font-bold text-foreground mb-4">Applications</h4>
                    <ul className="space-y-2 text-nexlng-muted">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span> 
                        Associated gas from oil fields
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span> 
                        Non-associated gas reserves
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span> 
                        Remote location deployment
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span> 
                        Infrastructure-limited regions  
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h4 className="text-lg font-bold text-foreground mb-4">Key Features</h4>
                    <ul className="space-y-2 text-nexlng-muted">
                      <li className="flex items-start">
                        <span className="text-nexlng-green mr-2">•</span> 
                        Pre-engineered modular design
                      </li>
                      <li className="flex items-start">
                        <span className="text-nexlng-green mr-2">•</span> 
                        Rapid commissioning
                      </li>
                      <li className="flex items-start">
                        <span className="text-nexlng-green mr-2">•</span> 
                        Compact and scalable
                      </li>
                      <li className="flex items-start">
                        <span className="text-nexlng-green mr-2">•</span> 
                        Cost-effective solution
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Flare Gas Recovery */}
          <Card className="bg-background border-border shadow-elegant">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block bg-destructive text-background px-4 py-2 text-sm rounded-full mb-6 font-semibold">
                    Flare Gas Recovery
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    Offshore Flare Gas Recovery System
                  </h3>
                  <p className="text-nexlng-muted leading-relaxed mb-6">
                    Our offshore flare gas recovery solution provides a game-changing method to curb emissions and harness previously wasted energy. 
                    By utilizing floating barges fitted with modular processing units and ISO LNG tank arrays, NexLNG transforms flare gas into clean, usable LNG.
                  </p>
                  <p className="text-nexlng-muted leading-relaxed mb-6">
                    This mobile, rapidly deployable system minimizes environmental impact while generating commercial returns from gas that would 
                    otherwise be burned off. With this innovation, NexLNG empowers offshore operators to meet ESG targets and create sustainable 
                    energy solutions from existing operations.
                  </p>
                  <p className="text-nexlng-muted leading-relaxed">
                    NexLNG offers a transformative solution to <span className="text-primary font-semibold">recover and monetise flare gas</span> 
                    from <span className="text-primary font-semibold">onshore oil fields</span> and 
                    <span className="text-primary font-semibold">industrial facilities</span> that produce associated or process gas.
                  </p>
                </div>
                <div className="bg-secondary p-8 rounded-lg border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-6">System Benefits</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">Immediate Emissions Reduction</h5>
                        <p className="text-nexlng-muted text-sm">Eliminate flaring and reduce environmental impact</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">New Revenue Streams</h5>
                        <p className="text-nexlng-muted text-sm">Transform waste into valuable clean energy products</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">ESG Compliance</h5>
                        <p className="text-nexlng-muted text-sm">Meet environmental regulations and achieve ESG goals</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">Rapid Deployment</h5>
                        <p className="text-nexlng-muted text-sm">Mobile systems for quick installation and operation</p>
                      </div>
                    </div>
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

export default LNGSolutions;