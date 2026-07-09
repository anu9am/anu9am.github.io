import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Icons } from "@/components/icons";

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

export default function MazeSolverBotPage() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [lightboxPhotos, setLightboxPhotos] = useState<any[]>([]);

  const mazePhotos = [
    { src: "/Photos/Projects/MazeSolver/MazeBuilding.png", alt: "Maze Building Phase" },
    { src: "/Photos/Projects/MazeSolver/TheCompleteMaze.jpg", alt: "Complete Maze" },
  ];

  return (
    <main className="min-h-dvh flex flex-col gap-8 relative">

      {/* BACKGROUND "PROJECT" TEXT */}
      <h1 className="text-[50px] sm:text-[90px] md:text-[120px] font-semibold font-mono bg-linear-to-b from-primary/30 to-secondary/10 text-transparent bg-clip-text absolute -top-10 md:-top-24 left-1/2 -translate-x-1/2 mask-[linear-gradient(to_bottom,black,black_30%,transparent_130%)] tracking-tighter uppercase [-webkit-text-stroke:2px_hsl(var(--primary)/0.6)] md:[-webkit-text-stroke:3px_hsl(var(--primary)/0.6)] whitespace-nowrap pointer-events-none select-none -z-10">
        PROJECT
      </h1>
      
      {/* 1. HERO SECTION */}
      <section id="hero" className="mt-10 md:mt-10">
        <div className="mx-auto w-full space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="gap-2 flex flex-col order-2 md:order-1 flex-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text="Maze Solver Bot"
              />
              <BlurFade delay={BLUR_FADE_DELAY}>
                <p className="text-amber-500 dark:text-amber-400 font-medium italic text-sm mt-3">
                  Demonstrated at:
                </p>
                <div className="group flex items-start gap-4 w-full text-left mt-2">
                  <img
                    src="/Logos/eYantra.png"
                    alt="e-Yantra Robotics Competition"
                    className="size-14 md:size-16 p-1 border rounded-xl shadow ring-2 ring-border overflow-hidden object-contain flex-none bg-muted"
                  />
                  <div className="flex-1 min-w-0 gap-1 flex flex-col justify-center">
                    <div className="font-semibold text-base md:text-lg leading-none">
                      e-Yantra Robotics Competition
                    </div>
                    <div className="font-sans text-sm font-medium text-foreground flex items-center gap-1.5">
                      IIT Bombay, India
                      <img 
                        src="https://cdn-icons-png.flaticon.com/512/330/330439.png" 
                        alt="India Flag" 
                        className="h-4 w-4 object-contain"
                      />
                    </div>
                    <div className="font-sans text-sm italic text-muted-foreground mt-1">
                      2025-26 Season <span className="block sm:inline">(Top 10 Rank among 680+ teams)</span>
                    </div>
                  </div>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2 shrink-0">
              <div className="size-28 md:size-36 border rounded-full shadow-lg ring-4 ring-muted flex items-center justify-center bg-white overflow-hidden">
                <img 
                  alt="Maze Solver Bot Profile" 
                  src="/Photos/Projects/MazeSolver/DP_MazeSolverBot.png" 
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
              The <strong>FPGA-based Agricultural Warehouse Navigator (MazeSolver Bot)</strong> is an autonomous mobile robot developed for the e-Yantra Robotics Competition. Built around the <strong>DE0-Nano FPGA</strong>, the robot autonomously navigates a warehouse-inspired maze while collecting environmental data such as soil moisture, temperature, and humidity. The entire control system was implemented in <strong>Verilog HDL</strong>, showcasing hardware-level parallel processing for real-time navigation, sensing, motor control, and wireless communication.
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
              Traditional embedded robots rely on microcontrollers that execute tasks sequentially. In contrast, FPGA-based systems enable true hardware-level parallelism, allowing multiple subsystems to operate simultaneously with deterministic timing. This project demonstrates the use of FPGA technology to integrate autonomous navigation, environmental monitoring, motor control, and wireless communication into a single real-time robotic platform for smart agricultural warehouse applications.
            </p>
          </div>
        </BlurFade>
      </section>

      {/* 4. PROJECT DETAILS */}
      <section id="project-details">
        <SectionBadge label="Project Details" />
        <div className="flex flex-col gap-8">
          
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert mb-4">
              <h3 className="text-foreground font-semibold mb-2">FPGA-Based Robot Controller</h3>
              <p>
                Designed and implemented the complete robot controller in <strong>Verilog HDL</strong> on the Intel Cyclone IV FPGA. Dedicated hardware modules were developed for sensor acquisition, motor control, navigation logic, environmental sensing, and wireless communication, enabling parallel execution of all robotic subsystems.
              </p>
            </div>
            <div className="w-full max-w-md mx-auto rounded-xl overflow-hidden border shadow-sm ring-2 ring-border bg-muted">
              <img src="/Photos/Projects/MazeSolver/DE0NanoFPGA.png" alt="DE0-Nano FPGA" className="w-full h-auto object-cover" />
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert mb-4">
              <h3 className="text-foreground font-semibold mb-2">Custom PCB Design</h3>
              <p>
                Designed a custom KiCad extension board for the DE0-Nano FPGA to simplify hardware integration and peripheral interfacing. The PCB serves as an interface between the FPGA and the robot's sensors, motor drivers, communication modules, and power circuitry, significantly reducing wiring complexity while improving system reliability and modularity.
              </p>
            </div>
            <div className="w-full max-w-md mx-auto rounded-xl overflow-hidden border shadow-sm ring-2 ring-border bg-muted">
              <img 
                src="/Photos/Projects/MazeSolver/CustomPCB.png" 
                alt="Custom PCB Layout" 
                className="w-full h-auto object-cover" 
              />
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert mb-4">
              <h3 className="text-foreground font-semibold mb-2">Autonomous Maze Navigation</h3>
              <p>
                Developed a real-time maze-solving algorithm capable of detecting walls, identifying blocked paths, and autonomously navigating dynamically changing warehouse layouts using onboard distance sensors.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mazePhotos.map((photo, i) => (
                <div 
                  key={i}
                  onClick={() => { 
                    setLightboxPhotos(mazePhotos);
                    setIndex(i); 
                    setOpen(true); 
                  }}
                  className="cursor-pointer aspect-[4/3] rounded-xl overflow-hidden border shadow-sm ring-2 ring-border bg-muted flex items-center justify-center hover:scale-[1.02] transition-transform duration-300"
                >
                  <img 
                    src={photo.src} 
                    alt={photo.alt} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              ))}
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert mb-4">
              <h3 className="text-foreground font-semibold mb-2">Environmental Monitoring</h3>
              <p>
                Integrated temperature, humidity, and soil moisture sensing to collect microclimate data from designated sensing zones. A servo-actuated sensing mechanism was developed to automate soil moisture measurements during navigation.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="w-full rounded-xl overflow-hidden border shadow-sm ring-2 ring-border bg-muted">
                <img src="/Photos/Projects/MazeSolver/HardwareAssembly.jpg" alt="Hardware Assembly" className="w-full h-auto object-cover" />
              </div>
              <div className="w-full rounded-xl overflow-hidden border shadow-sm ring-2 ring-border bg-muted">
                <img src="/Photos/Projects/MazeSolver/PhysicalRobot.jpg" alt="Physical Robot" className="w-full h-auto object-cover" />
              </div>
            </div>
          </BlurFade>
          
          <BlurFade delay={BLUR_FADE_DELAY * 8.5}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert mb-4">
              <h3 className="text-foreground font-semibold mb-2">Wireless Communication</h3>
              <p>
                Implemented Bluetooth communication between the robot and the Central Control Unit (CCU), enabling real-time transmission of environmental measurements and navigation updates for warehouse monitoring.
              </p>
            </div>
            <div className="w-full max-w-md mx-auto rounded-xl overflow-hidden border shadow-sm ring-2 ring-border bg-muted">
              <img src="/Photos/Projects/MazeSolver/MazeSolverBot.png" alt="Maze Solver Bot" className="w-full h-auto object-cover" />
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert mb-4">
              <h3 className="text-foreground font-semibold mb-2">FPGA Implementation & Hardware Validation</h3>
              <p>
                Designed, synthesized, and deployed the complete FPGA design using <strong>Intel Quartus Prime</strong>, validating the robot on the DE0-Nano FPGA development board under real-world operating conditions.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="w-full rounded-xl overflow-hidden border shadow-sm ring-2 ring-border bg-muted flex items-center justify-center aspect-video relative">
                <img src="/Photos/Projects/MazeSolver/QuartusSimulation.jpg" alt="Quartus Simulation" className="w-full h-full object-cover absolute inset-0" />
              </div>
              <div className="w-full rounded-xl overflow-hidden border shadow-sm ring-2 ring-border bg-muted flex items-center justify-center aspect-video relative">
                <video src="/Photos/Projects/MazeSolver/HardwareDemo.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover absolute inset-0" />
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <h3 className="text-foreground font-semibold mb-2">Implementation</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Autonomous FPGA-based mobile robot</li>
                <li>Hardware implementation on the DE0-Nano FPGA development board</li>
                <li>Hardware-level parallel processing using Verilog HDL</li>
                <li>Wireless communication with the Central Control Unit (CCU)</li>
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
            { name: "Verilog HDL", icon: "/Icons/hardware.png" },
            { name: "Intel Quartus Prime", icon: "/Icons/control.png" },
            { name: "Autodesk Fusion", icon: "/Icons/fusion.png" },
            { name: "KiCad", icon: "/Icons/kicad.png" },
          ].map((tech, idx) => (
            <BlurFade key={tech.name} delay={BLUR_FADE_DELAY * 11 + idx * 0.05}>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-muted/50 hover:bg-muted transition-colors border border-border rounded-lg text-sm font-medium text-foreground">
                <img 
                  src={tech.icon} 
                  alt={`${tech.name} icon`} 
                  className="size-5 object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
                <span>{tech.name}</span>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* 6. HARDWARE STACK */}
      <section id="hardware-stack">
        <SectionBadge label="Hardware Stack" />
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm text-left text-muted-foreground">
              <thead className="text-xs text-foreground uppercase bg-muted/50">
                <tr>
                  <th scope="col" className="px-6 py-4 border-b border-border">Component</th>
                  <th scope="col" className="px-6 py-4 border-b border-border">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-background border-b border-border hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground min-w-[200px]">DE0-Nano FPGA Development Board (Intel Cyclone IV)</td>
                  <td className="px-6 py-4 leading-relaxed">Primary processing platform implementing the complete robot control architecture in Verilog HDL.</td>
                </tr>
                <tr className="bg-background border-b border-border hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground min-w-[200px]">HC-SR04 Ultrasonic Sensor</td>
                  <td className="px-6 py-4 leading-relaxed">Detects walls and measures obstacle distances for autonomous maze navigation.</td>
                </tr>
                <tr className="bg-background border-b border-border hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground min-w-[200px]">Digital IR Sensor</td>
                  <td className="px-6 py-4 leading-relaxed">Detects navigation flags and waypoint markers within the warehouse arena.</td>
                </tr>
                <tr className="bg-background border-b border-border hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground min-w-[200px]">600 RPM N20 Geared Motors with Encoders (×2)</td>
                  <td className="px-6 py-4 leading-relaxed">Provide differential drive locomotion and encoder feedback for accurate motion control.</td>
                </tr>
                <tr className="bg-background border-b border-border hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground min-w-[200px]">TB6612FNG Dual Motor Driver</td>
                  <td className="px-6 py-4 leading-relaxed">Controls the bidirectional operation of both DC drive motors.</td>
                </tr>
                <tr className="bg-background border-b border-border hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground min-w-[200px]">Capacitive Soil Moisture Sensor</td>
                  <td className="px-6 py-4 leading-relaxed">Measures soil moisture levels at designated sensing locations.</td>
                </tr>
                <tr className="bg-background border-b border-border hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground min-w-[200px]">MG90S Servo Motor</td>
                  <td className="px-6 py-4 leading-relaxed">Actuates the sensing arm for automated soil moisture measurement.</td>
                </tr>
                <tr className="bg-background border-b border-border hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground min-w-[200px]">HC-05 Bluetooth Module</td>
                  <td className="px-6 py-4 leading-relaxed">Enables wireless communication with the Central Control Unit (CCU) for transmitting sensor readings and navigation data.</td>
                </tr>
                <tr className="bg-background hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground min-w-[200px]">Custom PCB</td>
                  <td className="px-6 py-4 leading-relaxed">Integrates the FPGA interfaces, motor driver circuitry, power distribution, and peripheral connections into a compact embedded platform.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </BlurFade>
      </section>


      {/* 7. CERTIFICATE */}
      <section id="certificate">
        <SectionBadge label="Certificate" />
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <BlurFade delay={BLUR_FADE_DELAY * 12} className="flex-1 w-full max-w-[400px]">
            <div className="w-full rounded-xl overflow-hidden border shadow-sm ring-2 ring-border bg-muted">
              <img 
                src="/Photos/Projects/MazeSolver/eYRC25_Certificate_1.png" 
                alt="eYRC Certificate Page 1" 
                className="w-full h-auto object-contain" 
              />
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 13} className="flex-1 w-full max-w-[400px]">
            <div className="w-full rounded-xl overflow-hidden border shadow-sm ring-2 ring-border bg-muted">
              <img 
                src="/Photos/Projects/MazeSolver/eYRC25_Certificate_2.png" 
                alt="eYRC Certificate Page 2" 
                className="w-full h-auto object-contain" 
              />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* 8. TEAM SECTION */}
      <section id="team">
        <SectionBadge label="Team" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 sm:gap-y-6 w-full max-w-xl mx-auto mt-6">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="flex items-center gap-4 w-full text-left py-2">
              <img
                src="/Photos/Team_Members/Anupam.png"
                alt="Anupam Chatterjee"
                className="size-16 md:size-20 border rounded-full shadow-lg ring-4 ring-muted overflow-hidden object-cover flex-none bg-white"
              />
              <div className="flex-1 min-w-0 gap-1 flex flex-col">
                <div className="font-semibold text-lg leading-none">
                  Anupam Chatterjee
                </div>
                <a
                  href="https://www.linkedin.com/in/anu9am/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm font-medium text-primary hover:underline flex items-center gap-1.5 mt-1.5 w-fit"
                >
                  <Icons.linkedin className="size-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="flex items-center gap-4 w-full text-left py-2">
              <img
                src="/Photos/Team_Members/Arpita.jpg"
                alt="Arpita Kumari"
                className="size-16 md:size-20 border rounded-full shadow-lg ring-4 ring-muted overflow-hidden object-cover flex-none bg-white"
              />
              <div className="flex-1 min-w-0 gap-1 flex flex-col">
                <div className="font-semibold text-lg leading-none">
                  Arpita Kumari
                </div>
                <a
                  href="https://www.linkedin.com/in/OkayArpita/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm font-medium text-primary hover:underline flex items-center gap-1.5 mt-1.5 w-fit"
                >
                  <Icons.linkedin className="size-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={lightboxPhotos}
        on={{ view: ({ index: currentIndex }) => setIndex(currentIndex) }} 
        controller={{ closeOnBackdropClick: true }}
      />

    </main>
  );
}
