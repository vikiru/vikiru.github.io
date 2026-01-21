import { Link } from '@tanstack/react-router';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6';
import FooterLogo from '@/components/ui/FooterLogo';
import navData from '@/data/nav';

function Footer() {
  return (
    <footer className="mt-auto w-full bg-secondary py-6 10xl:py-10 dark:bg-secondary/20">
      <div className="container mx-auto grid grid-cols-1 px-4 xs:gap-2 md:grid-cols-3 lg:gap-4 xl:gap-6 2xl:gap-8">
        <FooterLogo />

        <section className="text-center md:text-left" id="read-more">
          <h3 className="mb-2 text-xl font-heading font-semibold tracking-wide text-muted-foreground xl:mb-3 7xl:py-6 9xl:py-12 11xl:py-16 3xl:text-2xl 8xl:text-4xl">
            Read More
          </h3>
          <div className="flex flex-col gap-2 xs:items-center md:items-start 7xl:gap-8 8xl:gap-10 9xl:gap-12 10xl:gap-20">
            {navData.map((item) => (
              <Link
                className="footer-link w-fit"
                key={item.navTitle}
                to={item.navLink}
              >
                {item.navTitle}
              </Link>
            ))}
          </div>
        </section>

        <section className="text-center md:text-left" id="social-icons">
          <h3 className="mb-2 text-xl font-heading font-semibold tracking-wide text-muted-foreground xl:mb-3 7xl:py-6 9xl:py-12 11xl:py-16 3xl:text-2xl 8xl:text-4xl">
            Connect With Me
          </h3>
          <div className="flex items-center justify-center gap-4 md:justify-start 7xl:gap-8 10xl:gap-10">
            <a
              href="https://github.com/vikiru"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/viskirubakaran"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <Link to="/contact">
              <FaEnvelope />
            </Link>
          </div>
        </section>
      </div>

      <section
        className="text-center xs:mt-4 lg:mt-6 7xl:mt-10 8xl:mt-12"
        id="copyright"
      >
        <p className="text-muted-foreground 3xl:text-lg 8xl:text-2xl">
          &copy; {new Date().getFullYear()} Visakan Kirubakaran. All rights
          reserved.
          <span className="mx-2">|</span>
          <Link
            className="transition-colors duration-300 hover:text-accent hover:underline motion-reduce:transition-none"
            to="/sitemap"
          >
            Sitemap
          </Link>
        </p>
      </section>
    </footer>
  );
}

export default Footer;
