/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-12 md:size-16 p-1 border rounded-xl shadow ring-4 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-12 md:size-16 p-1 border rounded-xl shadow ring-4 ring-border overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  return (
    <div className="w-full grid gap-6">
      {DATA.work.map((work) => (
        <a
          key={work.company}
          href={work.href}
          className="flex items-start md:items-center gap-x-3 justify-between w-full text-left py-2 group hover:no-underline transition-colors"
        >
          <LogoImage src={work.logoUrl} alt={work.company} />
          
          {/* Responsive Container: Column on mobile, Row on desktop */}
          <div className="flex flex-col md:flex-row justify-between w-full min-w-0 gap-2 md:gap-4">
            
            {/* LEFT SIDE: Lab Name, Institute, Intern Type */}
            <div className="flex-1 min-w-0 gap-1 flex flex-col">
              <div className="font-semibold leading-none flex items-center gap-2">
                {work.company}
                {/* Always-visible Arrow Icon that "lights up" and moves slightly on hover */}
                <ArrowUpRight 
                  className="h-3.5 w-3.5 text-muted-foreground transition-all duration-300 group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" 
                  aria-hidden 
                />
              </div>
              <div className="font-sans text-sm font-medium text-foreground">
                {work.location}
              </div>
              <div className="font-sans text-sm text-muted-foreground">
                {work.title}
              </div>
            </div>

            {/* RIGHT SIDE: Duration (Top on desktop), Guide (Bottom on desktop) */}
            <div className="flex flex-col md:items-end text-left md:text-right gap-1 flex-none mt-1 md:mt-0">
              
              {/* Duration: order-2 on mobile (bottom), md:order-1 on desktop (top) */}
              <div className="order-2 md:order-1 text-xs tabular-nums text-muted-foreground">
                {work.start} - {work.end ?? DATA.sections.work.presentLabel}
              </div>
              
              {/* Guide: order-1 on mobile (top), md:order-2 on desktop (bottom) */}
              {(work as any).guide && (
                <div className="order-1 md:order-2 font-sans text-sm italic text-muted-foreground">
                  Guide: {(work as any).guide}
                </div>
              )}
              
            </div>

          </div>
        </a>
      ))}
    </div>
  );
}
