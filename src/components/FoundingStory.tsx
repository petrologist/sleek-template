import { Card, CardContent } from "@/components/ui/card";

const FoundingStory = () => {
  return (
    <section id="founding-story" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Founding Story</span>
          </h2>
          <div className="w-20 h-1 bg-nexlng-green mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Card className="bg-card border-border shadow-elegant">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground mb-4">How it Started</h3>
                  <p className="text-nexlng-muted leading-relaxed">
                    In 2024, as the global energy industry grappled with the dual challenges of reducing emissions and maximizing the value of 
                    natural gas resources, NexLNG emerged as a beacon of innovation and sustainability.
                  </p>
                  <p className="text-nexlng-muted leading-relaxed">
                    The company's origins trace back to a pivotal moment when a major oil and gas operator faced a critical issue: a remote 
                    offshore natural gas field with high concentrations of CO₂ and significant condensate content, making it economically and 
                    environmentally unviable to develop using conventional methods.
                  </p>
                  <p className="text-nexlng-muted leading-relaxed">
                    The operator needed a solution that could not only address the CO₂ challenges but also efficiently convert the remaining gas into 
                    LNG, all while minimizing environmental impact. Recognizing the urgency and complexity of the problem, a team of visionary 
                    engineers and energy experts was appointed to develop a groundbreaking solution.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <p className="text-nexlng-muted leading-relaxed">
                    This team, which would later form the core of NexLNG, embarked on an ambitious mission to create a system that could handle 
                    CO₂ removal, process condensate, and produce LNG in a single, integrated process.
                  </p>
                  <p className="text-nexlng-muted leading-relaxed">
                    After months of intensive research, experimentation, and collaboration, they developed a proprietary cryogenic technology capable of achieving these 
                    goals. The team's <span className="text-primary font-semibold">breakthrough led to the development of a pilot LNG plant</span>, designed to demonstrate the feasibility and scalability of their 
                    solution. The plant was a resounding success, proving that even the most challenging gas fields could be transformed into valuable, clean energy 
                    resources.
                  </p>
                  <div className="bg-secondary p-6 rounded-lg border border-border">
                    <p className="text-nexlng-muted leading-relaxed">
                      <span className="text-primary font-semibold">This achievement marked the official launch of NexLNG in 2024</span>, with a 
                      mission to empower small to medium-scale natural gas producers facing similar challenges. From its inception, NexLNG has been driven by a 
                      commitment to innovation, sustainability, and client-centric solutions.
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

export default FoundingStory;