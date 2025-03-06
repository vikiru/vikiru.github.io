import kwesforms from 'kwesforms';
import { useEffect } from 'react';

function useContact() {
    useEffect(() => {
        kwesforms.init();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = document.forms['contact-form'];
        const name = form['name']?.value;
        const email = form['email']?.value;
        const subject = form['subject']?.value;
        const content = form['content']?.value;

        if (name !== '' && email !== '' && subject !== '' && content !== '') {
            // eslint-disable-next-line no-restricted-globals
            confirm('Are you sure you want to send this email?');
        }
    };

    return {
        handleSubmit,
    };
}

export default useContact;
