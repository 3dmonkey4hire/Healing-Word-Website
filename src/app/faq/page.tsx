import type { Metadata } from 'next';
import SectionWrapper from '@/components/SectionWrapper';
import FAQItem from '@/components/FAQItem';
import CTAButton from '@/components/CTAButton';
import { faqData } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'FAQ | Healing Word Counseling',
  description: 'Common questions about narrative therapy, telehealth counseling, fees, and what to expect from Healing Word Counseling.',
};

export default function FAQPage() {
  return (
    <>
      <SectionWrapper className="bg-neutral-50 text-center">
        <h1
          className="text-5xl font-bold text-brand-purple-dark mb-4"
          style={{ fontFamily: 'var(--font-lora)' }}
        >
          Frequently Asked Questions
        </h1>
        <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
          Everything you want to know before reaching out. Still have questions? The free consultation call is the right next step.
        </p>
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          {faqData.map((section) => (
            <div key={section.category}>
              <h2
                className="text-2xl font-bold text-brand-purple-dark mb-2"
                style={{ fontFamily: 'var(--font-lora)' }}
              >
                {section.category}
              </h2>
              <div className="bg-neutral-50 rounded-2xl px-6 py-2">
                {section.questions.map((item, i) => (
                  <FAQItem
                    key={i}
                    id={`${section.category.replace(/\s+/g, '-').toLowerCase()}-${i}`}
                    question={item.q}
                    answer={item.a}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2
            className="text-3xl font-bold text-brand-purple-dark mb-4"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            Still Have Questions?
          </h2>
          <p className="text-neutral-600 mb-6">
            The free 15-minute consultation is the best way to get your specific questions answered.
          </p>
          <CTAButton href="/contact" variant="primary">Book a Free Consultation</CTAButton>
        </div>
      </SectionWrapper>
    </>
  );
}
