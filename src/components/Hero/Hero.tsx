import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className="flex items-center justify-center xs:min-h-[90vh] xs:pt-6 lg:pt-0">
            <div className="m-2 xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl 5xl:max-w-[88rem] 7xl:max-w-[104rem] 9xl:max-w-[160rem] 10xl:max-w-[180rem] 11xl:max-w-[200rem]">
                <h1 className="h1-text xs:tracking-wide sm:tracking-tight">
                    Hello, my name is Visakan Kirubakaran
                </h1>
                <p className="body-text text-text-700">
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

                <div className="mt-2 flex gap-4 pb-8 xs:flex-col md:flex-row lg:justify-start">
                    <Link
                        className="rounded-lg border-b-4 border-primary-700 bg-primary-600 px-6 py-3 text-center font-body text-clamp-button font-medium text-white shadow-sm transition duration-200 ease-in-out hover:bg-primary-700 7xl:border-b-[10px] 8xl:border-b-[15px] 8xl:px-12 8xl:py-6 9xl:px-12"
                        to="/about"
                    >
                        Read more about me
                    </Link>
                    <Link
                        className="rounded-lg border-b-4 border-primary-600 bg-primary-500 px-6 py-3 text-center font-body text-clamp-button font-medium text-white shadow-md transition duration-200 ease-in-out hover:bg-primary-600 hover:shadow-lg 7xl:border-b-[10px] 8xl:border-b-[15px] 8xl:px-12 8xl:py-6 9xl:px-12"
                        to="/projects"
                    >
                        View my work
                    </Link>
                    <Link
                        className="rounded-lg border-b-4 border-accent-600 bg-accent-500 px-6 py-3 text-center font-body text-clamp-button font-medium text-white shadow-sm transition duration-200 ease-in-out hover:bg-accent-600 7xl:border-b-[10px] 8xl:border-b-[15px] 8xl:px-12 8xl:py-6 9xl:px-12"
                        to="/contact"
                    >
                        Contact me
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
