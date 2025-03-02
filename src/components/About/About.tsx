function About() {
    return (
        <section className="min-h-[30vh] bg-gray-50">
            <div className="pt-12">
                <h2
                    className="text-center font-heading font-semibold text-gray-800"
                    style={{ fontSize: 'clamp(2rem, 2vw, 9rem)' }}
                >
                    About
                </h2>

                <div className="max-w-screen-[12rem] m-4">
                    <p
                        className="font-body text-2xl leading-relaxed text-gray-600"
                        style={{ fontSize: 'clamp(0.8rem, 1.25vw, 8rem)' }}
                    >
                        My journey into the world of software development began
                        with an introduction to computer science and
                        programming, utilizing languages such as C++ and Java.
                        <br /> Following that, my university degree at Carleton
                        University provided me with a strong foundation of
                        knowledge and exposure to various languages, including
                        C, Racket, Java, Python, HTML, CSS, JavaScript, PHP, and
                        SQL.
                        <br /> After graduating, my goal has been to continue
                        learning and growing as a software developer. I actively
                        seek out new and meaningful projects to challenge
                        myself, working with both familiar and unfamiliar
                        technologies. My journey into web development has been
                        particularly rewarding, where I’ve enjoyed working with
                        technologies such as React, TailwindCSS, and Express.
                        <br /> I love creating software, no matter the platform.
                        The process of refining a rough idea into something
                        polished and functional through iterative development
                        excites me. I am particularly drawn to projects where
                        the end product is easily accessible to anyone,
                        regardless of their device, ensuring a wide-reaching
                        impact.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
