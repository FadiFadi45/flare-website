import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Youtube, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const channels = [
  {
    name: "YouTube",
    icon: Youtube,
    description: "Video content & productions",
    subscribers: "2.5M+",
    url: "https://www.youtube.com/@FlareArtsMedia",
    gradient: "from-red-500 to-red-600"
  },
  {
    name: "Instagram",
    icon: Instagram,
    description: "Behind the scenes & stories",
    subscribers: "1.8M+",
    url: "https://www.instagram.com/flare.media0/",
    gradient: "from-pink-500 to-purple-600"
  },
  {
    name: "TikTok",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7.83a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.26Z"/>
      </svg>
    ),
    description: "Short-form viral content",
    subscribers: "3.2M+",
    url: "https://tiktok.com/@flaremedia",
    gradient: "from-black to-gray-800"
  },
  {
    name: "Facebook",
    icon: Facebook,
    description: "Community & updates",
    subscribers: "950K+",
    url: "https://www.facebook.com/Flare.media0/",
    gradient: "from-blue-600 to-blue-700"
  },
  {
    name: "Twitter",
    icon: Twitter,
    description: "Industry news & insights",
    subscribers: "420K+",
    url: "https://twitter.com/flaremedia",
    gradient: "from-sky-400 to-sky-600"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    description: "Professional network",
    subscribers: "85K+",
    url: "https://www.linkedin.com/company/flare-media-llc/",
    gradient: "from-blue-700 to-blue-800"
  }
];

const Channels = () => {
  return (
    <section id="channels" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <AnimatedSection>
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <ExternalLink className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Our Channels</span>
              </div>
            </AnimatedSection>

            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              <AnimatedText>
                Follow Our Journey
              </AnimatedText>
            </motion.h2>

            <AnimatedSection delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay connected with Flare Media across all platforms. From viral TikToks to professional LinkedIn insights, 
                we're creating engaging content everywhere.
              </p>
            </AnimatedSection>
          </div>

          {/* Channels Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
          >
            {channels.map((channel, index) => (
              <motion.div
                key={channel.name}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${channel.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <channel.icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-xl font-semibold mb-2">{channel.name}</h3>
                    <p className="text-muted-foreground mb-3">{channel.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-primary">
                        {channel.subscribers}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                        asChild
                      >
                        <a 
                          href={channel.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2"
                        >
                          <span>Follow</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <AnimatedSection delay={0.6}>
            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-6">
                Ready to collaborate? Let's create something amazing together.
              </p>
              <Button size="lg" className="group">
                <a href="#contact" className="flex items-center space-x-2">
                  <span>Get In Touch</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </motion.div>
      </div>
    </section>
  );
};

export default Channels;