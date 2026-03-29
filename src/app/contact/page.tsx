import type { Metadata } from 'next';
import SectionWrapper from '@/components/SectionWrapper';
import ContactForm from '@/components/ContactForm';
import { MapPin, Clock, Users, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Book a Free Consultation | Healing Word Counseling',
  description: 'Book a free 15-minute consultation with Drew. No forms, no pressure, no commitment — just a conversation.',
};

export default function ContactPage() {
  return (
    <SectionWrapper className="bg-neutral-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Column */}
        <div>
          <h1
            className="text-5xl font-bold text-brand-purple-dark mb-4 leading-tight"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            Start Your Quest
          </h1>
          <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
            Book a free 15-minute consultation. No forms, no pressure, no commitment — just a conversation about what you are dealing with and whether we are a good fit.
          </p>
          <blockquote
            className="border-l-4 border-brand-purple pl-5 mb-8 text-brand-purple italic text-lg"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            Starting therapy can feel like a big step. Reaching out does not have to be.
          </blockquote>

          <div className="space-y-3 mb-8">
            {[
              { Icon: MapPin, text: 'Telehealth only — Texas (expanding)' },
              { Icon: Clock, text: 'Evenings & weekends available' },
              { Icon: Users, text: 'Serving ages 15-32' },
              { Icon: MessageCircle, text: 'Response within 1 business day' },
            ].map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-brand-purple shrink-0" />
                <span className="text-neutral-700">{text}</span>
              </div>
            ))}
          </div>

          <div className="bg-brand-purple-light rounded-2xl p-6">
            <h3 className="font-semibold text-brand-purple-dark mb-4">What Happens Next</h3>
            <ol className="space-y-3">
              {[
                'You submit the form.',
                'Drew reaches out within 1 business day.',
                'You have a free 15-minute call to see if it is a fit.',
                'If yes, we schedule your first full session.',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-brand-purple text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-neutral-700 text-sm">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
}
