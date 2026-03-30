import type { Metadata } from 'next';
import SectionWrapper from '@/components/SectionWrapper';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Privacy Policy | Healing Word Counseling',
  description: 'Privacy Policy for Healing Word Counseling.',
};

export default function PrivacyPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 px-6" style={{ background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
            Privacy Policy
          </h1>
          <p className="text-white/80 text-lg">Healing Word Counseling</p>
          <p className="text-white/60 text-sm mt-2">Effective Date: January 1, 2026 &nbsp;|&nbsp; Last Updated: January 1, 2026</p>
        </div>
      </section>

      {/* Content */}
      <SectionWrapper className="bg-white">
        <div className="max-w-3xl mx-auto prose prose-neutral prose-headings:font-bold prose-headings:text-neutral-900 prose-p:text-neutral-700 prose-p:leading-relaxed prose-li:text-neutral-700">

          <p className="text-lg text-neutral-600 mb-8">
            Healing Word Counseling ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website at <strong>healingwordcounseling.com</strong> or contact us about our services.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4" style={{ fontFamily: 'var(--font-lora)' }}>1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>Contact Information:</strong> Name, email address, and phone number when you submit a contact or intake form.</li>
            <li><strong>Inquiry Information:</strong> Details you share when reaching out about services, including general descriptions of what you are seeking support for.</li>
            <li><strong>Technical Data:</strong> Anonymous browsing data such as pages visited and browser type, collected via standard web analytics tools.</li>
          </ul>
          <p className="mt-4">
            This website does not collect, store, or transmit protected health information (PHI). Clinical information is handled exclusively through HIPAA-compliant platforms used in the provision of services.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4" style={{ fontFamily: 'var(--font-lora)' }}>2. How We Use Your Information</h2>
          <p>Information collected through this website is used to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Respond to inquiries and schedule consultations</li>
            <li>Provide information about our services</li>
            <li>Improve the functionality and content of our website</li>
          </ul>
          <p className="mt-4">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4" style={{ fontFamily: 'var(--font-lora)' }}>3. HIPAA & Clinical Privacy</h2>
          <p>
            As a mental health practice, we are bound by the Health Insurance Portability and Accountability Act (HIPAA). All clinical records, session notes, and protected health information are handled in accordance with HIPAA regulations and are stored on secure, HIPAA-compliant platforms. Your clinical privacy rights will be fully explained in your intake paperwork prior to beginning services.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4" style={{ fontFamily: 'var(--font-lora)' }}>4. Telehealth Privacy</h2>
          <p>
            All telehealth sessions are conducted through a secure, HIPAA-compliant video platform. We do not record sessions without your explicit written consent. You are responsible for ensuring your own environment is private during sessions.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4" style={{ fontFamily: 'var(--font-lora)' }}>5. Cookies & Analytics</h2>
          <p>
            Our website may use cookies and analytics tools to understand how visitors use the site. This data is aggregated and anonymous and is not linked to any individual. You may disable cookies through your browser settings at any time.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4" style={{ fontFamily: 'var(--font-lora)' }}>6. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party platforms (such as scheduling tools or insurance portals). We are not responsible for the privacy practices of those sites and encourage you to review their policies separately.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4" style={{ fontFamily: 'var(--font-lora)' }}>7. Data Retention</h2>
          <p>
            Website inquiry data is retained only as long as necessary to respond to your request. Clinical records are retained in accordance with Texas state law and professional licensing requirements.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4" style={{ fontFamily: 'var(--font-lora)' }}>8. Children&apos;s Privacy</h2>
          <p>
            Our website is not directed to children under 13. If you are a parent or guardian seeking services for a minor, please contact us directly. We do not knowingly collect personal information from children through this website.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4" style={{ fontFamily: 'var(--font-lora)' }}>9. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Request access to personal information we hold about you</li>
            <li>Request correction or deletion of your information</li>
            <li>Opt out of any future communications from us</li>
          </ul>
          <p className="mt-4">To exercise any of these rights, contact us at the information below.</p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4" style={{ fontFamily: 'var(--font-lora)' }}>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of this website after changes constitutes acceptance of the revised policy.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4" style={{ fontFamily: 'var(--font-lora)' }}>11. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us:</p>
          <div className="mt-4 bg-neutral-50 rounded-xl p-6 border border-neutral-200">
            <p className="font-semibold text-neutral-900">Healing Word Counseling</p>
            <p className="text-neutral-700">Texas</p>
            <p className="text-neutral-700 mt-2">
              Website: <a href="/contact" className="text-brand-green hover:underline">healingwordcounseling.com/contact</a>
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-200">
            <p className="text-sm text-neutral-500 italic">
              This privacy policy is provided for informational purposes. It does not constitute legal advice. For questions about your clinical rights under HIPAA, please refer to your Notice of Privacy Practices provided at intake.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Back Button */}
      <SectionWrapper className="bg-neutral-50">
        <div className="text-center">
          <CTAButton href="/" variant="secondary">Back to Home</CTAButton>
        </div>
      </SectionWrapper>
    </>
  );
}
