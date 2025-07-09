import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, CheckCircle, TrendingUp, Users } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="gradient-card shadow-hero overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left Side - Content */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium text-primary">Industry Insights</span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    Stay Ahead of the <span className="text-gradient-logo">Curve</span>
                  </h2>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Get exclusive insights, industry trends, behind-the-scenes content, 
                    and first access to our latest productions delivered to your inbox.
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Weekly industry insights & trends</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Exclusive behind-the-scenes content</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Early access to new productions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Creator success stories & tips</span>
                    </div>
                  </div>

                  {/* Newsletter Form */}
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                      <Input 
                        placeholder="Enter your email address"
                        className="flex-1 bg-background/50"
                      />
                      <Button variant="default" className="sm:w-auto">
                        Subscribe
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
                    </p>
                  </div>
                </div>

                {/* Right Side - Stats */}
                <div className="bg-secondary/30 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-8">
                    <div className="text-center">
                       <div className="text-3xl font-bold text-gradient-logo mb-2">25,000+</div>
                       <div className="text-sm text-muted-foreground flex items-center justify-center">
                         <Users className="w-4 h-4 mr-2" />
                         Industry Professionals
                       </div>
                     </div>
                     
                     <div className="text-center">
                       <div className="text-3xl font-bold text-gradient-logo mb-2">98%</div>
                       <div className="text-sm text-muted-foreground flex items-center justify-center">
                         <TrendingUp className="w-4 h-4 mr-2" />
                         Open Rate
                       </div>
                     </div>
                     
                     <div className="text-center">
                       <div className="text-3xl font-bold text-gradient-logo mb-2">Weekly</div>
                       <div className="text-sm text-muted-foreground flex items-center justify-center">
                         <Mail className="w-4 h-4 mr-2" />
                         Fresh Content
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-border">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground mb-2">Trusted by teams at</div>
                      <div className="text-xs text-muted-foreground space-x-4">
                        Netflix • Disney • Warner • Sony • Universal
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;