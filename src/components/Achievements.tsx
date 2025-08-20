import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Achievements = () => {
  const achievements = [
    {
      title: "Pilot LNG Plant Development",
      description: "Designed and operationalized a pilot LNG plant to address high CO₂ natural gas fields, demonstrating the viability of cryogenic technology for LNG production and condensate handling. Proved the scalability & efficiency of NexLNG's proprietary cryogenic systems in challenging offshore environments.",
      icon: "🏭",
      highlight: "Breakthrough Technology"
    },
    {
      title: "Flare Gas Recovery Solutions",
      description: "Developed flare gas recovery systems for both onshore and offshore fields, enabling clients to capture and convert wasted flare gas into valuable LNG. Significantly reduced emissions and helped clients meet environmental and regulatory requirements.",
      icon: "🔥",
      highlight: "Environmental Impact"
    },
    {
      title: "Small-Scale Stranded Gas LNG Facilities",
      description: "Pioneered modular, small-scale LNG solutions tailored for stranded or uneconomical gas reserves, unlocking their potential for monetization. Delivered cost-effective and scalable LNG facilities that are ideal for remote or underdeveloped regions.",
      icon: "⚡",
      highlight: "Modular Innovation"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Key <span className="text-primary">Achievements</span> at a Glance
          </h2>
          <p className="text-xl text-nexlng-muted max-w-3xl mx-auto">
            Breakthrough innovations that have shaped the future of small-scale LNG solutions 
            and transformed the energy landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-background border-border shadow-elegant hover:shadow-glow transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div className="inline-block bg-primary text-background px-3 py-1 text-sm rounded-full mb-4 font-semibold">
                  {achievement.highlight}
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {achievement.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-nexlng-muted leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;