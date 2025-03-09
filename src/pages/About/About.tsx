import {
    About,
    EducationContainer,
    Footer,
    NavBar,
    SkillsContainer,
} from '~components/index';

function AboutPage() {
    return (
        <div className="scroller">
            <NavBar />
            <main className="bg-background-950">
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
