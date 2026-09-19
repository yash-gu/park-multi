import React from 'react';
import { MapPin, Clock, Phone, QrCode, Camera, Share2, } from 'lucide-react';
import { CLINIC_INFO } from '../data/treatments';
import { ParkDentalLogo } from './ParkDentalLogo';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenCall: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenCall }) => {
  return (
    <footer id="contact" className="bg-[#0a2540] text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* 3-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-5 mb-12">
          
          {/* Column 1: Clinic Overview */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <ParkDentalLogo className="h-12 w-12" showText={true} />
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-normal">
              Your premier destination for comprehensive dental care in Jaipur. We combine clinical precision with compassionate care to ensure every patient leaves with a confident smile.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenCall}
                className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 text-sky-300 hover:bg-sky-400 hover:text-[#0a2540] transition-all flex items-center justify-center shadow-2xs"
                title="Clinic QR Code & Contact"
              >
                <QrCode className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenCall}
                className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 text-sky-300 hover:bg-sky-400 hover:text-[#0a2540] transition-all flex items-center justify-center shadow-2xs"
                title="Clinic Photo Gallery"
              >
                <Camera className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Park Dental Clinic Jaipur',
                      text: 'Check out Park Dental Multispeciality Clinic in Jaipur',
                      url: window.location.href,
                    }).catch(() => {});
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Clinic link copied to clipboard!');
                  }
                }}
                className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 text-sky-300 hover:bg-sky-400 hover:text-[#0a2540] transition-all flex items-center justify-center shadow-2xs"
                title="Share Clinic Info"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-outfit text-xs font-bold text-sky-300 uppercase tracking-widest">
              Quick Navigation
            </h4>
            
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a href="#services" className="hover:text-white hover:underline transition-all inline-flex items-center gap-1">
                  <span>Multispeciality Services (39)</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white hover:underline transition-all inline-flex items-center gap-1">
                  <span>About Specialists & Doctors</span>
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white hover:underline transition-all inline-flex items-center gap-1">
                  <span>Location & Directions</span>
                </a>
              </li>
              <li>
                <button onClick={onOpenBooking} className="hover:text-white hover:underline transition-all text-left">
                  Book Online Consultation
                </button>
              </li>
              <li>
                <button onClick={onOpenCall} className="hover:text-white hover:underline transition-all text-left">
                  Emergency 24/7 Dental Care
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Full Address & Operating Hours */}
          <div className="space-y-4">
            <h4 className="font-outfit text-xs font-bold text-sky-300 uppercase tracking-widest">
              Clinic Location & Hours
            </h4>

            <div className="space-y-3 text-sm text-slate-300">
              
              {/* Full Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-300 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white">Address:</p>
                  <p className="leading-snug text-slate-300">{CLINIC_INFO.address}</p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sky-300 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white">Operating Hours:</p>
                  <p className="text-sky-300 font-bold">Mon - Sun: 11:00 AM - 05:00 PM</p>
                  <p className="text-xs text-slate-400 font-normal">(Mon-Sun: 11:00 - 17:00 IST)</p>
                </div>
              </div>

              {/* Direct Phone & Email */}
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-sky-300 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white">Contact:</p>
                  <a href={`tel:${CLINIC_INFO.mobile}`} className="hover:underline font-semibold text-slate-200 block">
                    {CLINIC_INFO.mobile}
                  </a>
                  <a href={`mailto:${CLINIC_INFO.email}`} className="text-xs text-slate-400 hover:underline block">
                    {CLINIC_INFO.email}
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Park Dental Multispeciality Clinic, Jaipur. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#services" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#services" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
