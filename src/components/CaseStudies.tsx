import { Card, CardContent } from "@/components/ui/card";

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Case <span className="text-primary">Studies</span>
          </h2>
          <p className="text-xl text-nexlng-muted max-w-4xl mx-auto">
            Real-world applications of NexLNG solutions across diverse industries and challenging environments.
          </p>
        </div>
        
        <div className="space-y-16">
          {/* Remote Onshore Gas Field Development */}
          <Card className="bg-card border-border shadow-elegant">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block bg-primary text-background px-4 py-2 text-sm rounded-full mb-6 font-semibold">
                    Onshore Development
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    Remote Onshore Gas Field Development with In-Situ Mini LNG Production
                  </h3>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-foreground mb-4">Project Overview</h4>
                    <p className="text-nexlng-muted leading-relaxed">
                      A remote onshore gas field producing 25 MMSCFD was developed using a modular 
                      mini LNG plant, enabling immediate gas conversion to LNG without pipeline 
                      infrastructure.
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-foreground mb-4">Challenges</h4>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <p className="text-nexlng-muted text-sm">No Pipeline Infrastructure: Lack of network for gas transportation.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <p className="text-nexlng-muted text-sm">Limited Local Demand: Market constraints on natural gas consumption.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <p className="text-nexlng-muted text-sm">Remote Location: Difficulties in monetization and logistics.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <p className="text-nexlng-muted text-sm">Gas Flaring Concerns: Need for environmentally friendly solutions.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-secondary p-6 rounded-lg border border-border">
                    <h4 className="text-lg font-bold text-foreground mb-4">Solution Implementation</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-nexlng-green mr-2">✓</span>
                        <p className="text-nexlng-muted text-sm">Mini LNG Plant: On-site modular liquefaction system.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-nexlng-green mr-2">✓</span>
                        <p className="text-nexlng-muted text-sm">LNG Transport: ISO tanks & cryogenic tankers for flexible distribution.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-nexlng-green mr-2">✓</span>
                        <p className="text-nexlng-muted text-sm">Zero Flaring: 100% gas-to-LNG conversion for sustainability.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-nexlng-green mr-2">✓</span>
                        <p className="text-nexlng-muted text-sm">Energy Independence: Gas-fired generators powering operations.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-nexlng-green/10 p-6 rounded-lg border border-nexlng-green/20">
                    <h4 className="text-lg font-bold text-foreground mb-4">Result & Benefits</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-nexlng-green rounded-full mr-3"></div>
                        <p className="text-nexlng-muted text-sm"><span className="font-semibold">Fast Execution:</span> LNG production achieved within 12 months.</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-nexlng-green rounded-full mr-3"></div>
                        <p className="text-nexlng-muted text-sm"><span className="font-semibold">Economic Viability:</span> $50M CAPEX with stable LNG sales.</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-nexlng-green rounded-full mr-3"></div>
                        <p className="text-nexlng-muted text-sm"><span className="font-semibold">Environmental Gains:</span> Reduced CO2 emissions, eliminated flaring.</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-nexlng-green rounded-full mr-3"></div>
                        <p className="text-nexlng-muted text-sm"><span className="font-semibold">Market Expansion:</span> Reliable LNG supply for industrial & regional buyers.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Offshore LNG Production */}
          <Card className="bg-card border-border shadow-elegant">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="bg-secondary p-8 rounded-lg border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-6">Solution Implementation</h4>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <p className="text-nexlng-muted text-sm">Capturing flare gas and processing it via a modular LNG skid system on a barge.</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <p className="text-nexlng-muted text-sm">Liquefied gas stored in ISO tanks on a second barge for easy offloading.</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <p className="text-nexlng-muted text-sm">Spread mooring system ensures stability for offshore operations.</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <p className="text-nexlng-muted text-sm">Standby tug deployed for operational support and emergency response.</p>
                    </div>
                  </div>
                  
                  <div className="bg-primary text-background p-4 rounded-lg">
                    <h5 className="font-semibold mb-3">Result & Benefits</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Reduced Emissions – Converts flare gas into LNG, reducing CO2 & methane release.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Revenue Generation – Monetizes stranded gas via LNG sales.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Scalable & Cost-Effective – Modular design with minimal offshore footprint.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Regulatory Compliance – Prevents flaring penalties and enhances sustainability.</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="inline-block bg-nexlng-green text-background px-4 py-2 text-sm rounded-full mb-6 font-semibold">
                    Offshore Production
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    Offshore LNG Production from Flare Gas
                  </h3>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-foreground mb-4">Project Overview</h4>
                    <p className="text-nexlng-muted leading-relaxed mb-4">
                      This project captures and monetizes 5 MMSCFD of flare gas from an offshore oil platform by deploying a modular 
                      LNG skid system on a barge for gas processing and liquefaction.
                    </p>
                    <p className="text-nexlng-muted leading-relaxed">
                      A second storage barge equipped with ISO tanks enables efficient offloading via offshore supply vessels. 
                      The system operates with a spread mooring configuration for stability, and a standby tug is stationed at all times for operational support and emergency response.
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-foreground mb-4">Challenges</h4>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <p className="text-nexlng-muted text-sm">Excessive gas flaring leading to environmental and regulatory concerns.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <p className="text-nexlng-muted text-sm">Lack of infrastructure for offshore gas monetization.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <p className="text-nexlng-muted text-sm">High logistical and operational complexity for offshore LNG production.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background p-4 rounded-lg border border-border">
                    <p className="text-nexlng-muted text-sm italic">
                      <span className="font-semibold">Conclusion:</span> This offshore LNG production concept offers a viable, scalable, and environmentally friendly solution for utilizing flare 
                      gas. By leveraging modular barge-based infrastructure, operators can efficiently process and transport LNG while 
                      meeting regulatory and sustainability goals.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Small-scale LNG for Stranded Gas */}
          <Card className="bg-card border-border shadow-elegant">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block bg-accent text-background px-4 py-2 text-sm rounded-full mb-6 font-semibold">
                    Biogas Treatment
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    Small-scale LNG for Stranded Gas
                  </h3>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-foreground mb-4">Project Overview</h4>
                    <p className="text-nexlng-muted leading-relaxed">
                      The deployment of a Biogas Treatment Facility focuses on upgrading raw biogas from POME effluent pond gas 
                      collection into sales-grade biomethane. Utilizing Amine Scrubbing Technology, the facility efficiently removes CO2, H2S, and 
                      moisture to meet the stringent requirements of city gas infrastructure and industrial end users.
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-foreground mb-4">Challenges</h4>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <p className="text-nexlng-muted text-sm">High Impurity Levels – Raw biogas contained significant concentrations of CO2, H2S, and moisture.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <p className="text-nexlng-muted text-sm">Gas Quality Compliance – The upgraded biomethane needed to meet pipeline injection standards and industrial specifications.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <p className="text-nexlng-muted text-sm">Infrastructure Adaptation – A customized facility design was required to integrate with existing gas networks.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <p className="text-nexlng-muted text-sm">Operational Efficiency – Energy efficiency and methane recovery were critical to minimizing waste and maximizing output.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background p-4 rounded-lg border border-border">
                    <p className="text-nexlng-muted text-sm italic">
                      <span className="font-semibold">Conclusion:</span> The Biogas Treatment Facility successfully converts POME-derived biogas into a valuable energy source, aligning 
                      with sustainability goals and supporting the renewable energy transition.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-secondary p-6 rounded-lg border border-border">
                    <h4 className="text-lg font-bold text-foreground mb-4">Solution Implementation</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-nexlng-green mr-2">•</span>
                        <p className="text-nexlng-muted text-sm">Advanced Gas Purification – Amine Scrubber System for high-efficiency CO2 and H2S removal.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-nexlng-green mr-2">•</span>
                        <p className="text-nexlng-muted text-sm">Bespoke Design – Skid-based units allow for incremental expansion.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-nexlng-green mr-2">•</span>
                        <p className="text-nexlng-muted text-sm">Energy-Efficient Integration – Waste heat recovery and smart control systems reduce methane slip.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-nexlng-green mr-2">•</span>
                        <p className="text-nexlng-muted text-sm">Seamless Grid Integration – Custom compression & injection system ensures compatibility with city gas pipelines.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                    <h4 className="text-lg font-bold text-foreground mb-4">Result & Benefits</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <p className="text-nexlng-muted text-sm"><span className="font-semibold">Sales-Grade Biomethane Production:</span> Biogas successfully upgraded to meet city gas specifications.</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <p className="text-nexlng-muted text-sm"><span className="font-semibold">Emission Reduction:</span> Captured and processed biogas prevented methane release from POME ponds.</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <p className="text-nexlng-muted text-sm"><span className="font-semibold">Revenue Generation:</span> New income stream from biomethane sales to city gas infrastructure & industries.</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <p className="text-nexlng-muted text-sm"><span className="font-semibold">Scalability & Replicability:</span> A model project for future POME-based biogas developments.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* POM Boiler System Upgrade */}
          <Card className="bg-card border-border shadow-elegant">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="bg-secondary p-8 rounded-lg border border-border">
                  <h4 className="text-xl font-bold text-foreground mb-6">Solution Implementation</h4>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <span className="text-nexlng-green mr-2">✓</span>
                      <p className="text-nexlng-muted text-sm">Conducted feasibility study on cost-effectiveness and logistics.</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-nexlng-green mr-2">✓</span>
                      <p className="text-nexlng-muted text-sm">Established LNG supply chain with storage and regasification units.</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-nexlng-green mr-2">✓</span>
                      <p className="text-nexlng-muted text-sm">Retrofitted boiler system for LNG combustion.</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-nexlng-green mr-2">✓</span>
                      <p className="text-nexlng-muted text-sm">Trained personnel on LNG handling and safety measures.</p>
                    </div>
                  </div>
                  
                  <div className="bg-primary text-background p-4 rounded-lg">
                    <h5 className="font-semibold mb-3">Result & Benefits</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start">
                        <span className="mr-2">⚡</span>
                        <span>20% fuel cost savings</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2">📈</span>
                        <span>15% efficiency improvement</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2">🌱</span>
                        <span>30% reduction in CO2 emissions</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2">🔧</span>
                        <span>Increased reliability & reduced downtime</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2">📊</span>
                        <span>Scalability for future expansion</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="inline-block bg-primary text-background px-4 py-2 text-sm rounded-full mb-6 font-semibold">
                    Industrial Conversion
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    POM Boiler System Upgrade to LNG
                  </h3>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-foreground mb-4">Project Overview</h4>
                    <p className="text-nexlng-muted leading-relaxed">
                      A remote Palm Oil Mill (POM) transitioned its boiler system from traditional fuel (diesel/
                      biomass) to Liquefied Natural Gas (LNG) to improve efficiency, reduce costs, and lower 
                      emissions.
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-foreground mb-4">Challenges</h4>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <p className="text-nexlng-muted text-sm">High and fluctuating fuel costs (diesel/biomass)</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <p className="text-nexlng-muted text-sm">Logistical constraints due to remote location</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <p className="text-nexlng-muted text-sm">Compliance with stricter environmental regulations</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <p className="text-nexlng-muted text-sm">Retrofitting requirements for LNG integration</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background p-6 rounded-lg border border-border">
                    <h4 className="text-lg font-bold text-foreground mb-4">Conclusion</h4>
                    <p className="text-nexlng-muted text-sm">
                      The upgrade to LNG optimized operational efficiency, reduced costs, and enhanced 
                      sustainability, demonstrating a viable solution for remote industrial facilities.
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

export default CaseStudies;