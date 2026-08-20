import { skillsData } from "@/data/skills";
import { Badge } from "@/lib/components/ui/badge";
import { Card, CardContent } from "@/lib/components/ui/card";
import { cn } from "@/lib/utils";

interface SkillsProps {
  className?: string;
}

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const categories = [
  { title: "Languages", data: skillsData.languages.data },
  { title: "Frameworks", data: skillsData.frameworks.data },
  { title: "Libraries", data: skillsData.libraries.data },
  { title: "Database", data: skillsData.database.data },
  { title: "Tools", data: skillsData.tools.data },
  { title: "DevOps", data: skillsData.devops.data },
  { title: "Hosting", data: skillsData.hosting.data },
  { title: "Operating Systems", data: skillsData.os.data },
];

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div>
      <h3 className="mb-4 border-b border-border pb-2 font-heading text-h5 font-semibold tracking-wider text-muted-foreground uppercase">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge className="body-base cursor-default font-normal" key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export function Skills({ className }: SkillsProps) {
  return (
    <section className={cn("relative scroll-mt-20 py-20", className)} id="skills">
      <div className="px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 flex  items-center justify-center gap-3 font-heading text-h3 font-bold sm:text-h2">
            <span className="h-1 w-8 rounded-full bg-primary" />
            Skills
            <span className="h-1 w-8 rounded-full bg-primary" />
          </h2>
        </div>
        <Card>
          <CardContent className="p-8">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <SkillCategory key={category.title} skills={category.data} title={category.title} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
