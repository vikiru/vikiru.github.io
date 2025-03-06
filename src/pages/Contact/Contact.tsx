import ContactForm from '~components/ContactForm/ContactForm';
import Footer from '~components/Footer/Footer';
import NavBar from '~components/NavBar/NavBar';

function Contact() {
    return (
        <div className="">
            <NavBar />
            <main>
                <section className="min-h-screen bg-gray-50">
                    <div className="pt-12">
                        <h2
                            className="text-center font-heading font-semibold text-gray-800"
                            style={{ fontSize: 'clamp(2rem, 2vw, 9rem)' }}
                        >
                            Contact Me
                        </h2>
                        <div className="mx-auto max-w-sm lg:max-w-2xl">
                            <p
                                className="font-body leading-relaxed text-gray-600"
                                style={{
                                    fontSize: 'clamp(0.8rem, 1.25vw, 8rem)',
                                }}
                            >
                                Feel free to send me an email using the contact
                                form below, I will try to respond to you as soon
                                as possible. In case, the form below does not
                                work for any reason, please contact me directly
                                via{' '}
                                <a
                                    className="font-semibold underline"
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
            </main>
            <Footer />
        </div>
    );
}

export default Contact;
