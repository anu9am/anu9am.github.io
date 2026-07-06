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

export default function DermaScanPage() {
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
                text="Derma Scan"
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <div className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted flex items-center justify-center bg-white overflow-hidden p-2">
                <img 
                  alt="Derma Scan Profile" 
                  src="/Photos/Projects/DermaScan/DermaScan.png" 
                  className="w-full h-full object-cover rounded-full" 
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
              Derma Scan is a portable dermatological screening device powered by a Raspberry Pi and a high-resolution camera module. It utilizes a custom-trained Convolutional Neural Network (CNN) to perform on-device image classification of various skin conditions, offering a rapid, non-invasive diagnostic aid.
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
              Access to specialized dermatological care is often limited in remote or underserved areas. By bringing AI-assisted diagnosis directly to the edge, Derma Scan bridges this gap. Performing inference locally on a low-cost microcomputer ensures patient privacy, reduces latency by eliminating the need for a cloud connection, and lowers the barrier to early medical screening.
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
                <li><strong>Hardware Integration:</strong> Assembled a compact, battery-powered Raspberry Pi system paired with a macro-focusing camera to capture high-fidelity skin images.</li>
                <li><strong>Machine Learning Pipeline:</strong> Curated and preprocessed a dataset of dermatological images to train a robust CNN classifier using TensorFlow and PyTorch.</li>
                <li><strong>Edge Optimization:</strong> Quantized and optimized the trained neural network to run efficiently on the Raspberry Pi's CPU, achieving near real-time inference without thermal throttling.</li>
                <li><strong>User Interface:</strong> Developed a lightweight, intuitive GUI in Python that allows healthcare workers to easily capture images and view diagnostic probabilities.</li>
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
            { name: "Raspberry Pi", icon: "/Icons/hardware.png" },
            { name: "CNN", icon: "/Icons/signal.png" },
            { name: "Python", icon: "/Icons/python.png" },
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
                src="/Logos/BETIC.png"
                alt="Medical Device Hackathon"
                className="size-16 md:size-20 p-1 border rounded-xl shadow ring-4 ring-border overflow-hidden object-contain flex-none bg-muted"
              />
              <div className="flex-1 min-w-0 gap-1 flex flex-col">
                <div className="font-semibold text-lg leading-none">
                  Medical Device Hackathon
                </div>
                <div className="font-sans text-sm font-medium text-foreground">
                  BETIC Lab, IIT Bombay, India
                </div>
                <div className="font-sans text-sm italic text-muted-foreground mt-1">
                  Sep'2024 - Oct'2024 (Best Prototype Award)
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

    </main>
  );
}
