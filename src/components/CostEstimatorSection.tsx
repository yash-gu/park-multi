import React, { useState } from 'react';
import { Calculator, CreditCard, ShieldCheck, CheckCircle2, Calendar, Sparkles, ArrowRight, HelpCircle } from 'lucide-react';

interface CostEstimatorProps {
  onOpenBooking: (treatmentId?: string) => void;
}

interface ProcedureCost {
  id: string;
  name: string;
  category: string;
  minCost: number;
  maxCost: number;
  sessions: string;
  included: string[];
  treatmentId: string;
}

const PROCEDURES: ProcedureCost[] = [
  {
    id: 'rct',
    name: 'Single Sitting Root Canal (RCT) + Crown',
    category: 'Restorative Care',
    minCost: 4500,
    maxCost: 8500,
    sessions: '1 - 2 Sessions (60 mins)',
    included: ['Digital 3D X-Ray', 'Computerized Painless Anesthesia', 'Post & Core if needed', 'Zirconia / Ceramic Crown'],
    treatmentId: 'gen-4',
  },
  {
    id: 'aligners',
    name: 'Invisible Clear Aligners (Full Course)',
    category: 'Orthodontics',
    minCost: 45000,
    maxCost: 110000,
    sessions: '6 - 12 Months Trays',
    included: ['3D Intraoral Digital Scan', 'Video Simulation of Final Smile', 'All Custom Aligner Sets', 'Post-Treatment Retainers'],
    treatmentId: 'ortho-1',
  },
  {
    id: 'implant',
    name: 'Swiss Titanium Dental Implant + Crown',
    category: 'Implantology',
    minCost: 22000,
    maxCost: 42000,
    sessions: '2 Stages (Lifetime Guarantee)',
    included: ['CBCT 3D Bone Analysis', 'Computer-Guided Surgical Stent', 'Titanium Abutment', 'CAD-CAM Screw-Retained Crown'],
    treatmentId: 'imp-1',
  },
  {
    id: 'whitening',
    name: 'In-Office Diode Laser Teeth Whitening',
    category: 'Cosmetic Dentistry',
    minCost: 6500,
    maxCost: 11000,
    sessions: 'Single 45 Min Session',
    included: ['Plaque & Tartar Polishing', 'Gingival Barrier Protection', '3 Cycles of Diode Laser Activation', 'Post-Op Sensitivity Gel'],
    treatmentId: 'cos-1',
  },
  {
    id: 'veneers',
    name: 'Ultra-Thin Ceramic Porcelain Veneers',
    category: 'Cosmetic Dentistry',
    minCost: 8000,
    maxCost: 14000,
    sessions: '2 Appointments per tooth',
    included: ['Digital Smile Design Mockup', 'Minimal Prep Enamel Care', 'Custom Hand-Layered Ceramic', '15-Year Shade Guarantee'],
    treatmentId: 'cos-4',
  },
  {
    id: 'wisdom',
    name: 'Impacted Wisdom Tooth Surgical Removal',
    category: 'Oral Surgery',
    minCost: 3500,
    maxCost: 6500,
    sessions: '1 Session (30 - 45 mins)',
    included: ['OPG / Panoramic Digital X-Ray', 'Painless Local Anesthesia', 'Atraumatic Surgical Extraction', 'Suture Removal & Follow-up'],
    treatmentId: 'surg-1',
  },
];

