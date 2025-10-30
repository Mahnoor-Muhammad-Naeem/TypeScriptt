import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Mahnoor-Muhammad-Naeem", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mahnoor-muhammad-naeem/", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="border-t border-border/50 py-16 bg-muted/20 backdrop-blur-sm">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="text-center md:text-left">
              <p className="text-3xl font-bold gradient-text mb-3">Portfolio</p>
              <p className="text-muted-foreground text-lg">
                Building the future, one line of code at a time
              </p>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover-glow transition-all hover:border-primary/30"
                >
                  <social.icon className="w-6 h-6 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-border/50 text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Mahnoor | Designed and developed with{" "}
              <span className="gradient-text font-semibold">passion</span> for{" "}
              <span className="gradient-text font-semibold">AI innovation</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
