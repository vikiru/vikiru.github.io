import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { ContactForm } from '@/components/forms/ContactForm';
import { Card, CardContent } from '@/lib/components/ui/card';
import { cn } from '@/lib/utils';

interface ContactProps {
  className?: string;
}

export function Contact({ className }: ContactProps) {
  return (
    <section className={cn('py-20 scroll-mt-20', className)} id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 2xl:max-w-full">
        <h2 className="xs:text-h3 sm:text-h2 font-bold mb-12 flex items-center justify-center gap-3 font-heading">
          <span className="w-8 h-1 bg-primary rounded-full" />
          Contact Me
          <span className="w-8 h-1 bg-primary rounded-full" />
        </h2>
        <Card className="w-full mx-auto">
          <CardContent className="p-8 flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <p className="body-large text-muted-foreground mb-6 leading-relaxed">
                Feel free to send me an email using the contact form, I will try
                to respond to you as soon as possible. In case, the form does
                not work for any reason, please{' '}
                <a
                  className="hover:text-primary transition-colors font-medium underline motion-reduce:transition-none"
                  href="mailto:viskirubakaran@outlook.com"
                >
                  email me
                </a>{' '}
                directly.
              </p>
              <div className="flex gap-4">
                <a
                  aria-label="GitHub"
                  className="p-3 xs:p-4 lg:p-5 text-muted-foreground hover:text-primary transition-colors rounded-md motion-reduce:transition-none"
                  href="https://github.com/vikiru"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub aria-hidden="true" className="size-icon-base" />
                </a>
                <a
                  aria-label="LinkedIn"
                  className="p-3 xs:p-4 lg:p-5 text-muted-foreground hover:text-primary transition-colors rounded-md motion-reduce:transition-none"
                  href="https://linkedin.com/in/viskirubakaran"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaLinkedin aria-hidden="true" className="size-icon-base" />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <ContactForm />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
