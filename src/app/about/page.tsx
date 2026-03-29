import type { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';
import SectionWrapper from '@/components/SectionWrapper';
import ClosingCTA from '@/components/ClosingCTA';

export const metadata: Metadata = {
  title: 'About Drew | Healing Word Counseling',
  description: 'Meet Drew, LPC-Associate. Narrative therapy and TTRPG-integrated counseling for adolescents and young adults in Texas.',
};

const specialties = [
  'Anxiety', 'Depression', 'Life Transitions', 'Identity & Self-Worth',
  'Social Anxiety', 'Academic Stress', 'Relationship Issues', 'Quarter-Life Crisis',
  'Family Conflict', 'Neurodivergent Clients', 'LGBTQ+ Affirming', "Men's Mental Health",
  'First-Time Therapy Seekers',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper className="bg-brand-purple-light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center gap-3">
            <div
              className="rounded-2xl bg-white shadow-lg flex items-center justify-center w-full max-w-sm"
              style={{ height: 400 }}
              role="img"
              aria-label="Placeholder for Drew's photo"
            >
              <span
                className="font-bold text-brand-purple-dark"
                style={{ fontFamily: 'var(--font-lora)', fontSize: 100 }}
              >
                D
              </span>
            </div>
            <p className="text-sm text-neutral-600 italic text-center">Drew | LPC-Associate | Healing Word Counseling</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-purple mb-3">Meet Your Counselor</p>
            <h1
              className="text-5xl font-bold text-brand-purple-dark mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              Hi, I am Drew.
            </h1>
            <p className="text-neutral-700 leading-relaxed text-lg mb-6">
              I am a licensed counselor specializing in narrative therapy and story-driven approaches for adolescents and young adults ages 15-32. I believe therapy should feel safe, human, and actually useful — not like a script you have to follow.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['LPC-Associate — Texas', 'Narrative Therapy', 'Story-Driven Approaches', 'Telehealth'].map((badge) => (
                <span
                  key={badge}
                  className="bg-white border border-brand-purple text-brand-purple text-xs font-semibold px-3 py-1.5 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
            <CTAButton href="/contact" variant="primary">Book a Free Consultation</CTAButton>
          </div>
        </div>
      </SectionWrapper>

      {/* Origin Story */}
      <SectionWrapper className="bg-white">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-4xl font-bold text-brand-purple-dark mb-8 text-center"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            Why Healing Word Counseling?
          </h2>
          <div className="space-y-6 text-lg leading-loose text-brand-purple-dark italic" style={{ fontFamily: 'var(--font-lora)' }}>
            <p>
              "Healing Word exists because I kept meeting young people who knew they needed support but felt like traditional therapy was not built for them. Too formal, too clinical, too much sitting across from someone who asks 'how does that make you feel?' without ever really engaging with who you actually are."
            </p>
            <p>
              "I believe healing often begins when someone can see their life differently. Not from the outside looking in — but from inside their own story, as the author. Narrative therapy gives us that frame. And for the right client, tools like structured storytelling and guided role-play can make that work feel genuinely engaging instead of just endured."
            </p>
            <p>
              "The name says it all. Words carry weight — spoken with intention, at just the right moment, they can restore what felt lost. That is the practice I wanted to build."
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Clinical Approach */}
      <SectionWrapper className="bg-neutral-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2
              className="text-3xl font-bold text-brand-purple-dark mb-6"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              My Approach
            </h2>
            <ul className="space-y-3">
              {[
                'Narrative therapy — the foundational model',
                'Story-driven reflection and identity exploration',
                'Structured role-play and character work when helpful',
                'Strengths-based and affirming throughout',
                "Tailored to each client's comfort level — no formula",
                'Telehealth-first for maximum accessibility',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-brand-teal mt-1 text-lg leading-none">✓</span>
                  <span className="text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2
              className="text-3xl font-bold text-brand-purple-dark mb-6"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              Training &amp; Credentials
            </h2>
            <ul className="space-y-3">
              {[
                'Master\'s degree in Counseling [Placeholder]',
                'Licensed Professional Counselor-Associate, Texas',
                'Applied Game Facilitation — Game to Grow [In Progress]',
                'Narrative therapy training — Dulwich Centre [In Progress]',
                '[Additional certifications — placeholder]',
                'Supervised by [Supervisor name — placeholder]',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-brand-purple mt-1 text-lg leading-none">•</span>
                  <span className="text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* Who Drew Works With */}
      <SectionWrapper className="bg-white">
        <div className="text-center mb-10">
          <h2
            className="text-4xl font-bold text-brand-purple-dark mb-3"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            Who I Work With
          </h2>
          <p className="text-neutral-600 text-lg">If any of these feel familiar, you are in the right place.</p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {specialties.map((tag) => (
            <span
              key={tag}
              className="bg-white border border-brand-purple text-brand-purple text-sm px-4 py-2 rounded-full hover:bg-brand-purple hover:text-white transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-center text-sm italic text-neutral-500">
          All sessions via HIPAA-compliant telehealth. Currently accepting clients physically located in Texas.
        </p>
      </SectionWrapper>

      <ClosingCTA />
    </>
  );
}
