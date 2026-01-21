import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section
      className="bg-secondary/50 pb-8 7xl:py-12 11xl:py-16"
      id="contact-me"
    >
      <div className="xs:py-6 lg:py-12">
        <h2 className="text-2xl font-bold tracking-tight text-center text-foreground sm:text-3xl lg:text-4xl">
          Contact Me
        </h2>

        <div className="mx-auto max-w-2xl xs:mt-0 lg:mt-2 2xl:mt-4 7xl:mt-6 11xl:mt-8">
          <p className="text-muted-foreground">
            Feel free to send me an email using the contact form below, I will
            try to respond to you as soon as possible. In case, the form below
            does not work for any reason, please contact me directly via{' '}
            <a
              className="font-semibold text-accent underline"
              href="mailto:viskirubakaran@outlook.com"
            >
              email
            </a>
            .
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
