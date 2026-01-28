import { LuArrowRight } from 'react-icons/lu';
import { skillsData } from '@/data/skills';
import { Badge } from '@/lib/components/ui/badge';
import { Button } from '@/lib/components/ui/button';
import { Card, CardContent } from '@/lib/components/ui/card';
import { cn } from '@/lib/utils';

interface SkillsProps {
  className?: string;
}

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const categories = [
  { title: 'Languages', data: skillsData.languages.data },
  { title: 'Frameworks', data: skillsData.frameworks.data },
  { title: 'Libraries', data: skillsData.libraries.data },
  { title: 'Database', data: skillsData.database.data },
  { title: 'Tools', data: skillsData.tools.data },
  { title: 'DevOps', data: skillsData.devops.data },
  { title: 'Hosting', data: skillsData.hosting.data },
  { title: 'Operating Systems', data: skillsData.os.data },
];

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div>
      <h4 className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-4 border-b border-border pb-2">
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            className="text-base font-normal cursor-default"
            key={skill}
            variant="secondary"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export function Skills({ className }: SkillsProps) {
  return (
    <section className={cn('py-20 relative', className)} id="skills">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="xs:text-h3 sm:text-h2  font-bold mb-4 flex items-center justify-center gap-3 font-heading">
            <span className="w-8 h-1 bg-primary rounded-full" />
            Skills
            <span className="w-8 h-1 bg-primary rounded-full" />
          </h2>
        </div>
        <Card>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {categories.map((category) => (
                <SkillCategory
                  key={category.title}
                  skills={category.data}
                  title={category.title}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
