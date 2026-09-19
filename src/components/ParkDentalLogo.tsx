import React from 'react';

interface ParkDentalLogoProps {
  className?: string;
  variant?: 'icon' | 'full';
  showText?: boolean;
}

export const ParkDentalLogo: React.FC<ParkDentalLogoProps> = ({
  className = 'h-11 w-11',
  variant = 'icon',
  showText = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${variant === 'full' ? 'flex-col sm:flex-row' : ''}`}>
      <div className="relative shrink-0 overflow-hidden rounded-xl bg-white p-0.5 shadow-sm border border-slate-200/80">
        <img
          src="/logo.jpeg"
          alt="Park Dental Multispeciality Clinic Logo"
          className={`${className} object-cover object-center rounded-lg`}
          referrerPolicy="no-referrer"
        />
      </div>

      {(showText || variant === 'full') && (
        <div className="text-left flex flex-col justify-center">
          <span className="font-outfit text-xl sm:text-2xl font-extrabold text-[#00478d] tracking-tight leading-none uppercase">
            Park Dental
          </span>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-[#006970] font-bold mt-1">
            Multispeciality Clinic
          </span>
        </div>
      )}
    </div>
  );
};
