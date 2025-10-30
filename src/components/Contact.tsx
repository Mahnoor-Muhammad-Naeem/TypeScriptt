// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Mail, MapPin, Phone } from "lucide-react";
// import { toast } from "sonner";

// const Contact = () => {
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast.success("Message sent successfully! I'll get back to you soon.");
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: "Email",
//       value: "mahnoormuhammadnaeem99@gmail.com",
//     },
//     {
//       icon: Phone,
//       label: "Phone",
//       value: "+92 (315) 315-4540",
//     },
//     {
//       icon: MapPin,
//       label: "Location",
//       value: "Gulistan-e-Jauhar, Karachi, Sindh, Pakistan",
//     },
//   ];

//   return (
//     <section id="contact" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
//       <div className="container px-4 mx-auto relative z-10">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-20 animate-fade-in">
//             <h2 className="text-5xl md:text-6xl font-bold mb-6">
//               Get In <span className="gradient-text">Touch</span>
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-6 rounded-full"></div>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//               Let's discuss your next project or collaboration opportunity
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12">
//             <div className="space-y-8 animate-slide-in">
//               <div>
//                 <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
//                   Let's talk about your project
//                 </h3>
//                 <p className="text-muted-foreground leading-relaxed text-lg">
//                   I'm always interested in hearing about new projects and opportunities. 
//                   Whether you have a question or just want to say hi, feel free to reach out!
//                 </p>
//               </div>

//               <div className="space-y-4">
//                 {contactInfo.map((info, index) => (
//                   <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover-glow group hover:border-primary/30 transition-all">
//                     <CardContent className="p-5 flex items-center gap-5">
//                       <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
//                         <info.icon className="w-6 h-6 text-primary" />
//                       </div>
//                       <div>
//                         <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
//                         <p className="font-semibold text-lg">{info.value}</p>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>

//             <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover-glow animate-fade-in relative overflow-hidden group">
//               {/* Card gradient overlay */}
//               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
//               <CardContent className="p-8 relative z-10">
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-semibold mb-3">
//                       Your Name
//                     </label>
//                     <Input
//                       id="name"
//                       placeholder="Mahnoor"
//                       required
//                       className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 h-12"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-semibold mb-3">
//                       Email Address
//                     </label>
//                     <Input
//                       id="email"
//                       type="email"
//                       placeholder="mahnoor@gmail.com"
//                       required
//                       className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 h-12"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="message" className="block text-sm font-semibold mb-3">
//                       Message
//                     </label>
//                     <Textarea
//                       id="message"
//                       placeholder="Tell me about your project..."
//                       rows={6}
//                       required
//                       className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 resize-none"
//                     />
//                   </div>
//                   <Button type="submit" variant="gradient" size="lg" className="w-full">
//                     Send Message
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Mail, MapPin, Phone } from "lucide-react";
// import { toast } from "sonner";

// const Contact = () => {
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast.success("Message sent successfully! I'll get back to you soon.");
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: "Email",
//       value: "hello@example.com",
//     },
//     {
//       icon: Phone,
//       label: "Phone",
//       value: "+1 (555) 123-4567",
//     },
//     {
//       icon: MapPin,
//       label: "Location",
//       value: "San Francisco, CA",
//     },
//   ];

//   return (
//     <section id="contact" className="py-20 md:py-32 bg-muted/30">
//       <div className="container px-4 mx-auto">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16 animate-fade-in">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Get In <span className="gradient-text">Touch</span>
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Let's discuss your next project or collaboration opportunity
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12">
//             <div className="space-y-8 animate-slide-in">
//               <div>
//                 <h3 className="text-2xl font-bold mb-4">Let's talk about your project</h3>
//                 <p className="text-muted-foreground leading-relaxed">
//                   I'm always interested in hearing about new projects and opportunities. 
//                   Whether you have a question or just want to say hi, feel free to reach out!
//                 </p>
//               </div>

//               <div className="space-y-4">
//                 {contactInfo.map((info, index) => (
//                   <Card key={index} className="bg-card border-border">
//                     <CardContent className="p-4 flex items-center gap-4">
//                       <div className="p-3 rounded-lg bg-primary/10">
//                         <info.icon className="w-5 h-5 text-primary" />
//                       </div>
//                       <div>
//                         <p className="text-sm text-muted-foreground">{info.label}</p>
//                         <p className="font-medium">{info.value}</p>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>

