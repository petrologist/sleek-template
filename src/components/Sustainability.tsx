import { Card, CardContent } from "@/components/ui/card";

const Sustainability = () => {
  return (
    <section id="sustainability" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sustainability & <span className="text-nexlng-green">Impact</span>
          </h2>
          <p className="text-xl text-nexlng-muted max-w-4xl mx-auto">
            NexLNG is dedicated to reducing greenhouse gas emissions and promoting sustainable energy solutions through LNG adoption.
          </p>
        </div>
        
        <div className="space-y-16">
          {/* Sustainability Goals */}
          <Card className="bg-card border-border shadow-elegant">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Key Sustainability Targets
                </h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="bg-primary/10 p-8 rounded-lg border border-primary/20 mb-6">
                    <div className="text-4xl font-bold text-primary mb-2">01</div>
                    <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-8 h-8 bg-primary rounded-full"></div>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">
                    Cleaner Industrial & Power Generation
                  </h4>
                  <p className="text-nexlng-muted">
                    Enable industries to shift from diesel and coal to LNG, significantly 
                    reducing emissions and improving energy efficiency.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-nexlng-green/10 p-8 rounded-lg border border-nexlng-green/20 mb-6">
                    <div className="text-4xl font-bold text-nexlng-green mb-2">02</div>
                    <div className="w-16 h-16 bg-nexlng-green/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-8 h-8 bg-nexlng-green rounded-full"></div>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">
                    Flare Gas Reduction
                  </h4>
                  <p className="text-nexlng-muted">
                    Target the recovery and monetization of 300 million scf of 
                    routine flare gas over the next five years, minimizing environmental 
                    impact and energy waste.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-accent/10 p-8 rounded-lg border border-accent/20 mb-6">
                    <div className="text-4xl font-bold text-accent mb-2">03</div>
                    <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-8 h-8 bg-accent rounded-full"></div>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">
                    Sustainable Energy Transition
                  </h4>
                  <p className="text-nexlng-muted">
                    Develop and implement low-carbon LNG solutions that align with global 
                    net-zero objectives.
                  </p>
                </div>
              </div>
              
              <div className="bg-primary text-background p-8 rounded-lg text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-background/20 rounded-full flex items-center justify-center mr-4">
                    <div className="w-6 h-6 bg-background rounded-full"></div>
                  </div>
                  <p className="text-lg font-semibold">
                    NexLNG is committed to playing a pivotal role in the global energy transition 
                    by providing cleaner, more sustainable fuel solutions for industries worldwide.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sustainable Energy Transition */}
          <Card className="bg-card border-border shadow-elegant">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block bg-accent text-background px-4 py-2 text-sm rounded-full mb-6 font-semibold">
                    Energy Transition
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    Sustainable Energy Transition
                  </h3>
                  <p className="text-nexlng-muted leading-relaxed mb-6">
                    NexLNG is accelerating the shift towards cleaner and more 
                    efficient energy systems by converting industrial and power 
                    generation facilities to LNG-fueled solutions, reducing reliance on 
                    conventional fossil fuels.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">Power Plant & Industrial Conversions</h5>
                        <p className="text-nexlng-muted text-sm">Retrofitting existing diesel and coal-fired systems to operate on LNG, cutting CO2 emissions by up to 30%.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">Modular LNG Infrastructure</h5>
                        <p className="text-nexlng-muted text-sm">Deploying scalable LNG production and supply systems to ensure energy security and flexibility for upstream operators and industrial users.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">Net-Zero Commitments</h5>
                        <p className="text-nexlng-muted text-sm">Supporting corporate and national sustainability goals by providing a low-carbon alternative that aligns with global energy transition initiatives.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                        <div className="w-4 h-4 bg-primary rounded-full"></div>
                      </div>
                      <p className="text-primary text-sm font-semibold">
                        Through innovative LNG solutions, NexLNG is enabling industries to meet emissions targets as well 
                        as unlocking unrealized gas reserves while ensuring long-term energy security, efficiency and cost 
                        savings.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-secondary p-8 rounded-lg border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-6">Transition Benefits</h4>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-2">30%</div>
                      <p className="text-nexlng-muted text-sm">CO2 emissions reduction compared to conventional fuels</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-background p-4 rounded-lg border border-border text-center">
                        <div className="text-lg font-bold text-primary mb-1">⚡</div>
                        <p className="text-nexlng-muted text-xs">Enhanced Efficiency</p>
                      </div>
                      <div className="bg-background p-4 rounded-lg border border-border text-center">
                        <div className="text-lg font-bold text-nexlng-green mb-1">💰</div>
                        <p className="text-nexlng-muted text-xs">Cost Savings</p>
                      </div>
                      <div className="bg-background p-4 rounded-lg border border-border text-center">
                        <div className="text-lg font-bold text-accent mb-1">🌱</div>
                        <p className="text-nexlng-muted text-xs">Environmental Compliance</p>
                      </div>
                      <div className="bg-background p-4 rounded-lg border border-border text-center">
                        <div className="text-lg font-bold text-primary mb-1">🔧</div>
                        <p className="text-nexlng-muted text-xs">Reliable Supply</p>
                      </div>
                    </div>
                    
                    <div className="bg-background p-4 rounded-lg border border-border">
                      <h5 className="font-semibold text-foreground mb-2 text-sm">Key Applications</h5>
                      <ul className="space-y-1 text-nexlng-muted text-xs">
                        <li>• Power generation facilities</li>
                        <li>• Industrial manufacturing</li>
                        <li>• Marine transportation</li>
                        <li>• Commercial heating systems</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Environmental Impact */}
          <Card className="bg-card border-border shadow-elegant">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block bg-nexlng-green text-background px-4 py-2 text-sm rounded-full mb-6 font-semibold">
                    Environmental Impact
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    Cleaner Industrial & Power Generation
                  </h3>
                  <p className="text-nexlng-muted leading-relaxed mb-6">
                    NexLNG is dedicated to supporting industries in transitioning 
                    from diesel and coal to LNG-fueled systems, significantly reducing 
                    emissions and improving energy efficiency.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-nexlng-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-nexlng-muted">
                        <span className="text-primary font-semibold">LNG reduces CO2 emissions by up to 30%</span> compared to 
                        conventional fuels.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-nexlng-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-nexlng-muted">
                        Industries benefit from lower operational costs, increased fuel 
                        efficiency, and compliance with environmental regulations.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-nexlng-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-nexlng-muted">
                        NexLNG provides turnkey LNG solutions, from feasibility 
                        studies to full-scale system conversion and implementation.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-secondary p-8 rounded-lg border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-6">CO2 Reduction Impact</h4>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-nexlng-green mb-2">30%</div>
                      <p className="text-nexlng-muted">Reduction in CO2 emissions compared to conventional fuels</p>
                    </div>
                    
                    <div className="bg-background p-4 rounded-lg border border-border">
                      <h5 className="font-semibold text-foreground mb-3">Benefits for Industries</h5>
                      <ul className="space-y-2 text-nexlng-muted text-sm">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span> 
                          Lower operational costs
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span> 
                          Increased fuel efficiency
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span> 
                          Environmental compliance
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span> 
                          Reduced maintenance needs
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Flare Gas Recovery */}
          <Card className="bg-card border-border shadow-elegant">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="bg-secondary p-8 rounded-lg border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-6">Our Target</h4>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-primary mb-2">300M</div>
                    <p className="text-nexlng-muted">SCF of routine flare gas recovery over 5 years</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-background p-4 rounded-lg border border-border">
                      <h5 className="font-semibold text-foreground mb-2">Environmental Benefits</h5>
                      <ul className="space-y-1 text-nexlng-muted text-sm">
                        <li>• Reduces methane and CO2 emissions</li>
                        <li>• Improves environmental sustainability</li>
                        <li>• Prevents energy waste</li>
                        <li>• Creates economic value</li>
                      </ul>
                    </div>
                    
                    <div className="bg-background p-4 rounded-lg border border-border">
                      <h5 className="font-semibold text-foreground mb-2">Operational Advantages</h5>
                      <ul className="space-y-1 text-nexlng-muted text-sm">
                        <li>• Compliance with global regulations</li>
                        <li>• Corporate sustainability goals</li>
                        <li>• Improved operational efficiency</li>
                        <li>• Enhanced corporate reputation</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="inline-block bg-primary text-background px-4 py-2 text-sm rounded-full mb-6 font-semibold">
                    Flare Gas Recovery
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    Flare Gas Reduction
                  </h3>
                  <p className="text-nexlng-muted leading-relaxed mb-6">
                    We at NexLNG combat gas flaring, has set a target to recover and 
                    monetize <span className="text-primary font-semibold">300 million scf of routine flare gas</span> over the next five 
                    years.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-nexlng-muted">
                        <span className="text-primary font-semibold">Flare gas recovery reduces methane and CO2 emissions</span>, 
                        improving environmental sustainability.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-nexlng-muted">
                        <span className="text-primary font-semibold">Captured gas is processed into usable LNG</span>, preventing energy 
                        waste and creating economic value.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-nexlng-muted">
                        Our solutions ensure compliance with global regulations and 
                        corporate sustainability goals while improving operational 
                        efficiency.
                      </p>
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

export default Sustainability;