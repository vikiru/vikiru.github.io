import { Link } from 'react-router-dom';

function NavLogo() {
    return (
        <section className="flex items-center" id="logo">
            <Link className="logo group" title="View my homepage" to="/">
                <span className="text-text-50 transition-colors duration-300 group-hover:text-accent-400">
                    V
                </span>
                <span className="text-accent-500 transition-colors duration-300 group-hover:text-text-50">
                    K
                </span>
            </Link>
        </section>
    );
}

export default NavLogo;
