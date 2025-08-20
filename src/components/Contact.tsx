import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-xl text-nexlng-muted max-w-3xl mx-auto">
            Ready to power your future with NexLNG? Get in touch with our team 
            of energy experts to discuss your next project.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-background text-xl">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Headquarters</h4>
                  <p className="text-nexlng-muted">Energy Plaza, Maritime District<br />Houston, TX 77002, USA</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-background text-xl">📞</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-nexlng-muted">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-background text-xl">✉️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-nexlng-muted">info@nexlng.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-secondary border-border shadow-elegant">
            <CardHeader>
              <CardTitle className="text-foreground">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" className="bg-background border-border" />
                <Input placeholder="Last Name" className="bg-background border-border" />
              </div>
              <Input placeholder="Email Address" className="bg-background border-border" />
              <Input placeholder="Company" className="bg-background border-border" />
              <Textarea 
                placeholder="Tell us about your project or inquiry..." 
                className="bg-background border-border min-h-[120px]" 
              />
              <Button className="w-full bg-gradient-accent text-background hover:shadow-glow">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;