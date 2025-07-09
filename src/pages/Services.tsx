import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Video, 
  Users, 
  Megaphone, 
  TrendingUp, 
  Shield, 
  DollarSign,
  Settings,
  BarChart3,
  Play,
  ArrowLeft
} from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { staggerContainer } from "@/lib/animations";

const allServices = [
  {
    category: "Content Production",
    services: [
      {
        icon: Video,
        title: "Video Production",
        description: "End-to-end video production from concept to post-production for TV, film, and digital platforms.",
        features: ["Script Development", "Filming & Direction", "Post-Production", "Motion Graphics"]
      },
      {
        icon: Play,
        title: "Live Streaming",
        description: "Professional live streaming solutions for events, shows, and real-time content.",
        features: ["Multi-camera setups", "Real-time editing", "Interactive features", "Global distribution"]
      }
    ]
  },
  {
    category: "Channel Management",
    services: [
      {
        icon: Users,
        title: "YouTube MCN",
        description: "Complete YouTube Multi-Channel Network services for creators and brands.",
        features: ["Channel optimization", "Content strategy", "Monetization", "Analytics"]
      },
      {
        icon: Settings,
        title: "Platform Management",
        description: "Multi-platform content distribution and optimization across all major platforms.",
        features: ["Cross-platform publishing", "Content scheduling", "Performance tracking", "Audience growth"]
      }
    ]
  },
  {
    category: "Marketing & Strategy",
    services: [
      {
        icon: Megaphone,
        title: "Influencer Marketing",
        description: "Connect brands with top creators and manage comprehensive influencer campaigns.",
        features: ["Creator partnerships", "Campaign management", "Brand integration", "Performance tracking"]
      },
      {
        icon: TrendingUp,
        title: "Social Media Strategy",
        description: "Data-driven social media strategies across all major platforms to grow your audience.",
        features: ["Platform strategy", "Content planning", "Community management", "Growth hacking"]
      }
    ]
  },
  {
    category: "Analytics & Protection",
    services: [
      {
        icon: BarChart3,
        title: "Analytics & Reporting",
        description: "Comprehensive analytics and reporting for data-driven decision making.",
        features: ["Performance metrics", "Revenue tracking", "Audience insights", "Custom reports"]
      },
      {
        icon: Shield,
        title: "Copyright Protection",
        description: "Protect your intellectual property with comprehensive content monitoring and enforcement.",
        features: ["Content ID management", "Copyright enforcement", "Revenue recovery", "Legal support"]
      },
      {
        icon: DollarSign,
        title: "Monetization",
        description: "Maximize revenue through multiple streams including ads, sponsorships, and licensing.",
        features: ["Ad revenue optimization", "Sponsorship deals", "Licensing agreements", "Revenue analytics"]
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

      {/* CTA Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center">
            <div className="bg-secondary/30 backdrop-blur-lg rounded-2xl p-12 max-w-3xl mx-auto">
              <AnimatedText>
                <h2 className="mb-6">Ready to Transform Your Content?</h2>
              </AnimatedText>
              <AnimatedText delay={0.2}>
                <p className="text-muted-foreground mb-8">
                  Let's discuss how our comprehensive services can help bring your vision to life and achieve your digital goals.
                </p>
              </AnimatedText>
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.4, duration: 0.6 }
                }}
                viewport={{ once: true }}
              >
                <Button variant="default" size="lg" asChild>
                  <a href="#contact">Get Started Today</a>
                </Button>
                <Button variant="minimal" size="lg" asChild>
                  <a href="#contact">Schedule Consultation</a>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;