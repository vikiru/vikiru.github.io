import { Link } from '@tanstack/react-router';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { Logo } from '@/components/ui/Logo';
import { navData } from '@/data/nav';
import { useNav } from '@/hooks/useNav';
import type { NavigationItem } from '@/types/NavigationItem';

function NavLink({ item }: { item: NavigationItem }) {
  return (
    <Link
      className="font-heading text-foreground transition-colors hover:text-primary hover:underline motion-reduce:transition-none text-nav-lg"
      hash={item.navHash}
      to={item.navLink}
    >
      {item.navTitle}
    </Link>
  );
}

function MobileNavLink({ item }: { item: NavigationItem }) {
  return (
    <Link
      className="w-full px-6 py-3 text-center text-muted-foreground transition-colors hover:text-primary hover:bg-muted/50 motion-reduce:transition-none text-nav-lg"
      hash={item.navHash}
      to={item.navLink}
    >
      {item.navTitle}
    </Link>
  );
}

export function NavBar() {
  const { isOpen, handleClick } = useNav();

  return (
    <nav className="bg-background sticky top-0 z-50 border-b border-border">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-3 rounded"
        href="#main-content"
      >
        Skip to main content
      </a>
      <section
        className="flex items-center justify-between px-6 py-3 md:px-10"
        id="main-nav"
      >
        <Logo />

        <div className="hidden lg:flex gap-6 items-center">
          {navData.map((item) => (
            <NavLink item={item} key={item.navTitle} />
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={handleClick}
            type="button"
          >
            {isOpen ? (
              <FaXmark aria-hidden="true" className="size-icon-base" />
            ) : (
              <FaBars aria-hidden="true" className="size-icon-base" />
            )}
          </button>
        </div>
      </section>

      <section
        className={`fixed right-0 top-0 h-full w-[65%] sm:w-1/2 bg-background/95 backdrop-blur-sm border-l border-border transition-all duration-500 ease-in-out motion-reduce:transition-none lg:hidden z-50 ${
          isOpen
            ? 'translate-x-0 motion-reduce:transition-none'
            : 'translate-x-full motion-reduce:transition-none'
        }`}
        id="mobile-nav"
      >
        <div className="flex flex-col items-center justify-center h-full">
          <button
            aria-label="Close menu"
            className="absolute top-4 right-5 p-3"
            onClick={handleClick}
            type="button"
          >
            <FaXmark aria-hidden="true" className="size-icon-base" />
          </button>

          <div className="-mt-24 flex flex-col items-center gap-2 w-full">
            {navData.map((item) => (
              <MobileNavLink item={item} key={item.navTitle} />
            ))}
          </div>
        </div>
      </section>
    </nav>
  );
}
