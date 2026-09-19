import React, { useState } from 'react';
import { Stethoscope, AlertTriangle, Clock, ArrowRight, ShieldCheck, CheckCircle2, Calendar, Phone, Sparkles, Zap } from 'lucide-react';

interface SymptomCheckerProps {
  onOpenBooking: (treatmentId?: string) => void;
  onOpenCall: () => void;
}

interface Symptom {
  id: string;
  icon: string;
  label: string;
  severity: 'Immediate' | 'Priority' | 'Elective';
  likelyIssue: string;
  recommendedTreatment: string;
  treatmentId: string;
  specialist: string;
  description: string;
  urgencyColor: string;
  urgencyBg: string;
}

const SYMPTOMS: Symptom[] = [
  {
    id: 'pain',
    icon: '⚡',
    label: 'Sharp Pain with Hot / Cold or Biting',
    severity: 'Priority',
    likelyIssue: 'Deep Tooth Cavity or Infected Nerve Pulp',
    recommendedTreatment: 'Single-Sitting Rotary Root Canal (RCT)',
    treatmentId: 'gen-4',
    specialist: 'Dr. Nidhee Sharma (Endodontic Care)',
    description: 'When decay reaches the inner nerve chamber, tooth sensitivity turns into persistent throbbing pain. Early RCT saves your natural tooth structure.',
    urgencyColor: 'text-amber-700',
    urgencyBg: 'bg-amber-50 border-amber-200',
  },
  {
    id: 'bleeding',
    icon: '🩸',
    label: 'Bleeding Gums When Brushing or Flossing',
    severity: 'Priority',
    likelyIssue: 'Gingivitis or Periodontal Tartar Buildup',
    recommendedTreatment: 'Ultrasonic Deep Scaling & Laser Gum Therapy',
    treatmentId: 'gen-2',
    specialist: 'Dr. Nidhee Sharma (Oral Hygiene Specialist)',
    description: 'Bleeding gums are a warning sign of microbial plaque accumulating beneath the gumline. Timely ultrasonic cleaning prevents irreversible bone loss.',
    urgencyColor: 'text-amber-700',
    urgencyBg: 'bg-amber-50 border-amber-200',
  },
  {
    id: 'crooked',
    icon: '✨',
    label: 'Crooked, Overcrowded Teeth or Gaps',
    severity: 'Elective',
    likelyIssue: 'Dental Malocclusion & Jaw Spacing Discrepancy',
    recommendedTreatment: 'Invisible Clear Aligners or Damon Braces',
    treatmentId: 'ortho-1',
    specialist: 'Dr. Pulkit Sharma (Senior MDS Orthodontist)',
    description: 'Straighten your smile discreetly with custom 3D-scanned invisible trays without metal wires or food restrictions.',
    urgencyColor: 'text-sky-700',
    urgencyBg: 'bg-sky-50 border-sky-200',
  },
  {
    id: 'missing',
    icon: '🦷',
    label: 'Missing One or Multiple Teeth',
    severity: 'Priority',
    likelyIssue: 'Tooth Loss Leading to Bone Resorption',
    recommendedTreatment: 'Permanent Swiss Titanium Dental Implant',
    treatmentId: 'imp-1',
    specialist: 'Dr. Pulkit Sharma (Implant Specialist)',
    description: 'Leaving a tooth gap causes adjacent teeth to drift and jaw bone to shrink. Implants restore 100% natural chewing power with a lifetime warranty.',
    urgencyColor: 'text-amber-700',
    urgencyBg: 'bg-amber-50 border-amber-200',
  },
  {
    id: 'wisdom',
    icon: '🚨',
    label: 'Severe Back Jaw Swelling & Lockjaw',
    severity: 'Immediate',
    likelyIssue: 'Impacted Third Molar (Wisdom Tooth Pericoronitis)',
    recommendedTreatment: 'Painless Surgical Wisdom Tooth Extraction',
    treatmentId: 'surg-1',
    specialist: 'Oral Surgery Specialist',
    description: 'Wisdom teeth trapped beneath the gums cause bacterial infection, cheek biting, and acute jaw pain. Quick atraumatic removal brings instant relief.',
    urgencyColor: 'text-rose-700',
    urgencyBg: 'bg-rose-50 border-rose-200',
  },
  {
    id: 'yellow',
    icon: '🌟',
    label: 'Yellow, Dull or Stained Discoloration',
    severity: 'Elective',
    likelyIssue: 'Tea, Coffee & Fluorosis Enamel Staining',
    recommendedTreatment: 'Advanced Diode Laser Teeth Whitening',
    treatmentId: 'cos-1',
    specialist: 'Cosmetic Dentistry Team',
    description: 'Lift stubborn enamel stains and brighten your smile by up to 8 shades in a single comfortable 45-minute clinical appointment.',
    urgencyColor: 'text-teal-700',
    urgencyBg: 'bg-teal-50 border-teal-200',
  },
];