//             <Card className="bg-card border-border hover-glow animate-fade-in">
//               <CardContent className="p-8">
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium mb-2">
//                       Your Name
//                     </label>
//                     <Input
//                       id="name"
//                       placeholder="John Doe"
//                       required
//                       className="bg-background"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium mb-2">
//                       Email Address
//                     </label>
//                     <Input
//                       id="email"
//                       type="email"
//                       placeholder="john@example.com"
//                       required
//                       className="bg-background"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium mb-2">
//                       Message
//                     </label>
//                     <Textarea
//                       id="message"
//                       placeholder="Tell me about your project..."
//                       rows={5}
//                       required
//                       className="bg-background resize-none"
//                     />
//                   </div>
//                   <Button type="submit" variant="gradient" size="lg" className="w-full">
//                     Send Message
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// 2nd:
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Mail, MapPin, Phone } from "lucide-react";
// import { toast } from "sonner";

// const Contact = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // ✅ Updated handleSubmit with Formspree integration
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const form = e.currentTarget;
//     const formData = new FormData(form);

//     try {
//       const response = await fetch("https://formspree.io/f/mrbyldvd", {
//         method: "POST",
//         body: formData,
//         headers: { Accept: "application/json" },
//       });

//       if (response.ok) {
//         toast.success("✅ Message sent successfully! I'll get back to you soon.");
//         form.reset();
//       } else {
//         toast.error("❌ Failed to send message. Please try again later.");
//       }
//     } catch (error) {
//       toast.error("⚠️ Something went wrong!");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: "Email",
//       value: "mahnoormuhammadnaeem99@gmail.com",
//     },
//     {
//       icon: Phone,
//       label: "Phone",
//       value: "+1 (555) 123-4567",
//     },
//     {
//       icon: MapPin,
//       label: "Location",
//       value: "San Francisco, CA",
//     },
//   ];

//   return (
//     <section id="contact" className="py-20 md:py-32 bg-muted/30">
//       <div className="container px-4 mx-auto">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16 animate-fade-in">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Get In <span className="gradient-text">Touch</span>
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Let's discuss your next project or collaboration opportunity
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12">
//             <div className="space-y-8 animate-slide-in">
//               <div>
//                 <h3 className="text-2xl font-bold mb-4">Let's talk about your project</h3>
//                 <p className="text-muted-foreground leading-relaxed">
//                   I'm always interested in hearing about new projects and opportunities.
//                   Whether you have a question or just want to say hi, feel free to reach out!
//                 </p>
//               </div>

//               <div className="space-y-4">
//                 {contactInfo.map((info, index) => (
//                   <Card key={index} className="bg-card border-border">
//                     <CardContent className="p-4 flex items-center gap-4">
//                       <div className="p-3 rounded-lg bg-primary/10">
//                         <info.icon className="w-5 h-5 text-primary" />
//                       </div>
//                       <div>
//                         <p className="text-sm text-muted-foreground">{info.label}</p>
//                         <p className="font-medium">{info.value}</p>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>

//             <Card className="bg-card border-border hover-glow animate-fade-in">
//               <CardContent className="p-8">
//                 {/* ✅ Updated form to send data to Formspree */}
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium mb-2">
//                       Your Name
//                     </label>
//                     <Input
//                       id="name"
//                       name="name"
//                       placeholder="John Doe"
//                       required
//                       className="bg-background"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium mb-2">
//                       Email Address
//                     </label>
//                     <Input
//                       id="email"
//                       name="email"
//                       type="email"
//                       placeholder="john@example.com"
//                       required
//                       className="bg-background"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium mb-2">
//                       Message
//                     </label>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       placeholder="Tell me about your project..."
//                       rows={5}
//                       required
//                       className="bg-background resize-none"
//                     />
//                   </div>
//                   <Button
//                     type="submit"
//                     variant="gradient"
//                     size="lg"
//                     className="w-full"
//                     disabled={isSubmitting}
//                   >
//                     {isSubmitting ? "Sending..." : "Send Message"}
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
// contact page=> formspree not working...
// COLORS ARE WORKING...
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Mail, MapPin, Phone } from "lucide-react";
// import { toast } from "sonner";

