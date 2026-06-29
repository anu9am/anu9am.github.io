import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const BLUR_FADE_DELAY = 0.04;

// Reusable component for the stylish "My Projects" style badge headings
function SectionBadge({ label }: { label: string }) {
  return (
    <div className="flex flex-col gap-y-4 items-center justify-center mb-6 mt-12">
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

export default function EPFLInternshipPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-8 relative max-w-2xl mx-auto py-12 sm:py-24 px-6">
      
      {/* 1. HERO SECTION */}
      <section id="hero">
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
                <h2 className="text-xl font-bold mt-2">
                  EPFL, Switzerland 🇨🇭
                </h2>
              </BlurFade>
            </div>
            
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt="EPFL" src="/Logos/EPFL.png" className="object-contain bg-white p-2" />
                <AvatarFallback>EPFL</AvatarFallback>
              </Avatar>
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
              As a Research Intern at the CREATE Lab, I focused on the intersection of physical intelligence and soft robotics. My daily responsibilities involved deep dives into hardware-software integration, bringing dynamic robotic concepts to life in a world-class research environment.
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
                Working on control and actuation systems for the Open Parametric Hand (OPH) in prosthetic applications. 
                Designing feedback loops for smart actuators, tuning control parameters for stable movements, and 
                integrating actuator systems with overall hardware architecture.
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="w-full rounded-xl overflow-hidden border shadow-sm ring-2 ring-border">
              <img 
                src="/project-demo.gif" 
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
            <img src="/photo1.jpg" alt="Lab Setup" className="w-full rounded-xl object-cover aspect-square shadow-sm border" />
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <img src="/photo2.jpg" alt="Campus" className="w-full rounded-xl object-cover aspect-square shadow-sm border" />
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <img src="/photo3.jpg" alt="Team" className="w-full rounded-xl object-cover aspect-square shadow-sm border" />
          </BlurFade>
        </div>
      </section>

      {/* 5. CERTIFICATE */}
      <section id="certificate">
        <SectionBadge label="Certificate" />
        <div className="flex flex-col items-center gap-6">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="w-full max-w-[500px] rounded-xl overflow-hidden border shadow-sm ring-2 ring-border bg-muted">
              <img 
                src="/epfl-certificate.png" 
                alt="EPFL Internship Certificate" 
                className="w-full h-auto object-contain" 
              />
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <a 
              href="/epfl-certificate.pdf" 
              target="_blank" 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2 w-fit text-sm font-medium transition-colors shadow-sm"
            >
              Download Certificate
            </a>
          </BlurFade>
        </div>
      </section>

      {/* 6. REFERENCE (GUIDES INFO) */}
      <section id="reference">
        <SectionBadge label="Reference" />
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex items-start md:items-center gap-4 w-full text-left py-4">
            <img
              src="/Logos/prof-josie.png"
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
              <div className="font-sans text-sm text-muted-foreground leading-relaxed mt-1">
                Specializes in soft robotics, physical intelligence, and robotic design.
              </div>
              <a href="mailto:josie.hughes@epfl.ch" className="font-sans text-sm italic text-primary hover:underline mt-1 break-all w-fit">
                josie.hughes@epfl.ch
              </a>
            </div>
          </div>
        </BlurFade>
      </section>

    </main>
  );
}
