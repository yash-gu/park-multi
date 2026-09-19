import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AboutSection } from './components/AboutSection';
import { PatientComfortSection } from './components/PatientComfortSection';
import { SmileTransformationGallery } from './components/SmileTransformationGallery';
import { SymptomCheckerSection } from './components/SymptomCheckerSection';
import { CostEstimatorSection } from './components/CostEstimatorSection';
import { ClinicStandardsSection } from './components/ClinicStandardsSection';
import { OralCareSection } from './components/OralCareSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { TreatmentDetailModal } from './components/TreatmentDetailModal';
import { CallModal } from './components/CallModal';
import { SmileQuizModal } from './components/SmileQuizModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Treatment } from './types';
import { Calendar, Phone, Sparkles } from 'lucide-react';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingTreatmentId, setBookingTreatmentId] = useState<string | undefined>(undefined);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const [detailTreatment, setDetailTreatment] = useState<Treatment | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleOpenBooking = (treatmentId?: string) => {
    setBookingTreatmentId(treatmentId);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  const handleOpenCall = () => {
    setIsCallModalOpen(true);
  };

  const handleCloseCall = () => {
    setIsCallModalOpen(false);
  };

  const handleOpenQuiz = () => {
    setIsQuizModalOpen(true);
  };

  const handleCloseQuiz = () => {
    setIsQuizModalOpen(false);
  };

  const handleSelectTreatment = (treatment: Treatment) => {
    setDetailTreatment(treatment);
  };

  const handleCloseDetail = () => {
    setDetailTreatment(null);
  };

  const handleSearchClick = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-[#191c1d] selection:bg-[#7af1fc] selection:text-[#004f54]">
      
      {/* Header Bar */}
      <Header
        onOpenBooking={handleOpenBooking}
        onOpenCall={handleOpenCall}
        onSearchClick={handleSearchClick}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Split Screen Hero Component */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenCall={handleOpenCall}
          onOpenQuiz={handleOpenQuiz}
        />

        {/* Interactive Services & 39 Treatments Component */}
        <Services
          onSelectTreatment={handleSelectTreatment}
          onBookTreatment={(id) => handleOpenBooking(id)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Real Smile Transformations & Case Gallery */}
        <SmileTransformationGallery
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Interactive Dental Symptom Triage & Procedure Finder */}
        <SymptomCheckerSection
          onOpenBooking={(id) => handleOpenBooking(id)}
          onOpenCall={handleOpenCall}
        />

        {/* Transparent Cost & 0% EMI Calculator */}
        <CostEstimatorSection
          onOpenBooking={(id) => handleOpenBooking(id)}
        />

        {/* Hospital-Grade Sterilization & 4-Tier Patient Safety Protocols */}
        <ClinicStandardsSection />

        {/* Oral Health Guide for Kids, Adults, Seniors & Emergency First-Aid */}
        <OralCareSection
          onOpenBooking={() => handleOpenBooking()}
          onOpenCall={handleOpenCall}
        />

        {/* Empathy & Gentle Fear-Free Dentistry Section */}
        <PatientComfortSection
          onOpenBooking={() => handleOpenBooking()}
          onOpenCall={handleOpenCall}
        />

        {/* Clinical Excellence & Doctors Component */}
        <AboutSection />

        {/* Real Jaipur Patient Testimonials & Google Reviews */}
        <TestimonialsSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Patient FAQs */}
        <FaqSection
          onOpenBooking={() => handleOpenBooking()}
          onOpenCall={handleOpenCall}
        />

        {/* Location, Address, Map & Hours Component */}
        <LocationSection onOpenCall={handleOpenCall} />
      </main>

      {/* 3-Column Footer Component */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenCall={handleOpenCall}
      />

      {/* Mobile Floating Quick Action Bar */}
      <div className="fixed bottom-24 right-6 md:hidden z-40 flex flex-col gap-2.5 items-end">
        <button
          onClick={handleOpenQuiz}
          className="w-10 h-10 bg-[#7df4ff] text-[#003870] rounded-full shadow-md flex items-center justify-center active:scale-95 transition-transform font-bold"
          aria-label="Smile quiz"
          title="Smile Self-Quiz"
        >
          <Sparkles className="w-4 h-4" />
        </button>

        <button
          onClick={handleOpenCall}
          className="w-11 h-11 bg-[#006970] text-white rounded-full shadow-lg flex items-center justify-center active:scale-95 transition-transform"
          aria-label="Call clinic now"
          title="Call Clinic"
        >
          <Phone className="w-4.5 h-4.5" />
        </button>

        <button
          onClick={() => handleOpenBooking()}
          className="w-12 h-12 bg-[#00478d] text-white rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-transform"
          aria-label="Book appointment"
          title="Book Appointment"
        >
          <Calendar className="w-5 h-5" />
        </button>
      </div>

      {/* Floating Hover WhatsApp Button for Direct Doctor Contact */}
      <WhatsAppButton phoneNumber="918287417016" doctorName="Park Dental Clinic" />

      {/* Modals */}
      <AppointmentModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        selectedTreatmentId={bookingTreatmentId}
      />

      <TreatmentDetailModal
        treatment={detailTreatment}
        onClose={handleCloseDetail}
        onBookTreatment={(id) => handleOpenBooking(id)}
      />

      <CallModal
        isOpen={isCallModalOpen}
        onClose={handleCloseCall}
      />

      <SmileQuizModal
        isOpen={isQuizModalOpen}
        onClose={handleCloseQuiz}
        onBookTreatment={(id) => handleOpenBooking(id)}
      />

    </div>
  );
}
