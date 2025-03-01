import CourseContainer from '~components/CourseContainer/CourseContainer';
import Footer from '~components/Footer/Footer';
import NavBar from '~components/NavBar/NavBar';

function CoursesPage() {
    return (
        <div className="">
            <NavBar />
            <main>
                <CourseContainer />
            </main>
            <Footer />
        </div>
    );
}

export default CoursesPage;
