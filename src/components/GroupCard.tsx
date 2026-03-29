import CTAButton from './CTAButton';

interface GroupCardProps {
  name: string;
  ages: string;
  status: 'Now Enrolling' | 'Waitlist Open' | 'Coming Soon';
  description: string;
  borderColor: string;
}

const statusStyles: Record<string, string> = {
  'Now Enrolling': 'bg-brand-teal-light text-brand-teal',
  'Waitlist Open': 'bg-brand-amber-light text-brand-amber',
  'Coming Soon': 'bg-neutral-100 text-neutral-600',
};

export default function GroupCard({ name, ages, status, description, borderColor }: GroupCardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm p-6 border-l-4 flex flex-col gap-4`} style={{ borderLeftColor: borderColor }}>
      <div className="flex flex-wrap items-start gap-2">
        <h3 className="font-bold text-neutral-900 text-lg flex-1" style={{ fontFamily: 'var(--font-lora)' }}>{name}</h3>
        <span className="bg-brand-purple-light text-brand-purple text-xs font-semibold px-3 py-1 rounded-full">{ages}</span>
      </div>
      <span className={`text-xs font-semibold px-3 py-1 rounded-full self-start ${statusStyles[status]}`}>{status}</span>
      <p className="text-neutral-600 text-sm leading-relaxed">{description}</p>
      <p className="text-xs text-neutral-600">4–6 participants · 90 min/week · Telehealth</p>
      <CTAButton href="/contact" variant={status === 'Now Enrolling' ? 'primary' : 'secondary'} className="text-sm py-2.5 px-6">
        {status === 'Now Enrolling' ? 'Enroll Now' : 'Join Waitlist'}
      </CTAButton>
    </div>
  );
}
