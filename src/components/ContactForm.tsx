'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle } from 'lucide-react';
import CTAButton from './CTAButton';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  contactMethod: string;
  ageRange: string;
  reason: string;
  groupInterest: string;
  message?: string;
  referral: string;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const inputClass =
    'w-full border border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple';
  const labelClass = 'block text-sm font-medium text-neutral-700 mb-1';
  const errorClass = 'text-red-600 text-xs mt-1';

  function onSubmit(_data: FormData) {
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center gap-4 py-12">
        <CheckCircle className="w-16 h-16 text-brand-teal" />
        <h2 className="text-2xl font-bold text-neutral-900" style={{ fontFamily: 'var(--font-lora)' }}>
          Message received!
        </h2>
        <p className="text-neutral-600 leading-relaxed max-w-sm">
          Thanks for reaching out. Drew will be in touch within 1 business day to schedule your free consultation. We look forward to meeting you.
        </p>
        <CTAButton href="/" variant="secondary">Back to Home</CTAButton>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Full Name */}
      <div>
        <label htmlFor="name" className={labelClass}>Full Name <span aria-hidden="true" className="text-brand-coral">*</span></label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          className={inputClass}
          aria-required="true"
          aria-describedby={errors.name ? 'name-error' : undefined}
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p id="name-error" className={errorClass} role="alert">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>Email Address <span aria-hidden="true" className="text-brand-coral">*</span></label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={inputClass}
          aria-required="true"
          aria-describedby={errors.email ? 'email-error' : undefined}
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /\S+@\S+\.\S+/, message: 'Enter a valid email' },
          })}
        />
        {errors.email && <p id="email-error" className={errorClass} role="alert">{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClass}>Phone Number <span className="text-neutral-400 font-normal">(optional)</span></label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          className={inputClass}
          {...register('phone')}
        />
      </div>

      {/* Contact Method */}
      <fieldset>
        <legend className={labelClass}>Preferred Contact Method <span aria-hidden="true" className="text-brand-coral">*</span></legend>
        <div className="flex gap-6 mt-1">
          {['Email', 'Phone', 'Either'].map((opt) => (
            <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value={opt}
                className="accent-brand-purple"
                {...register('contactMethod', { required: true })}
              />
              {opt}
            </label>
          ))}
        </div>
        {errors.contactMethod && <p className={errorClass} role="alert">Please select a contact method</p>}
      </fieldset>

      {/* Age Range */}
      <div>
        <label htmlFor="ageRange" className={labelClass}>Age Range <span aria-hidden="true" className="text-brand-coral">*</span></label>
        <select
          id="ageRange"
          className={inputClass}
          aria-required="true"
          {...register('ageRange', { required: 'Please select an age range' })}
        >
          <option value="">Select one</option>
          <option value="15-17">15-17</option>
          <option value="18-22">18-22</option>
          <option value="23-32">23-32</option>
          <option value="parent">I am a parent/guardian</option>
        </select>
        {errors.ageRange && <p className={errorClass} role="alert">{errors.ageRange.message}</p>}
      </div>

      {/* Reason */}
      <div>
        <label htmlFor="reason" className={labelClass}>What brings you here? <span aria-hidden="true" className="text-brand-coral">*</span></label>
        <select
          id="reason"
          className={inputClass}
          aria-required="true"
          {...register('reason', { required: 'Please select a reason' })}
        >
          <option value="">Select one</option>
          <option value="anxiety">Anxiety</option>
          <option value="depression">Depression</option>
          <option value="life-transitions">Life Transitions</option>
          <option value="identity">Identity</option>
          <option value="relationships">Relationships</option>
          <option value="academic-work">Academic/Work Stress</option>
          <option value="exploring">Just Exploring</option>
          <option value="other">Other</option>
        </select>
        {errors.reason && <p className={errorClass} role="alert">{errors.reason.message}</p>}
      </div>

      {/* Group Interest */}
      <div>
        <label htmlFor="groupInterest" className={labelClass}>Are you interested in groups? <span aria-hidden="true" className="text-brand-coral">*</span></label>
        <select
          id="groupInterest"
          className={inputClass}
          aria-required="true"
          {...register('groupInterest', { required: 'Please select an option' })}
        >
          <option value="">Select one</option>
          <option value="yes">Yes — tell me more</option>
          <option value="no">No — individual only</option>
          <option value="unsure">Not sure yet</option>
        </select>
        {errors.groupInterest && <p className={errorClass} role="alert">{errors.groupInterest.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>Tell me a little about what you are looking for <span className="text-neutral-400 font-normal">(optional)</span></label>
        <textarea
          id="message"
          rows={4}
          className={inputClass}
          {...register('message')}
        />
      </div>

      {/* Referral */}
      <div>
        <label htmlFor="referral" className={labelClass}>How did you hear about us? <span aria-hidden="true" className="text-brand-coral">*</span></label>
        <select
          id="referral"
          className={inputClass}
          aria-required="true"
          {...register('referral', { required: 'Please select an option' })}
        >
          <option value="">Select one</option>
          <option value="psychology-today">Psychology Today</option>
          <option value="instagram">Instagram</option>
          <option value="tiktok">TikTok</option>
          <option value="google">Google</option>
          <option value="friend-family">Friend/Family</option>
          <option value="school-counselor">School Counselor</option>
          <option value="other">Other</option>
        </select>
        {errors.referral && <p className={errorClass} role="alert">{errors.referral.message}</p>}
      </div>

      <CTAButton href="" type="submit" variant="primary" fullWidth>
        Send My Request
      </CTAButton>

      <p className="text-xs italic text-neutral-500 text-center mt-2">
        This form is not monitored for crisis situations. If you are in immediate danger, please call 911.
        If you are in crisis, please call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline).
      </p>
    </form>
  );
}
