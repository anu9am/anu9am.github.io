import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

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

export default function eYantraInternshipPage() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  // Define your photos array for the lab/internship images
  const photos = [
    { src: "/Photos/eYantra/Photo_1.png", alt: "e-Yantra Lab Photo 1" },
    { src: "/Photos/eYantra/Photo_2.png", alt: "e-Yantra Lab Photo 2" },
    { src: "/Photos/eYantra/Photo_3.png", alt: "e-Yantra Lab Photo 3" },
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
                text="e-Yantra Lab"
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <h2 className="text-xl font-bold mt-2 flex items-center gap-2">
                  IIT Bombay, India
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/330/330439.png" 
                    alt="India Flag" 
                    className="h-5 w-5 object-contain"
                  />
                </h2>
                <p className="text-lg font-medium text-muted-foreground italic mt-1">
                  May 2025 - July 2025
                </p>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <div className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted flex items-center justify-center bg-white overflow-hidden">
                <img 
                  alt="IIT Bombay" 
                  src="/Logos/IIT_Bombay.png" 
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
              Conducted a Research Internship at the e-Yantra Lab, IIT Bombay under Prof. Kavi Arya, focusing on autonomous navigation for a two-wheeled self-balancing robot. My work involved developing vision-based and sensor-based navigation techniques while the robot maintained dynamic balance using LQR and PID control.
            </p>
          </div>
        </BlurFade>
      </section>

      {/* 3. THE PROJECT */}
      <section id="project">
        <SectionBadge label="The Project" />
        <div className="flex flex-col gap-6">
          
          {/* Vision Navigation Text */}
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <h3 className="text-foreground font-semibold mb-2">Vision-Based Navigation</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Developed an autonomous navigation system using computer vision and ArUco marker detection.</li>
                <li>Implemented camera calibration, robot localization, and real-time path planning using an overhead camera.</li>
                <li>Enabled accurate navigation in controlled environments without requiring onboard cameras or complex sensors.</li>
              </ul>
            </div>
          </BlurFade>

          {/* Vision Navigation Video */}
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="w-full rounded-xl overflow-hidden border shadow-sm ring-2 ring-border bg-muted">
              <video 
                src="/Photos/eYantra/Vision_Demo.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto object-cover" 
              />
            </div>
          </BlurFade>

          {/* Line Navigation Text */}
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <h3 className="text-foreground font-semibold mt-4 mb-2">Line-Based Navigation</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Implemented autonomous path following while maintaining dynamic balance.</li>
                <li>Developed white/black line following using a 3-channel optical sensor array.</li>
                <li>Designed a 5-channel analog Hall effect sensor array for magnetic track following, providing a reliable alternative to optical tracking under varying ambient lighting conditions.</li>
              </ul>
            </div>
          </BlurFade>

          {/* Line Navigation Videos (Side-by-Side) */}
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="w-full rounded-xl overflow-hidden border shadow-sm ring-2 ring-border bg-muted">
                <video 
                  src="/Photos/eYantra/Line_Demo1.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-auto object-cover" 
                />
              </div>
              <div className="w-full rounded-xl overflow-hidden border shadow-sm ring-2 ring-border bg-muted">
                <video 
                  src="/Photos/eYantra/Line_Demo2.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-auto object-cover" 
                />
              </div>
            </div>
          </BlurFade>

          {/* Robot Platform Callout */}
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="bg-muted/50 border border-border rounded-lg p-4 mt-2">
              <p className="text-sm font-medium text-foreground">
                <strong className="text-primary">Robot Platform:</strong> Both navigation systems were developed on the same two-wheeled self-balancing robot, with balance control handled independently using LQR and PID controllers.
              </p>
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
            { name: "C++", icon: "/Icons/cpp.png" },
            { name: "Python", icon: "/Icons/python.png" },
            { name: "OpenCV", icon: "/Icons/opencv.png" },
            { name: "PID & LQR Control", icon: "/Icons/control.png" },
            { name: "MPU6050 & Encoders", icon: "/Icons/sensor.png" },
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

      {/* 5. CERTIFICATE (2 PAGES) */}
      <section id="certificate">
        <SectionBadge label="Certificate" />
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="w-full max-w-[400px] rounded-xl overflow-hidden border shadow-sm ring-2 ring-border bg-muted">
              <img 
                src="/Photos/eYantra/Certificate_Page1.png" 
                alt="e-Yantra Certificate Page 1" 
                className="w-full h-auto object-contain" 
              />
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 9.5}>
            <div className="w-full max-w-[400px] rounded-xl overflow-hidden border shadow-sm ring-2 ring-border bg-muted">
              <img 
                src="/Photos/eYantra/Certificate_Page2.png" 
                alt="e-Yantra Certificate Page 2" 
                className="w-full h-auto object-contain" 
              />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* 6. REFERENCE */}
      <section id="reference">
        <SectionBadge label="Reference" />
        <div className="flex flex-col gap-2">
          
          {/* Single Reference: Prof. Kavi Arya */}
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex items-start md:items-center gap-4 w-full text-left py-4">
              <img
                src="/Photos/eYantra/Prof_Kavi_Arya.png"
                alt="Prof. Kavi Arya"
                className="size-16 md:size-20 p-1 border rounded-xl shadow ring-4 ring-border overflow-hidden object-contain flex-none bg-muted"
              />
              <div className="flex-1 min-w-0 gap-1 flex flex-col">
                <div className="font-semibold text-lg leading-none">
                  Prof. Kavi Arya
                </div>
                <div className="font-sans text-sm font-medium text-foreground">
                  Professor, CSE Dept. & Principal Investigator, e-Yantra Project, IIT Bombay
                </div>
                <a href="mailto:kavi@cse.iitb.ac.in" className="font-sans text-sm italic text-primary hover:underline mt-1 break-all w-fit">
                  kavi@cse.iitb.ac.in
                </a>
              </div>
            </div>
          </BlurFade>

        </div>
      </section>

    </main>
  );
}
