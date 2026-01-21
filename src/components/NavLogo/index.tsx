import { Link } from '@tanstack/react-router';

function NavLogo() {
  return (
    <section className="flex items-center justify-center 11xl:mx-10" id="logo">
      <Link className="text-foreground" to="/">
        <h2>
          <span className="text-foreground">V</span>
          <span className="text-accent">K</span>
        </h2>
      </Link>
    </section>
  );
}

export default NavLogo;
