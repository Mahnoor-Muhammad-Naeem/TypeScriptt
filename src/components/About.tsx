// 1ST ABOUT:
// // src/components/About.tsx
// import avatar from "../assets/hero-bg.jpg"; // <-- replace with your headshot path

// export default function About() {
//   return (
//     <section id="about" className="mx-auto max-w-6xl px-6 py-16">
//       <div className="rounded-2xl border border-white/10 bg-card-pattern p-6 md:p-8 shadow-2xl">
//         <div className="grid gap-8 md:grid-cols-[260px,1fr]">
//           {/* LEFT: avatar + identity + socials */}
//           <aside className="flex md:block items-center gap-5">
//             <img
//               src={avatar}
//               alt="Your photo"
//               className="h-28 w-28 md:h-40 md:w-40 rounded-full object-cover ring-2 ring-white/15"
//             />
//             <div>
//               <h3 className="mt-2 text-xl font-bold leading-tight">Your Name</h3>
//               <p className="text-sm text-indigo-300">AI Engineer</p>
//               <p className="text-sm text-zinc-400">Freelance / Open to work</p>

//               {/* socials */}
//               <div className="mt-3 flex gap-3 text-zinc-300">
//                 <a className="hover:text-white" href="https://github.com/yourname" aria-label="GitHub">
//                   <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
//                     <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.46-1.16-1.12-1.47-1.12-1.47-.92-.64.07-.63.07-.63 1.02.07 1.55 1.05 1.55 1.05.9 1.54 2.36 1.1 2.93.84.09-.66.35-1.1.63-1.35-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.26.1-2.62 0 0 .85-.27 2.78 1.02A9.7 9.7 0 0 1 12 6.8c.86 0 1.73.12 2.54.36 1.92-1.29 2.77-1.02 2.77-1.02.55 1.36.2 2.37.1 2.62.64.69 1.02 1.58 1.02 2.67 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>
//                   </svg>
//                 </a>
//                 <a className="hover:text-white" href="https://linkedin.com/in/yourname" aria-label="LinkedIn">
//                   <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
//                     <path d="M6.94 8.5V21H3.56V8.5h3.38ZM5.25 3a2.03 2.03 0 1 1 0 4.06 2.03 2.03 0 0 1 0-4.06ZM21 21h-3.38v-6.33c0-1.51-.54-2.54-1.9-2.54-1.03 0-1.64.69-1.91 1.37-.1.24-.13.57-.13.91V21H10.3s.04-10.6 0-11.7h3.38v1.66c.45-.7 1.26-1.7 3.07-1.7 2.24 0 3.94 1.46 3.94 4.6V21Z"/>
//                   </svg>
//                 </a>
//                 <a className="hover:text-white" href="mailto:you@email.com" aria-label="Email">
//                   <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
//                     <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </aside>

//           {/* RIGHT: about + download + lists */}
//           <div>
//             <h2 className="text-2xl font-extrabold">About Me</h2>
//             <p className="mt-3 leading-relaxed text-zinc-200">
//               I’m an <strong>AI Engineer</strong> specializing in LLMs, NLP, and deep learning. I build
//               data-driven products from prototype to production with a focus on reliability, scalability,
//               and responsible AI. I love turning complex problems into simple, measurable solutions.
//             </p>

//             {/* Download CV */}
//             <a
//               href="/assets/resume.pdf"  // put your PDF in public/assets/resume.pdf
//               download
//               className="mt-4 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white
//                          hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/60 transition"
//             >
//               <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
//                 <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm-7 2h14v2H5v-2z"/>
//               </svg>
//               Download CV
//             </a>

