import { Card, CardContent } from "@/components/ui/card";

const GasTreatment = () => {
  return (
    <section id="gas-treatment" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Gas Treatment & <span className="text-primary">Conditioning</span>
          </h2>
          <p className="text-xl text-nexlng-muted max-w-4xl mx-auto">
            Advanced gas processing solutions including amine modules, membrane filtration, 
            MSPT conditioning plants, and condensate recovery systems for optimal gas quality and purity.
          </p>
        </div>
        
        <div className="space-y-16">
          {/* Amine Module */}
          <Card className="bg-card border-border shadow-elegant">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block bg-nexlng-green text-background px-4 py-2 text-sm rounded-full mb-6 font-semibold">
                    Amine Module
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    NexLNG Amine Module
                  </h3>
                  <p className="text-nexlng-muted leading-relaxed mb-6">
                    NexLNG's advanced <span className="text-primary font-semibold">absorption system with Amine towers</span> is designed to treat gases from 
                    various sources, even those with high levels of CO2 and H2S. Leveraging the natural affinity 
                    between amines and these contaminants, our system efficiently removes harmful components, 
                    ensuring the upgraded gas meets the highest quality standards.
                  </p>
                  <p className="text-nexlng-muted leading-relaxed mb-6">
                    The process begins in the <span className="text-primary font-semibold">contactor towers</span>, where contaminants are absorbed, and clean, 
                    upgraded gas is produced. The system then moves to <span className="text-primary font-semibold">regenerative towers</span>, operating in a 
                    closed cycle, where the amines are restored to their full absorption capacity.
                  </p>
                  <p className="text-nexlng-muted leading-relaxed">
                    Every aspect of our amine tower configuration is <span className="text-primary font-semibold">fully customisable</span> to meet your specific needs. 
                    We tailor the system to your unique entry and exit conditions, ensuring a seamless fit for your operations.
                  </p>
                </div>
                <div className="bg-secondary p-8 rounded-lg border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-6">Key Benefits</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-nexlng-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">H2S Removal</h5>
                        <p className="text-nexlng-muted text-sm">Critical for gas and biogas energy sources</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-nexlng-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">Equipment Protection</h5>
                        <p className="text-nexlng-muted text-sm">Maximizes performance and lifespan</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-nexlng-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">Continuous Operation</h5>
                        <p className="text-nexlng-muted text-sm">Closed-cycle regeneration process</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-nexlng-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">Custom Configuration</h5>
                        <p className="text-nexlng-muted text-sm">Tailored to your specific requirements</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Membrane Filtration */}
          <Card className="bg-card border-border shadow-elegant">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="bg-secondary p-8 rounded-lg border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-6">System Features</h4>
                  <div className="space-y-4 mb-6">
                    <div className="bg-background p-4 rounded-lg border border-border">
                      <h5 className="font-semibold text-foreground mb-2">Pre-treatment Towers</h5>
                      <p className="text-nexlng-muted text-sm">Absorption process using activated carbon to remove H2S, siloxanes, and VOCs</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg border border-border">
                      <h5 className="font-semibold text-foreground mb-2">NX 100 Compressor</h5>
                      <p className="text-nexlng-muted text-sm">Precise pressure regulation for membrane filtration</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg border border-border">
                      <h5 className="font-semibold text-foreground mb-2">Membrane Modules</h5>
                      <p className="text-nexlng-muted text-sm">High-efficiency CO2 separation achieving 99%+ methane purity</p>
                    </div>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <p className="text-primary text-sm font-semibold">
                      "High efficiency CO2 Removal"
                    </p>
                  </div>
                </div>
                <div>
                  <div className="inline-block bg-primary text-background px-4 py-2 text-sm rounded-full mb-6 font-semibold">
                    Membrane Filtration
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    NexLNG Membrane Filtration System
                  </h3>
                  <p className="text-nexlng-muted leading-relaxed mb-6">
                    NexLNG's advanced <span className="text-primary font-semibold">membrane filtration system</span> delivers exceptional 
                    performance by separating CO2 from natural gas, achieving a methane purity of 
                    over <span className="text-primary font-semibold">99%</span>. This cutting-edge technology ensures a premium-quality gas product, 
                    ideal for a wide range of applications.
                  </p>
                  <p className="text-nexlng-muted leading-relaxed mb-6">
                    The process begins with <span className="text-primary font-semibold">pre-treatment towers</span>, where gas undergoes an 
                    absorption process using activated carbon to remove impurities such as hydrogen 
                    sulfide (H2S), siloxanes, and volatile organic compounds (VOCs). Once purified, 
                    the gas is compressed using our <span className="text-primary font-semibold">NX 100 reciprocating compressor</span>.
                  </p>
                  <p className="text-nexlng-muted leading-relaxed">
                    NexLNG's membrane filtration system is designed for <span className="text-primary font-semibold">efficiency, reliability, and 
                    sustainability</span>, ensuring your operations run smoothly while maximizing the value 
                    of your natural gas resources. With NexLNG, you get a tailored solution that meets 
                    your specific needs, empowering your business to thrive in a cleaner energy future.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* MSPT Gas Conditioning */}
          <Card className="bg-card border-border shadow-elegant">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block bg-accent text-background px-4 py-2 text-sm rounded-full mb-6 font-semibold">
                    MSPT Plant
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    NexLNG MSPT Gas Conditioning Plant
                  </h3>
                  <p className="text-nexlng-muted leading-relaxed mb-6">
                    For gas liquefaction, the required gas quality is more stringent than pipeline standards. To 
                    produce liquefied methane (LNG), the CO2 content must be reduced to under 100ppm, and moisture 
                    (H2O) must be completely removed. NexLNG's <span className="text-primary font-semibold">MSPT® Plant (Molecular Sieve Pressure Temperature 
                    Swing)</span> achieves this through advanced Molecular Sieve adsorption towers, ensuring the highest purity 
                    gas for LNG production.
                  </p>
                  <p className="text-nexlng-muted leading-relaxed mb-6">
                    The process begins with gas pressure regulation at the inlet of the CO2 polishing skid. The gas then 
                    flows into a set of modular towers packed with Molecular Sieve, which effectively captures CO2 and 
                    moisture. Once the Molecular Sieve becomes saturated, the towers are regenerated without 
                    interrupting operations, thanks to the system's redundant design.
                  </p>
                  <p className="text-nexlng-muted leading-relaxed">
                    <span className="text-primary font-semibold">"NexLNG's MSPT® Plant is designed for uninterrupted operation, 
                    efficiency, and sustainability, ensuring your LNG production meets 
                    the highest quality standards."</span>
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-primary text-background p-6 rounded-lg text-center">
                      <div className="text-2xl font-bold mb-2">01</div>
                      <h5 className="font-semibold mb-2">Heating Phase</h5>
                      <p className="text-sm">Desorption occurs as high-temperature gas heats the MolecularSieve, releasing the trapped impurities.</p>
                    </div>
                    <div className="bg-primary text-background p-6 rounded-lg text-center">
                      <div className="text-2xl font-bold mb-2">02</div>
                      <h5 className="font-semibold mb-2">Vacuum Phase</h5>
                      <p className="text-sm">A series of pressure and vacuum pulses withdraw the impurities from the towers.</p>
                    </div>
                    <div className="bg-primary text-background p-6 rounded-lg text-center">
                      <div className="text-2xl font-bold mb-2">03</div>
                      <h5 className="font-semibold mb-2">Cooling Phase</h5>
                      <p className="text-sm">The Molecular Sieve module is cooled, leaving the tower clean and ready to resume gas filtration.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Condensate Removal */}
          <Card className="bg-card border-border shadow-elegant">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="bg-secondary p-8 rounded-lg border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-6">Key Features</h4>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <span className="text-nexlng-green mr-3 mt-1">•</span>
                      <p className="text-nexlng-muted text-sm">Increases hydrocarbon recovery by reducing vapor pressure, minimizing evaporation losses during storage or transport.</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-nexlng-green mr-3 mt-1">•</span>
                      <p className="text-nexlng-muted text-sm">Reduces stock tank emissions and removes acidic components like CO2 and H2S.</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-nexlng-green mr-3 mt-1">•</span>
                      <p className="text-nexlng-muted text-sm">Delivers a stable product for transport, blending, or specific market requirements.</p>
                    </div>
                  </div>
                  
                  <div className="bg-background p-4 rounded-lg border border-border mb-6">
                    <h5 className="font-semibold text-foreground mb-3">Applications</h5>
                    <ul className="space-y-1 text-nexlng-muted text-sm">
                      <li>• Midstream central gathering</li>
                      <li>• Midstream Condensate Liquids processing</li>
                    </ul>
                  </div>
                  
                  <div className="bg-background p-4 rounded-lg border border-border">
                    <h5 className="font-semibold text-foreground mb-3">Advantages</h5>
                    <ul className="space-y-1 text-nexlng-muted text-sm">
                      <li>• Modular, skid-mounted designs for both refluxed and non-refluxed applications</li>
                      <li>• Optional Condensate Liquids recovery module and high-efficiency hot oil systems for lower emissions</li>
                      <li>• Customizable solutions to meet precise product specifications</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="inline-block bg-nexlng-green text-background px-4 py-2 text-sm rounded-full mb-6 font-semibold">
                    Condensate Recovery
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    Condensate Removal & Recovery
                  </h3>
                  <p className="text-nexlng-muted leading-relaxed mb-6">
                    <span className="text-primary font-semibold">Condensate Stabilization and Condensate Liquids Recovery by NexLNG</span><br/>
                    NexLNG's condensate stabilization process removes volatile light ends from raw liquids 
                    under controlled conditions, producing market-ready products. Our optional <span className="text-primary font-semibold">wellsite 
                    Condensate Liquids recovery unit</span> separates fractions to yield Y-grade Condensate 
                    Liquids or other hydrocarbon liquids.
                  </p>
                  <p className="text-nexlng-muted leading-relaxed mb-6">
                    This advanced system effectively manages condensate streams, ensuring optimal recovery 
                    while maintaining environmental compliance. The process is designed to handle varying 
                    feed compositions and operating conditions, providing flexibility for different field requirements.
                  </p>
                  <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                    <p className="text-primary text-sm font-semibold italic">
                      "With NexLNG, you get efficient, sustainable, and market-ready solutions for condensate 
                      stabilization and Condensate Liquids recovery."
                    </p>
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

export default GasTreatment;