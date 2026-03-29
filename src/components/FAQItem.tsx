'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  id: string;
}

export default function FAQItem({ question, answer, id }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${id}`;
  const buttonId = `faq-btn-${id}`;

  return (
    <div className="border-b border-neutral-200 last:border-0">
      <button
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-start justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-brand-purple rounded"
      >
        <span className="font-semibold text-neutral-900 text-base leading-snug">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-brand-purple shrink-0 mt-0.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <p className="text-neutral-600 leading-relaxed text-base">{answer}</p>
      </div>
    </div>
  );
}
