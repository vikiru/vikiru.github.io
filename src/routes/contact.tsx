import { createFileRoute } from '@tanstack/react-router';
import Layout from '@/components/layout/Layout';
import ContactSection from '@/components/sections/ContactSection';

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
