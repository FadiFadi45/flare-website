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
    <section id="about" className="py-20 relative overflow-hidden scroll-offset">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      <div className="absolute top-1/4 right-0 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 gradient-accent rounded-full blur-3xl opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <motion.div 
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/20 rounded-full px-8 py-4 mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Users className="w-6 h-6 text-primary" />
            <span className="font-semibold text-primary">About Us</span>
          </motion.div>
          <AnimatedText delay={0.2}>
            <h2 className="mb-8">
              <span className="text-gradient-logo">Flare Media LLC</span>
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.4}>
            <p className="text-2xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Crafting <span className="text-gradient-logo font-semibold">Narratives</span> That Resonate
            </p>
          </AnimatedText>
        </AnimatedSection>

        {/* Mission & Vision */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeInLeft}>
            <AnimatedCard delay={0.2}>
              <Card className="relative overflow-hidden shadow-hero hover:shadow-glow transition-smooth h-full group">
                <div className="absolute inset-0 gradient-primary opacity-5 group-hover:opacity-10 transition-smooth" />
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className="flex items-start space-x-4 mb-6">
                    <motion.div 
                      className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center shadow-glow"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Target className="w-8 h-8 text-primary-foreground" />
                    </motion.div>
                    <div className="flex-1">
                      <CardTitle className="text-3xl md:text-4xl font-heading mb-2 text-gradient-logo">
                        Mission
                      </CardTitle>
                      <div className="w-20 h-1 gradient-primary rounded-full" />
                    </div>
                  </div>
                  <CardContent className="flex-grow flex items-center p-0">
                    <p className="text-foreground text-lg leading-relaxed font-medium">
                      In today's fast-paced, ever-changing digital world, Flare helps businesses 
                      stand out and authentically resonate with their audience. Storytelling business.
                    </p>
                  </CardContent>
                </div>
              </Card>
            </AnimatedCard>
          </motion.div>

          <motion.div variants={fadeInRight}>
            <AnimatedCard delay={0.4}>
              <Card className="relative overflow-hidden shadow-hero hover:shadow-glow transition-smooth h-full group">
                <div className="absolute inset-0 gradient-accent opacity-5 group-hover:opacity-10 transition-smooth" />
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className="flex items-start space-x-4 mb-6">
                    <motion.div 
                      className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center shadow-glow"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Eye className="w-8 h-8 text-accent-foreground" />
                    </motion.div>
                    <div className="flex-1">
                      <CardTitle className="text-3xl md:text-4xl font-heading mb-2 text-gradient-logo">
                        Vision
                      </CardTitle>
                      <div className="w-20 h-1 gradient-accent rounded-full" />
                    </div>
                  </div>
                  <CardContent className="flex-grow flex items-center p-0">
                    <p className="text-foreground text-lg leading-relaxed font-medium">
                      To be leading catalysts of digital transformation.
                    </p>
                  </CardContent>
                </div>
              </Card>
            </AnimatedCard>
          </motion.div>
        </motion.div>

        {/* Who We Are */}
        <AnimatedSection className="mb-20">
          <div className="relative">
            <Card className="relative overflow-hidden shadow-hero border-gradient">
              <div className="absolute inset-0 gradient-card opacity-30" />
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 gradient-logo rounded-full" />
              
              <div className="relative z-10 p-12 lg:p-16">
                <AnimatedText>
                  <div className="text-center mb-10">
                    <motion.div 
                      className="w-20 h-20 gradient-logo rounded-3xl flex items-center justify-center mx-auto mb-6"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Shield className="w-10 h-10 text-primary-foreground" />
                    </motion.div>
                    <h3 className="mb-6">
                      Who <span className="text-gradient-logo">We Are</span>
                    </h3>
                    <div className="w-24 h-1 gradient-logo rounded-full mx-auto" />
                  </div>
                </AnimatedText>
                
                <AnimatedText delay={0.3}>
                  <div className="max-w-5xl mx-auto">
                    <p className="text-foreground text-xl leading-relaxed font-medium text-center mb-8">
                      At <span className="text-gradient-logo font-semibold">Flare Media LLC</span>, we are your trusted partner in maximizing the potential 
                      of digital platforms. Based on years of expertise and a deep understanding of 
                      the evolving media landscape, we specialize in empowering creators, brands, and 
                      businesses to thrive in the digital space through innovative strategies, 
                      optimized management, and cutting-edge solutions.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                      <div className="text-center p-6 rounded-xl bg-primary/5 border border-primary/10">
                        <div className="text-3xl font-bold text-gradient-logo mb-2">10+</div>
                        <div className="text-sm text-muted-foreground">Years Experience</div>
                      </div>
                      <div className="text-center p-6 rounded-xl bg-accent/5 border border-accent/10">
                        <div className="text-3xl font-bold text-gradient-logo mb-2">500+</div>
                        <div className="text-sm text-muted-foreground">Projects Delivered</div>
                      </div>
                      <div className="text-center p-6 rounded-xl bg-primary/5 border border-primary/10">
                        <div className="text-3xl font-bold text-gradient-logo mb-2">100%</div>
                        <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </AnimatedText>
              </div>
            </Card>
          </div>
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
                <Card className="relative overflow-hidden shadow-hero hover:shadow-glow transition-smooth group h-full border border-primary/10">
                  <div className="absolute inset-0 gradient-card opacity-20 group-hover:opacity-30 transition-smooth" />
                  <div className="absolute top-0 left-0 w-full h-1 gradient-logo" />
                  
                  <div className="relative z-10 p-8 text-center h-full flex flex-col">
                    <motion.div 
                      className="w-20 h-20 gradient-logo rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-glow"
                      whileHover={{ 
                        scale: 1.15, 
                        rotate: 10,
                        transition: { type: "spring", stiffness: 400, damping: 17 }
                      }}
                    >
                      <service.icon className="w-10 h-10 text-primary-foreground" />
                    </motion.div>
                    
                    <CardTitle className="text-2xl mb-4 text-gradient-logo font-heading">
                      {service.title}
                    </CardTitle>
                    
                    <div className="w-16 h-1 gradient-primary rounded-full mx-auto mb-4" />
                    
                    <CardDescription className="text-foreground flex-grow flex items-center text-center text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
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