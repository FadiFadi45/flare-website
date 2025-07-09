import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Eye, 
  Users, 
  Settings, 
  TrendingUp, 
  BarChart3,
  Shield,
  Play,
  Zap,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Services Management",
    features: [
      "Custom channel and video branding layouts",
      "Full optimization of channels and videos",
      "Advanced copyright protection",
      "Pre-recorded livestream handling",
      "Content monetization techniques",
      "Multi-platform content distribution",
      "Digital asset creation and management",
      "Dedicated account management"
    ]
  },
  {
    icon: TrendingUp,
    title: "Strategy Development",
    features: [
      "SEO Strategy: Get discovered with optimized content",
      "Content Strategy: Create impactful, targeted plans"
    ]
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    features: [
      "In-depth performance reports for data-driven decisions",
      "Revenue tracking and optimization",
      "Detailed financial reports"
    ]
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background scroll-offset">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-logo">Flare Media LLC</span>
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-4">
            Crafting Narratives That Resonate
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-card hover:shadow-glow transition-smooth">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                In today's fast-paced, ever-evolving digital landscape, Flare Media LLC empowers 
                businesses to stand out and authentically connect with their audiences through 
                the art of storytelling.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-glow transition-smooth">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl">Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To become a leading catalyst of digital transformation, helping brands and 
                creators navigate the future of content.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Who We Are */}
        <div className="mb-16">
          <Card className="gradient-card shadow-hero">
            <CardHeader>
              <CardTitle className="text-3xl mb-4 text-center">
                Who <span className="text-gradient-logo">We Are</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                At Flare Media LLC, we are your trusted partner in unlocking the full potential 
                of digital platforms. Backed by years of expertise and a deep understanding of 
                modern media, we specialize in helping creators, businesses, and brands thrive 
                online through tailored strategies, seamless content management, and scalable 
                digital solutions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              What <span className="text-gradient-logo">We Offer</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive suite of services is designed to elevate your digital presence, 
              streamline your content operations, and open new revenue opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-glow transition-smooth group">
                <CardHeader>
                  <div className="w-12 h-12 gradient-logo rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 gradient-logo rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Flare Media */}
        <div className="bg-secondary/30 backdrop-blur-lg rounded-2xl p-8 lg:p-12 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 gradient-logo rounded-2xl flex items-center justify-center">
              <Zap className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-6">
            Why Choose <span className="text-gradient-logo">Flare Media?</span>
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-4xl mx-auto">
            We simplify the complexity of digital content so you can focus on what matters: 
            creating, growing, and succeeding. Whether you're an independent creator, a growing 
            brand, or a global company, our solutions are designed to align with your goals and 
            scale with your ambitions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="hero" size="lg">
              <Play className="w-5 h-5 mr-2" />
              Partner with Us
            </Button>
            <Button variant="minimal" size="lg">
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          <p className="text-xl font-semibold text-gradient-logo mt-8">
            Let us illuminate your path to digital success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;