import React from 'react';
import { ShieldCheck, CreditCard, Coffee, FileText, Heart, Sparkles, Phone, ArrowRight } from 'lucide-react';
import { COMFORT_AMENITIES } from '../data/patientData';

interface PatientComfortProps {
  onOpenBooking: () => void;
  onOpenCall: () => void;
}

export const PatientComfortSection: React.FC<PatientComfortProps> = ({ onOpenBooking, onOpenCall }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#006970]" />;
      case 'CreditCard': return <CreditCard className="w-6 h-6 text-[#00478d]" />;
      case 'Coffee': return <Coffee className="w-6 h-6 text-[#006970]" />;
      case 'FileText': return <FileText className="w-6 h-6 text-[#00478d]" />;
      default: return <Heart className="w-6 h-6 text-[#006970]" />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f8fafc] border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Banner Card */}
        <div className="bg-gradient-to-br from-[#0a2540] via-[#00478d] to-[#005fb8] text-white rounded-3xl p-8 sm:p-12 shadow-[0_15px_40px_-10px_rgba(10,37,64,0.3)] relative overflow-hidden">
          
          {/* Subtle Ambient Decorative Circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/15 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-sky-300 mb-4 border border-white/10">
              <Heart className="w-3.5 h-3.5 fill-sky-300" />
              <span>Empathy & Gentle Care</span>
            </div>

            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white mb-4 tracking-tight">
              We Ease Your Dental Anxiety with <span className="text-sky-300">Gentle Hands</span> & Complete Transparency.
            </h2>

            <p className="text-sky-100/90 text-base sm:text-lg leading-relaxed mb-8 font-normal">
              Dental fear is completely natural. That&apos;s why at Park Dental, we take extra time to listen to your concerns, explain every step beforehand, and ensure zero surprises—both clinically and financially.
            </p>
          </div>

          {/* 4 Comfort Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-white/10">
            {COMFORT_AMENITIES.map((item, idx) => (
              <div key={idx} className="bg-white text-slate-800 p-5 rounded-2xl shadow-sm border border-white/40 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-3">
                  {getIcon(item.icon)}
                </div>
                <h3 className="font-outfit font-bold text-base text-[#0a2540] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-sky-200 font-medium">
              <Sparkles className="w-4 h-4 text-sky-300" />
              <span>Need 0% EMI payment options for implants or aligners? Ask our front desk!</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenCall}
                className="w-full sm:w-auto border border-white/30 hover:bg-white/10 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-sky-300" />
                <span>Talk to Front Desk</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto bg-sky-300 text-[#0a2540] hover:bg-sky-200 px-6 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95"
              >
                <span>Book Gentle Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
