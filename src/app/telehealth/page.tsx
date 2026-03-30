import type { Metadata } from 'next';
import { Home, Calendar, Lock, Shield } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SectionWrapper from '@/components/SectionWrapper';
import ClosingCTA from '@/components/ClosingCTA';

export const metadata: Metadata = {
  title: 'Telehealth Counseling | Healing Word Counseling',
  description: 'Secure, HIPAA-compliant telehealth therapy for teens and young adults in Texas. No commute, no waiting room — just real therapy from wherever you are.',
};

const benefitCards = [
  {
    Icon: Home,
    title: 'Comfortable Environment',
    body: 'You choose your space. Your room, your couch, your car. Familiar surroundings can make opening up easier.',
  },
  {
    Icon: Calendar,
    title: 'Flexible Scheduling',
    body: 'Evenings and weekends available. No need to leave work early or rearrange your whole day.',
  },
  {
    Icon: Lock,
    title: 'Private & Secure',
    body: 'All sessions are conducted on a HIPAA-compliant platform. Your privacy is protected at every step.',
  },
  {
    Icon: Shield,
    title: 'No Waiting Room',
    body: 'No one sees you walking in. No clipboards, no muzak. Just connect when you are ready.',
  },
];

const stats = [
  '80%+ of clients report telehealth is as effective or more effective than in-person [Placeholder]',
  'Telehealth removes 3 of the top 5 reported barriers to starting therapy [Placeholder]',
  'APA supports telehealth as a primary delivery method for most counseling needs [Placeholder]',
];

export default function TelehealthPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center px-6 py-24 overflow-hidden text-center" style={{
        minHeight: 'max(30.2vw, 420px)',
        backgroundImage: "url('/images/telehealth-hero.jpg')",
        backgroundSize: '100% auto',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#1B4332',
      }}>
        {/* Background image div removed — handled by section */}
        {/* Dark forest green overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(27,67,50,0.62) 0%, rgba(45,106,79,0.50) 100%)' }}
          aria-hidden="true"
        />
        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#D4A843' }}>
            Telehealth Counseling
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            Real Therapy. From Wherever You Are.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: '#A8C9A0' }}>
            Every session is delivered through secure, HIPAA-compliant video — no commute, no waiting room, no one seeing you walk into a therapist office. Just connection, from your own space.
          </p>
          <CTAButton href="/contact" variant="primary">Book a Free Consultation</CTAButton>
        </div>
      </section>

      {/* What It Looks Like */}
      <SectionWrapper className="bg-white">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl font-bold text-brand-purple-dark mb-6 text-center"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            What Is Telehealth Counseling?
          </h2>
          <p className="text-neutral-700 leading-relaxed text-lg mb-8 text-center">
            All sessions take place through a secure, HIPAA-compliant video platform. You will receive a link before your appointment. Show up, click the link, and you are in. No software download required. No waiting room. Just your counselor, ready for you.
          </p>
          <h3 className="font-semibold text-neutral-900 text-xl mb-5 text-center">What You Need</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'A phone, tablet, or computer',
              'A stable internet connection',
              'A private, quiet space',
              'Headphones (optional but helpful)',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-brand-teal-light rounded-xl p-4">
                <span className="text-brand-teal text-xl">✓</span>
                <span className="text-neutral-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Benefits */}
      <SectionWrapper className="bg-neutral-50">
        <h2
          className="text-3xl font-bold text-brand-purple-dark text-center mb-10"
          style={{ fontFamily: 'var(--font-lora)' }}
        >
          Why Telehealth Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefitCards.map(({ Icon, title, body }) => (
            <div key={title} className="bg-white rounded-2xl shadow-sm p-6 flex gap-5 items-start">
              <div className="w-12 h-12 bg-brand-teal-light rounded-xl flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-brand-teal" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 text-lg mb-2">{title}</h3>
                <p className="text-neutral-600 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Location / Licensing */}
      <SectionWrapper className="bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl font-bold text-brand-purple-dark mb-6"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            Where We Can See Clients
          </h2>
          <p className="text-neutral-700 leading-relaxed text-lg mb-6">
            Telehealth services are currently available to clients who are physically located in Texas at the time of their sessions. We are licensed in Texas and expanding to additional states. If you are outside Texas, reach out — we may be able to help you find a provider.
          </p>
          <div className="inline-block bg-brand-teal-light border border-brand-teal text-brand-teal font-bold px-6 py-3 rounded-full text-lg mb-6">
            Texas
          </div>
          <p className="text-sm italic text-neutral-500">
            Multi-state licensing in progress. Check back for updates or join the waitlist for your state.
          </p>
        </div>
      </SectionWrapper>

      {/* Research-Backed */}
      <SectionWrapper className="bg-brand-purple-light">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl font-bold text-brand-purple-dark text-center mb-6"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            Does Online Therapy Actually Work?
          </h2>
          <p className="text-neutral-700 leading-relaxed text-lg text-center mb-10">
            Research consistently shows that telehealth therapy is equally effective as in-person counseling for anxiety, depression, life transitions, and most other mental health concerns. For many clients — especially teens and young adults who are already comfortable on screens — it is actually the preferred format.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <p className="text-neutral-700 text-sm leading-relaxed">{stat}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <ClosingCTA />
    </>
  );
}
