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

export default function BalancingBuilderBotPage() {
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
                text="Balancing Builder Bot"
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <div className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted flex items-center justify-center bg-white overflow-hidden">
                <img 
                  alt="Balancing Builder Bot Profile" 
                  src="/Photos/Projects/BalancingBuilder/DP_BalancingBuilderBot.png" 
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
              The Balancing Builder Bot is a custom-designed two-wheeled self-balancing robot with an integrated autonomous pick-and-place mechanism. Themed around smart-city infrastructure, the robot balances itself using inverted-pendulum dynamics and IMU-based state estimation while navigating a simulated urban arena to execute construction tasks.
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
              Combining manipulation with dynamic balancing introduces significant disturbances to the control system. Whenever the robotic arm picks up or places a payload, the center of mass shifts dramatically. The bot must actively compensate for these dynamic load changes in real-time to prevent tipping, proving its robustness in highly perturbed environments.
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
                <li><strong>Dynamic Balancing:</strong> Tuned multi-layered PID controllers to stabilize the chassis despite sudden changes in the center of gravity caused by payload manipulation.</li>
                <li><strong>Pick-and-Place Mechanism:</strong> Designed a lightweight 3D-printed gripper and arm mechanism actuated by servos, enabling precise block handling.</li>
                <li><strong>State Estimation:</strong> Processed raw accelerometer and gyroscope data using sensor fusion to reliably calculate the robot's tilt angle.</li>
                <li><strong>Autonomous Routine:</strong> Implemented a state machine for autonomous waypoint navigation, block detection, and placement tasks.</li>
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
            { name: "PID Control", icon: "/Icons/pid.png" },
            { name: "LQR Control", icon: "/Icons/control.png" },
            { name: "IMU Sensor", icon: "/Icons/sensor.png" },
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
                src="/Logos/eYantra.png"
                alt="e-Yantra Robotics Competition"
                className="size-16 md:size-20 p-1 border rounded-xl shadow ring-4 ring-border overflow-hidden object-contain flex-none bg-muted"
              />
              <div className="flex-1 min-w-0 gap-1 flex flex-col">
                <div className="font-semibold text-lg leading-none">
                  e-Yantra Robotics Competition
                </div>
                <div className="font-sans text-sm font-medium text-foreground">
                  IIT Bombay, India
                </div>
                <div className="font-sans text-sm italic text-muted-foreground mt-1">
                  2024-25 Season (4th Place Internationally)
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* 7. CERTIFICATE */}
      <section id="certificate">
        <SectionBadge label="Certificate" />
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <BlurFade delay={BLUR_FADE_DELAY * 12} className="flex-1 w-full max-w-[400px]">
            <div className="w-full rounded-xl overflow-hidden border shadow-sm ring-2 ring-border bg-muted">
              <img 
                src="/Photos/Projects/BalancingBuilder/eYRC24_Certificate_1.png" 
                alt="eYRC Certificate Page 1" 
                className="w-full h-auto object-contain" 
              />
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 13} className="flex-1 w-full max-w-[400px]">
            <div className="w-full rounded-xl overflow-hidden border shadow-sm ring-2 ring-border bg-muted">
              <img 
                src="/Photos/Projects/BalancingBuilder/eYRC24_Certificate_2.png" 
                alt="eYRC Certificate Page 2" 
                className="w-full h-auto object-contain" 
              />
            </div>
          </BlurFade>
        </div>
      </section>

    </main>
  );
}
