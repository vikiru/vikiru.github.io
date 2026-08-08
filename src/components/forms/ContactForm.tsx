import { useContact } from '@/hooks/useContact';
import { Button } from '@/lib/components/ui/button';
import { Field, FieldError, FieldLabel } from '@/lib/components/ui/field';
import { Input } from '@/lib/components/ui/input';
import { Textarea } from '@/lib/components/ui/textarea';
import { cn } from '@/lib/utils';

type FormField = 'name' | 'email' | 'subject' | 'content';

export function ContactForm({ className }: { className?: string }) {
  const {
    formData,
    errors,
    status,
    errorMessage,
    handleSubmit,
    handleInputChange,
    handleBlur,
  } = useContact();

  return (
    <form
      action="https://kwesforms.com/api/f/OcdSwYrzmf5Uw6fLcCC1"
      className={cn('space-y-5', className)}
      method="POST"
      name="contact-form"
      onSubmit={handleSubmit}
    >
      <Field data-invalid={!!errors.name}>
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <Input
          aria-describedby={errors.name ? 'name-error' : undefined}
          aria-invalid={!!errors.name}
          id="name"
          name="name"
          onBlur={handleBlur}
          onChange={handleInputChange}
          placeholder="Your name"
          value={formData.name}
        />
        <FieldError errors={[{ message: errors.name }]} id="name-error" />
      </Field>

      <Field data-invalid={!!errors.email}>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input
          aria-describedby={errors.email ? 'email-error' : undefined}
          aria-invalid={!!errors.email}
          id="email"
          name="email"
          onBlur={handleBlur}
          onChange={handleInputChange}
          placeholder="your@email.com"
          type="email"
          value={formData.email}
        />
        <FieldError errors={[{ message: errors.email }]} id="email-error" />
      </Field>

      <Field data-invalid={!!errors.subject}>
        <FieldLabel htmlFor="subject">Subject</FieldLabel>
        <Input
          aria-describedby={errors.subject ? 'subject-error' : undefined}
          aria-invalid={!!errors.subject}
          id="subject"
          name="subject"
          onBlur={handleBlur}
          onChange={handleInputChange}
          placeholder="What is this about?"
          value={formData.subject}
        />
        <FieldError errors={[{ message: errors.subject }]} id="subject-error" />
      </Field>

      <Field data-invalid={!!errors.content}>
        <FieldLabel htmlFor="content">Message</FieldLabel>
        <Textarea
          aria-describedby={errors.content ? 'content-error' : undefined}
          aria-invalid={!!errors.content}
          id="content"
          name="content"
          onBlur={handleBlur}
          onChange={handleInputChange}
          placeholder="Your message…"
          rows={5}
          value={formData.content}
        />
        <FieldError errors={[{ message: errors.content }]} id="content-error" />
      </Field>

      {status === 'success' && (
        <div
          className="p-3 text-green-700 bg-green-50 border border-green-200 rounded-lg text-sm"
          role="status"
        >
          Message sent successfully!
        </div>
      )}

      {status === 'error' && (
        <div
          className="p-3 text-red-700 bg-red-50 border border-red-200 rounded-lg text-sm"
          role="alert"
        >
          {errorMessage}
        </div>
      )}

      <Button className="w-full" disabled={status === 'pending'} type="submit">
        {status === 'pending' ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  );
}
