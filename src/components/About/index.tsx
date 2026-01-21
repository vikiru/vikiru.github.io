function About() {
  return (
    <section
      className="bg-secondary/50 xs:pb-3 xs:pt-6 xl:mt-6 4xl:mt-8 5xl:mt-10 dark:bg-secondary/20"
      id="about"
    >
      <div className="mt-4 mb-4 7xl:mt-6 7xl:mb-6 11xl:mt-8 11xl:mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-center text-foreground sm:text-3xl lg:text-4xl">
          About
        </h2>
        <div className="mx-4 xs:mt-0 lg:mt-4 10xl:mx-10 11xl:mt-8">
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            My journey into the world of software development began with an
            introduction to computer science and programming, utilizing
            languages such as C++ and Java.{' '}
            <br className="xs:block sm:hidden" />
            Following that, my software engineering degree at Carleton
            University provided me with a strong foundation of knowledge and
            exposure to various languages, including Racket, C, Java, Python,
            HTML, CSS, JavaScript, PHP, and SQL.
            <br /> After graduating, my goal has been to continue learning and
            growing as a software developer. I actively seek out new and
            meaningful projects to challenge myself, working with both familiar
            and unfamiliar technologies. My journey into web development has
            been particularly rewarding, and I've enjoyed working with
            technologies such as React, TailwindCSS, and Express.
            <br /> I love creating software, no matter the platform. The process
            of refining a rough idea into something polished and functional
            through iterative development excites me. I am particularly drawn to
            projects where the end product is easily accessible to anyone,
            regardless of their device, ensuring a wide-reaching impact.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
