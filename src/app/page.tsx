import { BookOpen, Sparkles, Users, Home, Calendar, Lock, Smartphone, CheckCircle } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SectionWrapper from '@/components/SectionWrapper';
import FAQItem from '@/components/FAQItem';
import ClosingCTA from '@/components/ClosingCTA';
import HeroSlideshow from '@/components/HeroSlideshow';

export const metadata = {
  title: 'Healing Word Counseling | Online Therapy for Teens & Young Adults',
  description:
    'Narrative therapy and story-driven telehealth counseling for ages 15-32. Anxiety, identity, life transitions. Book a free consultation. Texas.',
};

const challengePills = [
  'Anxiety', 'Overthinking', 'Stress', 'Identity Struggles', 'Relationship Issues',
  'Life Transitions', 'Feeling Stuck', 'Low Self-Worth', 'Academic Pressure',
  'Social Anxiety', 'Career Uncertainty', 'First-Time Therapy',
];

const homeFAQs = [
  {
    q: 'Is online counseling as effective as in-person therapy?',
    a: "Research consistently shows telehealth therapy is equally effective for most mental health concerns. Many clients prefer it — it removes barriers like commuting and the self-consciousness of being seen walking into a therapy office.",
  },
  {
    q: "Do I have to like storytelling for this to work?",
    a: "Not at all. The narrative approach is about how we understand your experience — not about creative writing or performance. Many clients have no storytelling background and find it completely natural.",
  },
  {
    q: "How do I know if this is a good fit?",
    a: "That's exactly what the free consultation call is for. We talk for 15 minutes, no commitment required. If it feels right, we schedule your first session. If not, we'll do our best to point you somewhere helpful.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="flex items-center px-6 py-20 relative overflow-hidden"
        style={{ minHeight: 'max(56.25vw, 480px)', background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)' }}
      >
        <HeroSlideshow />
        <div className="max-w-6xl mx-auto w-full relative z-10" style={{ transform: 'translateY(-48px)' }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#fbbf24' }}>
            Telehealth Counseling for Ages 15-32
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl leading-tight"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            Therapy That Helps You Rewrite Your Story
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl leading-relaxed" style={{ color: '#A8C9A0' }}>
            Online counseling for teens and young adults using story-driven, narrative-based approaches
            to help with anxiety, relationships, identity, and life transitions.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <CTAButton href="/contact" variant="primary">Book a Free Consultation</CTAButton>
            <a
              href="#approach"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Explore the Approach
            </a>
          </div>
          <p className="text-sm italic mb-8 max-w-lg" style={{ color: '#A8C9A0' }}>
            Grounded in evidence-based care and delivered through secure, HIPAA-compliant telehealth sessions.
          </p>
          <div className="flex flex-wrap gap-3">
            {['100% Telehealth', 'Ages 15-32', 'Narrative Therapy'].map((badge) => (
              <span key={badge} className="bg-white/15 text-white text-sm px-4 py-2 rounded-full">{badge}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <SectionWrapper className="bg-neutral-50">
        <h2
          className="text-4xl font-bold text-brand-purple-dark text-center mb-12"
          style={{ fontFamily: 'var(--font-lora)' }}
        >
          Designed for Your Season of Life
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              border: '#40916C',
              title: 'High Schoolers (Ages 15-17)',
              body: "Navigating identity, social pressure, anxiety, and family stress. Therapy that meets you where you are — in a format that doesn't feel like a doctor's office.",
            },
            {
              border: '#2D6A4F',
              title: 'College Students (Ages 18-22)',
              body: "First time on your own, figuring out who you are. We help you manage anxiety, process what you're carrying, and build a life you actually want.",
            },
            {
              border: '#7A5A28',
              title: 'Young Adults (Ages 23-32)',
              body: "Quarter-life crisis is real. Career pressure, relationships, big transitions. We help you stop surviving and start authoring a story worth living.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl shadow-sm p-8 border-t-4"
              style={{ borderTopColor: card.border }}
            >
              <h3 className="font-semibold text-neutral-900 text-xl mb-3">{card.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Different */}
      <SectionWrapper id="approach" className="bg-white">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold text-brand-purple-dark mb-4"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            A More Engaging Way to Heal
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Not everyone connects with traditional talk therapy. Story can create emotional safety that standard conversation sometimes cannot.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              Icon: BookOpen,
              title: 'Narrative Therapy',
              body: 'You are not your problems. You are the author of your story. Narrative therapy helps you see your life differently and write what comes next.',
            },
            {
              Icon: Sparkles,
              title: 'Story-Driven Reflection',
              body: 'Using guided storytelling, metaphor, and identity exploration to help you understand patterns, strengths, and possibilities.',
            },
            {
              Icon: Users,
              title: 'Interactive Approaches',
              body: "For those who want something more active, we offer structured role-play and character-based techniques — tailored to your comfort level.",
            },
          ].map(({ Icon, title, body }) => (
            <div key={title} className="bg-neutral-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8">
              <div className="w-12 h-12 bg-brand-purple-light rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-brand-purple" />
              </div>
              <h3 className="font-semibold text-neutral-900 text-xl mb-2">{title}</h3>
              <p className="text-neutral-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Challenges Grid */}
      <SectionWrapper className="bg-brand-purple-light">
        <h2
          className="text-4xl font-bold text-brand-purple-dark text-center mb-10"
          style={{ fontFamily: 'var(--font-lora)' }}
        >
          You Do Not Have to Keep Carrying This Alone
        </h2>
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {challengePills.map((pill) => (
            <span
              key={pill}
              className="bg-white border border-brand-purple text-brand-purple text-sm px-5 py-2 rounded-full hover:bg-brand-purple hover:text-white transition-colors cursor-default"
            >
              {pill}
            </span>
          ))}
        </div>
        <p className="text-center text-sm italic text-neutral-600">
          Not sure if your situation fits? Book a free 15-minute call — there is no pressure and no commitment.
        </p>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper className="bg-white">
        <h2
          className="text-4xl font-bold text-brand-purple-dark text-center mb-14"
          style={{ fontFamily: 'var(--font-lora)' }}
        >
          Getting Started Is Simpler Than You Think
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {[
            {
              num: '1',
              color: '#2D6A4F',
              title: 'Book a Free Consultation',
              body: "15 minutes, no cost, no pressure. We talk about what you're dealing with and whether we're a good fit.",
            },
            {
              num: '2',
              color: '#40916C',
              title: 'Meet Online, From Anywhere',
              body: 'Secure telehealth sessions from your home, dorm room, or anywhere private. No commute, no waiting room.',
            },
            {
              num: '3',
              color: '#7A5A28',
              title: 'Start Building a New Chapter',
              body: 'Weekly or biweekly sessions designed around your story, your goals, and your pace.',
            },
          ].map((step) => (
            <div key={step.num} className="text-center flex flex-col items-center gap-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                style={{ backgroundColor: step.color }}
              >
                {step.num}
              </div>
              <h3 className="font-semibold text-neutral-900 text-xl">{step.title}</h3>
              <p className="text-neutral-600 leading-relaxed max-w-xs">{step.body}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <CTAButton href="/contact" variant="primary">Book My Free Consultation</CTAButton>
        </div>
      </SectionWrapper>

      {/* Telehealth Mini */}
      <SectionWrapper className="bg-brand-teal-light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="text-4xl font-bold text-brand-purple-dark mb-4"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              Therapy That Fits Your Actual Life
            </h2>
            <p className="text-neutral-700 leading-relaxed text-lg mb-6">
              Every session is 100% online — no commute, no waiting room, no one seeing you walk into a therapist office. Just you, your space, and a counselor who shows up for you.
            </p>
            <a href="/telehealth" className="text-brand-teal font-semibold hover:underline">
              Learn more about telehealth
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { Icon: Home, text: 'Comfortable environment' },
              { Icon: Calendar, text: 'Flexible scheduling' },
              { Icon: Lock, text: 'Private and HIPAA-secure' },
              { Icon: Smartphone, text: 'Phone, tablet, or computer' },
            ].map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                <CheckCircle className="w-5 h-5 text-brand-teal shrink-0" />
                <span className="text-neutral-700">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Approach Reveal */}
      <SectionWrapper className="bg-brand-amber-light">
        <div className="max-w-3xl mx-auto text-center py-4">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-brand-amber">
            The Approach
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold italic text-brand-purple-dark mb-6"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            Words are the medicine.
          </h2>
          <p className="text-neutral-700 text-lg leading-loose">
            The name Healing Word reflects a simple belief: language, story, and genuine connection are the most powerful tools in therapy. When the right words are spoken — or heard — at the right moment, something shifts. That is the foundation of this practice: narrative therapy that meets you inside your own story, at whatever level of engagement feels right for you.
          </p>
          <a href="/groups" className="block mt-6 text-brand-purple font-semibold text-sm italic hover:underline">
            Learn about our Narrative Adventure Groups
          </a>
        </div>
      </SectionWrapper>

      {/* FAQ Preview */}
      <SectionWrapper className="bg-neutral-50">
        <h2
          className="text-4xl font-bold text-brand-purple-dark text-center mb-10"
          style={{ fontFamily: 'var(--font-lora)' }}
        >
          Common Questions
        </h2>
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm px-8 py-4 mb-8">
          {homeFAQs.map((item, i) => (
            <FAQItem key={i} id={`home-${i}`} question={item.q} answer={item.a} />
          ))}
        </div>
        <div className="text-center">
          <a href="/faq" className="text-brand-purple font-semibold hover:underline">
            See All FAQs
          </a>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper className="bg-white">
        <h2
          className="text-4xl font-bold text-brand-purple-dark text-center mb-10"
          style={{ fontFamily: 'var(--font-lora)' }}
        >
          What Clients Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { quote: "I never thought I'd actually look forward to therapy. But here we are.", attr: 'Alex, 19' },
            { quote: "Drew meets you exactly where you are. Nothing feels forced or clinical.", attr: 'Jordan, 26' },
            { quote: "My son went from dreading therapy to asking when his next session is.", attr: 'Parent of a 16-year-old' },
          ].map(({ quote, attr }) => (
            <div key={attr} className="bg-white rounded-2xl shadow-sm p-6 border border-neutral-200">
              <div className="text-5xl text-brand-purple-light mb-3 leading-none font-serif">"</div>
              <div className="flex gap-1 mb-3" aria-label="5 stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-brand-amber text-sm" aria-hidden="true">*</span>
                ))}
              </div>
              <p
                className="text-neutral-700 italic leading-relaxed mb-4"
                style={{ fontFamily: 'var(--font-lora)' }}
              >
                {quote}
              </p>
              <p className="text-sm text-neutral-600 font-medium">— {attr}</p>
              <p className="text-xs text-neutral-400 mt-1">[Placeholder — replace with real testimonial]</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <ClosingCTA />
    </>
  );
}
