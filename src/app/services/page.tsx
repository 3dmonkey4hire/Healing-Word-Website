import type { Metadata } from 'next';
import { User, BookOpen, Sparkles, GraduationCap, Briefcase } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SectionWrapper from '@/components/SectionWrapper';

export const metadata: Metadata = {
  title: 'Services | Healing Word Counseling',
  description: 'Individual and group telehealth counseling for teens and young adults ages 15-32. Narrative therapy, story-driven approaches, transparent pricing.',
};

const services = [
  {
    color: '#2D6A4F',
    Icon: User,
    title: 'Individual Counseling',
    body: "One-on-one telehealth sessions for anxiety, stress, relationships, identity, and life transitions. A space that is entirely yours, every week.",
  },
  {
    color: '#40916C',
    Icon: BookOpen,
    title: 'Narrative Therapy',
    body: "Understanding your life through the lens of story. Externalizing what's hard, finding the moments that contradict the negative narrative, and re-authoring who you're becoming.",
  },
  {
    color: '#7A5A28',
    Icon: Sparkles,
    title: 'Interactive & Story-Driven Approaches',
    body: "For clients who want something more active. Guided storytelling, reflective exercises, and creative techniques tailored to your comfort level — always optional, never required.",
  },
  {
    color: '#8B4A2F',
    Icon: GraduationCap,
    title: 'Teen Counseling (Ages 15-17)',
    body: "Parent intake included. Support for school pressure, social anxiety, identity, family conflict, and the emotional overwhelm of adolescence. Telehealth means your teen can join from their own room.",
  },
  {
    color: '#5F5E5A',
    Icon: Briefcase,
    title: 'Young Adult Counseling (Ages 22-32)',
    body: "Career stress, relationship patterns, burnout, quarter-life crisis, and the pressure of figuring out your 20s. We work at your pace, toward a story you actually want to be in.",
  },
];