//             {/* Interests & Education */}
//             <div className="mt-8 grid gap-6 md:grid-cols-2">
//               <div>
//                 <h3 className="font-semibold text-lg">Interests</h3>
//                 <ul className="mt-3 space-y-2 text-zinc-300 list-disc list-inside">
//                   <li>Large Language Models & Retrieval (RAG)</li>
//                   <li>Natural Language Processing</li>
//                   <li>Computer Vision</li>
//                   <li>MLOps & Evaluation</li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="font-semibold text-lg">Education</h3>
//                 <ul className="mt-3 space-y-3 text-zinc-300">
//                   <li>
//                     <div className="font-medium">MSc Artificial Intelligence</div>
//                     <div className="text-sm text-zinc-400">Your University</div>
//                   </li>
//                   <li>
//                     <div className="font-medium">BSc Computer Science</div>
//                     <div className="text-sm text-zinc-400">Your University</div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




// 2ND ABOUT:
// // src/components/About.tsx
// import avatar from "../assets/hero-bg.jpg";

// export default function About() {
//   return (
//     <section id="about" className="mx-auto max-w-6xl px-6 py-16">

//       {/* OUTER CARD (optional soft glow like Contact on hover/click) */}
//       <div className="relative group rounded-2xl border border-white/10 bg-white/5 shadow-2xl overflow-hidden">
//         <div
//           className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition duration-300
//                      [background:radial-gradient(120%_100%_at_0%_0%,rgba(139,92,246,.18)_0%,transparent_45%),radial-gradient(120%_120%_at_100%_100%,rgba(20,184,166,.18)_0%,transparent_46%),linear-gradient(180deg,rgba(59,130,246,.12),transparent_55%)]"
//         />

//         {/* CONTENT */}
//         <div className="relative p-6 md:p-8">
//           <div className="grid gap-8 md:grid-cols-[260px,1fr]">

//             {/* LEFT: avatar + identity + socials */}
//             <aside className="flex md:block items-center gap-5">
//               <img
//                 src={avatar}
//                 alt="Your photo"
//                 className="h-28 w-28 md:h-40 md:w-40 rounded-full object-cover ring-2 ring-white/15"
//               />
//               <div>
//                 <h3 className="mt-2 text-xl font-bold leading-tight">Mahnoor</h3>
//                 <p className="text-sm text-indigo-300">AI Engineer</p>
//                 <p className="text-sm text-zinc-400">Freelance / Open to work</p>

//                 <div className="mt-3 flex gap-3 text-zinc-300">
//                   <a className="hover:text-white" href="https://github.com/Mahnoor-Muhammad-Naeem" aria-label="GitHub">
//                     <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
//                       <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.46-1.16-1.12-1.47-1.12-1.47-.92-.64.07-.63.07-.63 1.02.07 1.55 1.05 1.55 1.05.9 1.54 2.36 1.1 2.93.84.09-.66.35-1.1.63-1.35-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.26.1-2.62 0 0 .85-.27 2.78 1.02A9.7 9.7 0 0 1 12 6.8c.86 0 1.73.12 2.54.36 1.92-1.29 2.77-1.02 2.77-1.02.55 1.36.2 2.37.1 2.62.64.69 1.02 1.58 1.02 2.67 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
//                     </svg>
//                   </a>
//                   <a className="hover:text-white" href="https://www.linkedin.com/in/mahnoor-muhammad-naeem/" aria-label="LinkedIn">
//                     <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
//                       <path d="M6.94 8.5V21H3.56V8.5h3.38ZM5.25 3a2.03 2.03 0 1 1 0 4.06 2.03 2.03 0 0 1 0-4.06ZM21 21h-3.38v-6.33c0-1.51-.54-2.54-1.9-2.54-1.03 0-1.64.69-1.91 1.37-.1.24-.13.57-.13.91V21H10.3s.04-10.6 0-11.7h3.38v1.66c.45-.7 1.26-1.7 3.07-1.7 2.24 0 3.94 1.46 3.94 4.6V21Z" />
//                     </svg>
//                   </a>
//                   <a className="hover:text-white" href="mailto:mahnoormuhammadnaeem99@gmail.com" aria-label="Email">
//                     <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
//                       <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </aside>

//             {/* RIGHT: three hover-color cards */}
//             <div className="space-y-6">

