import { Link } from 'react-router-dom';

function FooterLogo() {
    return (
        <section className="text-center md:text-left" id="logo">
            <Link
                className="font-body text-clamp-nav "
                title="View my homepage"
                to="/"
            >
                <h2 className="logo group text-center tracking-widest">
                    <span className="text-text-50 transition-colors duration-300 group-hover:text-accent-400">
                        Visa
                    </span>
                    <span className="text-accent-400 transition-colors duration-300 group-hover:text-text-50">
                        kan
                    </span>
                </h2>
            </Link>
        </section>
    );
}

export default FooterLogo;
