import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./../../components/Footer/Footer";
import NavBar from "./../../components/NavBar/NavBar";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import kwesforms from "kwesforms";

function Contact() {
  useEffect(() => {
    kwesforms.init();
  }, []);

  function handleSubmit() {
    const form = document.forms["contact-form"];
    const name = form["name"].value;
    const email = form["email"].value;
    const subject = form["subject"].value;
    const content = form["content"].value;

    if (name !== "" && email !== "" && subject !== "" && content !== "") {
      confirm("Are you sure you want to send this email?");
    }
  }

  return (
    <div className="flex h-screen w-screen snap-y flex-col overflow-x-hidden overflow-y-scroll scroll-smooth bg-primary scrollbar-thin scrollbar-track-primary scrollbar-thumb-accent lg:scrollbar dark:bg-darkPrimary dark:scrollbar-track-darkPrimary dark:scrollbar-thumb-darkAccent">
      <NavBar />
      <main>
        <section id="contact" className="pb-6">
          <div className="px-4">
            <h2 className="heading-text pt-6 uppercase underline dark:text-primary">
              Contact Me
            </h2>

            <div className="py-2">
              <p className="body-text dark:text-primary">
                Feel free to send me an email using the contact form below, I
                will try to respond to you as soon as possible.
              </p>
            </div>

            <div className="py-2">
              <p className="body-text dark:text-primary">
                In case, the form below does not work for any reason, please
                contact me directly via{" "}
                <a
                  href="mailto:viskirubakaran@outlook.com"
                  target="_top"
                  id="email-direct"
                  title="Email me directly via your email"
                  className="text-accent dark:text-darkAccent"
                >
                  <span className="underline">email</span>{" "}
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="body-text"
                  />
                </a>
                .
              </p>
            </div>

            <section id="contact-form" className="pb-6">
              <form
                name="contact-form"
                className="kwes-form"
                action="https://kwesforms.com/api/foreign/forms/OcdSwYrzmf5Uw6fLcCC1"
                onSubmit={handleSubmit}
              >
                <div className="py-2">
                  <label
                    htmlFor="name"
                    className="subheading-text dark:text-primary"
                  >
                    Full Name
                  </label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="body-text w-full border-4 border-secondary text-secondary hover:border-accent dark:bg-darkSecondary dark:text-primary dark:hover:border-darkAccent"
                    placeholder="Enter full name"
                    title="Please enter your full name"
                    data-kw-rules="max:255"
                  />
                  <br />
                </div>

                <div className="py-2">
                  <label
                    htmlFor="email"
                    className="subheading-text dark:text-primary"
                  >
                    Email Address
                  </label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="body-text w-full border-4 border-secondary hover:border-accent dark:bg-darkSecondary  dark:text-primary dark:hover:border-darkAccent"
                    data-kw-rules="required|email"
                    placeholder="Enter email address"
                    title="Please enter your email address"
                  />
                  <br />
                </div>

                <div className="py-2">
                  <label
                    htmlFor="subject"
                    className="subheading-text dark:text-primary"
                  >
                    Subject
                  </label>
                  <br />
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="body-text w-full border-4 border-secondary hover:border-accent dark:bg-darkSecondary  dark:text-primary dark:hover:border-darkAccent"
                    required
                    data-kw-rules="required"
                    placeholder="Enter email subject"
                    title="Please enter the reason for your email"
                  />
                  <br />
                </div>

                <div className="py-2">
                  <label
                    htmlFor="content"
                    className="subheading-text dark:text-primary"
                  >
                    Message
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    className="body-text w-full border-4 border-secondary hover:border-accent dark:bg-darkSecondary dark:text-primary dark:hover:border-darkAccent"
                    rows="5"
                    cols="50"
                    placeholder="Enter message here"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  id="email-kwesform"
                  className="cta-btn body-text py-2 uppercase tracking-widest xxs:w-full dark:text-primary"
                  title="Send me an email through Kwes Forms"
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
