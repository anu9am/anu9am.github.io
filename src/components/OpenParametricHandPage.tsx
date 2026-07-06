import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";

const BLUR_FADE_DELAY = 0.04;

// Reusable component for the stylish "My Projects" style badge headings
function SectionBadge({ label }: { label: string }) {
  return (
    <div className="flex flex-col gap-y-4 items-center justify-center my-6">
      <div className="flex items-center w-full">
        <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
          <span className="text-background text-sm font-medium">{label}</span>
        </div>
        <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
      </div>
    </div>
  );
}

export default function OpenParametricHandPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-8 relative">

      {/* BACKGROUND "PROJECT" TEXT */}
      <h1 className="text-[50px] sm:text-[90px] md:text-[120px] font-semibold font-mono bg-linear-to-b from-primary/30 to-secondary/10 text-transparent bg-clip-text absolute -top-10 md:-top-24 left-1/2 -translate-x-1/2 mask-[linear-gradient(to_bottom,black,black_30%,transparent_130%)] tracking-tighter uppercase [-webkit-text-stroke:2px_hsl(var(--primary)/0.6)] md:[-webkit-text-stroke:3px_hsl(var(--primary)/0.6)] whitespace-nowrap pointer-events-none select-none -z-10">
        PROJECT
      </h1>
      
      {/* 1. HERO SECTION */}
      <section id="hero" className="mt-10 md:mt-10">
        <div className="mx-auto w-full space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text="Open Parametric Hand"
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <div className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted flex items-center justify-center bg-white overflow-hidden">
                <img 
                  alt="Open Parametric Hand Profile" 
                  src="/Photos/CREATE_Lab/The_OPH.png" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* 2. IN A NUTSHELL */}
      <section id="in-a-nutshell">
        <SectionBadge label="In a Nutshell" />
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
            <p>
              The Voice-Controlled Open Parametric Hand (OPH) is a compact, lightweight, tendon-driven bionic hand designed to replicate the anatomical structure and movement of the human hand. Transitioning the manually operated OPH platform into a fully motorized system, this project integrates five micro metal gear motors and intelligent feedback-controlled actuation to enable advanced grasping and manipulation tasks through intuitive voice commands.
            </p>
          </div>
        </BlurFade>
      </section>

      {/* 3. WHY THIS PROJECT IS IMPORTANT */}
      <section id="importance">
        <SectionBadge label="Why this Project is Important" />
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
            <p>
              Traditional high-performance prosthetics are often prohibitively expensive, heavy, and rely on complex EMG-based control systems that have a steep learning curve. The OPH addresses these critical barriers by offering a highly customizable, 3D-printable platform. By combining biomimetic tendon routing with voice-based interaction, it provides an accessible, low-cost, yet highly capable alternative for both amputees and researchers exploring next-generation robotic manipulation.
            </p>
          </div>
        </BlurFade>
      </section>

      {/* 4. PROJECT DETAILS */}
      <section id="project-details">
        <SectionBadge label="Project Details" />
        <div className="flex flex-col gap-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Hardware Integration:</strong> Designed the internal housing and mechanical linkages to integrate five independent micro metal gear motors within the confined space of the bionic palm.</li>
                <li><strong>Control Systems:</strong> Developed custom PID control loops and smart feedback algorithms to ensure stable, repeatable, and accurate finger flexion, effectively handling the mechanical non-linearities of tendon routing.</li>
                <li><strong>Voice Recognition:</strong> Interfaced a voice-recognition module with the primary microcontroller to process user commands, translating spoken gestures into coordinated, multi-finger grasping states in real-time.</li>
                <li><strong>Performance Tuning:</strong> Conducted rigorous load testing and optimized the control parameters to maximize grip strength and responsiveness without compromising the mechanical integrity of the 3D-printed components.</li>
              </ul>
            </div>
          </BlurFade>
          
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="w-full rounded-xl overflow-hidden border shadow-sm ring-2 ring-border">
              <img 
                src="/Photos/CREATE_Lab/Demonstration.gif" 
                alt="OPH Actuator Demonstration" 
                className="w-full h-auto object-cover" 
              />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* 5. TECH STACK */}
      <section id="tech-stack">
        <SectionBadge label="Tech Stack" />
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {[
            { name: "C++", icon: "/Icons/cpp.png" },
            { name: "PID Control", icon: "/Icons/pid.png" },
            { name: "Teensy 4.1", icon: "/Icons/teensy.png" },
            { name: "Voice Recognition", icon: "/Icons/voice.png" },
            { name: "OpenSCAD", icon: "/Icons/openscad.png" },
            { name: "Fusion 360", icon: "/Icons/fusion.png" },
          ].map((tech, idx) => (
            <BlurFade key={tech.name} delay={BLUR_FADE_DELAY * 10 + idx * 0.05}>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-muted/50 hover:bg-muted transition-colors border border-border rounded-lg text-sm font-medium text-foreground">
                <img 
                  src={tech.icon} 
                  alt={`${tech.name} icon`} 
                  className="size-5 object-contain" 
                />
                <span>{tech.name}</span>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* 6. DEMONSTRATED AT */}
      <section id="demonstrated-at">
        <SectionBadge label="Demonstrated At" />
        <div className="flex flex-col gap-2">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <a 
              href="/CREATEInternship" 
              className="group flex items-start md:items-center gap-4 w-full text-left py-4 hover:bg-muted/50 rounded-xl px-2 -mx-2 transition-colors cursor-pointer"
            >
              <img
                src="/Logos/EPFL.png"
                alt="CREATE Lab, EPFL"
                className="size-16 md:size-20 p-1 border rounded-xl shadow ring-4 ring-border overflow-hidden object-contain flex-none bg-muted"
              />
              <div className="flex-1 min-w-0 gap-1 flex flex-col">
                <div className="font-semibold text-lg leading-none">
                  Research Internship at CREATE Lab
                </div>
                <div className="font-sans text-sm font-medium text-foreground">
                  EPFL, Switzerland
                </div>
                <div className="font-sans text-sm italic text-muted-foreground mt-1">
                  Mar'2026 - Jul'2026
                </div>
              </div>
              <div className="shrink-0 text-muted-foreground group-hover:text-primary transform transition-transform duration-300 group-hover:translate-x-1 pr-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </a>
          </BlurFade>
        </div>
      </section>

      {/* 7. CERTIFICATE */}
      <section id="certificate">
        <SectionBadge label="Certificate" />
        <div className="flex flex-col items-center gap-6">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="w-full max-w-[500px] rounded-xl overflow-hidden border shadow-sm ring-2 ring-border bg-muted">
              <img 
                src="/Photos/CREATE_Lab/Internship_Certificate_CREATE.png" 
                alt="EPFL Internship Certificate" 
                className="w-full h-auto object-contain" 
              />
            </div>
          </BlurFade>
        </div>
      </section>

    </main>
  );
}
