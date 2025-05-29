
'use client'; 

import Image from 'next/image';
import { resumeData } from '@/lib/resume-data';
import { SectionWrapper } from './SectionWrapper';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Briefcase, CalendarDays, MapPin, ListChecks, Cpu } from 'lucide-react';

export function ExperienceSection() {
  const { professionalExperience } = resumeData;

  return (
    <SectionWrapper id="experience" title="Professional Experience & Projects">
      <div className="space-y-12">
        {professionalExperience.map((exp, index) => (
          <Card key={index} className="shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
            <div className="md:flex">
              <div className="md:w-1/3 p-2">
                <div className="relative aspect-video md:aspect-auto md:h-full w-full overflow-hidden rounded-md md:rounded-l-md md:rounded-r-none">
                  <Image
                    src="https://placehold.co/600x400.png"
                    alt={`${exp.company} project showcase`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 ease-in-out hover:scale-105"
                    data-ai-hint={exp.projectImageHint}
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl font-semibold text-primary flex items-center gap-2">
                    <Briefcase className="h-6 w-6" /> {exp.title}
                  </CardTitle>
                  <CardDescription className="text-lg font-medium text-foreground/90">{exp.company}</CardDescription>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
                    <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {exp.location}</span>
                    <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4" /> {exp.duration}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/80 leading-relaxed">{exp.projectDescription}</p>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="responsibilities">
                      <AccordionTrigger className="text-base font-medium hover:no-underline">
                        <div className="flex items-center gap-2">
                          <ListChecks className="h-5 w-5 text-primary" />
                          Key Achievements & Responsibilities
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc space-y-2 pl-5 text-foreground/70">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                </CardContent>
                <CardFooter>
                   <div className="w-full">
                    <h4 className="text-sm font-semibold mb-2 flex items-center gap-2 text-muted-foreground">
                      <Cpu className="h-4 w-4" /> Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-accent/10 text-card-foreground/30 dark:text-card-foreground hover:bg-accent/20 transition-transform duration-200 hover:scale-105"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
