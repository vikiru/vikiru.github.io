import { useContact } from '~hooks/index';

function ContactForm() {
    const { handleSubmit } = useContact();

    return (
        <section
            className="m-2 pb-6 md:mx-auto md:max-w-[30rem] lg:max-w-2xl 2xl:max-w-[50rem] 3xl:max-w-[60rem] 6xl:max-w-[80rem] 7xl:max-w-[104rem]"
            id="contact-form"
        >
            <form
                action="https://kwesforms.com/api/f/OcdSwYrzmf5Uw6fLcCC1"
                className="kwes-form"
                method="POST"
                name="contact-form"
                onSubmit={handleSubmit}
            >
                <div className="py-2">
                    <label
                        className="h5-text font-subheading font-medium"
                        htmlFor="name"
                    >
                        Full Name
                    </label>
                    <br />
                    <input
                        className="body-text focus:border-accent focus:ring-accent w-full rounded-lg border-2 border-gray-300 px-4 py-2 text-text-600 transition duration-200 focus:outline-none focus:ring-2"
                        data-kw-rules="max:255"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        required
                        title="Please enter your full name"
                        type="text"
                    />
                    <br />
                </div>

                <div className="py-2">
                    <label
                        className="h5-text font-subheading font-medium"
                        htmlFor="email"
                    >
                        Email Address
                    </label>
                    <br />
                    <input
                        className="body-text focus:border-accent focus:ring-accent w-full rounded-lg border-2 border-gray-300 px-4 py-2 text-text-600 transition duration-200 focus:outline-none focus:ring-2"
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
                        className="h5-text font-subheading font-medium"
                        htmlFor="subject"
                    >
                        Subject
                    </label>
                    <br />
                    <input
                        className="body-text focus:border-accent focus:ring-accent w-full rounded-lg border-2 border-gray-300 px-4 py-2 text-text-600 transition duration-200 focus:outline-none focus:ring-2"
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
                        className="h5-text font-subheading font-medium"
                        htmlFor="content"
                    >
                        Message
                    </label>
                    <br />
                    <textarea
                        className="body-text focus:border-accent focus:ring-accent w-full resize-none rounded-lg border-2 border-gray-300 px-4 py-2 text-text-600 transition duration-200 focus:outline-none focus:ring-2"
                        cols={50}
                        id="content"
                        name="content"
                        placeholder="Enter message here"
                        required
                        rows={5}
                    />
                </div>

                <button
                    className="rounded-lg border-b-4 border-accent-600 bg-accent-500 px-6 py-3 text-center font-body text-clamp-button font-medium text-white shadow-sm transition duration-200 ease-in-out hover:bg-accent-600 xs:w-full 7xl:border-b-[10px] 8xl:border-b-[15px] 8xl:px-12 8xl:py-6 9xl:px-12"
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
