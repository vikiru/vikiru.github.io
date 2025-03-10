import { Link } from 'react-router-dom';

function CTA() {
    return (
        <section
            className="mt-2 flex gap-4 pb-8 xs:flex-col md:flex-row lg:justify-start"
            id="cta"
        >
            <Link
                className="rounded-lg border-b-4 border-primary-700 bg-primary-600 px-6 py-3 text-center font-body text-clamp-button font-medium text-white shadow-sm transition duration-200 ease-in-out hover:bg-primary-700 7xl:border-b-[10px] 8xl:border-b-[15px] 8xl:px-12 8xl:py-6 9xl:px-12"
                to="/about"
            >
                Read more about me
            </Link>
            <Link
                className="rounded-lg border-b-4 border-primary-600 bg-primary-500 px-6 py-3 text-center font-body text-clamp-button font-medium text-white shadow-md transition duration-200 ease-in-out hover:bg-primary-600 hover:shadow-lg 7xl:border-b-[10px] 8xl:border-b-[15px] 8xl:px-12 8xl:py-6 9xl:px-12"
                to="/projects"
            >
                View my work
            </Link>
            <Link
                className="rounded-lg border-b-4 border-accent-600 bg-accent-500 px-6 py-3 text-center font-body text-clamp-button font-medium text-white shadow-sm transition duration-200 ease-in-out hover:bg-accent-600 7xl:border-b-[10px] 8xl:border-b-[15px] 8xl:px-12 8xl:py-6 9xl:px-12"
                to="/contact"
            >
                Contact me
            </Link>
        </section>
    );
}

export default CTA;
