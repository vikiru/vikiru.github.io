import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import navData from '~assets/data/nav';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <section className="flex justify-between py-2 lg:mx-10">
                <div className="flex items-center justify-center px-4">
                    <Link
                        className="font-cinzel font-semibold"
                        style={{ fontSize: 'clamp(1.8rem, 2.5vw, 9rem)' }}
                        to="/"
                    >
                        <span className="text-gray-800">V</span>
                        <span className="text-blue-500">K</span>
                    </Link>
                </div>

                <div className="gap-4 px-2 py-4 text-black xs:hidden lg:flex lg:items-center lg:justify-center 2xl:gap-8">
                    <Link
                        className="font-heading uppercase transition-colors duration-200 hover:text-blue-800 hover:underline"
                        style={{ fontSize: 'clamp(1rem, 1.25vw, 6rem)' }}
                        to="/"
                    >
                        Home
                    </Link>
                    <Link
                        className="font-heading uppercase transition-colors duration-200 hover:text-blue-800 hover:underline"
                        style={{ fontSize: 'clamp(1rem, 1.25vw, 6rem)' }}
                        to="/about"
                    >
                        About
                    </Link>
                    <Link
                        className="font-heading uppercase transition-colors duration-200 hover:text-blue-800 hover:underline"
                        style={{ fontSize: 'clamp(1rem, 1.25vw, 6rem)' }}
                        to="/projects"
                    >
                        Projects
                    </Link>
                    <Link
                        className="font-heading uppercase transition-colors duration-200 hover:text-blue-800 hover:underline"
                        style={{ fontSize: 'clamp(1rem, 1.25vw, 6rem)' }}
                        to="/contact"
                    >
                        Contact
                    </Link>
                </div>

                <div className="lg:hidden">
                    <button onClick={handleClick}>
                        {!isOpen ? (
                            <FontAwesomeIcon
                                className="px-3 py-2 text-black"
                                icon={faBars}
                                style={{
                                    fontSize: 'clamp(1.5rem, 2.5vw, 4rem)',
                                }}
                            />
                        ) : (
                            <FontAwesomeIcon
                                className="px-3 py-2 text-black"
                                icon={faX}
                                style={{
                                    fontSize: 'clamp(1.5rem, 2.5vw, 4rem)',
                                }}
                            />
                        )}
                    </button>
                </div>
            </section>

            {isOpen && (
                <section className="flex flex-col items-center justify-center lg:hidden">
                    <Link
                        className="font-heading uppercase text-black transition-colors duration-200 hover:text-blue-500"
                        style={{ fontSize: 'clamp(1rem, 1.25vw, 6rem)' }}
                        to="/"
                    >
                        Home
                    </Link>
                    <Link
                        className="font-heading uppercase text-black transition-colors duration-200 hover:text-blue-500"
                        style={{ fontSize: 'clamp(1rem, 1.25vw, 6rem)' }}
                        to="/about"
                    >
                        About
                    </Link>
                    <Link
                        className="font-heading uppercase text-black transition-colors duration-200 hover:text-blue-500"
                        style={{ fontSize: 'clamp(1rem, 1.25vw, 6rem)' }}
                        to="/projects"
                    >
                        Projects
                    </Link>
                    <Link
                        className="font-heading uppercase text-black transition-colors duration-200 hover:text-blue-500"
                        style={{ fontSize: 'clamp(1rem, 1.25vw, 6rem)' }}
                        to="/contact"
                    >
                        Contact
                    </Link>
                </section>
            )}
        </nav>
    );
}

export default NavBar;
