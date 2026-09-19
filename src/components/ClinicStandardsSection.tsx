import React from 'react';
import { ShieldCheck, Award, Flame, Droplets, Wind, CheckCircle2 } from 'lucide-react';

export const ClinicStandardsSection: React.FC = () => {
  return (
    <section id="safety-standards" className="py-12 lg:py-12 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200/80 text-[#006970] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-[#006970]" />
            <span>Zero Cross-Contamination Guarantee</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-3xl lg:text-3xl font-extrabold text-[#0a2540] tracking-tight">
            Hospital-Grade Sterilization & Clinical Safety
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Your health and peace of mind are our highest priorities. Every instrument, surface, and aerosol is sterilized according to strict international protocols.
          </p>
        </div>

        {/* 4-Step Hygiene Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 text-[#00478d] flex items-center justify-center group-hover:bg-[#00478d] group-hover:text-white transition-colors shadow-2xs">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#00478d] uppercase tracking-wider block">Step 01 • Class-B Autoclave</span>
              <h3 className="font-outfit font-bold text-base text-[#0a2540] mt-1">
                Vacuum Steam Sterilization
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              134°C high-pressure vacuum steam cycle killing 100% of bacterial spores, viruses, and resistant pathogens.
            </p>
            <div className="pt-2 border-t border-slate-200/70 flex items-center gap-1.5 text-[11px] font-bold text-[#006970]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Color-changing test strips</span>
            </div>
          </div>

          <div className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-teal-300 transition-all space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 text-[#006970] flex items-center justify-center group-hover:bg-[#006970] group-hover:text-white transition-colors shadow-2xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#006970] uppercase tracking-wider block">Step 02 • Sealed Pouches</span>
              <h3 className="font-outfit font-bold text-base text-[#0a2540] mt-1">
                Hermetically Sealed Packs
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Instruments are packaged in surgical-grade medical pouches and unsealed exclusively in front of each patient.
            </p>
            <div className="pt-2 border-t border-slate-200/70 flex items-center gap-1.5 text-[11px] font-bold text-[#006970]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>100% Single-Use Disposables</span>
            </div>
          </div>

          <div className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-[#005fb8] flex items-center justify-center group-hover:bg-[#005fb8] group-hover:text-white transition-colors shadow-2xs">
              <Droplets className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#005fb8] uppercase tracking-wider block">Step 03 • Operatory Sanitization</span>
              <h3 className="font-outfit font-bold text-base text-[#0a2540] mt-1">
                Disinfected Dental Chairs
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              All touch points, handles, and dental chair tubing undergo hospital-grade chemical wipe downs between appointments.
            </p>
            <div className="pt-2 border-t border-slate-200/70 flex items-center gap-1.5 text-[11px] font-bold text-[#006970]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Biofilm-free purified water</span>
            </div>
          </div>

          <div className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-indigo-300 transition-all space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center justify-center group-hover:bg-indigo-700 group-hover:text-white transition-colors shadow-2xs">
              <Wind className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider block">Step 04 • Air Quality</span>
              <h3 className="font-outfit font-bold text-base text-[#0a2540] mt-1">
                UV-C & HEPA Filtration
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Medical-grade air purifiers and extraoral aerosol suction trap 99.97% of airborne dental particulates and aerosols.
            </p>
            <div className="pt-2 border-t border-slate-200/70 flex items-center gap-1.5 text-[11px] font-bold text-[#006970]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Clean, odorless clinical air</span>
            </div>
          </div>

        </div>

        {/* Accreditations Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-sky-50 via-teal-50/50 to-slate-50 border border-slate-200/80 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-xl shadow-xs border border-slate-200/80 flex items-center justify-center text-[#00478d]">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-outfit font-bold text-sm text-[#0a2540]">
                Certified Member of Indian Dental Association (IDA)
              </h4>
              <p className="text-xs text-slate-500 font-normal">
                Compliant with international dental sterilization and patient protocol guidelines.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-bold text-slate-700">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#006970]" />
              ISO 9001 Standards
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#006970]" />
              Bio-Medical Waste Registered
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#006970]" />
              Zero Contamination Record
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
