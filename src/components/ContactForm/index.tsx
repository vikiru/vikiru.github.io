import { useContact } from '~hooks/index';

function ContactForm() {
    const { handleSubmit } = useContact();

    return (
        <section className="form-ctr pb-6" id="contact-form">
            <form
                action="https://kwesforms.com/api/f/OcdSwYrzmf5Uw6fLcCC1"
                className="kwes-form"
                method="POST"
                name="contact-form"
                onSubmit={handleSubmit}
            >
                {/* Name Section */}
                <div className="py-2">
                    <label className="form-label" htmlFor="name">
                        Full Name
                    </label>
                    <br />
                    <input
                        className="body-text form-input"
                        data-kw-rules="max:255"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        required
                        type="text"
                    />
                    <br />
                </div>

                {/* Email Section */}
                <div className="py-2">
                    <label className="form-label" htmlFor="email">
                        Email Address
                    </label>
                    <br />
                    <input
                        className="body-text form-input"
                        data-kw-rules="required|email"
                        id="email"
                        name="email"
                        placeholder="Enter email address"
                        required
                        type="email"
                    />
                    <br />
                </div>

                {/* Subject Section */}
                <div className="py-2">
                    <label className="form-label" htmlFor="subject">
                        Subject
                    </label>
                    <br />
                    <input
                        className="body-text form-input"
                        data-kw-rules="required"
                        id="subject"
                        name="subject"
                        placeholder="Enter email subject"
                        required
                        type="text"
                    />
                    <br />
                </div>

                {/* Message Section */}
                <div className="py-2">
                    <label className="form-label" htmlFor="content">
                        Message
                    </label>
                    <br />
                    <textarea
                        className="form-input"
                        cols={50}
                        id="content"
                        name="content"
                        placeholder="Enter message here"
                        required
                        rows={5}
                    />
                </div>

                {/* Form Submit */}
                <button
                    className="form-submit"
                    id="email-kwesform"
                    type="submit"
                >
                    Send Email
                </button>
            </form>
        </section>
    );
}

export default ContactForm;
