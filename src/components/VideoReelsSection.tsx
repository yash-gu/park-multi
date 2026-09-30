import React, { useState, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  HeartHandshake, 
  Calendar, 
  GraduationCap,
  Stethoscope,
  Video,
  UserCheck
} from 'lucide-react';
import { VIDEO_REELS } from '../data/videoReelsData';
import { VideoReel } from '../types';

interface VideoReelsSectionProps {
  onOpenBooking: (treatmentId?: string) => void;
}

export const VideoReelsSection: React.FC<VideoReelsSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'reviews' | 'workflow' | 'tour'>('all');
  const [selectedReel, setSelectedReel] = useState<VideoReel | null>(null);
  const [isModalPlaying, setIsModalPlaying] = useState(true);
  const [isModalMuted, setIsModalMuted] = useState(false);
  const [hoveredReelId, setHoveredReelId] = useState<string | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  const filteredReels = VIDEO_REELS.filter((reel) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'reviews') return reel.category === 'review' || reel.category === 'student';
    if (activeTab === 'workflow') return reel.category === 'workflow';
    if (activeTab === 'tour') return reel.category === 'tour';
    return true;
  });

  const handleOpenModal = (reel: VideoReel) => {
    setSelectedReel(reel);
    setIsModalPlaying(true);
    setIsModalMuted(false);
  };

  const handleCloseModal = () => {
    setSelectedReel(null);
  };

  const handleNextReel = () => {
    if (!selectedReel) return;
    const currentIndex = VIDEO_REELS.findIndex((r) => r.id === selectedReel.id);
    const nextIndex = (currentIndex + 1) % VIDEO_REELS.length;
    setSelectedReel(VIDEO_REELS[nextIndex]);
    setIsModalPlaying(true);
  };

  const handlePrevReel = () => {
    if (!selectedReel) return;
    const currentIndex = VIDEO_REELS.findIndex((r) => r.id === selectedReel.id);
    const prevIndex = (currentIndex - 1 + VIDEO_REELS.length) % VIDEO_REELS.length;
    setSelectedReel(VIDEO_REELS[prevIndex]);
    setIsModalPlaying(true);
  };

  const togglePlay = () => {
    if (modalVideoRef.current) {
      if (modalVideoRef.current.paused) {
        modalVideoRef.current.play();
        setIsModalPlaying(true);
      } else {
        modalVideoRef.current.pause();
        setIsModalPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = !modalVideoRef.current.muted;
      setIsModalMuted(modalVideoRef.current.muted);
    }
  };

  return (
    <section id="video-stories" className="py-14 lg:py-20 bg-gradient-to-b from-[#f8fafc] via-[#f1f7f9] to-[#f8fafc] relative overflow-hidden border-t border-slate-100">
      {/* Background Decorative Ambient Blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#7af1fc]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00478d]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-sky-100/80 border border-sky-300/60 text-[#00478d] rounded-full text-xs font-extrabold uppercase tracking-wider shadow-2xs">
            <Video className="w-3.5 h-3.5 text-[#00478d]" />
            <span>Real Clinical Stories & Video Reviews</span>
          </div>

          <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-[#0a2540] tracking-tight">
            See Our Doctors in Action & Real Patient Stories
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Watch authentic video testimonials from patients and students, step inside our relaxing green clinic, and witness how our MDS specialists perform pain-free clinical procedures.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-[#00478d] text-white shadow-md shadow-[#00478d]/20 scale-105'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              All Video Stories ({VIDEO_REELS.length})
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all inline-flex items-center gap-1.5 ${
                activeTab === 'reviews'
                  ? 'bg-[#00478d] text-white shadow-md shadow-[#00478d]/20 scale-105'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5 text-amber-500" />
              Patient & Student Reviews
            </button>
            <button
              onClick={() => setActiveTab('workflow')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all inline-flex items-center gap-1.5 ${
                activeTab === 'workflow'
                  ? 'bg-[#00478d] text-white shadow-md shadow-[#00478d]/20 scale-105'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              <Stethoscope className="w-3.5 h-3.5 text-teal-600" />
              Doctor at Work & Consultations
            </button>
            <button
              onClick={() => setActiveTab('tour')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'tour'
                  ? 'bg-[#00478d] text-white shadow-md shadow-[#00478d]/20 scale-105'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              Clinic Walkthrough
            </button>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReels.map((reel) => {
            const isHovered = hoveredReelId === reel.id;
            return (
              <div
                key={reel.id}
                onMouseEnter={() => setHoveredReelId(reel.id)}
                onMouseLeave={() => setHoveredReelId(null)}
                onClick={() => handleOpenModal(reel)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-[0_16px_35px_rgba(0,71,141,0.12)] hover:border-sky-300 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Media Container (Portrait 4:5 Aspect Ratio for reels) */}
                <div className="relative aspect-[4/5] w-full bg-slate-900 overflow-hidden">
                  {/* Thumbnail Poster */}
                  <img
                    src={reel.thumbnailUrl}
                    alt={reel.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                      isHovered ? 'opacity-0' : 'opacity-100'
                    }`}
                    loading="lazy"
                  />

                  {/* Micro Preview Video on Hover */}
                  {isHovered && (
                    <video
                      src={reel.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                    />
                  )}

                  {/* Gradient Overlay for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/20 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold backdrop-blur-md shadow-xs ${
                      reel.category === 'workflow'
                        ? 'bg-sky-500/80 text-white'
                        : reel.category === 'student'
                        ? 'bg-indigo-600/85 text-white'
                        : reel.category === 'review'
                        ? 'bg-amber-500/85 text-white'
                        : 'bg-teal-600/85 text-white'
                    }`}>
                      {reel.category === 'student' && <GraduationCap className="w-3 h-3" />}
                      {reel.category === 'workflow' && <Stethoscope className="w-3 h-3" />}
                      {reel.category === 'review' && <UserCheck className="w-3 h-3" />}
                      {reel.categoryLabel}
                    </span>

                    <span className="bg-black/60 backdrop-blur-md text-white/90 text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md">
                      {reel.duration}
                    </span>
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md text-[#00478d] flex items-center justify-center shadow-lg group-hover:scale-115 group-hover:bg-[#00478d] group-hover:text-white transition-all duration-300">
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </div>
                  </div>

                  {/* Bottom Text Over Video */}
                  <div className="absolute bottom-0 inset-x-0 p-4 text-white z-10 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs text-[#7af1fc] font-bold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{reel.treatmentTag}</span>
                    </div>
                    <h3 className="font-outfit font-bold text-base sm:text-lg leading-tight line-clamp-2 text-white group-hover:text-[#7af1fc] transition-colors">
                      {reel.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span className="truncate">{reel.doctorOrPatient}</span>
                    </p>
                  </div>
                </div>

                {/* Card Footer Detail */}
                <div className="p-4 bg-white space-y-2.5 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
                    {reel.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-semibold flex items-center gap-1">
                      <HeartHandshake className="w-3.5 h-3.5 text-[#006970]" />
                      Verified Case
                    </span>
                    <span className="text-[#00478d] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Watch Video →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-[#006970] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-outfit font-bold text-base text-[#0a2540]">
                100% Genuine Clinical Footage & Patient Consent
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                All videos are recorded live at our Ajmer Road clinic. Treatments are executed with hospital-grade sterilization and gentle digital dentistry.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto bg-[#00478d] hover:bg-[#003870] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md shadow-[#00478d]/20 transition-all active:scale-95 flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Doctor Consultation</span>
            </button>
          </div>
        </div>

      </div>

      {/* Fullscreen Video Modal Player */}
      {selectedReel && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700/60 max-w-4xl w-full grid grid-cols-1 lg:grid-cols-12 max-h-[92vh] text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left/Top: Video Player Area (7 cols) */}
            <div className="lg:col-span-7 bg-black relative flex items-center justify-center min-h-[340px] sm:min-h-[460px]">
              <video
                ref={modalVideoRef}
                src={selectedReel.videoUrl}
                poster={selectedReel.thumbnailUrl}
                autoPlay
                playsInline
                loop
                muted={isModalMuted}
                className="w-full h-full max-h-[70vh] lg:max-h-[85vh] object-contain"
                onPlay={() => setIsModalPlaying(true)}
                onPause={() => setIsModalPlaying(false)}
              />

              {/* Video Overlay Top Buttons */}
              <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-auto">
                <span className="bg-black/60 backdrop-blur-md text-[#7af1fc] border border-white/10 px-3 py-1 rounded-full text-xs font-bold">
                  {selectedReel.categoryLabel}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white flex items-center justify-center transition-colors border border-white/15"
                    title={isModalMuted ? 'Unmute Audio' : 'Mute Audio'}
                  >
                    {isModalMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={handleCloseModal}
                    className="w-9 h-9 rounded-full bg-black/60 hover:bg-red-600 backdrop-blur-md text-white flex items-center justify-center transition-colors border border-white/15 lg:hidden"
                    title="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Center Play/Pause on click overlay */}
              <button
                onClick={togglePlay}
                className="absolute inset-0 w-full h-full flex items-center justify-center bg-transparent group"
                aria-label={isModalPlaying ? 'Pause video' : 'Play video'}
              >
                {!isModalPlaying && (
                  <div className="w-16 h-16 rounded-full bg-[#00478d]/90 text-white flex items-center justify-center shadow-xl">
                    <Play className="w-8 h-8 fill-current translate-x-0.5" />
                  </div>
                )}
              </button>

              {/* Prev / Next Video Switchers on Video */}
              <button
                onClick={handlePrevReel}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all border border-white/15"
                title="Previous Video"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextReel}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all border border-white/15"
                title="Next Video"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right/Bottom: Story Meta & Highlights (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between bg-slate-900 overflow-y-auto space-y-6">
              
              <div className="space-y-4">
                {/* Header with Desktop Close */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {selectedReel.treatmentTag}
                  </span>

                  <button
                    onClick={handleCloseModal}
                    className="hidden lg:flex w-8 h-8 rounded-full bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white items-center justify-center transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div>
                  <h3 className="font-outfit font-extrabold text-xl sm:text-2xl text-white leading-snug">
                    {selectedReel.title}
                  </h3>
                  <p className="text-xs text-[#7af1fc] font-semibold mt-1">
                    {selectedReel.subtitle}
                  </p>
                </div>

                {/* Doctor / Patient Tag */}
                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/70 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#00478d] to-[#006970] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {selectedReel.category === 'student' ? '🎓' : selectedReel.category === 'workflow' ? '🩺' : '🌟'}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-white flex items-center gap-1">
                      {selectedReel.doctorOrPatient}
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                    </h4>
                    <span className="text-[11px] text-slate-400">Park Dental Clinic, Jaipur</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {selectedReel.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Key Highlights
                  </span>
                  {selectedReel.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7af1fc] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-800 space-y-2.5">
                <button
                  onClick={() => {
                    handleCloseModal();
                    onOpenBooking();
                  }}
                  className="w-full bg-gradient-to-r from-[#00478d] to-[#006970] hover:from-[#003870] hover:to-[#004f54] text-white py-3 rounded-xl text-xs font-bold shadow-lg transition-all active:scale-98 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation for this Treatment</span>
                </button>

                <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
                  <span>Video {VIDEO_REELS.findIndex((r) => r.id === selectedReel.id) + 1} of {VIDEO_REELS.length}</span>
                  <div className="flex gap-2">
                    <button onClick={handlePrevReel} className="hover:text-white transition-colors underline">Prev Video</button>
                    <span>•</span>
                    <button onClick={handleNextReel} className="hover:text-white transition-colors underline">Next Video</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};
