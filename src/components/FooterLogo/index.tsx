import { Link } from 'react-router-dom';

function FooterLogo() {
  return (
    <section className="mx-auto w-fit" id="logo">
      <Link className="h-fit w-fit font-body text-clamp-nav" to="/">
        <h2 className="logo group text-center tracking-widest">
          <span className="logo-text">Visa</span>
          <span className="logo-accent">kan</span>
        </h2>
      </Link>
    </section>
  );
}

export default FooterLogo;
