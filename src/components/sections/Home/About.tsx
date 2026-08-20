import { Card, CardContent } from "@/lib/components/ui/card";

const aboutParagraphs = [
  {
    text: "My journey into the world of software development began with an introduction to computer science and programming, utilizing languages such as C++ and Java. Following that, my software engineering degree at Carleton University provided me with a strong foundation of knowledge and exposure to various languages, including Racket, C, Java, Python, HTML, CSS, JavaScript, PHP, and SQL.",
  },
  {
    text: "After graduating, my goal has been to continue learning and growing as a software developer. I actively seek out new and meaningful projects to challenge myself, working with both familiar and unfamiliar technologies. My journey into web development has been particularly rewarding, and I've enjoyed working with technologies such as React, TailwindCSS, and Express.",
  },
  {
    text: "I love creating software, no matter the platform. The process of refining a rough idea into something polished and functional through iterative development excites me. I am particularly drawn to projects where the end product is easily accessible to anyone, regardless of their device.",
  },
];

export function About() {
  return (
    <section className="w-full scroll-mt-20 py-20" id="about">
      <div className="w-full px-6 lg:px-8">
        <h2 className="mb-8 flex items-center justify-center gap-3 font-heading text-h3 font-bold sm:text-h2">
          <span className="h-1 w-8 rounded-full bg-primary" />
          About Me
          <span className="h-1 w-8 rounded-full bg-primary" />
        </h2>
        <Card className="w-full">
          <CardContent className="body-large space-y-6 p-8 text-left leading-relaxed text-foreground">
            {aboutParagraphs.map((paragraph) => (
              <p className="max-w-[--container-measure]" key={paragraph.text.substring(0, 20)}>
                {paragraph.text}
              </p>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
