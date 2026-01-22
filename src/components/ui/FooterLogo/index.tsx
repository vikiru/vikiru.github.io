import { Link } from '@tanstack/react-router';

function FooterLogo() {
  return (
    <div
      className="flex items-center justify-center md:justify-start"
      id="logo"
    >
      <Link className="text-foreground" to="/">
        <h2 className="font-logo text-3xl tracking-widest uppercase">
          <span className="text-foreground">Visa</span>
          <span className="text-primary">kan</span>
        </h2>
      </Link>
    </div>
  );
}

export default FooterLogo;
