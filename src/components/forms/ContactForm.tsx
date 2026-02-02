import { useContact } from '@/hooks/useContact';
import { Button } from '@/lib/components/ui/button';
import { Field, FieldError, FieldLabel } from '@/lib/components/ui/field';
import { Input } from '@/lib/components/ui/input';
import { Textarea } from '@/lib/components/ui/textarea';
import { cn } from '@/lib/utils';

type FormField = 'name' | 'email' | 'subject' | 'content';

export function ContactForm({ className }: { className?: string }) {
  const { formData, errors, handleSubmit, handleInputChange, handleBlur } =
    useContact();

  return (
    <form
      action="https://kwesforms.com/api/f/OcdSwYrzmf5Uw6fLcCC1"
      className={cn('space-y-5', className)}
      method="POST"
      name="contact-form"
      onSubmit={handleSubmit}
    >
      <Field data-invalid={!!errors.name}>
        <FieldLabel
          className="body-base font-semibold text-muted-foreground uppercase tracking-wider"
          htmlFor="name"
        >
          Name
        </FieldLabel>
        <Input
          aria-describedby={errors.name ? 'name-error' : undefined}
          aria-invalid={!!errors.name}
          className="bg-background/50 border-white/10"
          id="name"
          name="name"
          onBlur={handleBlur}
          onChange={handleInputChange}
          placeholder="Enter your full name"
          required
          value={formData.name}
        />
        <FieldError errors={[{ message: errors.name }]} id="name-error" />
      </Field>

      <Field data-invalid={!!errors.email}>
        <FieldLabel
          className="body-base font-semibold text-muted-foreground uppercase tracking-wider"
          htmlFor="email"
        >
          Email
        </FieldLabel>
        <Input
          aria-describedby={errors.email ? 'email-error' : undefined}
          aria-invalid={!!errors.email}
          className="bg-background/50 border-white/10"
          id="email"
          name="email"
          onBlur={handleBlur}
          onChange={handleInputChange}
          placeholder="Enter email address"
          required
          type="email"
          value={formData.email}
        />
        <FieldError errors={[{ message: errors.email }]} id="email-error" />
      </Field>

      <Field data-invalid={!!errors.subject}>
        <FieldLabel
          className="body-base font-semibold text-muted-foreground uppercase tracking-wider"
          htmlFor="subject"
        >
          Subject
        </FieldLabel>
        <Input
          aria-describedby={errors.subject ? 'subject-error' : undefined}
          aria-invalid={!!errors.subject}
          className="bg-background/50 border-white/10"
          id="subject"
          name="subject"
          onBlur={handleBlur}
          onChange={handleInputChange}
          placeholder="Enter email subject"
          required
          value={formData.subject}
        />
        <FieldError errors={[{ message: errors.subject }]} id="subject-error" />
      </Field>

      <Field data-invalid={!!errors.content}>
        <FieldLabel
          className="body-base font-semibold text-muted-foreground uppercase tracking-wider"
          htmlFor="content"
        >
          Message
        </FieldLabel>
        <Textarea
          aria-describedby={errors.content ? 'content-error' : undefined}
          aria-invalid={!!errors.content}
          className="bg-background/50 border-white/10 resize-none h-33"
          cols={50}
          id="content"
          name="content"
          onBlur={handleBlur}
          onChange={handleInputChange}
          placeholder="Enter your message here"
          required
          rows={5}
          value={formData.content}
        />
        <FieldError errors={[{ message: errors.content }]} id="content-error" />
      </Field>

      <Button className="w-full" type="submit">
        Send Message
      </Button>
    </form>
  );
}
