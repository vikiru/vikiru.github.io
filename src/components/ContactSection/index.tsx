import ContactForm from '~components/ContactForm';

function ContactSection() {
    return (
        <section className="bg-background-950 pb-8" id="contact-me">
            <div className="xs:py-6 lg:py-12">
                {/* Contact Section */}
                <h2 className="h2-text text-center text-light-text-900 dark:text-dark-text-800">
                    Contact Me
                </h2>
                <div className="form-ctr">
                    <p className="body-text text-light-text-600 dark:text-dark-text-700">
                        Feel free to send me an email using the contact form
                        below, I will try to respond to you as soon as possible.
                        In case, the form below does not work for any reason,
                        please contact me directly via{' '}
                        <a
                            className="font-semibold text-light-accent-500 underline dark:text-dark-accent-500"
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

export default ContactSection;