//               {/* ABOUT ME — light purple */}
//               <div className="relative group rounded-2xl border border-white/10 bg-white/5 shadow-xl overflow-hidden">
//                 <div
//                   className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition duration-300
//                              [background:radial-gradient(120%_100%_at_0%_0%,rgba(196,181,253,.85)_0%,transparent_45%),radial-gradient(120%_120%_at_100%_100%,rgba(167,139,250,.85)_0%,transparent_46%),linear-gradient(180deg,rgba(139,92,246,.30),transparent_55%)]"
//                 />
//                 <div className="relative p-6 md:p-7 backdrop-blur-sm">
//                   <h2 className="flex items-center gap-2 font-extrabold text-lg">
//                     <span className="inline-block w-10 h-1 rounded-full bg-gradient-to-r from-fuchsia-400 to-violet-400" />
//                     About Me
//                   </h2>
//                   <p className="mt-3 leading-relaxed text-zinc-200">
//                     I’m an <strong>AI Engineer</strong> specializing in LLMs, NLP, and deep learning. I build
//                     data-driven products from prototype to production with a focus on reliability, scalability, and responsible AI.
//                   </p>
//                   <a
//                     href="/assets/resume.pdf"
//                     download
//                     className="mt-4 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white
//                                bg-gradient-to-r from-violet-500 to-cyan-400 hover:brightness-110 transition"
//                   >
//                     <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 16l4-5h-3V4h-2v7H8l4 5zm-7 2h14v2H5v-2z"/></svg>
//                     Download CV
//                   </a>
//                 </div>
//               </div>

//               {/* INTERESTS + EDUCATION */}
//               <div className="grid gap-6 md:grid-cols-2">

//                 {/* INTERESTS — teal/violet */}
//                 <div className="relative group rounded-2xl border border-white/10 bg-white/5 shadow-xl overflow-hidden">
//                   <div
//                     className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition duration-300
//                                [background:radial-gradient(120%_100%_at_0%_0%,rgba(34,211,238,.88)_0%,transparent_45%),radial-gradient(120%_120%_at_100%_100%,rgba(167,139,250,.88)_0%,transparent_46%),linear-gradient(180deg,rgba(52,211,153,.28),transparent_55%)]"
//                   />
//                   <div className="relative p-6 md:p-7 backdrop-blur-sm">
//                     <h3 className="flex items-center gap-2 font-extrabold text-lg">
//                       <span className="inline-block w-10 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
//                       Interests
//                     </h3>
//                     <ul className="mt-4 space-y-2 text-zinc-300 list-disc list-inside">
//                       <li>Large Language Models & Retrieval (RAG)</li>
//                       <li>Natural Language Processing</li>
//                       <li>Computer Vision</li>
//                       <li>MLOps & Evaluation</li>
//                     </ul>
//                   </div>
//                 </div>

//                 {/* EDUCATION — blue/cyan */}
//                 <div className="relative group rounded-2xl border border-white/10 bg-white/5 shadow-xl overflow-hidden">
//                   <div
//                     className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition duration-300
//                                [background:radial-gradient(120%_100%_at_0%_0%,rgba(96,165,250,.86)_0%,transparent_45%),radial-gradient(120%_120%_at_100%_100%,rgba(6,182,212,.86)_0%,transparent_46%),linear-gradient(180deg,rgba(147,197,253,.28),transparent_55%)]"
//                   />
//                   <div className="relative p-6 md:p-7 backdrop-blur-sm">
//                     <h3 className="flex items-center gap-2 font-extrabold text-lg">
//                       <span className="inline-block w-10 h-1 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400" />
//                       Education
//                     </h3>
//                     <ul className="mt-4 space-y-3 text-zinc-300">
//                       <li>
//                         <div className="font-medium">MSc Artificial Intelligence</div>
//                         <div className="text-sm text-zinc-400">Your University</div>
//                       </li>
//                       <li>
//                         <div className="font-medium">BSc Computer Science</div>
//                         <div className="text-sm text-zinc-400">Your University</div>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




// 3RD ABOUT:
// src/components/About.tsx
// import avatar from "../assets/hero-bg.jpg";

