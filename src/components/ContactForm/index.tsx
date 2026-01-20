import useContact from '@/hooks/useContact';

function ContactForm() {
  const { formData, errors, handleSubmit, handleInputChange } = useContact();

  return (
    <section className="form-ctr pb-6" id="contact-form">
      <form
        action="https://kwesforms.com/api/f/OcdSwYrzmf5Uw6fLcCC1"
        className="kf-form"
        method="POST"
        name="contact-form"
        onSubmit={handleSubmit}
      >
        {/* Name Section */}
        <div className="xs:py-0 lg:py-2 4xl:py-4 8xl:py-6 11xl:py-8">
          <label className="form-label" htmlFor="name">
            Full Name
          </label>
          <br />
          <input
            className="body-text form-input"
            data-kw-rules="max:255"
            id="name"
            name="name"
            onChange={handleInputChange}
            placeholder="Enter your full name"
            required
            type="text"
            value={formData.name}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
          <br />
        </div>

        {/* Email Section */}
        <div className="xs:py-0 lg:py-2 4xl:py-4 8xl:py-6 11xl:py-8">
          <label className="form-label" htmlFor="email">
            Email Address
          </label>
          <br />
          <input
            className="body-text form-input"
            data-kw-rules="required|email"
            id="email"
            name="email"
            onChange={handleInputChange}
            placeholder="Enter email address"
            required
            type="email"
            value={formData.email}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
          <br />
        </div>

        {/* Subject Section */}
        <div className="xs:py-0 lg:py-2 4xl:py-4 8xl:py-6 11xl:py-8">
          <label className="form-label" htmlFor="subject">
            Subject
          </label>
          <br />
          <input
            className="body-text form-input"
            data-kw-rules="required"
            id="subject"
            name="subject"
            onChange={handleInputChange}
            placeholder="Enter email subject"
            required
            type="text"
            value={formData.subject}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
          )}
          <br />
        </div>

        {/* Message Section */}
        <div className="xs:py-0 lg:py-2 4xl:py-4 8xl:py-6 11xl:py-8">
          <label className="form-label" htmlFor="content">
            Message
          </label>
          <br className="mb-20" />
          <textarea
            className="form-input"
            cols={50}
            data-kw-rules="required"
            id="content"
            name="content"
            onChange={handleInputChange}
            placeholder="Enter your message here"
            required
            rows={5}
            value={formData.content}
          />
          {errors.content && (
            <p className="text-red-500 text-sm mt-1">{errors.content}</p>
          )}
          <br />
        </div>

        {/* Form Submit */}
        <button className="form-submit" id="email-kwesform" type="submit">
          Send Email
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
