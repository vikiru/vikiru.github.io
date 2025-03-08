import { Link } from 'react-router-dom';
import projectData from '~assets/data/projects';
import Footer from '~components/Footer/Footer';
import NavBar from '~components/NavBar/NavBar';

function Sitemap() {
    return (
        <div className="bg-primary scrollbar-track-primary scrollbar-thumb-accent dark:bg-darkPrimary dark:scrollbar-track-darkPrimary dark:scrollbar-thumb-darkAccent flex h-screen w-screen snap-y flex-col overflow-x-hidden overflow-y-scroll scroll-smooth scrollbar-thin lg:scrollbar">
            <NavBar />
            <main>
                <div className="pt-4">
                    <h2 className="heading-text text-secondary dark:text-primary text-center uppercase underline">
                        Sitemap
                    </h2>
                </div>

                <div className="pb-6 lg:grid lg:grid-cols-3">
                    <div className="px-4 py-2">
                        <Link id="home" title="View the homepage" to="/">
                            <h3 className="subheading-text text-accent decoration-secondary dark:text-darkAccent dark:decoration-primary hover:underline">
                                Home
                            </h3>
                        </Link>

                        <div className="py-2">
                            <Link
                                id="contact"
                                title="Send me an email"
                                to="/contact"
                            >
                                <h4 className="body-text text-accent decoration-secondary dark:text-darkAccent dark:decoration-primary hover:underline">
                                    Contact
                                </h4>
                            </Link>
                        </div>
                    </div>

                    <div className="px-4 py-2">
                        <Link id="about" title="Read more about me" to="/about">
                            <h3 className="subheading-text text-accent decoration-secondary dark:text-darkAccent dark:decoration-primary hover:underline">
                                About
                            </h3>
                        </Link>

                        <div className="py-2">
                            <Link
                                id="courses"
                                title="View my university courses"
                                to="/education/courses"
                            >
                                <h4 className="body-text text-accent decoration-secondary dark:text-darkAccent dark:decoration-primary hover:underline">
                                    Courses
                                </h4>
                            </Link>
                        </div>
                    </div>
                    <div className="px-4 pt-2">
                        <Link
                            id="projects"
                            title="Read more about me"
                            to="/projects"
                        >
                            <h3 className="subheading-text text-accent decoration-secondary dark:text-darkAccent dark:decoration-primary hover:underline">
                                Projects
                            </h3>
                        </Link>

                        {projectData.projects.map((project) => (
                            <div className="py-2" key={project.name}>
                                <Link
                                    id={project.name}
                                    title={'Read more about ' + project.name}
                                    to={project.projectPageUrl}
                                >
                                    <h4 className="body-text text-accent decoration-secondary dark:text-darkAccent dark:decoration-primary hover:underline">
                                        {project.name}{' '}
                                    </h4>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Sitemap;
