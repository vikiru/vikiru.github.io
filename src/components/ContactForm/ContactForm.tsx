import kwesforms from 'kwesforms';
import { useEffect } from 'react';

function ContactForm() {
    useEffect(() => {
        kwesforms.init();
    }, []);

    function handleSubmit(event) {
        event.preventDefault();

        // Get the form and its fields
        const form = document.forms['contact-form'];
        const name = form['name']?.value;
        const email = form['email']?.value;
        const subject = form['subject']?.value;
        const content = form['content']?.value;

        console.log(form);
        console.log(name);
        console.log(email);
        console.log(subject);
        console.log(content);

        if (name != '' && email != '' && subject != '' && content != '') {
            // confirm('Are you sure you want to send this email?');
        }
    }

    return (
        <section className="m-2 pb-6 lg:mx-auto lg:max-w-2xl" id="contact-form">
            <form
                action="https://kwesforms.com/api/f/OcdSwYrzmf5Uw6fLcCC1"
                className="kwes-form"
                method="POST"
                name="contact-form"
                onSubmit={handleSubmit}
            >
                <div className="py-2">
                    <label
                        className="font-subheading font-medium"
                        htmlFor="name"
                        style={{
                            fontSize: 'clamp(0.65rem, 1.12vw, 4rem)',
                        }}
                    >
                        Full Name
                    </label>
                    <br />
                    <input
                        className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 transition duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                        data-kw-rules="max:255"
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        required
                        title="Please enter your full name"
                        type="text"
                    />
                    <br />
                </div>

                <div className="py-2">
                    <label
                        className="font-subheading font-medium"
                        htmlFor="email"
                        style={{
                            fontSize: 'clamp(0.65rem, 1.12vw, 4rem)',
                        }}
                    >
                        Email Address
                    </label>
                    <br />
                    <input
                        className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 transition duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
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
                        className="font-subheading font-medium"
                        htmlFor="subject"
                        style={{
                            fontSize: 'clamp(0.65rem, 1.12vw, 4rem)',
                        }}
                    >
                        Subject
                    </label>
                    <br />
                    <input
                        className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 transition duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
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
                        className="font-subheading font-medium"
                        htmlFor="content"
                        style={{
                            fontSize: 'clamp(0.65rem, 1.12vw, 4rem)',
                        }}
                    >
                        Message
                    </label>
                    <br />
                    <textarea
                        className="w-full resize-none rounded-lg border-2 border-gray-300 px-4 py-2 transition duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                        cols={50}
                        id="content"
                        name="content"
                        placeholder="Enter message here"
                        required
                        rows={5}
                    />
                </div>

                <button
                    className="w-full rounded-lg bg-accent py-3 text-lg font-semibold text-white transition duration-300 hover:bg-accent/80 focus:ring-2 focus:ring-accent"
                    id="email-kwesform"
                    title="Send me an email through Kwes Forms"
                    type="submit"
                >
                    Send Email
                </button>
            </form>
        </section>
    );
}

export default ContactForm;
