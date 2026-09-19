import React from 'react';
import { Award, HeartHandshake, ShieldCheck, Microchip, Clock, Star, CheckCircle2 } from 'lucide-react';
import { DOCTORS } from '../data/treatments';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 lg:py-16 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center mb-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-teal-50 border border-teal-200/80 text-[#006970] rounded-full text-xs font-bold uppercase tracking-wider shadow-2xs">
              <Award className="w-3.5 h-3.5" />
              <span>Pioneers in Oral Healthcare</span>
            </div>

            <h2 className="font-outfit text-3xl sm:text-3xl lg:text-3xl font-extrabold text-[#0a2540] tracking-tight">
              Clinical Excellence & Compassionate Dental Care
            </h2>

            <p className="text-slate-600 text-base leading-relaxed font-normal">
              At <strong className="text-[#00478d] font-semibold">Park Dental Multispeciality Clinic</strong>, we combine decades of surgical experience with cutting-edge 3D diagnostic tools to deliver flawless, pain-free dental outcomes in Jaipur.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-sky-50/60 border border-sky-100/90 shadow-2xs">
                <span className="font-outfit text-3xl sm:text-3xl font-extrabold text-[#00478d] block">15,000+</span>
                <span className="text-xs font-semibold text-slate-600 mt-1 block">Happy Patient Smiles</span>
              </div>
              <div className="p-5 rounded-2xl bg-teal-50/60 border border-teal-100/90 shadow-2xs">
                <span className="font-outfit text-3xl sm:text-3xl font-extrabold text-[#006970] block">39+</span>
                <span className="text-xs font-semibold text-slate-600 mt-1 block">Specialist Procedures</span>
              </div>
            </div>
          </div>

          {/* Key Advantages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200/90 hover:border-sky-300 hover:shadow-md transition-all space-y-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00478d] to-[#005fb8] text-white flex items-center justify-center shadow-xs">
                <Microchip className="w-5 h-5 text-sky-200" />
              </div>
              <h3 className="font-outfit font-bold text-lg text-[#0a2540] group-hover:text-[#00478d] transition-colors">3D CBCT & Laser Tech</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Computer-guided implant surgery and pain-free diode lasers for precision treatment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200/90 hover:border-teal-300 hover:shadow-md transition-all space-y-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#006970] to-[#008994] text-white flex items-center justify-center shadow-xs">
                <ShieldCheck className="w-5 h-5 text-teal-200" />
              </div>
              <h3 className="font-outfit font-bold text-lg text-[#0a2540] group-hover:text-[#006970] transition-colors">Class-B Autoclave</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Hospital-grade 6-step sterilization protocols ensuring 100% infection-free safety.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200/90 hover:border-teal-300 hover:shadow-md transition-all space-y-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#006970] to-[#008994] text-white flex items-center justify-center shadow-xs">
                <HeartHandshake className="w-5 h-5 text-teal-200" />
              </div>
              <h3 className="font-outfit font-bold text-lg text-[#0a2540] group-hover:text-[#006970] transition-colors">Pain-Free Dentistry</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Computerized anesthesia delivery and gentle sedation techniques for anxious patients.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200/90 hover:border-sky-300 hover:shadow-md transition-all space-y-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00478d] to-[#005fb8] text-white flex items-center justify-center shadow-xs">
                <Clock className="w-5 h-5 text-sky-200" />
              </div>
              <h3 className="font-outfit font-bold text-lg text-[#0a2540] group-hover:text-[#00478d] transition-colors">7 Days Open</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Operating Monday to Sunday (11:00 AM to 05:00 PM) for flexible appointments.
              </p>
            </div>
          </div>
        </div>

        {/* Doctor Team Cards */}
        <div className="mt-16 pt-12 border-t border-slate-100">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-[#0a2540]">
              Meet Our Specialist Doctors
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Highly experienced dental specialists dedicated to personalized oral rehabilitation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 max-w-4xl mx-auto">
            {DOCTORS.map((doc, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_35px_-4px_rgba(0,71,141,0.12)] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-full relative aspect-video md:aspect-[21/9] bg-slate-200">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#00478d] flex items-center gap-1.5 shadow-sm border border-slate-100 z-10">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{doc.experience}</span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-5 space-y-3">
                    <h4 className="font-outfit text-2xl font-bold text-[#0a2540]">{doc.name}</h4>
                    <p className="text-xs font-bold text-[#006970] uppercase tracking-wider">{doc.role}</p>
                    <p className="text-xs text-slate-500 font-semibold">{doc.qualification}</p>

                    {doc.quote && (
                      <p className="text-xs italic text-slate-600 bg-sky-50/50 p-3.5 rounded-2xl border border-sky-100/70 my-2 leading-relaxed font-normal">
                        &ldquo;{doc.quote}&rdquo;
                      </p>
                    )}

                    <div className="pt-3 border-t border-slate-100 space-y-2">
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">
                        Specialties
                      </span>
                      {doc.specialties.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#006970] shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
