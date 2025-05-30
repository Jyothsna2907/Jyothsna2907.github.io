import { resumeData } from '@/lib/resume-data';
import { SectionWrapper } from './SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
// import { cn } from '@/lib/utils';

export function SkillsSection() {
  const { technicalSkills } = resumeData;

  return (
    <SectionWrapper id="skills" title="Technical Skills" className="bg-secondary/30">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technicalSkills.map((category) => (
          <Card key={category.name} className="shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                {category.icon && <category.icon className="h-6 w-6 mr-3 text-primary" />}
                {category.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill.name} 
                    variant="secondary" 
                    className="text-sm py-1 px-3 bg-primary/10 text-primary hover:bg-primary/20 transition-transform duration-200 hover:scale-110 hover:shadow-md"
                  >
                    {skill.icon && <skill.icon className="h-4 w-4 mr-1.5" />}
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
