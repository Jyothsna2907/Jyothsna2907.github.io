import { resumeData } from '@/lib/resume-data';
import { SectionWrapper } from './SectionWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, CalendarDays, MapPin, Award as AwardIcon } from 'lucide-react'; // Renamed Award to AwardIcon

export function EducationSection() {
  const { education, certifications } = resumeData;

  return (
    <SectionWrapper id="education" title="Education & Certifications" className="bg-secondary/30">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center md:text-left flex items-center justify-center md:justify-start gap-2 text-primary">
            <GraduationCap className="h-7 w-7" /> Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <CardDescription className="font-medium text-foreground/80">{edu.institution}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-1 text-sm text-muted-foreground">
                  <p className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {edu.location}</p>
                  <p className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4" /> {edu.duration}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center md:text-left flex items-center justify-center md:justify-start gap-2 text-primary">
            <AwardIcon className="h-7 w-7" /> Certifications
          </h3>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl">{cert.name}</CardTitle>
                  {cert.issuer && <CardDescription className="font-medium text-foreground/80">{cert.issuer}</CardDescription>}
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
