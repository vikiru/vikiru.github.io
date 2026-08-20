import { Link } from "@tanstack/react-router";
import { FaBars, FaXmark } from "react-icons/fa6";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Logo } from "@/components/ui/Logo";
import { navData } from "@/data/nav";
import { useNav } from "@/hooks/useNav";
import type { NavigationItem } from "@/types/NavigationItem";

function NavLink({ item }: { item: NavigationItem }) {
  return (
    <Link
      className="font-heading text-nav-lg text-foreground transition-colors hover:text-primary hover:underline motion-reduce:transition-none"
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
      className="w-full px-6 py-3 text-center text-nav-lg text-muted-foreground transition-colors hover:bg-muted/50 hover:text-primary motion-reduce:transition-none"
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
    <nav className="sticky top-0 z-50 border-b border-border bg-background">
      <a
        className="sr-only rounded bg-primary px-4 py-3 text-primary-foreground focus:not-sr-only focus:top-4 focus:left-4"
        href="#main-content"
      >
        Skip to main content
      </a>
      <section className="flex items-center justify-between px-6 py-3 md:px-10" id="main-nav">
        <Logo />

        <div className="hidden items-center gap-6 lg:flex">
          {navData.map((item) => (
            <NavLink item={item} key={item.navTitle} />
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
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
        className={`fixed top-0 right-0 z-50 h-full w-[65%] border-l border-border bg-background/95 backdrop-blur-sm transition-all duration-500 ease-in-out motion-reduce:transition-none sm:w-1/2 lg:hidden ${
          isOpen
            ? "translate-x-0 motion-reduce:transition-none"
            : "translate-x-full motion-reduce:transition-none"
        }`}
        id="mobile-nav"
      >
        <div className="flex h-full flex-col items-center justify-center">
          <button
            aria-label="Close menu"
            className="absolute top-4 right-5 p-3"
            onClick={handleClick}
            type="button"
          >
            <FaXmark aria-hidden="true" className="size-icon-base" />
          </button>

          <div className="-mt-24 flex w-full flex-col items-center gap-2">
            {navData.map((item) => (
              <MobileNavLink item={item} key={item.navTitle} />
            ))}
          </div>
        </div>
      </section>
    </nav>
  );
}
