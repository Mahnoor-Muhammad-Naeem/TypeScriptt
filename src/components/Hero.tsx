import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <p className="text-secondary text-lg font-semibold tracking-wider uppercase bg-secondary/10 px-6 py-2 rounded-full border border-secondary/30 backdrop-blur-sm">
                Welcome to Mahnoor's portfolio
              </p>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-tight leading-tight">
              AI Automation{" "}
              <span className="gradient-text block md:inline">
                Engineer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building intelligent systems powered by data, machine learning, and innovation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              variant="gradient" 
              size="lg"
              className="group min-w-[200px]"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">View My Work</span>
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              className="min-w-[200px]"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          <div className="pt-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a 
              href="#about"
              className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all hover:gap-4 group"
            >
              <ArrowDown className="w-6 h-6 animate-float group-hover:text-primary transition-colors" />
              <span className="font-medium">Scroll to explore</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
