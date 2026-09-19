import React from 'react';
import { Star, Quote, CheckCircle2, MessageSquare, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/patientData';

interface TestimonialsProps {
  onOpenBooking: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-12 lg:py-16 bg-[#f8fafc] border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-teal-50 border border-teal-200/80 text-[#006970] rounded-full text-xs font-bold uppercase tracking-wider shadow-2xs">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>Real Jaipur Smiles</span>
          </div>

          <h2 className="font-outfit text-3xl sm:text-3xl lg:text-3xl font-extrabold text-[#0a2540] tracking-tight">
            Loved by Patients Across Jaipur
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-normal">
            Hear directly from individuals and families who trusted us with their teeth and smile transformations.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-700 font-bold">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span>5.0 / 5.0 Rating</span>
            <span className="text-slate-300">•</span>
            <span className="text-[#006970] font-bold flex items-center gap-1 bg-teal-50 border border-teal-200/70 px-2.5 py-0.5 rounded-full text-xs">
              <CheckCircle2 className="w-3.5 h-3.5" /> 100% Real Human Reviews from Google Maps
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-[0_10px_30px_rgba(10,37,64,0.08)] hover:border-sky-300 transition-all flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100 group-hover:text-[#00478d]/10 transition-colors pointer-events-none" />

              <div className="space-y-4">
                {/* Rating & Treatment Tag */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-bold bg-sky-50 text-[#00478d] border border-sky-100 px-2.5 py-1 rounded-full">
                    {review.treatmentName}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-sm leading-relaxed italic font-normal">
                  &ldquo;{review.review}&rdquo;
                </p>
              </div>

              {/* Patient Info Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Google Review Authentic Initial Badge */}
                  <div className="relative shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00478d] to-[#006970] text-white flex items-center justify-center font-bold text-sm shadow-xs border border-white">
                      {review.patientName.trim().charAt(0).toUpperCase()}
                    </div>
                    {/* Google G Emblem Badge */}
                    <div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full shadow-xs border border-slate-100 flex items-center justify-center" title="Google Verified Review">
                      <svg className="w-3 h-3" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                      </svg>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-outfit font-bold text-sm text-[#0a2540]">
                        {review.patientName}
                      </h4>
                      {review.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#006970]" title="Verified Patient" />
                      )}
                    </div>
                    <p className="text-xs text-slate-500 font-medium">{review.location}</p>
                  </div>
                </div>

                <span className="text-[11px] text-slate-400 font-medium">{review.date}</span>
              </div>

            </div>
          ))}
        </div>

        {/* CTA to Join Happy Smiles */}
        <div className="mt-12 text-center bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-outfit font-bold text-lg text-[#0a2540]">Ready for your smile journey?</h4>
            <p className="text-xs text-slate-600 font-normal">Schedule your consultation with Jaipur&apos;s leading specialists today.</p>
          </div>
          <button
            onClick={onOpenBooking}
            className="bg-[#00478d] hover:bg-[#003870] text-white px-5 py-2.5 rounded-xl text-xs font-bold shrink-0 shadow-[0_4px_14px_rgba(0,71,141,0.25)] transition-all active:scale-95"
          >
            Book Appointment Now
          </button>
        </div>

      </div>
    </section>
  );
};
