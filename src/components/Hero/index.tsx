import { CTA } from '~components/index';

function Hero() {
    return (
        <section
            className="flex items-center justify-center bg-gradient-to-tr from-blue-700 via-blue-100 to-blue-500 xs:min-h-[90vh] xs:pt-6 lg:pt-0 dark:from-blue-600 dark:via-blue-200 dark:to-blue-900"
            id="hero"
        >
            {/** Hero */}
            <div className="hero-ctr">
                <h1 className="h1-text xs:tracking-wide sm:tracking-tight">
                    Hello, my name is Visakan Kirubakaran
                </h1>
                <p className="body-text text-light-text-700 dark:text-dark-text-100">
                    I am a dedicated software developer with a passion for
                    software and web development. Utilizing my knowledge and
                    skills, I wish to challenge myself as I contribute to
                    meaningful projects.
                    <br />
                    Whether it is by developing new applications for desktop,
                    mobile or the web, integrating and designing APIs,
                    implementing extensive testing to ensure code quality and
                    maintainability, writing user-friendly documentation, and
                    anything in between, I am eager to learn and grow as a
                    developer.
                    <br />
                    Feel free to read more about{' '}
                    <span className="font-semibold">who I am</span>, view{' '}
                    <span className="font-semibold">my work</span>, or{' '}
                    <span className="font-semibold">contact me</span>!
                </p>

                {/** CTA */}
                <CTA />
            </div>
        </section>
    );
}

export default Hero;
