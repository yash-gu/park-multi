import React from 'react';
import { X, Calendar, Check, Clock, ShieldCheck, AlertCircle } from 'lucide-react';
import { Treatment } from '../types';

interface TreatmentDetailModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBookTreatment: (treatmentId: string) => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  treatment,
  onClose,
  onBookTreatment,
}) => {
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col my-auto">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0a2540] via-[#00478d] to-[#005fb8] text-white p-6 flex items-start justify-between shrink-0">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest bg-white/20 text-sky-300 px-2.5 py-1 rounded-full">
              {treatment.category}
            </span>
            <h3 className="font-outfit text-2xl font-bold text-white mt-2">
              {treatment.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700">
          
          {/* Overview */}
          <div>
            <h4 className="font-outfit text-xs font-bold uppercase tracking-wider text-[#006970] mb-2">
              Procedure Overview
            </h4>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
              {treatment.description}
            </p>
          </div>

          {/* Key Clinical Features */}
          <div className="p-4 bg-[#f8fafc] rounded-2xl border border-slate-200/90">
            <h4 className="font-outfit text-xs font-bold uppercase tracking-wider text-[#0a2540] mb-3">
              Key Clinical Features & Advantages
            </h4>
            <ul className="space-y-2">
              {treatment.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                  <span className="w-5 h-5 rounded-full bg-teal-50 border border-teal-200 text-[#006970] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Clinical Info */}
          <div className="grid grid-cols-2 gap-4 text-xs font-medium">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#006970] shrink-0" />
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Duration</span>
                <span className="text-[#0a2540] font-bold">{treatment.duration || '30 - 45 Mins'}</span>
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#00478d] shrink-0" />
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Sterilization</span>
                <span className="text-[#0a2540] font-bold">100% Hospital Grade</span>
              </div>
            </div>
          </div>

          <div className="p-3.5 bg-sky-50 border border-sky-200/80 rounded-xl text-xs text-[#00478d] flex items-center gap-2 font-medium">
            <AlertCircle className="w-4 h-4 shrink-0 text-[#006970]" />
            <span>Consultation included in initial checkup visit. Zero hidden charges.</span>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900"
          >
            Close Window
          </button>

          <button
            onClick={() => {
              onClose();
              onBookTreatment(treatment.id);
            }}
            className="bg-[#00478d] hover:bg-[#003870] text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-[0_4px_14px_rgba(0,71,141,0.25)] flex items-center gap-2 active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>Book This Procedure</span>
          </button>
        </div>

      </div>
    </div>
  );
};
