import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

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

export default function IITMadrasInternshipPage() {
  // 1. Add state for the Lightbox
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  // 2. Define your specific photos array (Update paths when you add images)
  const photos = [
    { src: "/Photos/IIT_Madras/Photo_1.png", alt: "HTIC Lab Photo 1" },
    { src: "/Photos/IIT_Madras/Photo_2.png", alt: "HTIC Lab Photo 2" },
    { src: "/Photos/IIT_Madras/Photo_3.png", alt: "HTIC Lab Photo 3" },
  ];

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
                text="Healthcare Technology Innovation Centre"
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <h2 className="text-xl font-bold mt-2 flex items-center gap-2">
                  IIT Madras, India 
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/330/330439.png" 
                    alt="India Flag" 
                    className="h-5 w-5 object-contain"
                  />
                </h2>
                {/* Internship Duration */}
                <p className="text-lg font-medium text-muted-foreground italic mt-1">
                  September 2025 - November 2025
                </p>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <div className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted flex items-center justify-center bg-white overflow-hidden">
                <img 
                  alt="IIT Madras HTIC" 
                  src="/Logos/IITM.png" 
                  className="w-full h-full object-cover p-2" 
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
              I worked as a Research Intern at the Healthcare Technology Innovation Centre (HTIC) at IIT Madras, under the supervision of Prof. Jayaraj Joseph and Dr. Raj Kiran V. My research was deeply focused on biomedical instrumentation, specifically configuring and characterizing the MAX30009 Bioimpedance (BioZ) analog front-end. The internship required a strong intersection of analog circuit design, signal processing, and physiological analysis to improve the capture and integrity of cardiac-induced biosignals.
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
                The primary objective of the project was to optimize the acquisition parameters and signal conditioning for physiological waveform capture. I developed and tuned analog and digital signal-conditioning stages—including high-pass and low-pass filter design, programmable gain configurations, baseline drift removal, and offset calibration. Beyond the hardware setup, I analyzed complex Bioimpedance waveforms to study cardiac-induced impedance variations. This involved rigorous testing to evaluate noise under varying electrode placements and assessing how hardware artifacts impacted overall signal quality, ultimately enhancing the reliability of the diagnostic data.
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="w-full rounded-xl overflow-hidden border shadow-sm ring-2 ring-border bg-muted">
              {/* Add your project demo image or block diagram here */}
              <img 
                src="/Photos/IIT_Madras/Project_Demo.gif" 
                alt="BioZ Signal Analysis Demonstration" 
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
          {photos.map((photo, i) => (
            <BlurFade key={i} delay={BLUR_FADE_DELAY * 6 + (i * 0.05)}>
              <div 
                onClick={() => { setIndex(i); setOpen(true); }}
                className="cursor-pointer overflow-hidden rounded-xl border border-border shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:ring-2 hover:ring-primary/50 bg-muted"
              >
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="w-full object-cover aspect-square transition-transform duration-500 hover:scale-110" 
                />
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={photos}
        on={{ view: ({ index: currentIndex }) => setIndex(currentIndex) }} 
        controller={{ closeOnBackdropClick: true }}
      />

      {/* TECH STACK SECTION */}
      <section id="tech-stack">
        <SectionBadge label="Tech Stack" />
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {[
            { name: "MAX30009 AFE", icon: "/Icons/hardware.png" },
            { name: "Analog Circuits", icon: "/Icons/circuit.png" },
            { name: "Signal Processing", icon: "/Icons/signal.png" },
            { name: "MATLAB", icon: "/Icons/matlab.png" },
            { name: "Python", icon: "/Icons/python.png" },
            { name: "C/C++", icon: "/Icons/cpp.png" },
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
                src="/Photos/IIT_Madras/Internship_Certificate_HTIC.png" 
                alt="IIT Madras Internship Certificate" 
                className="w-full h-auto object-contain" 
              />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* 6. REFERENCE */}
      <section id="reference">
        <SectionBadge label="References" />
        <div className="flex flex-col gap-2">
          
          {/* Reference 1: Prof. Jayaraj Joseph */}
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex items-start md:items-center gap-4 w-full text-left py-4">
              <img
                src="/Photos/IIT_Madras/Prof_Jayaraj.png"
                alt="Prof. Jayaraj Joseph"
                className="size-16 md:size-20 p-1 border rounded-xl shadow ring-4 ring-border overflow-hidden object-contain flex-none bg-muted"
              />
              <div className="flex-1 min-w-0 gap-1 flex flex-col">
                <div className="font-semibold text-lg leading-none">
                  Prof. Jayaraj Joseph
                </div>
                <div className="font-sans text-sm font-medium text-foreground">
                  Associate Professor, IIT Madras
                </div>
                <a href="mailto:jayaraj@ee.iitm.ac.in" className="font-sans text-sm italic text-primary hover:underline mt-1 break-all w-fit">
                  jayaraj@ee.iitm.ac.in
                </a>
              </div>
            </div>
          </BlurFade>

          {/* Reference 2: Dr. Raj Kiran V */}
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="flex items-start md:items-center gap-4 w-full text-left py-4">
              <img
                src="/Photos/IIT_Madras/Dr_Raj.png"
                alt="Dr. Raj Kiran V"
                className="size-16 md:size-20 p-1 border rounded-xl shadow ring-4 ring-border overflow-hidden object-contain flex-none bg-muted"
              />
              <div className="flex-1 min-w-0 gap-1 flex flex-col">
                <div className="font-semibold text-lg leading-none">
                  Dr. Raj Kiran V
                </div>
                <div className="font-sans text-sm font-medium text-foreground">
                  Principal Project Scientist, HTIC, IIT Madras
                </div>
                <a href="mailto:rajkiran.v@htic.iitm.ac.in" className="font-sans text-sm italic text-primary hover:underline mt-1 break-all w-fit">
                  rajkiran.v@htic.iitm.ac.in
                </a>
              </div>
            </div>
          </BlurFade>

        </div>
      </section>

    </main>
  );
}
