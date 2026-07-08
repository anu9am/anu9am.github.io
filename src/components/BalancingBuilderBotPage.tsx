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
          <div className="gap-4 flex flex-col items-start">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted flex items-center justify-center bg-white overflow-hidden">
                <img 
                  alt="Balancing Builder Bot Profile" 
                  src="/Photos/Projects/BalancingBuilder/DP_BalancingBuilderBot.png" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </BlurFade>
            <div className="gap-2 flex flex-col">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text="Balancing Builder Bot"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. IN A NUTSHELL */}
      <section id="in-a-nutshell">
        <SectionBadge label="In a Nutshell" />
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
            <p>
              The Balancing Builder Bot is a two-wheeled self-balancing mobile manipulator developed for the e-Yantra Robotics Competition. The robot combines inverted-pendulum stabilization with a servo-actuated pick-and-place mechanism, enabling an operator to transport and manipulate construction blocks while maintaining dynamic balance. The complete system was designed, simulated, and validated through both virtual and hardware implementations.
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
              Operating a manipulator on a dynamically unstable two-wheeled platform is a challenging control problem. Every arm movement and payload transfer shifts the robot's center of mass, introducing disturbances that can destabilize the balancing controller. This project demonstrates the integration of real-time control, embedded systems, and mechanical design to achieve stable teleoperated manipulation while continuously maintaining balance.
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
              <h3 className="text-foreground font-semibold mb-2">Dynamic Stabilization</h3>
              <p>
                Designed and tuned PID and LQR controllers to stabilize the inverted-pendulum platform. The controller continuously compensates for disturbances caused by manipulator motion, payload transfer, and external perturbations.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="w-full h-40 rounded-xl border-2 border-dashed border-muted flex items-center justify-center bg-muted/20 text-muted-foreground font-mono text-sm text-center px-2">
                &lt;Photo Inverted Pendulum&gt;
              </div>
              <div className="w-full h-40 rounded-xl border-2 border-dashed border-muted flex items-center justify-center bg-muted/20 text-muted-foreground font-mono text-sm text-center px-2">
                &lt;Photo PID Control&gt;
              </div>
              <div className="w-full h-40 rounded-xl border-2 border-dashed border-muted flex items-center justify-center bg-muted/20 text-muted-foreground font-mono text-sm text-center px-2">
                &lt;Photo LQR Control&gt;
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert mb-4">
              <h3 className="text-foreground font-semibold mb-2">State Estimation</h3>
              <p>
                Implemented IMU-based attitude estimation by fusing accelerometer and gyroscope measurements to obtain accurate, low-latency tilt estimation for closed-loop balancing.
              </p>
            </div>
            <div className="w-full h-48 max-w-md rounded-xl border-2 border-dashed border-muted flex items-center justify-center bg-muted/20 text-muted-foreground font-mono text-sm">
              &lt;Photo Sensor Fusion&gt;
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert mb-4">
              <h3 className="text-foreground font-semibold mb-2">Mobile Manipulation</h3>
              <p>
                Designed a lightweight 3D-printed robotic arm and servo-driven gripper capable of picking, transporting, and placing construction blocks while minimizing the impact on the robot's stability.
              </p>
            </div>
            <div className="w-full h-48 max-w-md rounded-xl border-2 border-dashed border-muted flex items-center justify-center bg-muted/20 text-muted-foreground font-mono text-sm">
              &lt;Photo Manipulator&gt;
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert mb-4">
              <h3 className="text-foreground font-semibold mb-2">Wireless Teleoperation</h3>
              <p>
                Developed a custom Android application using MIT App Inventor to wirelessly control both the robot's locomotion and manipulator via Bluetooth UART communication. The interface enabled intuitive real-time operation while the balancing controller maintained platform stability.
              </p>
            </div>
            <div className="w-full h-48 max-w-md rounded-xl border-2 border-dashed border-muted flex items-center justify-center bg-muted/20 text-muted-foreground font-mono text-sm">
              &lt;Photo App&gt;
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert mb-4">
              <h3 className="text-foreground font-semibold mb-2">Simulation & Hardware Validation</h3>
              <p>
                Developed and validated the robot in CoppeliaSim before deploying the control algorithms to the physical platform, allowing efficient controller tuning and system verification prior to hardware implementation.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="w-full h-48 rounded-xl border-2 border-dashed border-muted flex items-center justify-center bg-muted/20 text-muted-foreground font-mono text-sm">
                &lt;Photo Simulation&gt;
              </div>
              <div className="w-full h-48 rounded-xl border-2 border-dashed border-muted flex items-center justify-center bg-muted/20 text-muted-foreground font-mono text-sm">
                &lt;Photo Physical Robot&gt;
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <h3 className="text-foreground font-semibold mb-2">Implementation</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Physics-based simulation in CoppeliaSim</li>
                <li>Hardware implementation on a custom-built two-wheeled balancing robot</li>
                <li>Bluetooth UART-based teleoperation through a custom Android application</li>
                <li>Real-time embedded control on Arduino</li>
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
            { name: "PID & LQR Control", icon: "/Icons/control.png" },
            { name: "C/C++", icon: "/Icons/cpp.png" },
            { name: "Python", icon: "/Icons/python.png" },
            { name: "CoppeliaSim", icon: "/Icons/coppeliasim.png" },
            { name: "MIT App Inventor", icon: "/Icons/app_inventor.png" },
            { name: "Autodesk Fusion", icon: "/Icons/fusion.png" },
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
                  <td className="px-6 py-4 font-medium text-foreground min-w-[200px]">Arduino Nano (ATmega328P)</td>
                  <td className="px-6 py-4 leading-relaxed">Primary embedded controller executing the balancing, manipulator, and communication algorithms.</td>
                </tr>
                <tr className="bg-background border-b border-border hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground min-w-[200px]">MPU-6050 IMU</td>
                  <td className="px-6 py-4 leading-relaxed">6-axis inertial measurement unit providing accelerometer and gyroscope data for real-time tilt estimation and closed-loop balancing.</td>
                </tr>
                <tr className="bg-background border-b border-border hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground min-w-[200px]">300 RPM N20 Geared Motors with Encoders (×2)</td>
                  <td className="px-6 py-4 leading-relaxed">Differential drive actuators providing propulsion and encoder feedback for precise motor control.</td>
                </tr>
                <tr className="bg-background border-b border-border hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground min-w-[200px]">L298N Dual H-Bridge Motor Driver</td>
                  <td className="px-6 py-4 leading-relaxed">Drives and controls the bidirectional motion of both DC motors.</td>
                </tr>
                <tr className="bg-background border-b border-border hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground min-w-[200px]">MG90S Servo Motor</td>
                  <td className="px-6 py-4 leading-relaxed">Actuates the robotic manipulator for pick-and-place operations.</td>
                </tr>
                <tr className="bg-background border-b border-border hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground min-w-[200px]">HC-05 Bluetooth Module</td>
                  <td className="px-6 py-4 leading-relaxed">Enables wireless UART communication with the custom Android controller application.</td>
                </tr>
                <tr className="bg-background border-b border-border hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground min-w-[200px]">Custom PCB</td>
                  <td className="px-6 py-4 leading-relaxed">Integrates the power distribution, motor driver, voltage regulation, and interface circuitry into a compact embedded control board.</td>
                </tr>
                <tr className="bg-background hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground min-w-[200px]">7805 Voltage Regulator</td>
                  <td className="px-6 py-4 leading-relaxed">Provides a regulated 5 V supply for the controller and peripheral electronics.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </BlurFade>
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
