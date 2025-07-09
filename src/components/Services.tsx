import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Video, 
  Users, 
  Megaphone, 
  TrendingUp, 
  Shield, 
  DollarSign,
  ArrowRight,
  Play
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { staggerContainer } from "@/lib/animations";

const services = [
  {
    icon: Video,
    title: "Content Production",
    description: "End-to-end video production from concept to post-production for TV, film, and digital platforms.",
    features: ["Script Development", "Filming & Direction", "Post-Production", "Motion Graphics"]
  },
  {
    icon: Users,
    title: "Channel Management",
    description: "Complete YouTube MCN services and multi-platform channel optimization for maximum reach.",
    features: ["YouTube MCN", "Content Strategy", "SEO Optimization", "Analytics & Reporting"]
  },
  {
    icon: Megaphone,
    title: "Influencer Marketing",
    description: "Connect brands with top creators and manage comprehensive influencer campaigns.",
    features: ["Creator Partnerships", "Campaign Management", "Brand Integration", "Performance Tracking"]
  },
  {
    icon: TrendingUp,
    title: "Social Media Strategy",
    description: "Data-driven social media strategies across all major platforms to grow your audience.",
    features: ["Platform Strategy", "Content Planning", "Community Management", "Growth Hacking"]
  },
  {
    icon: Shield,
    title: "Copyright Protection",
    description: "Protect your intellectual property with comprehensive content monitoring and enforcement.",
    features: ["Content ID Management", "Copyright Enforcement", "Revenue Recovery", "Legal Support"]
  },
  {
    icon: DollarSign,
    title: "Monetization",
    description: "Maximize revenue through multiple streams including ads, sponsorships, and licensing.",
    features: ["Ad Revenue Optimization", "Sponsorship Deals", "Licensing Agreements", "Revenue Analytics"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background scroll-offset">
      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/30 rounded-full px-6 py-3 mb-6">
            <Play className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Our Services</span>
          </div>
          <AnimatedText>
            <h2 className="mb-6">
              Everything You Need to <span className="text-gradient-logo">Succeed</span>
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              From initial concept to global distribution, we provide comprehensive services 
              to help creators and brands thrive in the digital content landscape.
            </p>
          </AnimatedText>
        </AnimatedSection>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <AnimatedCard key={index} delay={index * 0.15}>
              <Card className="gradient-card shadow-card hover:shadow-glow transition-smooth group cursor-pointer h-full">
                <CardHeader>
                  <motion.div 
                    className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <CardTitle className="mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-center text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ 
                          opacity: 1, 
                          x: 0,
                          transition: { delay: (index * 0.15) + (idx * 0.1) }
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1.5 h-1.5 gradient-logo rounded-full mr-3"></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button variant="ghost" className="w-full mt-6 group-hover:bg-primary/10">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </motion.div>

        {/* CTA Section */}
        <AnimatedSection className="text-center">
          <div className="bg-secondary/30 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto">
            <AnimatedText>
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can help bring your vision to life with our comprehensive content services.
              </p>
            </AnimatedText>
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.4, duration: 0.6 }
              }}
              viewport={{ once: true }}
            >
              <Button variant="default" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="minimal" size="lg">
                View Portfolio
              </Button>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;