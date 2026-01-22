import { Link } from '@tanstack/react-router';

function NavLogo() {
  return (
    <section className="flex items-center justify-center 11xl:mx-10" id="logo">
      <Link className="text-foreground" to="/">
        <h2 className="font-logo text-3xl md:text-4xl tracking-widest uppercase">
          <span className="text-foreground">V</span>
          <span className="text-primary">K</span>
        </h2>
      </Link>
    </section>
  );
}

export default NavLogo;
