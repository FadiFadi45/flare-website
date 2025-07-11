import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Youtube,
  Instagram,
  Twitter,
  Linkedin
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "General inquiries",
    contact: "Info@flare.ae",
    action: "mailto:Info@flare.ae"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Business inquiries",
    contact: "+971 4 433 8972",
    action: "tel:+97144338972"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Dubai Office",
    contact: "UAE, Dubai, Business Bay, Empire Heights A, Floor 9, Leading Zone Business Center",
    action: "#"
  },
  {
    icon: MapPin,
    title: "P.O. Box",
    description: "Postal Address",
    contact: "PoBox 502508",
    action: "#"
  }
];

const socialLinks = [
  { icon: Youtube, label: "YouTube", url: "#" },
  { icon: Instagram, label: "Instagram", url: "#" },
  { icon: Twitter, label: "Twitter", url: "#" },
  { icon: Linkedin, label: "LinkedIn", url: "#" }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/20 scroll-offset">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Send className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </div>
          <h2 className="mb-6">
            Let's Create Something <span className="text-gradient-logo">Amazing</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your vision to life? We'd love to hear about your project 
            and discuss how we can help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Company</label>
                    <Input placeholder="Your Company" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Project Type</label>
                  <select className="w-full h-10 px-3 py-2 bg-background border border-input rounded-md">
                    <option>Content Production</option>
                    <option>Channel Management</option>
                    <option>Influencer Marketing</option>
                    <option>Social Media Strategy</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button variant="default" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We'll respond within 24 hours during business days.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="shadow-card hover:shadow-glow transition-smooth cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <method.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm">{method.title}</h3>
                        <p className="text-xs text-muted-foreground mb-1">{method.description}</p>
                        <p className="text-sm font-medium">{method.contact}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <Button key={index} variant="ghost" className="h-12 flex-col space-y-1">
                      <social.icon className="w-5 h-5" />
                      <span className="text-xs">{social.label}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Media Kit CTA */}
            <Card className="gradient-card shadow-card">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Need Our Media Kit?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Download our comprehensive media kit with case studies and capabilities.
                </p>
                <Button variant="minimal" size="sm" className="w-full">
                  Download Media Kit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;