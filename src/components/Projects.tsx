// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ExternalLink, Github } from "lucide-react";

// const Projects = () => {
//   const projects = [
//     {
//       title: "E-Commerce Platform",
//       description: "Full-stack e-commerce solution with payment integration and admin dashboard",
//       tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       title: "AI Content Generator",
//       description: "AI-powered tool for creating marketing content using GPT-4",
//       tags: ["Next.js", "OpenAI", "TailwindCSS"],
//       gradient: "from-cyan-500 to-blue-500",
//     },
//     {
//       title: "Project Management App",
//       description: "Collaborative project management with real-time updates",
//       tags: ["React", "Firebase", "TypeScript"],
//       gradient: "from-green-500 to-teal-500",
//     },
//     {
//       title: "Social Media Dashboard",
//       description: "Analytics dashboard for tracking social media metrics",
//       tags: ["Vue.js", "D3.js", "Express"],
//       gradient: "from-orange-500 to-red-500",
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"></div>
      
//       <div className="container px-4 mx-auto relative z-10">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-20 animate-fade-in">
//             <h2 className="text-5xl md:text-6xl font-bold mb-6">
//               Featured <span className="gradient-text">Projects</span>
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-6 rounded-full"></div>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//               Showcasing my recent work and creative solutions
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {projects.map((project, index) => (
//               <Card
//                 key={index}
//                 className="group bg-card/50 backdrop-blur-sm border-border/50 hover-glow transition-all overflow-hidden animate-fade-in relative"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 {/* Animated gradient border */}
//                 <div className={`h-1 bg-gradient-to-r ${project.gradient} relative`}>
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-border-flow"></div>
//                 </div>
                
//                 {/* Hover overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
//                 <CardContent className="p-8 relative z-10">
//                   <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all">
//                     {project.title}
//                   </h3>
//                   <p className="text-muted-foreground mb-6 leading-relaxed text-base">
//                     {project.description}
//                   </p>
//                   <div className="flex flex-wrap gap-2 mb-8">
//                     {project.tags.map((tag, tagIndex) => (
//                       <span
//                         key={tagIndex}
//                         className="px-4 py-2 text-sm rounded-full bg-muted/50 text-foreground backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex gap-4">
//                     <Button variant="outline" size="sm" className="gap-2 flex-1 hover:bg-primary/10">
//                       <ExternalLink className="w-4 h-4" />
//                       Live Demo
//                     </Button>
//                     <Button variant="ghost" size="sm" className="gap-2 flex-1 hover:bg-secondary/10">
//                       <Github className="w-4 h-4" />
//                       Code
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  liveUrl?: string; // <- add your live link here (Netlify/Vercel/etc.)
  codeUrl?: string; // <- add your GitHub repo link here
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "AI Website Chatbot Automation (n8n)",
      description: "AI-powered website chatbot built using n8n and Google Gemini, integrated with Google Sheets for automated conversations and data logging.",
      tags: ["n8n Automation", "AI Chatbot Development", "Google Gemini AI", "JavaScript Integration", "Google Sheets API"],
      gradient: "from-cyan-500 to-blue-500",
      liveUrl: "https://www.loom.com/share/c754dca62466448c965f92f5793806f5",                // <-- CHANGE
      codeUrl: "https://github.com/Mahnoor-Muhammad-Naeem/AI-Web-Chatbot-Automation", // <-- CHANGE
    },
    {
      title: "Customer Support Helpdesk",
      description:
        "Help-desk workspace for managing tickets end-to-end—triage → auto-assignment → SLAs → dashboards. Built on ClickUp Free plan.",
      tags: ["ClickUp", "Automations", "Dashboards", "SOP"],
      gradient: "from-purple-500 to-pink-500",
      liveUrl: "https://www.loom.com/share/7a0fb618f1f043c68e38f20a21125a1a",  // <-- CHANGE
      codeUrl: "https://github.com/Mahnoor-Muhammad-Naeem/Customer-Support-Project?utm_source=chatgpt.com",  // <-- CHANGE
    },
    {
      title: "Expense Tracker App-ClickUp",
      description: "Comprehensive ClickUp project plan for managing and tracking the Expense Tracker App with stages, workload, and Gantt visualization."
,
      tags: ["Workflow Automation", "Gantt Chart", "Dashboard"],
      gradient: "from-green-500 to-teal-500",
      liveUrl: "https://www.loom.com/share/e4dfc15b5cc44b6f96d1f0a346d34937?sid=838c5003-5178-4537-b41c-8c2521c7e015",       // <-- CHANGE
      codeUrl: "https://github.com/Mahnoor-Muhammad-Naeem/Expense-Tracker-App",     // <-- CHANGE
    },
    {
      title: "WhatsApp Bot (n8n)",
      description: "AI-powered WhatsApp Q&A bot built in n8n using Google Gemini and LangChain, enabling real-time, memory-based conversations via Meta Cloud API.",
      tags: ["n8n Automation", "Google Gemini AI", "LangChain Agent", "WhatsApp Cloud API", "Workflow Orchestration"],
      gradient: "from-orange-500 to-red-500",
      liveUrl: "https://www.loom.com/share/f7ecf7043f7a474faf74726d0b569100",            // <-- CHANGE
      codeUrl: "https://github.com/Mahnoor-Muhammad-Naeem/WhatsApp-Bot" // <-- CHANGE
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Showcasing my recent work and creative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group bg-card/50 backdrop-blur-sm border-border/50 hover-glow transition-all overflow-hidden animate-fade-in relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated gradient border */}
                <div className={`h-1 bg-gradient-to-r ${project.gradient} relative`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-border-flow"></div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <CardContent className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-2 text-sm rounded-full bg-muted/50 text-foreground backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {/* LIVE DEMO button -> real link */}
                    {project.liveUrl ? (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="gap-2 flex-1 hover:bg-primary/10"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live demo`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" className="flex-1" disabled>
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Button>
                    )}

                    {/* CODE button -> GitHub link */}
                    {project.codeUrl ? (
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="gap-2 flex-1 hover:bg-secondary/10"
                      >
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} source code on GitHub`}
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                    ) : (
                      <Button variant="ghost" size="sm" className="flex-1" disabled>
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
