import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Phone, Calendar } from 'lucide-react';
import { FAQS } from '../data/patientData';

interface FaqSectionProps {
  onOpenBooking: () => void;
  onOpenCall: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking, onOpenCall }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-sky-50 border border-sky-200/80 text-[#00478d] rounded-full text-xs font-bold uppercase tracking-wider shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#00478d]" />
            <span>Clear Answers & Pricing Guidance</span>
          </div>

          <h2 className="font-outfit text-3xl sm:text-3xl font-extrabold text-[#0a2540] tracking-tight">
            Frequently Asked Patient Questions
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Everything you need to know about visits, safety, 0% EMI payment options, and pain-free treatments.
          </p>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`border rounded-2xl overflow-hidden bg-white transition-all ${
                  isOpen
                    ? 'border-[#00478d]/30 shadow-md ring-1 ring-[#00478d]/10'
                    : 'border-slate-200/90 shadow-2xs hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                >
                  <span className="font-outfit font-bold text-base sm:text-lg text-[#0a2540]">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#00478d] text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200 font-normal">
                    <p>{faq.answer}</p>
                    <div className="mt-3.5 inline-block text-[11px] font-bold text-[#006970] bg-teal-50 border border-teal-200/70 px-2.5 py-1 rounded-md">
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 sm:p-5 rounded-2xl bg-[#f8fafc] border border-slate-200/90 text-center space-y-4 shadow-xs">
          <h4 className="font-outfit text-xl font-bold text-[#0a2540]">
            Have a question not answered here?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto font-normal">
            Our friendly dental receptionists are happy to assist you with appointment bookings, insurance coverage, or treatment quotes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenCall}
              className="border-2 border-[#006970] text-[#006970] hover:bg-[#006970]/10 px-5 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 bg-white"
            >
              <Phone className="w-4 h-4" />
              <span>Call Front Desk (+91-98290-12345)</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="bg-[#00478d] hover:bg-[#003870] text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow-[0_4px_14px_rgba(0,71,141,0.25)] transition-all flex items-center gap-2 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Consultation</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
