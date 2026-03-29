import type { Metadata } from 'next';
import SectionWrapper from '@/components/SectionWrapper';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Privacy Policy | Healing Word Counseling',
  description: 'Privacy Policy for Healing Word Counseling, PLLC.',
};

export default function PrivacyPage() {
  return (
    <SectionWrapper className="bg-white">
      <div className="max-w-2xl mx-auto text-center py-16">
        <h1 className="text-4xl font-bold text-brand-purple-dark mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
          Privacy Policy
        </h1>
        <p className="text-neutral-600 mb-2">Healing Word Counseling, PLLC</p>
        <div className="mt-8 bg-brand-purple-light rounded-2xl p-10">
          <p className="text-xl text-brand-purple font-semibold mb-2">Coming Soon</p>
          <p className="text-neutral-600">Our full privacy policy is being prepared and will be published here before launch.</p>
        </div>
        <div className="mt-8">
          <CTAButton href="/" variant="secondary">Back to Home</CTAButton>
        </div>
      </div>
    </SectionWrapper>
  );
}
