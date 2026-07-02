import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import PhotosSection from "@/components/section/photos-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";

const BLUR_FADE_DELAY = 0.04;

const sectionComponents: Record<string, React.ReactNode> = {
  about: (
    <section id="about">
      <div className="flex min-h-0 flex-col gap-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">{DATA.sections.about.heading}</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
            <Markdown>{DATA.summary}</Markdown>
          </div>
        </BlurFade>
      </div>
    </section>
  ),
  work: (
    <section id="work">
      <div className="flex min-h-0 flex-col gap-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold">{DATA.sections.work.heading}</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <WorkSection />
        </BlurFade>
      </div>
    </section>
  ),
  education: (
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-xl font-bold">{DATA.sections.education.heading}</h2>
        </BlurFade>
        <div className="flex flex-col gap-8">
          {DATA.education.map((education, index) => (
            <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + index * 0.05}>
              <div className="flex items-start gap-x-3 w-full">
                
                {/* Logo Section */}
                {education.logoUrl ? (
                  <img
                    src={education.logoUrl}
                    alt={education.school}
                    className="size-12 md:size-16 p-1 border rounded-xl shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                  />
                ) : (
                  <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                )}
                
                {/* Responsive Text Layout */}
                <div className="w-full flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4 min-w-0">
                  {/* Left Side (Desktop) / Top Stack (Mobile) */}
                  <div className="flex flex-col gap-1.5 min-w-0">
                    <h3 className="font-semibold text-base sm:text-lg leading-none">
                      {education.school}
                    </h3>
                    <div className="font-medium text-sm text-foreground">
                      {education.degree}
                    </div>
                    {education.department && (
                      <div className="text-sm text-muted-foreground">
                        {education.department}
                      </div>
                    )}
                  </div>
                  
                  {/* Right Side (Desktop) / Bottom Stack (Mobile) */}
                  <div className="text-sm text-muted-foreground sm:text-right shrink-0 mt-1 sm:mt-0">
                    {education.start} - {education.end}
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  ),
  skills: (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold">{DATA.sections.skills.heading}</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-2">
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                {skill.icon && <skill.icon className="size-4 rounded overflow-hidden object-contain" />}
                <span className="text-foreground text-sm font-medium">{skill.name}</span>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  ),
  projects: (
    <section id="projects">
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <ProjectsSection />
      </BlurFade>
    </section>
  ),
  hackathons: (
    <section id="hackathons">
      <BlurFade delay={BLUR_FADE_DELAY * 13}>
        <HackathonsSection />
      </BlurFade>
    </section>
  ),
  photos: <PhotosSection />,
  contact: (
    <section id="contact">
      <BlurFade delay={BLUR_FADE_DELAY * 16}>
        <ContactSection />
      </BlurFade>
    </section>
  ),
};

export default function HomePage() {
  const orderedSections = Object.entries(DATA.sections)
    .filter(([, s]) => s.enabled)
    .sort(([, a], [, b]) => a.order - b.order)
    .map(([key]) => key);

  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <a 
                  href="/Curriculum Vitae - Anupam Chatterjee.pdf" 
                  target="_blank" 
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2 mt-2 w-fit text-sm font-medium transition-colors shadow-sm"
                >
                  Download CV
                </a>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Rendering Loop for Dynamic Sections */}
      {orderedSections.map((key) => (
        <React.Fragment key={key}>
          {sectionComponents[key]}

          {/* Injecting the Patent Section directly after Hackathons */}
          {key === "hackathons" && DATA.patent && (
            <section id="patent">
              <div className="flex min-h-0 flex-col gap-y-6">
                <BlurFade delay={BLUR_FADE_DELAY * 14}>
                  <h2 className="text-xl font-bold">Patent & Intellectual Property</h2>
                </BlurFade>
                
                <div className="flex flex-col gap-8">
                  {/* @ts-ignore - Supressing TS error in case patent wasn't typed in the template */}
                  {DATA.patent.map((item: any, index: number) => (
                    <BlurFade key={index} delay={BLUR_FADE_DELAY * 15 + index * 0.05}>
                      <div className="flex items-start gap-x-3 w-full">
                        
                        {/* Logo Section */}
                        {item.logoUrl ? (
                          <img
                            src={item.logoUrl}
                            alt="Patent Logo"
                            className="size-12 md:size-16 p-1 border rounded-xl shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                          />
                        ) : (
                          <div className="size-12 md:size-16 p-1 border rounded-xl shadow ring-2 ring-border bg-muted flex-none" />
                        )}
                        
                        {/* Responsive Text Layout (Matches Education Section) */}
                        <div className="w-full flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4 min-w-0">
                          {/* Left Side (Desktop) / Top Stack (Mobile) */}
                          <div className="flex flex-col gap-1.5 min-w-0">
                            <h3 className="font-semibold text-base sm:text-lg leading-none">
                              {item.title}
                            </h3>
                            <div className="font-medium text-sm text-foreground flex items-center gap-2 mt-1">
                              <span className="text-primary font-semibold">{item.status}</span>
                              <span className="text-muted-foreground hidden sm:inline">•</span>
                              <span className="text-muted-foreground">App No: {item.applicationNumber}</span>
                            </div>
                          </div>
                          
                          {/* Right Side (Desktop) / Bottom Stack (Mobile) */}
                          <div className="text-sm text-muted-foreground sm:text-right shrink-0 mt-1 sm:mt-0">
                            {item.date}
                          </div>
                        </div>

                      </div>
                    </BlurFade>
                  ))}
                </div>
              </div>
            </section>
          )}
        </React.Fragment>
      ))}
    </main>
  );
}
