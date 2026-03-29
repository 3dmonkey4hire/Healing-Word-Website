import type { Metadata } from 'next';
import SectionWrapper from '@/components/SectionWrapper';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Good Faith Estimate | Healing Word Counseling',
  description: 'Good Faith Estimate — required under the No Surprises Act for private-pay clients.',
};

export default function GoodFaithEstimatePage() {
  return (
    <SectionWrapper className="bg-white">
      <div className="max-w-2xl mx-auto text-center py-16">
        <h1 className="text-4xl font-bold text-brand-purple-dark mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
          Good Faith Estimate
        </h1>
        <p className="text-neutral-600 mb-2">Healing Word Counseling, PLLC</p>
        <p className="text-sm text-neutral-500 italic mb-8">Required under the No Surprises Act for private-pay practices</p>
        <div className="mt-4 bg-brand-amber-light rounded-2xl p-10">
          <p className="text-xl text-brand-amber font-semibold mb-2">Coming Soon</p>
          <p className="text-neutral-600">Our Good Faith Estimate notice will be published here before launch. For questions about session costs, please contact us directly.</p>
        </div>
        <div className="mt-8">
          <CTAButton href="/contact" variant="primary">Contact Us</CTAButton>
        </div>
      </div>
    </SectionWrapper>
  );
}
