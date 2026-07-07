import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";

const BLUR_FADE_DELAY = 0.04;

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

export default function FastLFRPage() {
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
                text="Fast Line Follower"
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <div className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted flex items-center justify-center bg-white overflow-hidden">
                <img 
                  alt="Fast Line Follower Profile" 
                  src="/Photos/Projects/LineFollower/LineFollowerRobot.png" 
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
              The Fast Line Follower is a high-speed, autonomous robotic vehicle built for competitive racing. Based on an STM32 microcontroller, it utilizes high-density Pololu QTRX-16MD IR arrays and encoder-equipped micro metal-gear motors to track and navigate complex tracks with hairpin turns at extreme speeds.
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
              High-speed line following is a demanding test of embedded system optimization and control theory. At high velocities, sensor processing latency and motor inertia introduce significant errors. This project demonstrates the ability to write highly optimized, bare-metal C code and tune aggressive PID parameters to maintain stability and prevent derailment at maximum acceleration.
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
                <li><strong>STM32 Processing:</strong> Harnessed the processing power of an ARM Cortex-M architecture to rapidly sample the 16-channel IR array using DMA and ADC.</li>
                <li><strong>Advanced PID Control:</strong> Implemented and finely tuned a Proportional-Integral-Derivative controller capable of extreme yaw corrections without oscillating out of control.</li>
                <li><strong>Hardware Design:</strong> Designed a low center-of-gravity chassis with high-grip silicone tires for maximum traction during sharp turns.</li>
                <li><strong>Performance Tuning:</strong> Configured motor encoders for precise velocity feedback, ensuring consistent acceleration profiles.</li>
              </ul>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* 5. TECH STACK */}
      <section id="tech-stack">
        <SectionBadge label="Tech Stack" />
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {[
            { name: "STM32", icon: "/Icons/hardware.png" },
            { name: "PID Control", icon: "/Icons/pid.png" },
            { name: "Embedded C", icon: "/Icons/cpp.png" },
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
            <div className="group flex items-start md:items-center gap-4 w-full text-left py-4 hover:bg-muted/50 rounded-xl px-2 -mx-2 transition-colors">
              <img
                src="/Logos/Technoxian.png"
                alt="Technoxian World Robotics Championship"
                className="size-16 md:size-20 p-1 border rounded-xl shadow ring-4 ring-border overflow-hidden object-contain flex-none bg-muted"
              />
              <div className="flex-1 min-w-0 gap-1 flex flex-col">
                <div className="font-semibold text-lg leading-none">
                  Technoxian World Robotics Championship
                </div>
                <div className="font-sans text-sm font-medium text-foreground">
                  AICRA, India
                </div>
                <div className="font-sans text-sm italic text-muted-foreground mt-1">
                  Aug'2025 - Sep'2025
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* 7. CERTIFICATE */}
      <section id="certificate">
        <SectionBadge label="Certificate" />
        <div className="flex flex-col items-center gap-6 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 12} className="w-full">
            <div className="w-full max-w-[800px] mx-auto rounded-xl overflow-hidden border shadow-sm ring-2 ring-border bg-muted">
              <img 
                src="/Photos/Projects/LineFollower/Certificate_Technoxian.png" 
                alt="Technoxian Certificate" 
                className="w-full h-auto object-contain" 
              />
            </div>
          </BlurFade>
        </div>
      </section>

    </main>
  );
}
