import { Card, CardContent } from '@/lib/components/ui/card';

const aboutParagraphs = [
  {
    text: 'My journey into the world of software development began with an introduction to computer science and programming, utilizing languages such as C++ and Java. Following that, my software engineering degree at Carleton University provided me with a strong foundation of knowledge and exposure to various languages, including Racket, C, Java, Python, HTML, CSS, JavaScript, PHP, and SQL.',
  },
  {
    text: "After graduating, my goal has been to continue learning and growing as a software developer. I actively seek out new and meaningful projects to challenge myself, working with both familiar and unfamiliar technologies. My journey into web development has been particularly rewarding, and I've enjoyed working with technologies such as React, TailwindCSS, and Express.",
  },
  {
    text: 'I love creating software, no matter the platform. The process of refining a rough idea into something polished and functional through iterative development excites me. I am particularly drawn to projects where the end product is easily accessible to anyone, regardless of their device.',
  },
];

export function About() {
  return (
    <section className="py-20 w-full scroll-mt-20" id="about">
      <div className="w-full px-6 lg:px-8">
        <h2 className="text-h3 sm:text-h2 font-bold mb-8 flex items-center gap-3 justify-center font-heading">
          <span className="w-8 h-1 bg-primary rounded-full" />
          About Me
          <span className="w-8 h-1 bg-primary rounded-full" />
        </h2>
        <Card className="w-full">
          <CardContent className="p-8 space-y-6 body-large text-foreground leading-relaxed text-left">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph.text.substring(0, 20)}>{paragraph.text}</p>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
