import CTAButton from './CTAButton';

export default function ClosingCTA() {
  return (
    <section className="py-28 px-6 text-center" style={{ background: 'linear-gradient(135deg, #2D6A4F 0%, #1B4332 100%)' }}>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-white text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: 'var(--font-lora)' }}>
          You don&apos;t have to stay stuck in the same story.
        </h2>
        <p className="text-lg mb-8 leading-relaxed" style={{ color: '#A8C9A0' }}>
          Book a free 15-minute consultation. No forms, no pressure, no commitment — just a conversation.
        </p>
        <CTAButton href="/contact" variant="primary" className="bg-white! text-brand-purple! hover:bg-neutral-100! text-base px-10 py-4">
          Book a Free Consultation
        </CTAButton>
        <p className="text-sm mt-5 italic" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Telehealth sessions · Evenings &amp; weekends available · Currently serving Texas
        </p>
      </div>
    </section>
  );
}
