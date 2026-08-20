import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { ContactForm } from "@/components/forms/ContactForm";
import { Card, CardContent } from "@/lib/components/ui/card";
import { cn } from "@/lib/utils";

function KwesScripts() {
  return <script defer src="https://kwesforms.com/v2/kf-script.js" suppressHydrationWarning />;
}

interface ContactProps {
  className?: string;
}

export function Contact({ className }: ContactProps) {
  return (
    <section className={cn("scroll-mt-20 py-20", className)} id="contact">
      <div className="mx-auto max-w-8xl px-6 lg:px-8 2xl:max-w-full">
        <h2 className="mb-12 flex items-center justify-center gap-3 font-heading text-h3 font-bold sm:text-h2">
          <span className="h-1 w-8 rounded-full bg-primary" />
          Contact Me
          <span className="h-1 w-8 rounded-full bg-primary" />
        </h2>
        <Card className="mx-auto w-full">
          <CardContent className="flex flex-col items-start gap-12 p-8 lg:flex-row">
            <div className="flex-1">
              <p className="body-large mb-6 leading-relaxed text-muted-foreground">
                Feel free to send me an email using the contact form, I will try to respond to you
                as soon as possible. In case, the form does not work for any reason, please{" "}
                <a
                  className="font-medium underline transition-colors hover:text-primary motion-reduce:transition-none"
                  href="mailto:viskirubakaran@outlook.com"
                >
                  email me
                </a>{" "}
                directly.
              </p>
              <div className="flex gap-4">
                <a
                  aria-label="GitHub"
                  className="rounded-md p-3 text-muted-foreground transition-colors hover:text-primary motion-reduce:transition-none lg:p-5"
                  href="https://github.com/vikiru"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub aria-hidden="true" className="size-icon-base" />
                </a>
                <a
                  aria-label="LinkedIn"
                  className="rounded-md p-3 text-muted-foreground transition-colors hover:text-primary motion-reduce:transition-none lg:p-5"
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
      <KwesScripts />
    </section>
  );
}
