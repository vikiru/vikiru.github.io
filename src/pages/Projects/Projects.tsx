import { Footer, NavBar, ProjectContainer } from '~components/index';

function ProjectsPage() {
    return (
        <div className="scroller">
            <NavBar />
            <main>
                <ProjectContainer />
            </main>
            <Footer />
        </div>
    );
}

export default ProjectsPage;
