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
            // confirm('Are you sure you want to send this email?');
        }
    }

    return (
        <div className="">
            <NavBar />
            <main>
                <section>
                    <div>
                        <h2
                            className="text-center font-heading font-semibold text-gray-800"
                            style={{ fontSize: 'clamp(2rem, 2vw, 9rem)' }}
                        >
                            Contact Me
                        </h2>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Contact;
