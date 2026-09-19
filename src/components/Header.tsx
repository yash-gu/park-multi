import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, MapPin, Search } from 'lucide-react';
import { CLINIC_INFO } from '../data/treatments';
import { ParkDentalLogo } from './ParkDentalLogo';

interface HeaderProps {
  onOpenBooking: (treatmentId?: string) => void;
  onOpenCall: () => void;
  onSearchClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onOpenCall, onSearchClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-40 shadow-[0_4px_25px_-4px_rgba(10,37,64,0.06)] border-b border-slate-100">
      {/* Top Utility Bar */}
      <div className="hidden lg:block bg-[#0a2540] text-white text-xs py-2 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6 text-slate-200">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              {CLINIC_INFO.addressShort}
            </span>
            <span className="text-slate-600">|</span>
            <span className="font-medium">
              Hours: <span className="text-sky-300 font-semibold">{CLINIC_INFO.hours}</span>
            </span>
          </div>
          <div className="flex items-center gap-5 text-slate-200">
            <a href={`tel:${CLINIC_INFO.mobile}`} className="hover:text-sky-300 transition-colors flex items-center gap-1.5 font-medium">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{CLINIC_INFO.mobile}</span>
            </a>
            <span className="text-slate-600">|</span>
            <button onClick={onOpenCall} className="text-sky-300 hover:text-sky-200 font-semibold flex items-center gap-1 transition-colors">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block"></span>
              Emergency Care On-Call
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <ParkDentalLogo className="h-11 w-11 transition-transform group-hover:scale-105" showText={true} />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="#services"
            className="text-slate-700 hover:text-[#00478d] font-semibold text-sm transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#00478d] hover:after:w-full after:transition-all"
          >
            Treatments
          </a>
          <a
            href="#gallery"
            className="text-slate-700 hover:text-[#00478d] font-semibold text-sm transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#00478d] hover:after:w-full after:transition-all"
          >
            Smile Gallery
          </a>
          <a
            href="#symptom-checker"
            className="text-slate-700 hover:text-[#00478d] font-semibold text-sm transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#00478d] hover:after:w-full after:transition-all"
          >
            Symptom Finder
          </a>
          <a
            href="#cost-estimator"
            className="text-slate-700 hover:text-[#00478d] font-semibold text-sm transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#00478d] hover:after:w-full after:transition-all"
          >
            Cost & EMI
          </a>
          <a
            href="#about"
            className="text-slate-700 hover:text-[#00478d] font-semibold text-sm transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#00478d] hover:after:w-full after:transition-all"
          >
            Doctors
          </a>
          <a
            href="#location"
            className="text-slate-700 hover:text-[#00478d] font-semibold text-sm transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#00478d] hover:after:w-full after:transition-all"
          >
            Location
          </a>
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onSearchClick}
            className="p-2.5 rounded-xl text-slate-600 hover:text-[#00478d] hover:bg-sky-50 transition-colors"
            title="Search Treatments"
            aria-label="Search Treatments"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenCall}
            className="border border-[#006970]/30 text-[#006970] hover:bg-teal-50 hover:border-[#006970] px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#006970]" />
            <span>Call Now</span>
          </button>

          <button
            onClick={() => onOpenBooking()}
            className="bg-gradient-to-r from-[#00478d] to-[#005fb8] hover:from-[#003870] hover:to-[#004c94] text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-[0_4px_14px_rgba(0,71,141,0.25)] hover:shadow-[0_6px_20px_rgba(0,71,141,0.35)] transition-all flex items-center gap-2 active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => onOpenBooking()}
            className="bg-gradient-to-r from-[#00478d] to-[#005fb8] text-white px-3 py-2 rounded-xl sm:hidden text-xs font-semibold flex items-center gap-1 shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book</span>
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#00478d] rounded-xl"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top duration-200 shadow-xl">
          <div className="flex flex-col gap-3 font-semibold text-slate-700 text-sm">
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2.5 border-b border-slate-100 hover:text-[#00478d]"
            >
              All Treatments (39 Procedures)
            </a>
            <a
              href="#gallery"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2.5 border-b border-slate-100 hover:text-[#00478d]"
            >
              Before & After Smile Gallery
            </a>
            <a
              href="#symptom-checker"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2.5 border-b border-slate-100 hover:text-[#00478d]"
            >
              Symptom Finder & Triage
            </a>
            <a
              href="#cost-estimator"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2.5 border-b border-slate-100 hover:text-[#00478d]"
            >
              Pricing & 0% EMI Calculator
            </a>
            <a
              href="#oral-care"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2.5 border-b border-slate-100 hover:text-[#00478d]"
            >
              Oral Health Guide (Kids & Adults)
            </a>
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2.5 border-b border-slate-100 hover:text-[#00478d]"
            >
              Specialist Doctors (MDS / BDS)
            </a>
            <a
              href="#location"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2.5 border-b border-slate-100 hover:text-[#00478d]"
            >
              Location & Hours (Mansarovar, Jaipur)
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenCall();
              }}
              className="w-full border-2 border-[#006970] text-[#006970] py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now ({CLINIC_INFO.mobile})</span>
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-gradient-to-r from-[#00478d] to-[#005fb8] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
