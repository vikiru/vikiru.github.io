import { ContactForm, Footer, NavBar } from '~components/index';

function Contact() {
    return (
        <div className="">
            <NavBar />
            <main>
                <section className="min-h-screen bg-gray-50">
                    <div className="py-12">
                        <h2 className="h2-text text-center">Contact Me</h2>
                        <div className="mx-auto max-w-sm lg:max-w-2xl">
                            <p className="body-text">
                                Feel free to send me an email using the contact
                                form below, I will try to respond to you as soon
                                as possible. In case, the form below does not
                                work for any reason, please contact me directly
                                via{' '}
                                <a
                                    className="font-semibold text-accent-500 underline"
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
