import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send
} from "lucide-react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "General inquiries",
    contact: "Info@flare.ae",
    action: "mailto:Info@flare.ae"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Business inquiries",
    contact: "+971 56 919 185",
    action: "tel:+971569191185"
  },
  {
    icon: MapPin,
    title: "Dubai Office 1",
    description: "Business Bay",
    contact: "Business Bay, Empire Heights A, Leading Zone Business Center, Dubai, 294474",
    action: "#"
  },
  {
    icon: MapPin,
    title: "Dubai Office 2", 
    description: "Media City",
    contact: "409A - Building 1,Dubai Media City , Dubai,UAE",
    action: "#"
  },
];


const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitMessage("");
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", data);
      setSubmitMessage("Thank you! Your message has been sent successfully.");
      reset();
    } catch (error) {
      setSubmitMessage("Sorry, there was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-12 bg-secondary/20 scroll-offset">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Send className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </div>
          <h2 className="mb-6">
            Let's Create Something <span className="text-gradient-logo">Amazing</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your vision to life? We'd love to hear about your project 
            and discuss how we can help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        First Name <span className="text-destructive">*</span>
                      </label>
                      <Input 
                        placeholder="John"
                        {...register("firstName", {
                          required: "First name is required",
                          minLength: { value: 2, message: "First name must be at least 2 characters" }
                        })}
                        className={errors.firstName ? "border-destructive" : ""}
                      />
                      {errors.firstName && (
                        <p className="text-sm text-destructive mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Last Name <span className="text-destructive">*</span>
                      </label>
                      <Input 
                        placeholder="Doe"
                        {...register("lastName", {
                          required: "Last name is required",
                          minLength: { value: 2, message: "Last name must be at least 2 characters" }
                        })}
                        className={errors.lastName ? "border-destructive" : ""}
                      />
                      {errors.lastName && (
                        <p className="text-sm text-destructive mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <Input 
                        type="email" 
                        placeholder="john@example.com"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Please enter a valid email address"
                          }
                        })}
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Company</label>
                      <Input 
                        placeholder="Your Company"
                        {...register("company")}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <Textarea 
                      placeholder="Your message..."
                      className={`min-h-[180px] ${errors.message ? "border-destructive" : ""}`}
                      {...register("message", {
                        required: "Message is required",
                        minLength: { value: 10, message: "Message must be at least 10 characters" }
                      })}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    variant="default" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  {submitMessage && (
                    <div className={`text-sm text-center p-3 rounded-md ${
                      submitMessage.includes("error") 
                        ? "bg-destructive/10 text-destructive" 
                        : "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                    }`}>
                      {submitMessage}
                    </div>
                  )}

                  <p className="text-xs text-muted-foreground text-center">
                    We'll respond within 24 hours during business days.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social */}
          <div>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-smooth cursor-pointer">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm">{method.title}</h3>
                      <p className="text-xs text-muted-foreground mb-1">{method.description}</p>
                      <p className="text-sm font-medium">{method.contact}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;