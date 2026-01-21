import { Link } from '@tanstack/react-router';

function CTA() {
  return (
    <section
      className="mt-2 flex gap-4 pb-8 xs:flex-col md:flex-row lg:justify-start"
      id="cta"
    >
      <Link
        className="rounded-lg border-b-4 border-light-primary-700 bg-light-primary-600 px-6 py-3 text-center font-body text-clamp-button font-medium text-white shadow-sm transition duration-200 ease-in-out hover:bg-light-primary-700 motion-reduce:transition-none 7xl:border-b-[10px] 8xl:border-b-[15px] 8xl:px-12 8xl:py-6 9xl:px-12 dark:border-dark-primary-700 dark:bg-dark-primary-600 dark:hover:bg-dark-primary-700"
        to="/about"
      >
        Read more about me
      </Link>
      <Link
        className="rounded-lg border-b-4 border-light-primary-600 bg-light-primary-500 px-6 py-3 text-center font-body text-clamp-button font-medium text-white shadow-md transition duration-200 ease-in-out hover:bg-light-primary-600 hover:shadow-lg motion-reduce:transition-none 7xl:border-b-[10px] 8xl:border-b-[15px] 8xl:px-12 8xl:py-6 9xl:px-12 dark:border-dark-primary-600 dark:bg-dark-primary-500 dark:hover:bg-dark-primary-600"
        to="/projects"
      >
        View my work
      </Link>
      <Link
        className="rounded-lg border-b-4 border-light-accent-600 bg-light-accent-500 px-6 py-3 text-center font-body text-clamp-button font-medium text-white shadow-sm transition duration-200 ease-in-out hover:bg-light-accent-600 motion-reduce:transition-none 7xl:border-b-[10px] 8xl:border-b-[15px] 8xl:px-12 8xl:py-6 9xl:px-12 dark:border-dark-accent-600 dark:bg-dark-accent-500 dark:hover:bg-dark-accent-600"
        to="/contact"
      >
        Contact me
      </Link>
    </section>
  );
}

export default CTA;
