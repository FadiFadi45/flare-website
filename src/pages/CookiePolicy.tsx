import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          <Link to="/">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          
          <p className="text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
            <p className="mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information to the site owners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
            <p className="mb-4">Flare Media LLC uses cookies to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Analyze how you use our website</li>
              <li>Improve your browsing experience</li>
              <li>Provide personalized content and advertisements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Essential Cookies</h3>
              <p className="mb-4">
                These cookies are necessary for the website to function properly and cannot be disabled.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Analytics Cookies</h3>
              <p className="mb-4">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Marketing Cookies</h3>
              <p className="mb-4">
                These cookies are used to track visitors across websites to display relevant and engaging advertisements.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
            <p className="mb-4">
              You can control and manage cookies through your browser settings. Please note that removing or blocking 
              cookies may impact your user experience and some functionality may not work as intended.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
            <p className="mb-4">
              Some cookies on our website are set by third-party services. We use these services to enhance 
              your experience, such as analytics providers and social media platforms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our Cookie Policy, please contact us at:
            </p>
            <p className="mb-2">
              <strong>Flare Media LLC</strong><br />
              Email: privacy@flaremedia.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;