import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Palette, 
  TrendingUp, 
  Shield, 
  Radio,
  DollarSign,
  Share2,
  Search,
  PenTool,
  Play,
  ArrowLeft
} from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { staggerContainer } from "@/lib/animations";
import Footer from "@/components/Footer";

const allServices = [
  {
    category: "Foundation & Strategy",
    services: [
      {
        icon: Palette,
        title: "Channel & Videos Branding Layout",
        description: "Design and implement a cohesive and visually appealing layout for your channels and videos to enhance brand recognition and viewer engagement.",
        features: ["Brand Identity Design", "Channel Layout Creation", "Video Template Design", "Visual Consistency"]
      },
      {
        icon: PenTool,
        title: "Content Strategy",
        description: "Plan, create, and manage content to achieve your business goals and engage your target audience effectively.",
        features: ["Content Planning", "Audience Analysis", "Editorial Calendar", "Performance Measurement"]
      }
    ]
  },
  {
    category: "Optimization & Growth",
    services: [
      {
        icon: TrendingUp,
        title: "Channel & Video Optimization",
        description: "Optimize your channels and videos for better visibility and performance on various platforms, ensuring they reach a wider audience.",
        features: ["Performance Analysis", "Platform-Specific Optimization", "Audience Targeting", "Engagement Strategies"]
      },
      {
        icon: Search,
        title: "SEO Strategy",
        description: "FLARE will develop and implement a search engine optimization strategy to improve the visibility and ranking of your content on search engines.",
        features: ["Keyword Research", "Content Optimization", "Search Ranking Improvement", "Analytics & Monitoring"]
      }
    ]
  },
  {
    category: "Distribution & Streaming",
    services: [
      {
        icon: Share2,
        title: "Content Distribution",
        description: "Distribute your content across multiple platforms and channels to maximize reach and engagement.",
        features: ["Multi-Platform Publishing", "Cross-Channel Strategy", "Audience Expansion", "Performance Tracking"]
      },
      {
        icon: Radio,
        title: "Pre-recorded Live Stream",
        description: "Broadcast pre-recorded content as live streams, providing flexibility and control over your live streaming schedule.",
        features: ["Stream Scheduling", "Content Preparation", "Live Simulation", "Audience Interaction"]
      }
    ]
  },
  {
    category: "Protection & Revenue",
    services: [
      {
        icon: Shield,
        title: "Copyright Protection",
        description: "FLARE will help protect your content from unauthorized use and infringement by implementing effective copyright protection measures.",
        features: ["Content Monitoring", "Infringement Detection", "Legal Enforcement", "Rights Management"]
      },
      {
        icon: DollarSign,
        title: "Content Monetization",
        description: "FLARE will assist in generating revenue from your content through various monetization strategies and platforms.",
        features: ["Revenue Optimization", "Multiple Income Streams", "Sponsorship Integration", "Analytics Tracking"]
      }
    ]
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center">
            <Button variant="ghost" asChild className="mb-8">
              <a href="/" className="inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </a>
            </Button>
            <AnimatedText>
              <h1 className="mb-6">
                Our <span className="text-gradient-logo">Services</span>
              </h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive digital content solutions designed to elevate your brand and maximize your reach across all platforms.
              </p>
            </AnimatedText>
          </AnimatedSection>
        </div>
      </section>

      {/* Services by Category */}
      {allServices.map((category, categoryIndex) => (
        <section key={category.category} className="py-16">
          <div className="container mx-auto px-6">
            <AnimatedSection className="mb-12">
              <h2 className="text-center mb-4">
                <span className="text-gradient-logo">{category.category}</span>
              </h2>
            </AnimatedSection>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {category.services.map((service, index) => (
                <AnimatedCard key={index} delay={index * 0.2}>
                  <Card className="gradient-card shadow-card hover:shadow-glow transition-smooth group h-full">
                    <CardHeader>
                      <motion.div 
                        className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-4"
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <service.icon className="w-8 h-8 text-primary-foreground" />
                      </motion.div>
                      <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 gradient-logo rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
};

export default ServicesPage;