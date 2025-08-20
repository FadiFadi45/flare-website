import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Calendar, Users, Eye } from "lucide-react";

const productions = [
  {
    title: "Digital Dreams",
    type: "Web Series",
    status: "Current",
    description: "A futuristic drama exploring AI consciousness in a world where technology and humanity collide.",
    views: "12.5M",
    episodes: "8/12",
    cast: ["Sarah Chen", "Marcus Rodriguez", "Elena Volkov"],
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=600&fit=crop"
  },
  {
    title: "Behind the Lens",
    type: "Documentary",
    status: "Upcoming",
    description: "An intimate look at the creative process behind modern filmmaking and the artists who shape our visual culture.",
    views: "Coming Soon",
    episodes: "6 Episodes",
    cast: ["Director interviews", "Industry experts"],
    image: "https://images.unsplash.com/photo-1489599338477-c52f7b0b70ad?w=800&h=600&fit=crop"
  },
  {
    title: "The Creator's Journey",
    type: "Reality Series",
    status: "Post-Production",
    description: "Following aspiring content creators as they build their brands and navigate the digital landscape.",
    views: "TBA",
    episodes: "10 Episodes",
    cast: ["Emerging creators", "Industry mentors"],
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=600&fit=crop"
  }
];

const pastProductions = [
  {
    title: "Viral Vibes",
    type: "Talk Show",
    views: "45M+",
    seasons: "3 Seasons"
  },
  {
    title: "Tech Tomorrow",
    type: "Educational Series",
    views: "28M+",
    seasons: "2 Seasons"
  },
  {
    title: "Brand Stories",
    type: "Commercial Series",
    views: "15M+",
    seasons: "1 Season"
  }
];

const Productions = () => {
  return (
    <section id="productions" className="py-20 bg-background scroll-offset">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-muted/20 rounded-full px-4 py-2 mb-6">
            <Play className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Original Productions</span>
          </div>
          <h2 className="mb-6">
            Stories That <span className="text-gradient-logo">Captivate</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            From web series to documentaries, our original productions showcase compelling 
            narratives that resonate with audiences across the globe.
          </p>
        </div>

        {/* Current & Upcoming Productions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {productions.map((production, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-glow transition-smooth group">
              <div className="relative">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${production.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant={production.status === 'Current' ? 'default' : production.status === 'Upcoming' ? 'secondary' : 'outline'}>
                      {production.status}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                    <Button variant="hero" size="lg">
                      <Play className="w-5 h-5 mr-2" />
                      Watch Trailer
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">{production.title}</h3>
                  <Badge variant="outline">{production.type}</Badge>
                </div>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {production.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4 text-muted-foreground" />
                      <span>{production.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>{production.episodes}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 text-sm">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {production.cast.slice(0, 2).join(", ")}
                      {production.cast.length > 2 && ` +${production.cast.length - 2} more`}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Past Productions */}
        <div className="bg-card/50 backdrop-blur-lg rounded-2xl p-8">
          <h3 className="mb-6 text-center">Past Productions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastProductions.map((production, index) => (
              <div key={index} className="text-center p-4 rounded-lg hover:bg-muted/10 transition-smooth">
                <h4 className="font-semibold mb-2">{production.title}</h4>
                <Badge variant="outline" className="mb-2">{production.type}</Badge>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>{production.views} views</div>
                  <div>{production.seasons}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg">
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Productions;