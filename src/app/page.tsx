import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutMeSection } from '@/components/AboutMeSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { EducationSection } from '@/components/EducationSection';
import { ContactSection } from '@/components/ContactForm'; 

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutMeSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t bg-background">
      <div className="container text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Jyothsna Kondapalli. All rights reserved.</p>
        <p>Built with Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
