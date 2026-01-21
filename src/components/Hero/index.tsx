import CTA from '@/components/CTA';

function Hero() {
  return (
    <section
      className="flex items-center justify-center bg-gradient-to-tr from-primary via-primary/30 to-primary xs:min-h-[90vh] xs:pt-6 lg:pt-0 dark:from-primary/80 dark:via-primary/30 dark:to-primary"
      id="hero"
    >
      <div className="m-2 max-w-24rem xs:max-w-28rem sm:max-w-42rem lg:max-w-56rem xl:max-w-64rem 2xl:max-w-80rem 3xl:max-w-90rem 4xl:max-w-115rem">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground xs:tracking-wide sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl">
          Hello, my name is Visakan Kirubakaran
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl">
          I am a dedicated software developer with a passion for software and
          web development. By utilizing my knowledge and skills, I aim to
          challenge myself while contributing to meaningful projects.
          <br />
          Whether it's developing new applications for desktop, mobile, or the
          web, integrating and designing APIs, implementing extensive testing to
          ensure code quality and maintainability, writing user-friendly
          documentation, or anything in between, I am eager to learn and grow as
          a developer.
          <br />
          Feel free to read more about{' '}
          <span className="font-semibold">who I am</span>, view{' '}
          <span className="font-semibold">my work</span>, or{' '}
          <span className="font-semibold">contact me</span>!
        </p>

        <CTA />
      </div>
    </section>
  );
}

export default Hero;
