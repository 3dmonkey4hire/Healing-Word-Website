import type { Metadata } from 'next';
import { Shield, Heart, DoorOpen, CheckCircle } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SectionWrapper from '@/components/SectionWrapper';
import GroupCard from '@/components/GroupCard';
import PhaseTimeline from '@/components/PhaseTimeline';

export const metadata: Metadata = {
  title: 'Narrative Adventure Groups | Healing Word Counseling',
  description: 'Therapist-led narrative group therapy for teens and young adults. Anxiety, transitions, identity. Telehealth. Texas.',
};

const safetyCards = [
  {
    Icon: Shield,
    title: 'X-Card',
    body: 'Any participant can skip or modify content at any time — no explanation needed.',
  },
  {
    Icon: Heart,
    title: 'Lines & Veils',
    body: 'Hard limits and graceful boundaries set together in Session Zero and revisited as needed.',
  },
  {
    Icon: DoorOpen,
    title: 'Open Door',
    body: 'Step out of the fiction at any time. The group holds this norm from the very first meeting.',
  },
  {
    Icon: CheckCircle,
    title: 'Debrief Protocol',
    body: 'Every session closes in reality. We never end on heavy fictional content without full processing.',
  },
];

export default function GroupsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="px-6 text-center relative overflow-hidden flex items-center justify-center"
        style={{
          minHeight: 'max(30.2vw, 420px)',
          backgroundImage: 'url(/images/groups-hero.jpg)',
          backgroundSize: '100% auto',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#1B4332',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(27,67,50,0.82) 0%, rgba(27,67,50,0.55) 60%, rgba(27,67,50,0.35) 100%)' }} />
        <div className="max-w-3xl mx-auto relative z-10 py-28">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#fbbf24' }}>
            Narrative Adventure Groups
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            Your Story Is Waiting.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: '#A8C9A0' }}>
            Therapist-led group counseling sessions rooted in narrative therapy and guided storytelling. You join a small group, explore your story alongside others, and — supported by Drew as a licensed therapist — do real therapeutic work in a genuinely engaging way.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTAButton href="/contact" variant="amber">Join the Waitlist</CTAButton>
            <a
              href="#howitworks"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              How It Works
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <SectionWrapper id="howitworks" className="bg-white">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl font-bold text-brand-purple-dark text-center mb-3"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            What Actually Happens in a Session
          </h2>
          <p className="text-neutral-600 text-center mb-10">90 minutes total</p>
          <PhaseTimeline />
        </div>
      </SectionWrapper>

      {/* Current Groups */}
      <SectionWrapper className="bg-neutral-50">
        <h2
          className="text-3xl font-bold text-brand-purple-dark text-center mb-10"
          style={{ fontFamily: 'var(--font-lora)' }}
        >
          Current &amp; Upcoming Groups
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GroupCard
            name="Teen Anxiety & Stress"
            ages="Ages 15-18"
            status="Waitlist Open"
            description="A weekly therapeutic group for teens navigating anxiety, social pressure, and identity. Build resilience and your coping toolkit."
            borderColor="#40916C"
          />
          <GroupCard
            name="College Transitions"
            ages="Ages 18-22"
            status="Now Enrolling"
            description="For students navigating the shift to college life — identity, independence, relationships, and the pressure to have it figured out."
            borderColor="#2D6A4F"
          />
          <GroupCard
            name="Young Adult Life Transitions"
            ages="Ages 22-32"
            status="Coming Soon"
            description="Quarter-life crisis, career stress, relationship patterns, and the weight of adulting. A group for the in-between season."
            borderColor="#7A5A28"
          />
          <GroupCard
            name="Men's Mental Health"
            ages="Ages 18-32"
            status="Coming Soon"
            description="A space where men don't have to have it figured out. Story-based work, real conversations, genuine connection."
            borderColor="#8B4A2F"
          />
        </div>
      </SectionWrapper>

      {/* Safety */}
      <SectionWrapper className="bg-white">
        <div className="text-center mb-10">
          <h2
            className="text-3xl font-bold text-brand-purple-dark mb-3"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            This Is Therapy. Safety Is Structural.
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            These are not gaming groups. Every session has clinical safety protocols in place from day one.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {safetyCards.map(({ Icon, title, body }) => (
            <div key={title} className="bg-neutral-50 rounded-xl shadow-sm p-6 flex gap-5 items-start">
              <div className="w-10 h-10 bg-brand-purple-light rounded-xl flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-brand-purple" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 text-lg mb-1">{title}</h3>
                <p className="text-neutral-600 leading-relaxed text-sm">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Group Pricing */}
      <SectionWrapper className="bg-brand-purple-light text-center">
        <h2
          className="text-3xl font-bold text-brand-purple-dark mb-6"
          style={{ fontFamily: 'var(--font-lora)' }}
        >
          Group Pricing
        </h2>
        <div className="bg-white rounded-2xl shadow-sm p-8 max-w-md mx-auto mb-8">
          <p className="text-3xl font-bold text-brand-purple mb-2">$45-$65<span className="text-base font-normal text-neutral-600"> per person / session</span></p>
          <p className="text-neutral-600 mb-4">90-minute sessions · 4-6 participants · Weekly</p>
          <p className="text-sm italic text-neutral-500">Sliding scale available · Private pay only for groups</p>
        </div>
        <CTAButton href="/contact" variant="primary">Join the Waitlist</CTAButton>
      </SectionWrapper>
    </>
  );
}