// export default function About() {
//   return (
//     <section id="about" className="mx-auto max-w-6xl px-6 py-16">
//       {/* Outer wrapper WITHOUT glow */}
//       <div className="rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
//         <div className="p-6 md:p-8">
//           <div className="grid gap-8 md:grid-cols-[260px,1fr]">
//             {/* LEFT: avatar + identity + socials */}
//             <aside className="flex md:block items-center gap-5">
//               <img
//                 src={avatar}
//                 alt="Your photo"
//                 className="h-28 w-28 md:h-40 md:w-40 rounded-full object-cover ring-2 ring-white/15"
//               />
//               <div>
//                 <h3 className="mt-2 text-xl font-bold leading-tight">Your Name</h3>
//                 <p className="text-sm text-indigo-300">AI Engineer</p>
//                 <p className="text-sm text-zinc-400">Freelance / Open to work</p>

//                 <div className="mt-3 flex gap-3 text-zinc-300">
//                   {/* icons... */}
//                 </div>
//               </div>
//             </aside>

//             {/* RIGHT: three independent hover-color cards */}
//             <div className="space-y-6">
//               {/* ===== ABOUT ME — lights up purple on hover (or when hovering the button) ===== */}
//               <div className="relative group rounded-2xl border border-white/10 bg-white/5 shadow-xl overflow-hidden">
//                 {/* overlay only for THIS card */}
//                 <div
//                   className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition duration-300
//                              [background:radial-gradient(120%_100%_at_0%_0%,rgba(196,181,253,.85)_0%,transparent_45%),radial-gradient(120%_120%_at_100%_100%,rgba(167,139,250,.85)_0%,transparent_46%),linear-gradient(180deg,rgba(139,92,246,.30),transparent_55%)]"
//                 />
//                 <div className="relative p-6 md:p-7 backdrop-blur-sm">
//                   <h2 className="flex items-center gap-2 font-extrabold text-lg">
//                     <span className="inline-block w-10 h-1 rounded-full bg-gradient-to-r from-fuchsia-400 to-violet-400" />
//                     About Me
//                   </h2>
//                   <p className="mt-3 leading-relaxed text-zinc-200">
//                     I’m an <strong>AI Engineer</strong> specializing in LLMs, NLP, and deep learning. I build
//                     data-driven products from prototype to production with a focus on reliability, scalability, and responsible AI.
//                   </p>

//                   {/* Hovering this button ALSO triggers the same card glow (because of parent .group) */}
//                   <a
//                     href="/assets/resume.pdf"
//                     download
//                     className="mt-4 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white
//                                bg-gradient-to-r from-violet-500 to-cyan-400 hover:brightness-110 transition"
//                   >
//                     <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
//                       <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm-7 2h14v2H5v-2z" />
//                     </svg>
//                     Download CV
//                   </a>
//                 </div>
//               </div>

//               {/* ===== INTERESTS — teal/violet ===== */}
//               <div className="relative group rounded-2xl border border-white/10 bg-white/5 shadow-xl overflow-hidden">
//                 <div
//                   className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition duration-300
//                              [background:radial-gradient(120%_100%_at_0%_0%,rgba(34,211,238,.88)_0%,transparent_45%),radial-gradient(120%_120%_at_100%_100%,rgba(167,139,250,.88)_0%,transparent_46%),linear-gradient(180deg,rgba(52,211,153,.28),transparent_55%)]"
//                 />
//                 <div className="relative p-6 md:p-7 backdrop-blur-sm">
//                   <h3 className="flex items-center gap-2 font-extrabold text-lg">
//                     <span className="inline-block w-10 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
//                     Interests
//                   </h3>
//                   <ul className="mt-4 space-y-2 text-zinc-300 list-disc list-inside">
//                     <li>Large Language Models & Retrieval (RAG)</li>
//                     <li>Natural Language Processing</li>
//                     <li>Computer Vision</li>
//                     <li>MLOps & Evaluation</li>
//                   </ul>
//                 </div>
//               </div>