// const Contact = () => {
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast.success("Message sent successfully! I'll get back to you soon.");
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: "Email",
//       value: "hello@example.com",
//     },
//     {
//       icon: Phone,
//       label: "Phone",
//       value: "+1 (555) 123-4567",
//     },
//     {
//       icon: MapPin,
//       label: "Location",
//       value: "San Francisco, CA",
//     },
//   ];

//   return (
//     <section id="contact" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
//       <div className="container px-4 mx-auto relative z-10">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-20 animate-fade-in">
//             <h2 className="text-5xl md:text-6xl font-bold mb-6">
//               Get In <span className="gradient-text">Touch</span>
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-6 rounded-full"></div>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//               Let's discuss your next project or collaboration opportunity
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12">
//             <div className="space-y-8 animate-slide-in">
//               <div>
//                 <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
//                   Let's talk about your project
//                 </h3>
//                 <p className="text-muted-foreground leading-relaxed text-lg">
//                   I'm always interested in hearing about new projects and opportunities. 
//                   Whether you have a question or just want to say hi, feel free to reach out!
//                 </p>
//               </div>

//               <div className="space-y-4">
//                 {contactInfo.map((info, index) => (
//                   <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover-glow group hover:border-primary/30 transition-all">
//                     <CardContent className="p-5 flex items-center gap-5">
//                       <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
//                         <info.icon className="w-6 h-6 text-primary" />
//                       </div>
//                       <div>
//                         <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
//                         <p className="font-semibold text-lg">{info.value}</p>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>

//             <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover-glow animate-fade-in relative overflow-hidden group">
//               {/* Card gradient overlay */}
//               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
//               <CardContent className="p-8 relative z-10">
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-semibold mb-3">
//                       Your Name
//                     </label>
//                     <Input
//                       id="name"
//                       placeholder="John Doe"
//                       required
//                       className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 h-12"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-semibold mb-3">
//                       Email Address
//                     </label>
//                     <Input
//                       id="email"
//                       type="email"
//                       placeholder="john@example.com"
//                       required
//                       className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 h-12"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="message" className="block text-sm font-semibold mb-3">
//                       Message
//                     </label>
//                     <Textarea
//                       id="message"
//                       placeholder="Tell me about your project..."
//                       rows={6}
//                       required
//                       className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 resize-none"
//                     />
//                   </div>
//                   <Button type="submit" variant="gradient" size="lg" className="w-full">
//                     Send Message
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



// GPT: // formspree and coloring is working.
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Formspree submit (replace the ID if your form has a different one)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mrbyldvd", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        // toast.success("✅ Message sent successfully! I'll get back to you soon.");
        toast.success("Message sent successfully! I'll get back to you soon.");
        form.reset();
      } else {
        toast.error("❌ Failed to send message. Please try again later.");
      }
    } catch (err) {
      toast.error("⚠️ Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "mahnoormuhammadnaeem99@gmail.com" },
    { icon: Phone, label: "Phone", value: "+92 (315) 315-4540" },
    { icon: MapPin, label: "Location", value: "Gulistan-e-Jauhar, Karachi, Sindh, Pakistan" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-6 rounded-full" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Let's discuss your next project or collaboration opportunity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: info cards */}
            <div className="space-y-8 animate-slide-in">
              <div>
                <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  Let's talk about your project
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I'm always interested in hearing about new projects and opportunities.
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 backdrop-blur-sm border-border/50 hover-glow group hover:border-primary/30 transition-all"
                  >
                    <CardContent className="p-5 flex items-center gap-5">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        <p className="font-semibold text-lg">{info.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right: form (Formspree) */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover-glow animate-fade-in relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-8 relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Formspree needs name attributes */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-3">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Mahnoor"
                      required
                      className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-3">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="mahnoor@gmail.com"
                      required
                      className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-3">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                      className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 resize-none"
                    />
                  </div>

                  {/* Optional: extra Formspree fields */}
                  {/* <input type="hidden" name="_subject" value="New message from portfolio contact form" /> */}
                  {/* <input type="text" name="_gotcha" className="hidden" />  // honeypot */}

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
