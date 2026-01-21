import { createFileRoute } from '@tanstack/react-router';
import ContactSection from '@/components/ContactSection';
import Layout from '@/components/Layout';

export const Route = createFileRoute('/contact')({
  component: ContactPage,
});

function ContactPage() {
  return (
    <Layout
      description="Contact me directly via email or by using the contact form."
      title="Visakan Kirubakaran | Contact"
    >
      <ContactSection />
    </Layout>
  );
}
