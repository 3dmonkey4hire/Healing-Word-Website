import CTAButton from './CTAButton';

export default function ClosingCTA() {
  return (
    <section className="py-28 px-6 text-center" style={{ background: 'linear-gradient(135deg, #F5F0E8 0%, #EDE8DC 100%)' }}>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: 'var(--font-lora)', color: '#1B4332' }}>
          You don&apos;t have to stay stuck in the same story.
        </h2>
        <p className="text-lg mb-8 leading-relaxed" style={{ color: '#2D6A4F' }}>
          Book a free 15-minute consultation. No forms, no pressure, no commitment — just a conversation.
        </p>
        <CTAButton href="/contact" variant="primary" className="text-base px-10 py-4" style={{ backgroundColor: '#1B4332' }}>
          Book a Free Consultation
        </CTAButton>
        <p className="text-sm mt-5 italic" style={{ color: '#52796F' }}>
          Telehealth sessions · Evenings &amp; weekends available · Currently serving Texas
        </p>
      </div>
    </section>
  );
}
