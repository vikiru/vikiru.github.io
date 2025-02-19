import Footer from '~components/Footer/Footer';
import Hero from '~components/Hero/Hero';
import NavBar from '~components/NavBar/NavBar';

function HomePage() {
    return (
        <div className="bg-gradient-to-tr from-blue-700 via-blue-100 to-blue-500">
            <NavBar />
            <Hero />
            <Footer />
        </div>
    );
}
export default HomePage;
