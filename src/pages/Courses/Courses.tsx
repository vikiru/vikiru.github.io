import CourseContainer from '~components/CourseContainer/CourseContainer';
import Footer from '~components/Footer/Footer';
import NavBar from '~components/NavBar/NavBar';

function CoursesPage() {
    return (
        <div className="bg-primary scrollbar-track-primary scrollbar-thumb-accent dark:bg-darkPrimary dark:scrollbar-track-darkPrimary dark:scrollbar-thumb-darkAccent flex h-screen w-screen snap-y flex-col overflow-x-hidden overflow-y-scroll scroll-smooth scrollbar-thin lg:scrollbar">
            <NavBar />
            <main>
                <CourseContainer />
            </main>
            <Footer />
        </div>
    );
}

export default CoursesPage;
