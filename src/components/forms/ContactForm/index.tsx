import useContact from '@/hooks/useContact';
import { Button } from '@/lib/components/ui/button';
import { Field, FieldError, FieldLabel } from '@/lib/components/ui/field';
import { Input } from '@/lib/components/ui/input';
import { Textarea } from '@/lib/components/ui/textarea';
import { cn } from '@/lib/utils';

type FormField = 'name' | 'email' | 'subject' | 'content';

function ContactForm({ className }: { className?: string }) {
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
      <Field>
        <FieldLabel
          className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
          htmlFor="name"
        >
          Name
        </FieldLabel>
        <Input
          className="bg-background/50 border-white/10"
          id="name"
          name="name"
          onBlur={handleBlur}
          onChange={handleInputChange}
          placeholder="Enter your full name"
          value={formData.name}
        />
        <FieldError errors={[{ message: errors.name }]} />
      </Field>

      <Field>
        <FieldLabel
          className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
          htmlFor="email"
        >
          Email
        </FieldLabel>
        <Input
          className="bg-background/50 border-white/10"
          id="email"
          name="email"
          onBlur={handleBlur}
          onChange={handleInputChange}
          placeholder="Enter email address"
          type="email"
          value={formData.email}
        />
        <FieldError errors={[{ message: errors.email }]} />
      </Field>

      <Field>
        <FieldLabel
          className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
          htmlFor="subject"
        >
          Subject
        </FieldLabel>
        <Input
          className="bg-background/50 border-white/10"
          id="subject"
          name="subject"
          onBlur={handleBlur}
          onChange={handleInputChange}
          placeholder="Enter email subject"
          value={formData.subject}
        />
        <FieldError errors={[{ message: errors.subject }]} />
      </Field>

      <Field>
        <FieldLabel
          className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
          htmlFor="content"
        >
          Message
        </FieldLabel>
        <Textarea
          className="bg-background/50 border-white/10 resize-none"
          id="content"
          name="content"
          onBlur={handleBlur}
          onChange={handleInputChange}
          placeholder="Enter your message here"
          rows={4}
          value={formData.content}
        />
        <FieldError errors={[{ message: errors.content }]} />
      </Field>

      <Button className="w-full" type="submit">
        Send Message
      </Button>
    </form>
  );
}

export default ContactForm;
