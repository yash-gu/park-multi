import React, { useState } from 'react';
import {
  Baby,
  UserCheck,
  Users,
  Zap,
  Smile,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  Clock,
  CheckCircle2,
  AlertCircle,
  Apple,
  Droplets,
  Shield,
  Award,
  Activity,
  FileText,
  Check,
  Calendar,
  Phone,
  BookOpen,
  ArrowRight,
  HeartPulse,
} from 'lucide-react';
import { ORAL_CARE_CATEGORIES, DAILY_CHECKLIST, } from '../data/oralCareData';

interface OralCareSectionProps {
  onOpenBooking: () => void;
  onOpenCall: () => void;
}

export const OralCareSection: React.FC<OralCareSectionProps> = ({ onOpenBooking, onOpenCall }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<'kids' | 'adults' | 'seniors' | 'emergency'>('kids');
  const [checkedSteps, setCheckedSteps] = useState<{ [key: string]: boolean }>({});

  const activeCategory = ORAL_CARE_CATEGORIES.find((c) => c.id === activeCategoryId) || ORAL_CARE_CATEGORIES[0];

  const renderIcon = (name: string, className: string = 'w-5 h-5') => {
    switch (name) {
      case 'Baby':
        return <Baby className={className} />;
      case 'UserCheck':
        return <UserCheck className={className} />;
      case 'Users':
        return <Users className={className} />;
      case 'Zap':
        return <Zap className={className} />;
      case 'Smile':
        return <Smile className={className} />;
      case 'ShieldCheck':
        return <ShieldCheck className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'HeartHandshake':
        return <HeartHandshake className={className} />;
      case 'Clock':
        return <Clock className={className} />;
      case 'CheckCircle2':
        return <CheckCircle2 className={className} />;
      case 'AlertCircle':
        return <AlertCircle className={className} />;
      case 'Apple':
        return <Apple className={className} />;
      case 'Droplets':
        return <Droplets className={className} />;
      case 'Shield':
        return <Shield className={className} />;
      case 'Award':
        return <Award className={className} />;
      case 'Activity':
        return <Activity className={className} />;
      case 'FileText':
        return <FileText className={className} />;
      default:
        return <BookOpen className={className} />;
    }
  };

  const toggleCheck = (index: number) => {
    setCheckedSteps((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="oral-care" className="py-16 lg:py-12 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Decorative background accent blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#006970]/5 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00478d]/5 rounded-full blur-3xl pointer-events-none -ml-32 -mb-32" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200/80 text-[#006970] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-4 shadow-2xs">
            <HeartPulse className="w-4 h-4 text-[#006970]" />
            <span>Preventive Wellness & Guidelines</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-3xl lg:text-3xl font-extrabold text-[#0a2540] tracking-tight">
            Complete Teeth Care Guide for Kids & Families
          </h2>
          <p className="mt-3.5 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Expert preventive advice curated by senior dentists at Park Dental Clinic to help your entire family keep their natural teeth healthy, strong, and shining for life.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10">
          {ORAL_CARE_CATEGORIES.map((cat) => {
            const isActive = cat.id === activeCategoryId;
            const isEmergency = cat.id === 'emergency';

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-xs ${
                  isActive
                    ? isEmergency
                      ? 'bg-rose-600 text-white shadow-rose-200 shadow-md scale-[1.02]'
                      : 'bg-[#00478d] text-white shadow-[0_4px_14px_rgba(0,71,141,0.25)] scale-[1.02]'
                    : isEmergency
                    ? 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
                }`}
              >
                <div className={`p-1 rounded-md ${isActive ? 'bg-white/20' : 'bg-transparent'}`}>
                  {renderIcon(cat.iconName, 'w-4 h-4 sm:w-5 sm:h-5')}
                </div>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Description Header */}
        <div className="bg-[#f8fafc] rounded-2xl p-5 sm:p-6 mb-8 border border-slate-200/90 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-2xs ${
              activeCategory.id === 'emergency' ? 'bg-rose-100 text-rose-700' : 'bg-teal-100 text-[#006970]'
            }`}>
              {renderIcon(activeCategory.iconName, 'w-6 h-6')}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-outfit text-lg font-bold text-[#0a2540]">{activeCategory.label}</h3>
                <span className="text-xs bg-white border border-slate-200/90 px-2.5 py-0.5 rounded-full font-bold text-slate-600 hidden sm:inline-block shadow-2xs">
                  {activeCategory.targetAudience}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-normal">{activeCategory.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto shrink-0 pt-2 md:pt-0 border-t md:border-0 border-slate-200">
            {activeCategory.id === 'emergency' ? (
              <button
                onClick={onOpenCall}
                className="w-full md:w-auto bg-rose-600 hover:bg-rose-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Emergency Hotline</span>
              </button>
            ) : (
              <button
                onClick={onOpenBooking}
                className="w-full md:w-auto bg-[#00478d] hover:bg-[#003870] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Checkup</span>
              </button>
            )}
          </div>
        </div>

        {/* Tips Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
          {activeCategory.tips.map((tip, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 transition-all border flex flex-col justify-between ${
                activeCategory.id === 'emergency'
                  ? 'bg-rose-50/40 border-rose-200/80 hover:shadow-md hover:border-rose-300'
                  : 'bg-white border-slate-200/90 hover:shadow-[0_10px_30px_rgba(0,71,141,0.08)] hover:border-sky-300'
              }`}
            >
              <div>
                {/* Header with Title & Badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-2xs ${
                      activeCategory.id === 'emergency' ? 'bg-rose-100 text-rose-700' : 'bg-sky-50 text-[#00478d]'
                    }`}>
                      {renderIcon(tip.iconName, 'w-5 h-5')}
                    </div>
                    <div>
                      <h4 className="font-outfit font-bold text-base text-[#0a2540] leading-snug">{tip.title}</h4>
                      <p className="text-xs text-[#006970] font-bold">{tip.subtitle}</p>
                    </div>
                  </div>

                  {tip.badge && (
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full whitespace-nowrap ${
                      activeCategory.id === 'emergency'
                        ? 'bg-rose-600 text-white'
                        : 'bg-teal-50 text-[#006970] border border-teal-200/70'
                    }`}>
                      {tip.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                  {tip.description}
                </p>

                {/* Bullet Key Points */}
                <ul className="space-y-2 mb-4 bg-slate-50/90 rounded-2xl p-4 border border-slate-100">
                  {tip.keyPoints.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-700 font-semibold">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                        activeCategory.id === 'emergency' ? 'text-rose-600' : 'text-[#006970]'
                      }`} />
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action Hint */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium">Recommended by Senior Dentists</span>
                <button
                  onClick={onOpenBooking}
                  className="font-bold text-[#00478d] hover:text-[#003870] flex items-center gap-1 hover:underline"
                >
                  <span>Ask a Doctor</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Daily 4-Step Hygiene Habit Routine Widget */}
        <div className="bg-gradient-to-r from-[#0a2540] via-[#00478d] to-[#006970] rounded-2xl p-6 sm:p-5 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 text-sky-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-white/10">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Interactive Routine Checklist</span>
                </div>
                <h3 className="font-outfit text-xl sm:text-2xl font-bold">Daily 4-Step Oral Hygiene Checklist</h3>
                <p className="text-white/80 text-xs sm:text-sm mt-1 font-normal">
                  Follow this simple daily routine to keep teeth cavity-free and gums healthy. Click steps to mark done!
                </p>
              </div>

              <button
                onClick={onOpenBooking}
                className="bg-sky-300 hover:bg-sky-200 text-[#0a2540] font-extrabold px-5 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md shrink-0 flex items-center justify-center gap-2 active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Preventive Checkup</span>
              </button>
            </div>

            {/* Checklist Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {DAILY_CHECKLIST.map((item, idx) => {
                const isChecked = !!checkedSteps[idx];

                return (
                  <div
                    key={idx}
                    onClick={() => toggleCheck(idx)}
                    className={`cursor-pointer rounded-2xl p-4 transition-all border ${
                      isChecked
                        ? 'bg-white/20 border-sky-300 shadow-inner'
                        : 'bg-white/10 hover:bg-white/15 border-white/15'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black text-sky-300 tracking-widest uppercase">
                        STEP {item.step}
                      </span>
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                        isChecked ? 'bg-sky-300 text-[#0a2540]' : 'border border-white/30 text-transparent'
                      }`}>
                        <Check className="w-4 h-4 font-bold" />
                      </div>
                    </div>
                    <h4 className={`font-outfit font-bold text-sm sm:text-base ${isChecked ? 'line-through text-white/70' : 'text-white'}`}>
                      {item.title}
                    </h4>
                    <p className="text-xs text-white/80 mt-1 leading-snug font-normal">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
