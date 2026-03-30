import type { Metadata } from 'next';
import SectionWrapper from '@/components/SectionWrapper';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Terms of Service | Healing Word Counseling',
  description: 'Terms of Service for Healing Word Counseling.',
};

export default function TermsPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 px-6" style={{ background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
            Terms of Service
          </h1>
          <p className="text-white/80 text-lg">Healing Word Counseling</p>
          <p className="text-white/60 text-sm mt-2">Effective Date: January 1, 2026 &nbsp;|&nbsp; Last Updated: January 1, 2026</p>
        </div>
      </section>

      {/* Content */}
      <SectionWrapper className="bg-white">
        <div className="max-w-3xl mx-auto prose prose-neutral prose-headings:font-bold prose-headings:text-neutral-900 prose-p:text-neutral-700 prose-p:leading-relaxed prose-li:text-neutral-700">

          <p className="text-lg text-neutral-600 mb-8">
            Please read these Terms of Service carefully before using the Healing Word Counseling website at <strong>healingwordcounseling.com</strong>. By accessing or using this site, you agree to be bound by these terms.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4" style={{ fontFamily: 'var(--font-lora)' }}>1. Use of This Website</h2>
          <p>
            This website is provided for informational purposes only. The content on this site is not intended to constitute mental health advice, diagnosis, or treatment. Visiting this website does not establish a therapist-client relationship.
          </p>
          <p className="mt-4">
            You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the site.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4" style={{ fontFamily: 'var(--font-lora)' }}>2. No Therapist-Client Relationship</h2>
          <p>
            Submitting a contact form, sending an email, or requesting a consultation through this website does not establish a therapist-client relationship. A therapeutic relationship is only established after a formal intake process has been completed, informed consent has been signed, and services have formally commenced.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4" style={{ fontFamily: 'var(--font-lora)' }}>3. Not a Crisis Resource</h2>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-4">
            <p className="font-semibold text-red-800 mb-2">Important Safety Notice</p>
            <p className="text-red-700">
              This website is <strong>not</strong> a crisis resource. If you are experiencing a mental health emergency, suicidal thoughts, or are in danger, please contact:
            </p>
            <ul className="list-none mt-3 space-y-1 text-red-700">
              <li><strong>988 Suicide & Crisis Lifeline:</strong> Call or text 988</li>
              <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
              <li><strong>Emergency Services:</strong> Call 911</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4" style={{ fontFamily: 'var(--font-lora)' }}>4. Telehealth Services</h2>
          <p>
            Telehealth services provided by Healing Word Counseling are subject to a separate Client Services Agreement and Informed Consent, which will be provided during the intake process. By engaging in telehealth services, you acknowledge:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>You are physically located in a state where we are licensed to practice at the time of each session</li>
            <li>You have a private, secure environment for sessions</li>
            <li>You understand the limitations and risks of telehealth as described in your informed consent</li>
            <li>You are responsible for your own technology and internet connection</li>
          </ul>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4" style={{ fontFamily: 'var(--font-lora)' }}>5. Fees & Cancellation</h2>
          <p>
            Fee schedules, cancellation policies, and payment terms will be outlined in your Client Services Agreement prior to beginning services. Healing Word Counseling reserves the right to update fees with reasonable notice to active clients.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4" style={{ fontFamily: 'var(--font-lora)' }}>6. Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, and design — is the property of Healing Word Counseling and is protected by applicable copyright and intellectual property laws. You may not reproduce, distribute, or use any content from this site without prior written permission.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4" style={{ fontFamily: 'var(--font-lora)' }}>7. Disclaimer of Warranties</h2>
          <p>
            This website and its content are provided &quot;as is&quot; without warranties of any kind, either express or implied. Healing Word Counseling does not warrant that the site will be uninterrupted, error-free, or free of viruses or other harmful components.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4" style={{ fontFamily: 'var(--font-lora)' }}>8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Healing Word Counseling shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or its content.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4" style={{ fontFamily: 'var(--font-lora)' }}>9. Third-Party Links</h2>
          <p>
            This website may contain links to third-party websites. These links are provided for convenience only. Healing Word Counseling does not endorse or assume responsibility for the content or practices of any third-party sites.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4" style={{ fontFamily: 'var(--font-lora)' }}>10. Governing Law</h2>
          <p>
            These Terms of Service are governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4" style={{ fontFamily: 'var(--font-lora)' }}>11. Changes to These Terms</h2>
          <p>
            We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated effective date. Continued use of the website following changes constitutes your acceptance of the revised terms.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4" style={{ fontFamily: 'var(--font-lora)' }}>12. Contact Us</h2>
          <p>If you have questions about these Terms of Service, please contact us:</p>
          <div className="mt-4 bg-neutral-50 rounded-xl p-6 border border-neutral-200">
            <p className="font-semibold text-neutral-900">Healing Word Counseling</p>
            <p className="text-neutral-700">Texas</p>
            <p className="text-neutral-700 mt-2">
              Website: <a href="/contact" className="text-brand-green hover:underline">healingwordcounseling.com/contact</a>
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-200">
            <p className="text-sm text-neutral-500 italic">
              These terms are provided for informational purposes and do not constitute legal advice. Clients entering into a therapeutic relationship will receive a separate Client Services Agreement and Informed Consent document.
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
