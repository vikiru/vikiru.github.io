import kwesforms from 'kwesforms';
import { useEffect } from 'react';

function useContact() {
    useEffect(() => {
        kwesforms.init();
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const name = form['name'];
        const email = form['email'];
        const subject = form['subject'];
        const content = form['content'];

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
