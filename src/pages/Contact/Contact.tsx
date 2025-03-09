import { ContactForm, Footer, NavBar } from '~components/index';

function Contact() {
    return (
        <div className="scroller">
            <NavBar />
            <main>
                <section className="bg-background-950 pb-8">
                    <div className="xs:py-6 lg:py-12">
                        <h2 className="h2-text text-center">Contact Me</h2>
                        <div className="xs:mx-auto xs:max-w-sm md:max-w-[30rem] lg:max-w-2xl 2xl:max-w-[50rem] 3xl:max-w-[60rem] 6xl:max-w-[80rem] 7xl:max-w-[104rem]">
                            <p className="body-text text-text-600">
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
