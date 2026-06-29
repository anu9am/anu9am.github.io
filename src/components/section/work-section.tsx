/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-12 md:size-16 p-1 border rounded-xl shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-12 md:size-16 p-1 border rounded-xl shadow ring-2 ring-border overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  return (
    <Accordion type="single" collapsible className="w-full grid gap-6">
      {DATA.work.map((work) => (
        <AccordionItem
          key={work.company}
          value={work.company}
          className="w-full border-b-0 grid gap-2"
        >
          <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
            <div className="flex items-start md:items-center gap-x-3 justify-between w-full text-left py-2">
              <LogoImage src={work.logoUrl} alt={work.company} />
              
              {/* Responsive Container: Column on mobile, Row on desktop */}
              <div className="flex flex-col md:flex-row justify-between w-full min-w-0 gap-2 md:gap-4">
                
                {/* LEFT SIDE: Lab Name, Institute, Intern Type */}
                <div className="flex-1 min-w-0 gap-1 flex flex-col">
                  <div className="font-semibold leading-none flex items-center gap-2">
                    {work.company}
                    <span className="relative inline-flex items-center w-3.5 h-3.5">
                      <ChevronRight
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                          "translate-x-0 opacity-0",
                          "group-hover:translate-x-1 group-hover:opacity-100",
                          "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0"
                        )}
                      />
                      <ChevronDown
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                          "opacity-0 rotate-0",
                          "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180"
                        )}
                      />
                    </span>
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
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-0 ml-13 text-xs sm:text-sm text-muted-foreground">
            {work.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

