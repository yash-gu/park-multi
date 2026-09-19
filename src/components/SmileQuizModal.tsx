import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, ArrowLeft, Calendar, } from 'lucide-react';
import { TREATMENTS } from '../data/treatments';

interface SmileQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookTreatment: (treatmentId: string) => void;
}

export const SmileQuizModal: React.FC<SmileQuizModalProps> = ({
  isOpen,
  onClose,
  onBookTreatment,
}) => {
  const [step, setStep] = useState<number>(1);
  const [primaryConcern, setPrimaryConcern] = useState<string>('');


  if (!isOpen) return null;

  const concerns = [
    { id: 'pain', label: 'Toothache / Sensitive Teeth / Cavity', recoId: 'gen-4' }, // RCT or Checkup
    { id: 'align', label: 'Crooked Teeth / Gaps / Overbite', recoId: 'ortho-1' }, // Aligners
    { id: 'missing', label: 'Missing Tooth / Trouble Chewing', recoId: 'imp-1' }, // Dental Implants
    { id: 'beauty', label: 'Yellow Teeth / Stain / Discoloration', recoId: 'cos-3' }, // Teeth Whitening
    { id: 'wisdom', label: 'Wisdom Tooth Pain / Jaw Swelling', recoId: 'surg-1' }, // Wisdom Tooth Removal
  ];

  const handleSelectConcern = (concernId: string) => {
    setPrimaryConcern(concernId);
    setStep(2);
  };

  const handleSelectUrgency = (urgencyVal: string) => {
    setUrgency(urgencyVal);
    setStep(3);
  };

  const selectedConcernObj = concerns.find((c) => c.id === primaryConcern);
  const recommendedTreatment = TREATMENTS.find((t) => t.id === selectedConcernObj?.recoId) || TREATMENTS[0];

  const resetQuiz = () => {
    setStep(1);
    setPrimaryConcern('');
    setUrgency('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto">
        
        {/* Header */}
        <div className="bg-[#00478d] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#7df4ff]" />
            <div>
              <h3 className="font-playfair text-xl font-bold">Smile & Dental Helper</h3>
              <p className="text-xs text-blue-200">Find your ideal procedure in 30 seconds</p>
            </div>
          </div>
          <button
            onClick={() => {
              resetQuiz();
              onClose();
            }}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close quiz"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          
          {/* Step Indicators */}
          <div className="flex items-center justify-between text-xs font-semibold text-slate-400 border-b border-slate-100 pb-3">
            <span className={step >= 1 ? 'text-[#00478d] font-bold' : ''}>1. Main Concern</span>
            <span>&rarr;</span>
            <span className={step >= 2 ? 'text-[#00478d] font-bold' : ''}>2. Timeline</span>
            <span>&rarr;</span>
            <span className={step === 3 ? 'text-[#00478d] font-bold' : ''}>3. Recommendation</span>
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="font-playfair text-lg font-bold text-[#00478d]">
                What brings you to Park Dental today?
              </h4>
              <p className="text-xs text-slate-600">Select the primary concern you would like Dr. Rajendra and team to evaluate:</p>

              <div className="space-y-2.5">
                {concerns.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleSelectConcern(c.id)}
                    className="w-full text-left p-4 rounded-xl border border-slate-200/80 hover:border-[#00478d] hover:bg-slate-50 transition-all text-sm font-semibold text-slate-800 flex items-center justify-between group"
                  >
                    <span>{c.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#00478d] group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-4">
              <button
                onClick={() => setStep(1)}
                className="text-xs text-[#006970] font-semibold hover:underline flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to concerns</span>
              </button>

              <h4 className="font-playfair text-lg font-bold text-[#00478d]">
                How soon would you like to see our specialists?
              </h4>

              <div className="space-y-2.5">
                <button
                  onClick={() => handleSelectUrgency('Immediate / Pain Relief')}
                  className="w-full text-left p-4 rounded-xl border border-rose-200 bg-rose-50/50 hover:bg-rose-50 transition-all text-sm font-semibold text-rose-900 flex items-center justify-between"
                >
                  <div>
                    <span className="block font-bold">As soon as possible (Emergency)</span>
                    <span className="text-xs font-normal text-rose-700">Experiencing discomfort or pain</span>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-rose-600" />
                </button>

                <button
                  onClick={() => handleSelectUrgency('This Week')}
                  className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-[#00478d] hover:bg-slate-50 transition-all text-sm font-semibold text-slate-800 flex items-center justify-between"
                >
                  <div>
                    <span className="block font-bold">Within the next few days</span>
                    <span className="text-xs font-normal text-slate-500">Flexible consultation timing</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>

                <button
                  onClick={() => handleSelectUrgency('General Inquiry')}
                  className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-[#00478d] hover:bg-slate-50 transition-all text-sm font-semibold text-slate-800 flex items-center justify-between"
                >
                  <div>
                    <span className="block font-bold">Just exploring options</span>
                    <span className="text-xs font-normal text-slate-500">Looking for advice & cost estimate</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-5 text-center">
              <div className="w-12 h-12 bg-[#006970]/10 text-[#006970] rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider font-bold text-[#006970]">
                  Recommended Solution
                </span>
                <h4 className="font-playfair text-2xl font-bold text-[#00478d]">
                  {recommendedTreatment.name}
                </h4>
                <p className="text-xs text-slate-500 font-semibold">{recommendedTreatment.category}</p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-left">
                {recommendedTreatment.description}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={resetQuiz}
                  className="px-4 py-3 border border-slate-200 text-slate-600 rounded-xl text-xs font-semibold hover:bg-slate-50"
                >
                  Start Over
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onBookTreatment(recommendedTreatment.id);
                  }}
                  className="flex-1 bg-[#00478d] hover:bg-[#003870] text-white py-3 rounded-xl text-xs font-semibold shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book This Consultation</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
