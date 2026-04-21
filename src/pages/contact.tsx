import AppLayout from '@/layouts/AppLayout';
import ContactSection from '@/components/partials/ContactSection';

const ContactPage = () => {
  return (
    <AppLayout title="Contact">
      <div
        className="border-b py-16 text-center"
        style={{ backgroundColor: '#0d0d0d', borderColor: '#1e1e1e' }}
      >
        <p className="section-label">Let&apos;s Talk</p>
        <h1 className="section-title">Get In Touch</h1>
        <p className="mx-auto mt-3 max-w-md text-sm" style={{ color: '#6b7280' }}>
          Open to full-time roles, freelance projects, and consulting opportunities.
        </p>
      </div>
      <div className="container">
        <ContactSection />
      </div>
    </AppLayout>
  );
};

export default ContactPage;
