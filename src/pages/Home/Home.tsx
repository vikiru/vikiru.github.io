import { Footer, Hero, NavBar } from '~components/index';

function HomePage() {
    return (
        <div className="scroller bg-gradient-to-tr from-blue-700 via-blue-100 to-blue-500">
            <NavBar />
            <Hero />
            <Footer />
        </div>
    );
}
export default HomePage;
