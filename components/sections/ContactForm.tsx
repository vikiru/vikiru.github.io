import { Button } from '@/lib/components/ui/button';
import {
  Field,
  FieldError,
  FieldLabel,
} from '@/lib/components/ui/field';
import { Input } from '@/lib/components/ui/input';
import { Textarea } from '@/lib/components/ui/textarea';
import useContact from '@/hooks/useContact';

export default function ContactForm() {
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
        <Field>
          <FieldLabel htmlFor="name">Full Name</FieldLabel>
          <Input
            id="name"
            name="name"
            onChange={handleInputChange}
            placeholder="Enter your full name"
            required
            value={formData.name}
          />
          <FieldError errors={[{ message: errors.name }]} />
        </Field>

        <Field>
          <FieldLabel htmlFor="email">Email Address</FieldLabel>
          <Input
            id="email"
            name="email"
            onChange={handleInputChange}
            placeholder="Enter email address"
            required
            type="email"
            value={formData.email}
          />
          <FieldError errors={[{ message: errors.email }]} />
        </Field>

        <Field>
          <FieldLabel htmlFor="subject">Subject</FieldLabel>
          <Input
            id="subject"
            name="subject"
            onChange={handleInputChange}
            placeholder="Enter email subject"
            required
            value={formData.subject}
          />
          <FieldError errors={[{ message: errors.subject }]} />
        </Field>

        <Field>
          <FieldLabel htmlFor="content">Message</FieldLabel>
          <Textarea
            id="content"
            name="content"
            onChange={handleInputChange}
            placeholder="Enter your message here"
            required
            rows={5}
            value={formData.content}
          />
          <FieldError errors={[{ message: errors.content }]} />
        </Field>

        <Button className="form-submit" id="email-kwesform" type="submit">
          Send Email
        </Button>
      </form>
    </section>
  );
}