export const SymptomCheckerSection: React.FC<SymptomCheckerProps> = ({ onOpenBooking, onOpenCall }) => {
  const [selectedSymptom, setSelectedSymptom] = useState<Symptom>(SYMPTOMS[0]);

  return (
    <section id="symptom-checker" className="py-20 lg:py-28 bg-[#f8fafc] border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200/80 text-[#006970] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Stethoscope className="w-4 h-4 text-[#006970]" />
            <span>Interactive Dental Triage & Care Finder</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a2540] tracking-tight">
            Not Sure What You Need? Check Your Symptoms
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Select the dental discomfort or aesthetic concern you are experiencing to see the specialist diagnosis, recommended procedure, and clinical urgency.
          </p>
        </div>

        {/* 2-Column Symptom Triage Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Symptom Selector Buttons (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Select What You Are Experiencing
            </label>
            {SYMPTOMS.map((s) => {
              const isSelected = s.id === selectedSymptom.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedSymptom(s)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-white border-[#00478d] ring-2 ring-[#00478d]/20 shadow-md translate-x-1'
                      : 'bg-white/80 border-slate-200/90 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{s.icon}</span>
                    <div>
                      <h4 className="font-outfit font-bold text-sm text-[#0a2540] leading-snug">
                        {s.label}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">{s.likelyIssue}</p>
                    </div>
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${s.urgencyBg} ${s.urgencyColor}`}
                  >
                    {s.severity}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Diagnosis & Specialist Care Card (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-9 border border-slate-200/90 shadow-[0_12px_35px_-8px_rgba(10,37,64,0.08)] space-y-6">
            
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Identified Condition
                </span>
                <h3 className="font-outfit text-2xl font-bold text-[#0a2540] mt-0.5">
                  {selectedSymptom.likelyIssue}
                </h3>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 ${selectedSymptom.urgencyBg} ${selectedSymptom.urgencyColor}`}>
                <Clock className="w-3.5 h-3.5" />
                <span>Urgency: {selectedSymptom.severity}</span>
              </div>
            </div>

            {/* Explanation */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Doctor Assessment
              </span>
              <p className="text-sm text-slate-600 leading-relaxed font-normal bg-slate-50 p-4 rounded-2xl border border-slate-100">
                {selectedSymptom.description}
              </p>
            </div>

            {/* Recommended Procedure Box */}
            <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-100/90 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00478d] block">
                Recommended Treatment Protocol
              </span>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-outfit font-bold text-lg text-[#0a2540]">
                    {selectedSymptom.recommendedTreatment}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#006970]" />
                    Lead Specialist: <span className="text-[#00478d] font-bold">{selectedSymptom.specialist}</span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#006970]" />
                  <span>Hospital Sterilized Kits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#006970]" />
                  <span>Computerized Painless Care</span>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenBooking(selectedSymptom.treatmentId)}
                className="flex-1 bg-gradient-to-r from-[#00478d] to-[#005fb8] hover:from-[#003870] hover:to-[#004c94] text-white py-3.5 px-5 rounded-xl font-bold text-sm shadow-[0_6px_20px_rgba(0,71,141,0.25)] transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Treatment Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCall}
                className="border-2 border-[#006970] text-[#006970] hover:bg-teal-50 px-5 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 bg-white"
              >
                <Phone className="w-4 h-4" />
                <span>Emergency Help</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
