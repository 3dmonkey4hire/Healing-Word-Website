const phases = [
  {
    number: 1,
    title: 'Check-In Circle',
    duration: '10 min',
    description:
      'A brief check-in as yourselves — not as characters. "How are you showing up today?" Grounds the group before entering the story.',
    color: '#2D6A4F',
  },
  {
    number: 2,
    title: 'World Entry',
    duration: '5 min',
    description:
      'Drew recaps where we left off in the campaign. We step back into the world together. A brief ritual that signals the shift from real to fictional space.',
    color: '#2D6A4F',
  },
  {
    number: 3,
    title: 'The Session Adventure',
    duration: '55 min',
    description:
      "The therapeutic heart. Custom challenges, NPCs, and story beats designed around the group's real themes — trust, identity, conflict, courage. Drew watches for projective material and shapes the narrative toward growth without breaking immersion.",
    color: '#2D6A4F',
  },
  {
    number: 4,
    title: 'The Debrief',
    duration: '15 min',
    description:
      'The most clinically important part. Drew guides everyone out of the fiction: "Your character just did something brave — when in your own life have you had to do that?" This is where story becomes therapy. Never optional, never skipped.',
    color: '#2D6A4F',
  },
  {
    number: 5,
    title: 'Check-Out & Intentions',
    duration: '5 min',
    description:
      "Each member names one thing they're taking with them. Sometimes a small 'real-life quest' to try before the next session.",
    color: '#2D6A4F',
  },
];

export default function PhaseTimeline() {
  return (
    <div className="flex flex-col gap-0">
      {phases.map((phase, i) => (
        <div key={phase.number} className="flex gap-6">
          {/* Spine */}
          <div className="flex flex-col items-center">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
              style={{ backgroundColor: phase.color }}
            >
              {phase.number}
            </div>
            {i < phases.length - 1 && (
              <div className="w-0.5 flex-1 my-1" style={{ backgroundColor: '#D3D1C7', minHeight: '2rem' }} />
            )}
          </div>

          {/* Content */}
          <div className="pb-8 flex-1">
            <div className="flex items-baseline gap-3 mb-1">
              <h3 className="font-semibold text-neutral-900 text-lg">{phase.title}</h3>
              <span className="text-sm text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-full">{phase.duration}</span>
            </div>
            <p className="text-neutral-600 leading-relaxed">{phase.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
