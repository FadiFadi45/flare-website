import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Target, 
  Eye, 
  Users, 
  Settings, 
  TrendingUp, 
  BarChart3,
  Shield
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
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
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Crafting <span className="text-gradient-logo font-semibold">Narratives</span> That Resonate
            </p>
          </AnimatedText>
        </AnimatedSection>

        {/* Mission & Vision Side by Side */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Mission */}
          <motion.div variants={fadeInLeft}>
            <AnimatedCard delay={0.2}>
              <Card className="relative overflow-hidden shadow-hero hover:shadow-glow transition-smooth h-full group">
                <div className="absolute inset-0 gradient-primary opacity-5 group-hover:opacity-10 transition-smooth" />
                <div className="relative z-10 p-10 h-full">
                  <div className="flex items-start space-x-4 mb-8">
                    <motion.div 
                      className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center shadow-glow"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Target className="w-10 h-10 text-primary-foreground" />
                    </motion.div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-heading mb-4 text-gradient-logo">
                        Mission
                      </CardTitle>
                      <div className="w-24 h-1 gradient-primary rounded-full" />
                    </div>
                  </div>
                  <CardContent className="p-0">
                    <p className="text-foreground leading-relaxed">
                      In today's fast-paced, ever-changing digital world, Flare helps businesses 
                      stand out and authentically resonate with their audience. We are in the 
                      storytelling business, crafting narratives that captivate and convert.
                    </p>
                  </CardContent>
                </div>
              </Card>
            </AnimatedCard>
          </motion.div>

          {/* Vision */}
          <motion.div variants={fadeInRight}>
            <AnimatedCard delay={0.4}>
              <Card className="relative overflow-hidden shadow-hero hover:shadow-glow transition-smooth h-full group">
                <div className="absolute inset-0 gradient-accent opacity-5 group-hover:opacity-10 transition-smooth" />
                <div className="relative z-10 p-10 h-full">
                  <div className="flex items-start space-x-4 mb-8">
                    <motion.div 
                      className="w-20 h-20 gradient-accent rounded-2xl flex items-center justify-center shadow-glow"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Eye className="w-10 h-10 text-accent-foreground" />
                    </motion.div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-heading mb-4 text-gradient-logo">
                        Vision
                      </CardTitle>
                      <div className="w-24 h-1 gradient-accent rounded-full" />
                    </div>
                  </div>
                  <CardContent className="p-0">
                    <p className="text-foreground leading-relaxed">
                      To be the leading catalysts of digital transformation, empowering creators 
                      and brands to reach their full potential through innovative media solutions 
                      and strategic storytelling.
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
                    <p className="text-foreground leading-relaxed text-center mb-8">
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

      </div>
    </section>
  );
};

export default About;