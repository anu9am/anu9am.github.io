import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

export default function CREATEInternshipPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-8 relative">

      {/* BACKGROUND "INTERNSHIP" TEXT */}
      <h1 className="text-[50px] sm:text-[90px] md:text-[120px] font-semibold font-mono bg-linear-to-b from-primary/30 to-secondary/10 text-transparent bg-clip-text absolute -top-10 md:-top-24 left-1/2 -translate-x-1/2 mask-[linear-gradient(to_bottom,black,black_30%,transparent_130%)] tracking-tighter uppercase [-webkit-text-stroke:2px_hsl(var(--primary)/0.6)] md:[-webkit-text-stroke:3px_hsl(var(--primary)/0.6)] whitespace-nowrap pointer-events-none select-none -z-10">
        INTERNSHIP
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
                text="CREATE Lab"
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                {/* Styled identically to "Research & Work Experience" */}
                <h2 className="text-xl font-bold mt-2 flex items-center gap-2">
                  EPFL, Switzerland 
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/330/330480.png" 
                    alt="Switzerland Flag" 
                    className="h-5 w-5 object-contain"
                  />
                </h2>
                {/* Internship Duration */}
                <p className="text-lg font-medium text-muted-foreground italic mt-1">
                  March 2026 - July 2026
                </p>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <div className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted flex items-center justify-center bg-white overflow-hidden">
                <img 
                  alt="EPFL" 
                  src="/Logos/EPFL.png" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* 2. ABOUT THE INTERNSHIP */}
      <section id="about">
        <SectionBadge label="About the Internship" />
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
            <p>
              I worked as a Research Intern at CREATE Lab, EPFL (École Polytechnique Fédérale de Lausanne) under the supervision of Prof. Josie Hughes. My work focused on developing and optimizing the control and actuation system for the Open Parametric Hand (OPH), a research platform for next-generation prosthetic hands. The internship involved studying the biomechanics of the human hand, biomimetic tendon-driven actuation, and designing intelligent feedback-controlled systems to improve dexterity and responsiveness for prosthetic applications.
            </p>
          </div>
        </BlurFade>
      </section>

      {/* 3. THE PROJECT */}
      <section id="project">
        <SectionBadge label="The Project" />
        <div className="flex flex-col gap-6">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <p>
                The Voice-Controlled Open Parametric Hand is a compact, lightweight, tendon-driven bionic hand designed to replicate the anatomical structure and movement of the human hand. Unlike the manually operated OPH platform, this project aimed to create a fully motorized version using five micro metal gear motors with integrated voice control, enabling users to perform multiple grasping patterns and gestures through a single input source. By combining biomimetic tendon routing, intelligent actuation, and voice-based interaction, the project explores an accessible, high-performance alternative to conventional body-powered and EMG-controlled prosthetic hands. The OPH platform is highly customizable, lightweight, and intended for advanced prosthetic and robotic manipulation applications.
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
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

      {/* 4. PHOTOS */}
      <section id="photos">
        <SectionBadge label="Photos" />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 items-start">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <img src="/Photos/CREATE_Lab/The_OPH.png" alt="The Hand" className="w-full rounded-xl object-cover aspect-square shadow-sm border" />
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <img src="/Photos/CREATE_Lab/Load_Test.png" alt="Load Test" className="w-full rounded-xl object-cover aspect-square shadow-sm border" />
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <img src="/Photos/CREATE_Lab/Team.png" alt="Team" className="w-full rounded-xl object-cover aspect-square shadow-sm border" />
          </BlurFade>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section id="tech-stack">
        <SectionBadge label="Tech Stack" />
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {[
            { name: "PID Control", icon: "/Icons/pid.png" },
            { name: "C++", icon: "/Icons/cpp.png" },
            { name: "OpenSCAD", icon: "/Icons/openscad.png" },
            { name: "Fusion 360", icon: "/Icons/fusion.png" },
            { name: "Teensy 4.1", icon: "/Icons/teensy.png" },
            { name: "Voice Recognition", icon: "/Icons/voice.png" },
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

      {/* 5. CERTIFICATE */}
      <section id="certificate">
        <SectionBadge label="Certificate" />
        <div className="flex flex-col items-center gap-6">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
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

      {/* 6. REFERENCE (GUIDES INFO) */}
      <section id="reference">
        <SectionBadge label="References" />
        <div className="flex flex-col gap-2">
          
          {/* Reference 1: Prof. Josie Hughes */}
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex items-start md:items-center gap-4 w-full text-left py-4">
              <img
                src="/Photos/CREATE_Lab/Prof_Josie.png"
                alt="Prof. Josie Hughes"
                className="size-16 md:size-20 p-1 border rounded-xl shadow ring-4 ring-border overflow-hidden object-contain flex-none bg-muted"
              />
              <div className="flex-1 min-w-0 gap-1 flex flex-col">
                <div className="font-semibold text-lg leading-none">
                  Prof. Josie Hughes
                </div>
                <div className="font-sans text-sm font-medium text-foreground">
                  Head of CREATE Lab, EPFL
                </div>
                <a href="mailto:josie.hughes@epfl.ch" className="font-sans text-sm italic text-primary hover:underline mt-1 break-all w-fit">
                  josie.hughes@epfl.ch
                </a>
              </div>
            </div>
          </BlurFade>

          {/* Reference 2: Dr. Kieran Gilday */}
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="flex items-start md:items-center gap-4 w-full text-left py-4">
              <img
                src="/Photos/CREATE_Lab/Dr_Kieran.png"
                alt="Dr. Kieran Gilday"
                className="size-16 md:size-20 p-1 border rounded-xl shadow ring-4 ring-border overflow-hidden object-contain flex-none bg-muted"
              />
              <div className="flex-1 min-w-0 gap-1 flex flex-col">
                <div className="font-semibold text-lg leading-none">
                  Dr. Kieran Gilday
                </div>
                <div className="font-sans text-sm font-medium text-foreground">
                  Postdoctoral Researcher at CREATE Lab, EPFL
                </div>
                <a href="mailto:kieran.gilday@epfl.ch" className="font-sans text-sm italic text-primary hover:underline mt-1 break-all w-fit">
                  kieran.gilday@epfl.ch
                </a>
              </div>
            </div>
          </BlurFade>

        </div>
      </section>

    </main>
  );
}
