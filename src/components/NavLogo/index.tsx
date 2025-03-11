import { Link } from 'react-router-dom';

function NavLogo() {
    return (
        <section className="flex items-center" id="logo">
            <Link className="logo group" to="/">
                <h2>
                    <span className="logo-text">V</span>
                    <span className="logo-accent">K</span>
                </h2>
            </Link>
        </section>
    );
}

export default NavLogo;
