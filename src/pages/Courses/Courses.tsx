import { CourseContainer, Footer, NavBar } from '~components/index';

function CoursesPage() {
    return (
        <div className="scroller">
            <NavBar />
            <main>
                <CourseContainer />
            </main>
            <Footer />
        </div>
    );
}

export default CoursesPage;