export const CostEstimatorSection: React.FC<CostEstimatorProps> = ({ onOpenBooking }) => {
  const [selectedProc, setSelectedProc] = useState<ProcedureCost>(PROCEDURES[0]);
  const [emiTenure, setEmiTenure] = useState<number>(6); // months

  const avgCost = Math.round((selectedProc.minCost + selectedProc.maxCost) / 2);
  const monthlyEmi = Math.round(avgCost / emiTenure);

  return (
    <section id="cost-estimator" className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 text-[#00478d] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Calculator className="w-4 h-4 text-[#00478d]" />
            <span>Transparent Pricing & 0% EMI Calculator</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a2540] tracking-tight">
            Clear, Honest Pricing with Zero Hidden Costs
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            We believe world-class dentistry should be transparent and accessible. Calculate your estimated procedure investment and flexible 0% interest monthly installment plan below.
          </p>
        </div>

        {/* Main 2-Column Calculator Box */}
        <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-[0_8px_30px_rgba(10,37,64,0.06)] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Procedure Selector & Inclusions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                1. Select Dental Treatment
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PROCEDURES.map((p) => {
                  const isSelected = p.id === selectedProc.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setSelectedProc(p)}
                      className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'bg-white border-[#00478d] ring-2 ring-[#00478d]/20 shadow-sm'
                          : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300'
                      }`}
                    >
                      <span className="text-[11px] font-bold text-[#006970] uppercase">{p.category}</span>
                      <span className="font-outfit font-bold text-xs sm:text-sm text-[#0a2540] mt-1 leading-snug">
                        {p.name}
                      </span>
                      <span className="text-xs text-slate-500 mt-2 font-semibold">
                        ₹{p.minCost.toLocaleString()} - ₹{p.maxCost.toLocaleString()}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Inclusions Card */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/90 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Included in This Treatment
                </span>
                <span className="text-xs font-bold text-[#006970] bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200/70">
                  {selectedProc.sessions}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {selectedProc.included.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <span className="w-4 h-4 rounded-full bg-teal-50 text-[#006970] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium bg-amber-50/70 border border-amber-200/70 p-3 rounded-xl">
              <HelpCircle className="w-4 h-4 text-amber-700 shrink-0" />
              <span>*Exact cost is confirmed after 3D clinical examination, as individual tooth anatomy and case complexity vary.</span>
            </div>
          </div>

          {/* Right Column: Calculated Cost & 0% EMI Display (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0a2540] via-[#003870] to-[#00478d] text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-6 relative overflow-hidden">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-300 flex items-center gap-1.5">
                <CreditCard className="w-4 h-4" />
                Estimated Procedure Investment
              </span>
              <div className="font-outfit text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                ₹{selectedProc.minCost.toLocaleString()} - ₹{selectedProc.maxCost.toLocaleString()}
              </div>
              <p className="text-xs text-sky-200/80 font-normal">
                Includes all diagnostics, specialist consultations, and sterilization fees.
              </p>
            </div>

            {/* 0% EMI Section */}
            <div className="relative z-10 pt-5 border-t border-white/15 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-200">
                  0% Interest EMI Option
                </span>
                <span className="text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded-full">
                  Zero Processing Fee
                </span>
              </div>

              {/* Tenure selector */}
              <div className="grid grid-cols-4 gap-2">
                {[3, 6, 9, 12].map((tenure) => (
                  <button
                    key={tenure}
                    onClick={() => setEmiTenure(tenure)}
                    className={`py-2 rounded-xl text-xs font-bold transition-all ${
                      emiTenure === tenure
                        ? 'bg-sky-400 text-[#0a2540] shadow-sm font-extrabold'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                    }`}
                  >
                    {tenure} Mo
                  </button>
                ))}
              </div>

              {/* Monthly Amount display */}
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-center">
                <span className="text-[11px] text-sky-200 block uppercase tracking-wider font-semibold">
                  Starting as low as
                </span>
                <span className="font-outfit text-3xl font-extrabold text-white block my-1">
                  ₹{monthlyEmi.toLocaleString()} <span className="text-xs font-normal text-sky-300">/ month</span>
                </span>
                <span className="text-[10px] text-sky-200/70">
                  For {emiTenure} months on Bajaj Finserv, HDFC, ICICI, SBI & major cards
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="relative z-10 pt-2">
              <button
                onClick={() => onOpenBooking(selectedProc.treatmentId)}
                className="w-full bg-gradient-to-r from-sky-300 to-teal-200 hover:from-sky-200 hover:to-teal-100 text-[#0a2540] py-3.5 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Clinical Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[10px] text-sky-200/70 mt-2 font-medium">
                No advance payment needed • Instant confirmation via WhatsApp
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
