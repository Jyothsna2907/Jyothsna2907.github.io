import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { resumeData } from '@/lib/resume-data';
import { SectionWrapper } from './SectionWrapper';

export function HeroSection() {
  const { name, title, contact } = resumeData;

  return (
    <SectionWrapper id="hero" className="bg-gradient-to-br from-primary/5 via-background to-accent/5 !py-20 md:!py-32">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="space-y-6 text-center md:text-left animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary">
            {name}
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80">
            {title}
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center md:justify-start gap-4 text-sm">
            <Link href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-primary transition-colors group">
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span>{contact.email}</span>
            </Link>
            <Link href={`tel:${contact.phone.replace(/\s|-/g, "")}`} className="flex items-center gap-2 hover:text-primary transition-colors group">
              <Phone className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span>{contact.phone}</span>
            </Link>
            <Link href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors group">
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span>{contact.linkedinDisplay || 'LinkedIn'}</span>
            </Link>
          </div>
          {/* Placeholder for resume download button */}
          {/* <Button asChild size="lg" className="mt-6">
            <Link href="/path-to-resume.pdf" target="_blank">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Link>
          </Button> */}
        </div>
        <div className="relative flex justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Image
            src="https://placehold.co/400x400.png"
            alt={name}
            width={400}
            height={400}
            className="rounded-full shadow-2xl border-4 border-primary/20 object-cover"
            priority
            data-ai-hint="professional portrait"
          />
           <div className="absolute inset-0 rounded-full border-4 border-primary opacity-20 animate-pulse"></div>
        </div>
      </div>
    </SectionWrapper>
  );
}
