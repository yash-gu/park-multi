import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Calendar, Award } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  duration: string;
  doctor: string;
  description: string;
  image: string;
  highlights: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'Complete Facial Profile Correction',
    category: 'Cosmetic Dentistry',
    duration: 'Comprehensive Treatment',
    doctor: 'Dr. Pulkit & Dr. Nidhee Sharma',
    description: 'Patient presented with severe facial profile concerns. Achieved a balanced, aesthetic facial structure using advanced cosmetic and orthodontic protocols.',
    image: '/image copy 3.png',
    highlights: ['Enhanced facial symmetry', 'Improved lip support', 'Customized digital planning'],
  },
  {
    id: '2',
    title: 'Advanced Scaling & Deep Cleaning',
    category: 'Periodontics',
    duration: 'Single Visit',
    doctor: 'Dr. Nidhee Sharma (BDS)',
    description: 'Thorough removal of deep calculus and stains using ultrasonic scaling, restoring complete gingival health and a brighter smile.',
    image: '/image copy 4.png',
    highlights: ['Zero enamel erosion', 'Instant brightening', '100% Painless procedure'],
  },
  {
    id: '3',
    title: 'Aesthetic Smile Rejuvenation',
    category: 'Aesthetic Dentistry',
    duration: '2 Appointments',
    doctor: 'Dr. Pulkit Sharma (MDS)',
    description: 'Transformed chipped, unevenly spaced front teeth into a symmetrical, bright celebrity smile using ultra-thin custom ceramic veneers.',
    image: '/image copy 5.png',
    highlights: ['Natural tooth translucency', 'Stain-resistant', 'Long-lasting durability'],
  },
  {
    id: '4',
    title: 'Full Arch Immediate Dental Rehabilitation',
    category: 'Implants & Restorative',
    duration: 'Single Visit Implantation',
    doctor: 'Dr. Pulkit Sharma (MDS)',
    description: 'Restored chew function and facial symmetry for a patient with missing posterior teeth using computer-guided Swiss implants.',
    image: '/image copy.png',
    highlights: ['Immediate fixed chew capability', 'Preserves bone structure', 'Lifetime Warranty'],
  },
];

interface GalleryProps {
  onOpenBooking: (treatmentId?: string) => void;
}

export const SmileTransformationGallery: React.FC<GalleryProps> = ({ onOpenBooking }) => {
  const [activeCase, setActiveCase] = useState<CaseStudy>(CASE_STUDIES[0]);

  return (
    <section id="gallery" className="py-12 lg:py-16 bg-[#f8fafc] border-t border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200/80 text-[#006970] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-3 shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#006970]" />
            <span>Case Studies Gallery</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-3xl lg:text-3xl font-extrabold text-[#0a2540] tracking-tight">
            Our Successful Treatments
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Explore the authentic results and transformed smiles achieved by our senior specialists at Park Dental Clinic in Jaipur.
          </p>
        </div>

        {/* Interactive Case Showcase Card */}
        <div className="bg-white rounded-2xl p-5 sm:p-5 lg:p-6 border border-slate-200/90 shadow-[0_12px_40px_-8px_rgba(10,37,64,0.08)] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-5 items-center mb-10">
          
          {/* Left Column: Featured Image (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden aspect-video sm:aspect-[4/3] bg-slate-100 border border-slate-200 shadow-sm group">
              <img
                src={activeCase.image}
                alt={`${activeCase.title} Result`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider text-[#00478d] shadow-md border border-white/50 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Featured Result</span>
              </div>
            </div>
          </div>

          {/* Right Column: Case Details & Treatment Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#006970] bg-teal-50 border border-teal-200/80 px-3 py-1 rounded-full">
                  {activeCase.category}
                </span>
                <span className="text-[11px] font-semibold text-slate-500">
                  {activeCase.duration}
                </span>
              </div>

              <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-[#0a2540] leading-snug">
                {activeCase.title}
              </h3>
              
              <p className="text-xs font-bold text-slate-500 mt-1 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#00478d]" />
                Lead Doctor: <span className="text-[#00478d] font-semibold">{activeCase.doctor}</span>
              </p>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/80 font-normal">
              {activeCase.description}
            </p>

            {/* Highlights */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Treatment Outcomes
              </h4>
              <ul className="space-y-2">
                {activeCase.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-full bg-teal-50 border border-teal-200 text-[#006970] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="w-full bg-gradient-to-r from-[#00478d] to-[#005fb8] hover:from-[#003870] hover:to-[#004c94] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-[0_6px_20px_rgba(0,71,141,0.25)] transition-all flex items-center justify-center gap-2 group active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                <span>Get Similar Smile Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Case Selector Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {CASE_STUDIES.map((c) => {
            const isSelected = c.id === activeCase.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCase(c)}
                className={`p-3.5 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-white border-[#00478d] ring-2 ring-[#00478d]/20 shadow-md scale-[1.02]'
                    : 'bg-white/80 border-slate-200/90 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-2.5 bg-slate-100 border border-slate-100 relative group">
                  <img src={c.image} alt={c.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  {isSelected && (
                    <div className="absolute top-1.5 right-1.5 bg-[#00478d] text-white p-1 rounded-full shadow-xs">
                      <Sparkles className="w-3 h-3" />
                    </div>
                  )}
                </div>
                <p className="text-xs font-bold text-[#0a2540] line-clamp-1">{c.title}</p>
                <p className="text-[11px] text-[#006970] font-semibold mt-0.5">{c.category}</p>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
