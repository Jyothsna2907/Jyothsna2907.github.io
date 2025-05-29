import { resumeData } from '@/lib/resume-data';
import { SectionWrapper } from './SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCircle } from 'lucide-react';

export function AboutMeSection() {
  const { summary } = resumeData;

  return (
    <SectionWrapper id="about" title="About Me">
      <Card className="shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <UserCircle className="h-7 w-7 text-primary" />
            Professional Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-foreground/80 leading-relaxed whitespace-pre-line">
            {summary}
          </p>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
