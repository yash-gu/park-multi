import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, ExternalLink } from 'lucide-react';
import { CLINIC_INFO } from '../data/treatments';

interface LocationSectionProps {
  onOpenCall: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenCall }) => {
  return (
    <section id="location" className="py-12 lg:py-16 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Container Box */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-[0_12px_40px_-10px_rgba(10,37,64,0.08)] border border-slate-200/90 grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left Column: Details */}
          <div className="p-5 sm:p-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200/80 text-[#006970] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase shadow-2xs">
                <span>Easy Accessibility & Dedicated Parking</span>
              </div>
              <h2 className="font-outfit text-3xl sm:text-3xl font-extrabold text-[#0a2540] tracking-tight">
                Visit Our Clinic
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Located centrally on main Ajmer Road, Jaipur, Park Dental Multispeciality Clinic offers state-of-the-art facilities with dedicated patient parking and barrier-free wheelchair access.
              </p>
            </div>

            {/* Details List */}
            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-sky-50 border border-sky-100 rounded-2xl flex items-center justify-center text-[#00478d] shrink-0 mt-0.5 shadow-2xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-outfit text-xs font-bold text-[#0a2540] uppercase tracking-wider mb-1">
                    Our Address
                  </h4>
                  <p className="text-slate-800 font-semibold text-sm leading-snug">
                    {CLINIC_INFO.address}
                  </p>
                  <p className="text-[#006970] font-bold text-xs mt-1.5 flex items-center gap-1">
                    <span>{CLINIC_INFO.landmark}</span>
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-teal-50 border border-teal-100 rounded-2xl flex items-center justify-center text-[#006970] shrink-0 mt-0.5 shadow-2xs">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-outfit text-xs font-bold text-[#0a2540] uppercase tracking-wider mb-1">
                    Opening Hours
                  </h4>
                  <p className="text-[#00478d] font-extrabold text-base">
                    Mon - Sun: 11:00 AM - 05:00 PM
                  </p>
                  <p className="text-slate-500 text-xs mt-0.5 font-medium">
                    Appointments Recommended • Emergency On-Call
                  </p>
                </div>
              </div>

              {/* Contact Us */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-sky-50 border border-sky-100 rounded-2xl flex items-center justify-center text-[#00478d] shrink-0 mt-0.5 shadow-2xs">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-outfit text-xs font-bold text-[#0a2540] uppercase tracking-wider mb-1">
                    Direct Contact
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-slate-800 font-bold">
                    <a href={`tel:${CLINIC_INFO.mobile}`} className="hover:text-[#00478d] transition-colors">
                      {CLINIC_INFO.mobile}
                    </a>
                    <span className="hidden sm:inline text-slate-300">|</span>
                    <a href={`tel:${CLINIC_INFO.phone}`} className="hover:text-[#00478d] transition-colors">
                      {CLINIC_INFO.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1 font-medium">
                    <Mail className="w-3.5 h-3.5 text-[#006970]" />
                    <span>{CLINIC_INFO.email}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href={CLINIC_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00478d] hover:bg-[#003870] text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(0,71,141,0.25)] active:scale-98"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <button
                onClick={onOpenCall}
                className="border border-slate-300 hover:bg-slate-50 text-[#0a2540] px-6 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#006970]" />
                <span>Call Front Desk</span>
              </button>
            </div>

          </div>

          {/* Right Column: Google Map Embed */}
          <div className="relative min-h-[360px] lg:min-h-[480px] bg-slate-100 overflow-hidden flex flex-col">
            <iframe
              title="Park Dental Clinic Google Map Location"
              src={CLINIC_INFO.mapEmbedUrl}
              className="w-full h-full min-h-[360px] lg:min-h-[480px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Top Floating Badge: "Open in Maps" */}
            <div className="absolute top-4 left-4 z-10">
              <a
                href={CLINIC_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/95 backdrop-blur-md hover:bg-white text-[#0a2540] text-xs font-bold px-3.5 py-2 rounded-xl shadow-md border border-slate-200 flex items-center gap-1.5 transition-all active:scale-95"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#006970]" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
