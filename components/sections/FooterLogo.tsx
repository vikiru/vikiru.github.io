import { Link } from '@tanstack/react-router';

export default function FooterLogo() {
  return (
    <section className="mx-auto w-fit" id="logo">
      <Link className="h-fit w-fit font-body text-xl text-foreground" to="/">
        <h2 className="logo group text-center tracking-widest">
          <span className="text-foreground">Visa</span>
          <span className="text-accent">kan</span>
        </h2>
      </Link>
    </section>
  );
}