//               {/* ===== EDUCATION — blue/cyan ===== */}
//               <div className="relative group rounded-2xl border border-white/10 bg-white/5 shadow-xl overflow-hidden">
//                 <div
//                   className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition duration-300
//                              [background:radial-gradient(120%_100%_at_0%_0%,rgba(96,165,250,.86)_0%,transparent_45%),radial-gradient(120%_120%_at_100%_100%,rgba(6,182,212,.86)_0%,transparent_46%),linear-gradient(180deg,rgba(147,197,253,.28),transparent_55%)]"
//                 />
//                 <div className="relative p-6 md:p-7 backdrop-blur-sm">
//                   <h3 className="flex items-center gap-2 font-extrabold text-lg">
//                     <span className="inline-block w-10 h-1 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400" />
//                     Education
//                   </h3>
//                   <ul className="mt-4 space-y-3 text-zinc-300">
//                     <li>
//                       <div className="font-medium">MSc Artificial Intelligence</div>
//                       <div className="text-sm text-zinc-400">Your University</div>
//                     </li>
//                     <li>
//                       <div className="font-medium">BSc Computer Science</div>
//                       <div className="text-sm text-zinc-400">Your University</div>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             {/* /RIGHT */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// 4TH:
import avatar from "../assets/hero-bg.jpg";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      <div className="relative group rounded-2xl border border-white/10 bg-white/5 shadow-2xl overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition duration-300
                     [background:radial-gradient(120%_100%_at_0%_0%,rgba(139,92,246,.18)_0%,transparent_45%),radial-gradient(120%_120%_at_100%_100%,rgba(20,184,166,.18)_0%,transparent_46%),linear-gradient(180deg,rgba(59,130,246,.12),transparent_55%)]"
        />

        {/* CONTENT */}
        <div className="relative p-6 md:p-8">
          {/* widen left column a bit so there isn’t “extra” space on the right */}
          <div className="grid gap-8 md:grid-cols-[300px,minmax(0,1fr)]">
            {/* LEFT: avatar + identity + socials (CENTERED) */}
            <aside className="flex flex-col items-center text-center gap-4">
              <img
                src={avatar}
                alt="Your photo"
                className="mx-auto h-28 w-28 md:h-40 md:w-40 rounded-full object-cover ring-2 ring-white/15"
              />

              <div>
                <h3 className="mt-1 text-xl font-bold leading-tight">Mahnoor</h3>
                <p className="text-sm text-indigo-300">AI Engineer</p>
                <p className="text-sm text-zinc-400">Freelance / Open to work</p>
              </div>

              {/* socials (centered row) */}
              <div className="mt-1 flex items-center justify-center gap-4 text-zinc-300">
                <a
                  className="hover:text-white"
                  href="https://github.com/Mahnoor-Muhammad-Naeem"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.46-1.16-1.12-1.47-1.12-1.47-.92-.64.07-.63.07-.63 1.02.07 1.55 1.05 1.55 1.05.9 1.54 2.36 1.1 2.93.84.09-.66.35-1.1.63-1.35-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.26.1-2.62 0 0 .85-.27 2.78 1.02A9.7 9.7 0 0 1 12 6.8c.86 0 1.73.12 2.54.36 1.92-1.29 2.77-1.02 2.77-1.02.55 1.36.2 2.37.1 2.62.64.69 1.02 1.58 1.02 2.67 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
                  </svg>
                </a>

                <a
                  className="hover:text-white"
                  href="https://www.linkedin.com/in/mahnoor-muhammad-naeem/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M6.94 8.5V21H3.56V8.5h3.38ZM5.25 3a2.03 2.03 0 1 1 0 4.06 2.03 2.03 0 0 1 0-4.06ZM21 21h-3.38v-6.33c0-1.51-.54-2.54-1.9-2.54-1.03 0-1.64.69-1.91 1.37-.1.24-.13.57-.13.91V21H10.3s.04-10.6 0-11.7h3.38v1.66c.45-.7 1.26-1.7 3.07-1.7 2.24 0 3.94 1.46 3.94 4.6V21Z" />
                  </svg>
                </a>

                <a
                  className="hover:text-white"
                  href="mailto:mahnoormuhammadnaeem99@gmail.com"
                  aria-label="Email"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
                  </svg>
                </a>
              </div>
            </aside>

            {/* RIGHT: keep exactly as-is */}
            <div className="space-y-6">
              {/* ABOUT ME — light purple */}
              <div className="relative group rounded-2xl border border-white/10 bg-white/5 shadow-xl overflow-hidden">
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition duration-300
                             [background:radial-gradient(120%_100%_at_0%_0%,rgba(196,181,253,.85)_0%,transparent_45%),radial-gradient(120%_120%_at_100%_100%,rgba(167,139,250,.85)_0%,transparent_46%),linear-gradient(180deg,rgba(139,92,246,.30),transparent_55%)]"
                />
                <div className="relative p-6 md:p-7 backdrop-blur-sm">
                  <h2 className="flex items-center gap-2 font-extrabold text-lg">
                    <span className="inline-block w-10 h-1 rounded-full bg-gradient-to-r from-fuchsia-400 to-violet-400" />
                    About Me
                  </h2>
                  <p className="mt-3 leading-relaxed text-zinc-200">
                    I’m an <strong>AI Engineer</strong> specializing in LLMs, NLP, and deep learning. I build
                    data-driven products from prototype to production with a focus on reliability, scalability, and responsible AI.
                  </p>
                  <a
                    href="/assets/resume.pdf"
                    download
                    className="mt-4 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white
                               bg-gradient-to-r from-violet-500 to-cyan-400 hover:brightness-110 transition"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 16l4-5h-3V4h-2v7H8l4 5zm-7 2h14v2H5v-2z"/></svg>
                    Download CV
                  </a>
                </div>
              </div>

              {/* INTERESTS + EDUCATION */}
              <div className="grid gap-6 md:grid-cols-2">
                {/* INTERESTS */}
                <div className="relative group rounded-2xl border border-white/10 bg-white/5 shadow-xl overflow-hidden">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition duration-300
                               [background:radial-gradient(120%_100%_at_0%_0%,rgba(34,211,238,.88)_0%,transparent_45%),radial-gradient(120%_120%_at_100%_100%,rgba(167,139,250,.88)_0%,transparent_46%),linear-gradient(180deg,rgba(52,211,153,.28),transparent_55%)]"
                  />
                  <div className="relative p-6 md:p-7 backdrop-blur-sm">
                    <h3 className="flex items-center gap-2 font-extrabold text-lg">
                      <span className="inline-block w-10 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                      Interests
                    </h3>
                    <ul className="mt-4 space-y-2 text-zinc-300 list-disc list-inside">
                      <li>Large Language Models & Retrieval (RAG)</li>
                      <li>Natural Language Processing</li>
                      <li>Computer Vision</li>
                      <li>MLOps & Evaluation</li>
                    </ul>
                  </div>
                </div>

                {/* EDUCATION */}
                <div className="relative group rounded-2xl border border-white/10 bg-white/5 shadow-xl overflow-hidden">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition duration-300
                               [background:radial-gradient(120%_100%_at_0%_0%,rgba(96,165,250,.86)_0%,transparent_45%),radial-gradient(120%_120%_at_100%_100%,rgba(6,182,212,.86)_0%,transparent_46%),linear-gradient(180deg,rgba(147,197,253,.28),transparent_55%)]"
                  />
                  <div className="relative p-6 md:p-7 backdrop-blur-sm">
                    <h3 className="flex items-center gap-2 font-extrabold text-lg">
                      <span className="inline-block w-10 h-1 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400" />
                      Education
                    </h3>
                    <ul className="mt-4 space-y-3 text-zinc-300">
                      <li>
                        <div className="font-medium">MSc Artificial Intelligence</div>
                        <div className="text-sm text-zinc-400">Your University</div>
                      </li>
                      <li>
                        <div className="font-medium">BSc Computer Science</div>
                        <div className="text-sm text-zinc-400">Your University</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /RIGHT */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
