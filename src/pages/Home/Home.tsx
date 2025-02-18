import Footer from '~components/Footer/Footer';
import NavBar from '~components/NavBar/NavBar';

function HomePage() {
    return (
        <div className=" bg-gradient-to-br from-white via-blue-200 to-blue-500">
            <NavBar />
            <div className="flex min-h-screen grow items-center justify-center">
                <div className="m-2 xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl 5xl:max-w-[88rem] 7xl:max-w-[104rem] 9xl:max-w-[160rem]">
                    <h1 className="font-heading font-bold xs:text-xl xs:tracking-wide sm:text-2xl sm:tracking-tight lg:text-5xl 2xl:text-6xl 7xl:text-8xl 9xl:text-9xl">
                        Hello, my name is Visakan Kirubakaran
                    </h1>
                    <p className="font-body leading-relaxed xs:text-lg sm:text-xl lg:text-2xl 2xl:text-4xl 7xl:text-5xl 9xl:text-7xl">
                        I am a dedicated software developer with a passion for
                        software and web development. Utilizing my knowledge and
                        skills, I wish to challenge myself as I contribute to
                        meaningful projects.
                        <br />
                        Whether it is by developing new applications for
                        desktop, mobile or the web, integrating and designing
                        APIs, implementing extensive testing to ensure code
                        quality and maintainability, writing user-friendly
                        documentation, and anything in between, I am eager to
                        learn and grow as a developer.
                        <br />
                        Feel free to read more about{' '}
                        <span className="font-semibold">who I am</span>, view{' '}
                        <span className="font-semibold">my work</span>, or{' '}
                        <span className="font-semibold">contact me</span>!
                    </p>

                    <div className="flex gap-4 pt-4 xs:flex-col md:flex-row lg:justify-start">
                        <a
                            className="rounded-lg border-b-4 border-blue-500 bg-black px-6 py-3 text-center font-body font-medium text-white shadow-sm hover:bg-gray-800 xs:text-base lg:text-xl 2xl:text-2xl 7xl:border-b-[10px] 7xl:text-4xl 8xl:border-b-[15px] 8xl:px-12 8xl:py-6 9xl:px-12 9xl:py-12 9xl:text-6xl"
                            href="/about"
                        >
                            Read more about me
                        </a>
                        <a
                            className="rounded-lg border-b-4 border-blue-500 bg-black px-6 py-3 text-center font-body font-medium text-white shadow-sm hover:bg-gray-800 xs:text-base lg:text-xl 2xl:text-2xl 7xl:border-b-[10px] 7xl:text-4xl 8xl:border-b-[15px] 8xl:px-12 8xl:py-6 9xl:px-12 9xl:py-12 9xl:text-6xl"
                            href="/projects"
                        >
                            View my work
                        </a>
                        <a
                            className="rounded-lg border-b-4 border-blue-500 bg-black px-6 py-3 text-center font-body font-medium text-white shadow-sm hover:bg-gray-800 xs:text-base lg:text-xl 2xl:text-2xl 7xl:border-b-[10px] 7xl:text-4xl 8xl:border-b-[15px] 8xl:px-12 8xl:py-6 9xl:px-12 9xl:py-12 9xl:text-6xl"
                            href="/contact"
                        >
                            Contact me
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default HomePage;
