import Footer from "./../../components/Footer/Footer";
import NavBar from "./../../components/NavBar/NavBar";
import React from "react";

function Contact() {
  return (
    <div className="flex h-screen w-screen snap-y flex-col overflow-x-hidden overflow-y-scroll scroll-smooth bg-primary scrollbar-thin scrollbar-track-primary scrollbar-thumb-accent lg:scrollbar dark:bg-darkPrimary dark:scrollbar-track-darkPrimary dark:scrollbar-thumb-darkAccent">
      <NavBar />
      <main>
        <section id="contact" className="min-h-screen">
          <div className="px-4">
            <h2 className="heading-text pt-2 uppercase underline dark:text-primary">
              Contact Me
            </h2>

            <div className="py-2">
              <p className="body-text">
                Feel free to send me an email using the contact form below, I
                will try to respond to you as soon as possible.
              </p>
            </div>

            <section id="contact-form" className="pb-6">
              <form>
                <div className="py-2">
                  <label htmlFor="name" className="subheading-text">
                    Full Name
                  </label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    className="body-text w-full border-4 border-secondary hover:border-accent dark:hover:border-darkAccent"
                    required
                    placeholder="Please enter your full name"
                    title="Please enter your full name"
                  />
                  <br />
                </div>

                <div className="py-2">
                  <label htmlFor="email" className="subheading-text">
                    Email Address
                  </label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    className="body-text w-full border-4 border-secondary hover:border-accent  dark:hover:border-darkAccent"
                    required
                    placeholder="Please enter your email address"
                    title="Please enter your email address"
                  />
                  <br />
                </div>

                <div className="py-2">
                  <label htmlFor="content" className="subheading-text">
                    Message
                  </label>
                  <textarea
                    id="content"
                    className="body-text w-full border-4 border-secondary hover:border-accent dark:hover:border-darkAccent"
                    rows="5"
                    cols="50"
                    placeholder="Please enter your message here"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="cta-btn py-2 uppercase tracking-widest"
                >
                  Send
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
