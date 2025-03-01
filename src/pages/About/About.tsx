import About from '~components/About/About';
import EducationContainer from '~components/EducationContainer/EducationContainer';
import Footer from '~components/Footer/Footer';
import NavBar from '~components/NavBar/NavBar';
import SkillsContainer from '~components/SkillsContainer/SkillsContainer';

function AboutPage() {
    return (
        <div className="">
            <NavBar />
            <main className="bg-gray-50">
                {/* About Section */}
                <About />
                <div className="my-8 border-t border-gray-300" />

                {/* Education Section */}
                <EducationContainer />
                <div className="my-8 border-t border-gray-300" />

                {/* Skills Section */}
                <SkillsContainer />
            </main>
            <Footer />
        </div>
    );
}

export default AboutPage;
