import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import kwesforms from 'kwesforms';
import { useEffect } from 'react';
import Footer from '~components/Footer/Footer';
import NavBar from '~components/NavBar/NavBar';

function Contact() {
    useEffect(() => {
        kwesforms.init();
    }, []);

    function handleSubmit() {
        const form = document.forms['contact-form'];
        const name = form['name'].value;
        const email = form['email'].value;
        const subject = form['subject'].value;
        const content = form['content'].value;

        if (name !== '' && email !== '' && subject !== '' && content !== '') {
            confirm('Are you sure you want to send this email?');
        }
    }

    return (
        <div className="flex h-screen w-screen snap-y flex-col overflow-x-hidden overflow-y-scroll scroll-smooth bg-primary scrollbar-thin scrollbar-track-primary scrollbar-thumb-accent lg:scrollbar dark:bg-darkPrimary dark:scrollbar-track-darkPrimary dark:scrollbar-thumb-darkAccent">
            <NavBar />
            <main>
                <section className="pb-6" id="contact">
                    <div className="px-4">
                        <h2 className="heading-text pt-6 uppercase underline dark:text-primary">
                            Contact Me
                        </h2>

                        <div className="py-2">
                            <p className="body-text dark:text-primary">
                                Feel free to send me an email using the contact
                                form below, I will try to respond to you as soon
                                as possible.
                            </p>
                        </div>

                        <div className="py-2">
                            <p className="body-text dark:text-primary">
                                In case, the form below does not work for any
                                reason, please contact me directly via{' '}
                                <a
                                    className="text-accent dark:text-darkAccent"
                                    href="mailto:viskirubakaran@outlook.com"
                                    id="email-direct"
                                    target="_top"
                                    title="Email me directly via your email"
                                >
                                    <span className="underline">email</span>{' '}
                                    <FontAwesomeIcon
                                        className="body-text"
                                        icon={faArrowUpRightFromSquare}
                                    />
                                </a>
                                .
                            </p>
                        </div>

                        <section className="pb-6" id="contact-form">
                            <form
                                action="https://kwesforms.com/api/foreign/forms/OcdSwYrzmf5Uw6fLcCC1"
                                className="kwes-form"
                                name="contact-form"
                                onSubmit={handleSubmit}
                            >
                                <div className="py-2">
                                    <label
                                        className="subheading-text dark:text-primary"
                                        htmlFor="name"
                                    >
                                        Full Name
                                    </label>
                                    <br />
                                    <input
                                        className="body-text w-full border-4 border-secondary text-secondary hover:border-accent dark:bg-darkSecondary dark:text-primary dark:hover:border-darkAccent"
                                        data-kw-rules="max:255"
                                        id="name"
                                        name="name"
                                        placeholder="Enter full name"
                                        required
                                        title="Please enter your full name"
                                        type="text"
                                    />
                                    <br />
                                </div>

                                <div className="py-2">
                                    <label
                                        className="subheading-text dark:text-primary"
                                        htmlFor="email"
                                    >
                                        Email Address
                                    </label>
                                    <br />
                                    <input
                                        className="body-text w-full border-4 border-secondary hover:border-accent dark:bg-darkSecondary  dark:text-primary dark:hover:border-darkAccent"
                                        data-kw-rules="required|email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter email address"
                                        required
                                        title="Please enter your email address"
                                        type="email"
                                    />
                                    <br />
                                </div>

                                <div className="py-2">
                                    <label
                                        className="subheading-text dark:text-primary"
                                        htmlFor="subject"
                                    >
                                        Subject
                                    </label>
                                    <br />
                                    <input
                                        className="body-text w-full border-4 border-secondary hover:border-accent dark:bg-darkSecondary  dark:text-primary dark:hover:border-darkAccent"
                                        data-kw-rules="required"
                                        id="subject"
                                        name="subject"
                                        placeholder="Enter email subject"
                                        required
                                        title="Please enter the reason for your email"
                                        type="text"
                                    />
                                    <br />
                                </div>

                                <div className="py-2">
                                    <label
                                        className="subheading-text dark:text-primary"
                                        htmlFor="content"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        className="body-text w-full border-4 border-secondary hover:border-accent dark:bg-darkSecondary dark:text-primary dark:hover:border-darkAccent"
                                        cols="50"
                                        id="content"
                                        name="content"
                                        placeholder="Enter message here"
                                        required
                                        rows="5"
                                    ></textarea>
                                </div>

                                <button
                                    className="cta-btn body-text py-2 uppercase tracking-widest xxs:w-full dark:text-primary"
                                    id="email-kwesform"
                                    title="Send me an email through Kwes Forms"
                                    type="submit"
                                >
                                    Send Email
                                </button>
                            </form>
                        </section>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Contact;
