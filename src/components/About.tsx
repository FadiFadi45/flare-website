import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { AnimatedButton } from "@/components/animations/AnimatedButton";
import { staggerContainer, fadeInLeft, fadeInRight } from "@/lib/animations";

// Core services for homepage summary
const coreServices = [
  {
    icon: Settings,
    title: "Content Production",
    description: "End-to-end video production from concept to post-production for TV, film, and digital platforms."
  },
  {
    icon: TrendingUp,
    title: "Channel Management", 
    description: "Complete YouTube MCN services and multi-platform channel optimization for maximum reach."
  },
  {
    icon: BarChart3,
    title: "Influencer Marketing",
    description: "Connect brands with top creators and manage comprehensive influencer campaigns."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background scroll-offset">
      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">About Us</span>
          </div>
          <AnimatedText delay={0.2}>
            <h2 className="mb-6">
              <span className="text-gradient-logo">Flare Media LLC</span>
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.4}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Crafting Narratives That Resonate
            </p>
          </AnimatedText>
        </AnimatedSection>

        {/* Mission & Vision */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeInLeft}>
            <AnimatedCard delay={0.2}>
              <Card className="shadow-card hover:shadow-glow transition-smooth h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-heading">Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    In today's fast-paced, ever-evolving digital landscape, Flare Media LLC empowers 
                    businesses to stand out and authentically connect with their audiences through 
                    the art of storytelling.
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>
          </motion.div>

          <motion.div variants={fadeInRight}>
            <AnimatedCard delay={0.4}>
              <Card className="shadow-card hover:shadow-glow transition-smooth h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center">
                      <Eye className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-heading">Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To become a leading catalyst of digital transformation, helping brands and 
                    creators navigate the future of content.
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>
          </motion.div>
        </motion.div>

        {/* Who We Are */}
        <AnimatedSection className="mb-16">
          <Card className="gradient-card shadow-hero">
            <CardHeader>
              <AnimatedText>
                <CardTitle className="text-center mb-4">
                  Who <span className="text-gradient-logo">We Are</span>
                </CardTitle>
              </AnimatedText>
            </CardHeader>
            <CardContent className="text-center">
              <AnimatedText delay={0.3}>
                <p className="text-muted-foreground max-w-4xl mx-auto">
                  At Flare Media LLC, we are your trusted partner in maximizing the potential 
                  of digital platforms. Based on years of expertise and a deep understanding of 
                  the evolving media landscape, we specialize in empowering creators, brands, and 
                  businesses to thrive in the digital space through innovative strategies, 
                  optimized management, and cutting-edge solutions.
                </p>
              </AnimatedText>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* What We Offer - Homepage Summary */}
        <div className="mb-16">
          <AnimatedSection className="text-center mb-12">
            <AnimatedText>
              <h3 className="mb-4">
                What <span className="text-gradient-logo">We Offer</span>
              </h3>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our core services designed to elevate your digital presence and content strategy.
              </p>
            </AnimatedText>
          </AnimatedSection>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {coreServices.map((service, index) => (
              <AnimatedCard key={index} delay={index * 0.2}>
                <Card className="shadow-card hover:shadow-glow transition-smooth group h-full text-center">
                  <CardHeader>
                    <motion.div 
                      className="w-16 h-16 gradient-logo rounded-2xl flex items-center justify-center mb-4 mx-auto"
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </motion.div>
                    <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </AnimatedCard>
            ))}
          </motion.div>

          {/* CTA to Services Page */}
          <AnimatedSection className="text-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="default" size="lg" asChild>
                <a href="/services">
                  <Play className="w-5 h-5 mr-2" />
                  Explore All Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Why Choose Flare Media */}
        <AnimatedSection>
          <div className="bg-secondary/30 backdrop-blur-lg rounded-2xl p-8 lg:p-12 text-center">
            <div className="flex items-center justify-center mb-6">
              <motion.div 
                className="w-16 h-16 gradient-logo rounded-2xl flex items-center justify-center"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <Zap className="w-8 h-8 text-primary-foreground" />
              </motion.div>
            </div>
            <AnimatedText>
              <h3 className="mb-6">
                Why Choose <span className="text-gradient-logo">Flare Media?</span>
              </h3>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-muted-foreground mb-8 max-w-4xl mx-auto">
                We simplify the complexity of digital content so you can focus on what matters: 
                creating, growing, and succeeding. Whether you're an independent creator, a growing 
                brand, or a global company, our solutions are designed to align with your goals and 
                scale with your ambitions.
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
              <Button variant="hero" size="lg">
                <Play className="w-5 h-5 mr-2" />
                Partner with Us
              </Button>
              <Button variant="minimal" size="lg">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
            <AnimatedText delay={0.6}>
              <p className="text-xl font-semibold text-gradient-logo mt-8">
                Let us illuminate your path to digital success.
              </p>
            </AnimatedText>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;