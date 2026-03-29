'use client';

import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'light' | 'amber';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
  style?: React.CSSProperties;
}

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  className = '',
  onClick,
  type,
  fullWidth,
  style,
}: CTAButtonProps) {
  const base = 'inline-block px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 cursor-pointer text-center';

  const variants = {
    primary:
      'bg-brand-purple text-white hover:bg-brand-purple-dark shadow-sm hover:shadow-md active:scale-95',
    secondary:
      'border-2 border-brand-purple text-brand-purple hover:bg-brand-purple-light',
    light:
      'border-2 border-white text-white hover:bg-white/10',
    amber:
      'bg-brand-amber text-white hover:opacity-90 shadow-sm hover:shadow-md active:scale-95',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const allClasses = `${base} ${variants[variant]} ${widthClass} ${className}`;

  if (type === 'submit' || !href) {
    return (
      <button type={type || 'button'} className={allClasses} onClick={onClick} style={style}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href} className={allClasses} onClick={onClick} style={style}>
      {children}
    </Link>
  );
}
