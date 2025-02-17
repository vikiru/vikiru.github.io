function HomePage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-white via-blue-200 to-blue-500">
            <div className="m-2 xs:max-w-7xl">
                <h1 className="font-heading font-bold tracking-tight xs:text-xl sm:text-5xl md:text-7xl">
                    Hello, my name is Visakan Kirubakaran
                </h1>
                <p className="font-body leading-relaxed xs:text-lg lg:text-3xl">
                    I am a dedicated software developer with a passion for
                    software and web development. Utilizing my knowledge and
                    skills, I wish to challenge myself as I contribute to
                    meaningful projects.
                    <br />
                    Whether it be by developing new applications for desktop,
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

                <div className="flex gap-4 pt-4 xs:flex-col lg:flex-row lg:justify-start">
                    <a
                        className="rounded-lg border-b-4 border-blue-500 bg-black px-6 py-3 text-center font-body font-medium text-white shadow-sm hover:bg-gray-800 xs:text-lg lg:text-2xl "
                        href="/about"
                    >
                        Read more about me
                    </a>
                    <a
                        className="rounded-lg border-b-4 border-blue-500 bg-black px-6 py-3 text-center font-body font-medium text-white shadow-sm hover:bg-gray-800 xs:text-lg lg:text-2xl "
                        href="/projects"
                    >
                        View my work
                    </a>
                    <a
                        className="rounded-lg border-b-4 border-blue-500 bg-black px-6 py-3 text-center font-body font-medium text-white shadow-sm hover:bg-gray-800 xs:text-lg lg:text-2xl"
                        href="/contact"
                    >
                        Contact me
                    </a>
                </div>
            </div>
        </div>
    );
}
export default HomePage;
