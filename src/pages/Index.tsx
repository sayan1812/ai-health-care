import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Shield, Zap, HeartPulse, ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/chat");
      }
    });
  }, [navigate]);

  return (
    <div className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">HealthBot</span>
          </div>
          <Button variant="outline" onClick={() => navigate("/auth")}>
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-medium">AI-Powered Health Assistant</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent" 
              style={{ backgroundImage: "var(--gradient-primary)" }}>
            Your 24/7 Healthcare Companion
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get instant answers to your health questions, understand symptoms, and receive 
            personalized guidance from our AI health assistant.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="text-lg px-8"
              onClick={() => navigate("/auth")}
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8"
              onClick={() => navigate("/auth")}
            >
              Learn More
            </Button>
          </div>

          {/* Important Disclaimer */}
          <Card className="max-w-3xl mx-auto mb-16" style={{ boxShadow: "var(--shadow-medium)" }}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-semibold mb-2">Important Medical Disclaimer</h3>
                  <p className="text-sm text-muted-foreground">
                    HealthBot is an AI assistant providing general health information only. 
                    It is not a substitute for professional medical advice, diagnosis, or treatment. 
                    Always seek the advice of qualified healthcare providers with any questions 
                    regarding medical conditions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card style={{ boxShadow: "var(--shadow-soft)" }}>
              <CardContent className="p-6 text-center">
                <div className="p-3 rounded-full bg-primary/10 inline-flex mb-4">
                  <Activity className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">24/7 Availability</h3>
                <p className="text-sm text-muted-foreground">
                  Get health guidance anytime, anywhere, day or night
                </p>
              </CardContent>
            </Card>

            <Card style={{ boxShadow: "var(--shadow-soft)" }}>
              <CardContent className="p-6 text-center">
                <div className="p-3 rounded-full bg-secondary/10 inline-flex mb-4">
                  <Zap className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Instant Responses</h3>
                <p className="text-sm text-muted-foreground">
                  Receive immediate answers to your health questions
                </p>
              </CardContent>
            </Card>

            <Card style={{ boxShadow: "var(--shadow-soft)" }}>
              <CardContent className="p-6 text-center">
                <div className="p-3 rounded-full bg-accent/50 inline-flex mb-4">
                  <HeartPulse className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Personalized Care</h3>
                <p className="text-sm text-muted-foreground">
                  Contextual conversations tailored to your needs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t mt-16">
        <p className="text-center text-sm text-muted-foreground">
          © 2025 HealthBot. For informational purposes only. Not medical advice.
        </p>
      </footer>
    </div>
  );
};

export default Index;