const integrationLevels = [
  {
    label: 'LIGHT',
    color: '#5F5E5A',
    bg: '#F1EFE8',
    title: 'Just Narrative Therapy',
    body: 'Pure narrative therapy techniques. Storytelling as a way of understanding and re-authoring your life — no creative exercises required.',
  },
  {
    label: 'MODERATE',
    color: '#40916C',
    bg: '#E2F4E8',
    title: 'Story-Based Integration',
    body: "Guided storytelling exercises, fictional mirrors, and reflective metaphors. Light creative engagement at your comfort level.",
  },
  {
    label: 'FULL',
    color: '#2D6A4F',
    bg: '#D8EDDF',
    title: 'Narrative Adventure',
    body: "Immersive storytelling sessions where your narrative journey maps directly to your therapeutic goals. For clients who want the full creative experience.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper className="bg-brand-amber-light text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-amber mb-3">Services</p>
        <h1
          className="text-5xl font-bold text-brand-purple-dark mb-4 max-w-3xl mx-auto leading-tight"
          style={{ fontFamily: 'var(--font-lora)' }}
        >
          Counseling Designed for How You Actually Think
        </h1>
        <p className="text-neutral-700 text-lg max-w-2xl mx-auto">
          One-on-one telehealth counseling for adolescents and young adults ages 15-32. Narrative-based, non-judgmental, and designed to actually feel useful.
        </p>
      </SectionWrapper>

      {/* Services */}
      <SectionWrapper className="bg-white">
        <h2
          className="text-3xl font-bold text-brand-purple-dark mb-10 text-center"
          style={{ fontFamily: 'var(--font-lora)' }}
        >
          Individual &amp; Specialty Services
        </h2>
        <div className="flex flex-col gap-6">
          {services.map(({ color, Icon, title, body }) => (
            <div
              key={title}
              className="bg-white rounded-2xl shadow-sm p-8 border-l-4 flex gap-6 items-start hover:shadow-md transition-shadow"
              style={{ borderLeftColor: color }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: color + '22' }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 text-xl mb-2">{title}</h3>
                <p className="text-neutral-600 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Integration Levels */}
      <SectionWrapper className="bg-neutral-50">
        <div className="text-center mb-10">
          <h2
            className="text-3xl font-bold text-brand-purple-dark mb-3"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            The Story-Driven Approach Is a Tool, Not a Requirement
          </h2>
          <p className="text-neutral-600">How Story-Based? You Decide.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {integrationLevels.map((level) => (
            <div
              key={level.label}
              className="rounded-2xl p-8 border border-neutral-200"
              style={{ backgroundColor: level.bg }}
            >
              <span
                className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block text-white"
                style={{ backgroundColor: level.color }}
              >
                {level.label}
              </span>
              <h3 className="font-semibold text-neutral-900 text-xl mb-3">{level.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{level.body}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Pricing */}
      <SectionWrapper className="bg-white">
        <h2
          className="text-3xl font-bold text-brand-purple-dark text-center mb-10"
          style={{ fontFamily: 'var(--font-lora)' }}
        >
          Simple, Honest Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-8">
          {/* Individual */}
          <div className="bg-white rounded-2xl shadow-sm border-t-4 p-8 flex flex-col gap-4" style={{ borderTopColor: '#2D6A4F' }}>
            <h3 className="text-2xl font-bold text-neutral-900" style={{ fontFamily: 'var(--font-lora)' }}>Individual Session</h3>
            <p className="text-3xl font-bold text-brand-purple">$110-$150<span className="text-base font-normal text-neutral-600"> / session</span></p>
            <p className="text-neutral-600 text-sm">50-minute telehealth session</p>
            <ul className="space-y-2 mt-2">
              {['Secure video platform', 'Flexible scheduling', 'Evenings & weekends', 'Narrative therapy approach', 'Story-based integration available'].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-neutral-600">
                  <span className="text-brand-teal">✓</span> {f}
                </li>
              ))}
            </ul>
            <CTAButton href="/contact" variant="primary" className="mt-auto">Book Free Consult</CTAButton>
          </div>

          {/* Teen */}
          <div className="bg-white rounded-2xl shadow-sm border-t-4 p-8 flex flex-col gap-4 relative" style={{ borderTopColor: '#40916C' }}>
            <span className="absolute top-4 right-4 bg-brand-teal text-white text-xs font-bold px-3 py-1 rounded-full">AGES 15-17</span>
            <h3 className="text-2xl font-bold text-neutral-900" style={{ fontFamily: 'var(--font-lora)' }}>Teen Session</h3>
            <p className="text-3xl font-bold text-brand-teal">$100-$130<span className="text-base font-normal text-neutral-600"> / session</span></p>
            <p className="text-neutral-600 text-sm">50-minute session + parent coordination</p>
            <ul className="space-y-2 mt-2">
              {['All individual features +', 'Parent intake appointment', 'Guardian progress check-ins', 'School & family navigation'].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-neutral-600">
                  <span className="text-brand-teal">✓</span> {f}
                </li>
              ))}
            </ul>
            <CTAButton href="/contact" variant="primary" className="mt-auto" style={{ backgroundColor: '#40916C' }}>Book Free Consult</CTAButton>
          </div>
        </div>
        <div className="text-center space-y-2">
          <p className="text-sm italic text-neutral-500">Sliding scale available for those who qualify. Ask during your free consultation.</p>
          <p className="text-sm text-neutral-500">We accept: Private Pay | Superbill provided for out-of-network reimbursement | Insurance panels coming soon</p>
        </div>
      </SectionWrapper>

      {/* Groups Teaser */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-brand-purple-dark rounded-2xl p-10 text-center">
            <span className="bg-brand-amber text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">Coming Soon</span>
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              Small Group Story-Driven Therapy
            </h2>
            <p className="mb-6 leading-relaxed" style={{ color: '#A8C9A0' }}>
              Our Narrative Adventure Groups use guided storytelling as a therapeutic vehicle — a structured group experience, led by Drew as a licensed therapist, designed around real therapeutic goals. Groups forming now.
            </p>
            <CTAButton href="/groups" variant="amber">Join the Waitlist</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
