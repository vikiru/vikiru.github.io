import Footer from '~components/Footer/Footer';
import NavBar from '~components/NavBar/NavBar';
import ProjectContainer from '~components/ProjectContainer/ProjectContainer';

function ProjectsPage() {
    return (
        <div>
            <NavBar />
            <main>
                <ProjectContainer />
            </main>
            <Footer />
        </div>
    );
}

export default ProjectsPage;
