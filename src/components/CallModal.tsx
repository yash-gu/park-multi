import React from 'react';
import { X, Phone, MessageSquare, Clock, MapPin, AlertTriangle, ShieldAlert } from 'lucide-react';
import { CLINIC_INFO } from '../data/treatments';

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallModal: React.FC<CallModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0a2540] via-[#00478d] to-[#006970] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-sky-300">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-outfit text-xl font-bold">Contact Park Dental</h3>
              <p className="text-xs text-sky-200 font-medium">Direct Front Desk & Emergency Line</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close call modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-slate-700">
          
          <div className="p-4 bg-amber-50/80 border border-amber-200/80 rounded-2xl flex items-start gap-3 text-xs text-amber-900">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Severe Toothache or Trauma?</p>
              <p className="mt-0.5 font-normal text-amber-800">Our emergency team is available for urgent relief and immediate walk-in assistance.</p>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <a
              href={`tel:${CLINIC_INFO.mobile}`}
              className="w-full bg-[#00478d] hover:bg-[#003870] text-white py-3.5 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-between shadow-[0_4px_14px_rgba(0,71,141,0.25)] group active:scale-98"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-300" />
                <div className="text-left">
                  <span className="block text-xs font-normal text-blue-200">Mobile Hotline</span>
                  <span className="font-bold">{CLINIC_INFO.mobile}</span>
                </div>
              </div>
              <span className="text-xs font-bold underline group-hover:translate-x-1 transition-transform">
                Call Now
              </span>
            </a>

            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="w-full bg-slate-50 hover:bg-slate-100 text-slate-800 py-3.5 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-between border border-slate-200 group active:scale-98"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#006970]" />
                <div className="text-left">
                  <span className="block text-xs font-normal text-slate-500">Clinic Landline</span>
                  <span className="font-bold">{CLINIC_INFO.phone}</span>
                </div>
              </div>
              <span className="text-xs font-bold underline group-hover:translate-x-1 transition-transform">
                Call Landline
              </span>
            </a>

            <a
              href={`https://wa.me/918287417016?text=Hello%20Park%20Dental%20Clinic%2C%20I%20would%20like%20to%20inquire%20about%20a%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-between shadow-sm group active:scale-98"
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-emerald-200" />
                <div className="text-left">
                  <span className="block text-xs font-normal text-emerald-100">WhatsApp Chat</span>
                  <span className="font-bold">Instant Inquiry</span>
                </div>
              </div>
              <span className="text-xs font-bold underline group-hover:translate-x-1 transition-transform">
                Open Chat
              </span>
            </a>
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#006970]" />
              <span>Hours: {CLINIC_INFO.hours}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#006970]" />
              <span>{CLINIC_INFO.addressShort}</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
