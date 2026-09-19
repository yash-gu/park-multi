import React, { useState } from 'react';
import { Calendar, ShieldCheck, MapPin, CheckCircle2, Phone, Sparkles, Star, Award, Clock, ArrowRight, Activity, Check } from 'lucide-react';
import { CLINIC_INFO, TREATMENTS } from '../data/treatments';

interface HeroProps {
  onOpenBooking: (treatmentId?: string) => void;
  onOpenCall: () => void;
  onOpenQuiz?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenCall, onOpenQuiz }) => {
  const [quickTreatment, setQuickTreatment] = useState(TREATMENTS[0].id);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/80">
      
      {/* Background Ambient Glows & Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#00478d_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
      <div className="absolute -top-24 right-0 w-[36rem] h-[36rem] bg-gradient-to-bl from-sky-200/50 via-teal-100/40 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-gradient-to-tr from-blue-200/40 to-teal-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Hero 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (7 cols): Headline, Trust Badges, Value Props */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Pill / Live Status */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white border border-sky-200 text-[#00478d] rounded-full text-xs font-bold shadow-xs hover:border-sky-300 transition-all">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-800 font-semibold">Jaipur&apos;s Premier Multispeciality Dental Center</span>
              <span className="text-slate-300">•</span>
              <span className="text-[#006970] font-bold flex items-center gap-1">
                <Award className="w-3.5 h-3.5" /> 5.0 Rated (500+ Reviews)
              </span>
            </div>

            {/* Bold Headline */}
            <h1 className="font-outfit text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold text-[#0a2540] leading-[1.08] tracking-tight">
              World-Class Dental Care for Your{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#00478d] via-[#0284c7] to-[#006970] bg-clip-text text-transparent">
                  Perfect Smile.
                </span>
                <svg className="absolute -bottom-2 left-0 w-full h-2.5 text-[#006970]/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Experience gentle, pain-free dentistry backed by advanced 3D diagnostics, expert MDS specialists, and hospital-grade sterilization in Jaipur.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={() => onOpenBooking()}
                className="bg-gradient-to-r from-[#00478d] to-[#005fb8] hover:from-[#003870] hover:to-[#004c94] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-[0_6px_20px_rgba(0,71,141,0.28)] hover:shadow-[0_8px_25px_rgba(0,71,141,0.38)] transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </button>

              <button
                onClick={onOpenCall}
                className="border-2 border-[#006970] text-[#006970] hover:bg-teal-50 px-6 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 bg-white shadow-2xs hover:border-[#005258]"
              >
                <Phone className="w-4 h-4" />
                <span>Emergency: +91 8287417016</span>
              </button>

              {onOpenQuiz && (
                <button
                  onClick={onOpenQuiz}
                  className="bg-sky-50 hover:bg-sky-100 text-[#00478d] border border-sky-200 px-4 py-3.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <Sparkles className="w-4 h-4 text-sky-600" />
                  <span>Free Smile Assessment</span>
                </button>
              )}
            </div>

            {/* Micro Highlights Bar */}
            <div className="pt-4 border-t border-slate-200/90 grid grid-cols-3 gap-3 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-teal-50 border border-teal-200 text-[#006970] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>39 Specialist Treatments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-teal-50 border border-teal-200 text-[#006970] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Senior MDS Doctors</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-teal-50 border border-teal-200 text-[#006970] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>0% Interest EMI</span>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Interactive Quick Appointment Card & Studio Visual */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Container */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_20px_50px_rgba(10,37,64,0.12)] bg-white">
              
              {/* Top Banner Image with Gradient Overlay */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
                <img
                  src={CLINIC_INFO.heroImageUrl}
                  alt="Park Dental Clinic Studio Jaipur"
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540] via-[#0a2540]/30 to-transparent" />
                
                {/* Floating Rating Tag on Image */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md text-xs font-bold text-[#0a2540] flex items-center gap-1.5">
                  <div className="flex text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                  </div>
                  <span>5.0 / 5.0 Google Maps</span>
                </div>

                {/* Location Badge */}
                <div className="absolute top-4 right-4 bg-[#00478d]/90 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-[11px] font-bold flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-sky-300" />
                  <span>Manyawas, Jaipur</span>
                </div>

                {/* Bottom text inside banner */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-semibold text-sky-300 uppercase tracking-wider">Park Dental Multispeciality</p>
                  <h3 className="font-outfit font-bold text-lg text-white">Instant Consultation Scheduler</h3>
                </div>
              </div>

              {/* Quick Scheduler Box */}
              <div className="p-5 sm:p-6 bg-white space-y-4">
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Select Your Required Treatment
                  </label>
                  <select
                    value={quickTreatment}
                    onChange={(e) => setQuickTreatment(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00478d]"
                  >
                    {TREATMENTS.slice(0, 8).map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.name} ({t.category})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-sky-50/70 border border-sky-100 rounded-xl">
                    <span className="text-slate-500 block text-[10px] font-bold uppercase">Doctors On Duty</span>
                    <span className="font-bold text-[#0a2540]">Dr. Pulkit & Dr. Nidhee</span>
                  </div>
                  <div className="p-3 bg-teal-50/70 border border-teal-100 rounded-xl">
                    <span className="text-slate-500 block text-[10px] font-bold uppercase">Today&apos;s Slots</span>
                    <span className="font-bold text-[#006970]">Available (11 AM - 5 PM)</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking(quickTreatment)}
                  className="w-full bg-[#00478d] hover:bg-[#003870] text-white py-3.5 rounded-xl font-bold text-sm shadow-[0_4px_14px_rgba(0,71,141,0.25)] transition-all flex items-center justify-center gap-2 active:scale-98"
                >
                  <span>Book This Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-center text-[11px] text-slate-500 font-medium">
                  Instant confirmation via WhatsApp & SMS • Zero pre-payment required
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* 4-Card Speciality Features Ribbon */}
        <div className="mt-14 pt-8 border-t border-slate-200/90 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all flex items-start gap-3.5 group">
            <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-200 text-[#00478d] flex items-center justify-center shrink-0 group-hover:bg-[#00478d] group-hover:text-white transition-colors">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-outfit font-bold text-sm text-[#0a2540]">Invisible Clear Aligners</h4>
              <p className="text-xs text-slate-500 mt-0.5 font-normal">Custom 3D scanned aligners without metal wires</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-teal-300 transition-all flex items-start gap-3.5 group">
            <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-200 text-[#006970] flex items-center justify-center shrink-0 group-hover:bg-[#006970] group-hover:text-white transition-colors">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-outfit font-bold text-sm text-[#0a2540]">Painless Root Canal</h4>
              <p className="text-xs text-slate-500 mt-0.5 font-normal">Single-sitting microscopic RCT with zero discomfort</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all flex items-start gap-3.5 group">
            <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 text-[#005fb8] flex items-center justify-center shrink-0 group-hover:bg-[#005fb8] group-hover:text-white transition-colors">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-outfit font-bold text-sm text-[#0a2540]">Lifetime Dental Implants</h4>
              <p className="text-xs text-slate-500 mt-0.5 font-normal">Permanent titanium tooth replacement with natural feel</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all flex items-start gap-3.5 group">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-outfit font-bold text-sm text-[#0a2540]">Emergency Dental Relief</h4>
              <p className="text-xs text-slate-500 mt-0.5 font-normal">Immediate walk-ins & toothache relief assistance</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
