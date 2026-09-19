import React from 'react';
import {
  FileText,
  Sparkles,
  Shield,
  Activity,
  HeartPulse,
  ShieldCheck,
  Smile,
  CheckCircle2,
  Layers,
  Grid,
  EyeOff,
  Zap,
  Maximize2,
  CheckSquare,
  SmilePlus,
  Sliders,
  RefreshCw,
  Infinity as InfinityIcon,
  Crown,
  Clock,
  PlusCircle,
  Lock,
  Compass,
  Wand2,
  Sun,
  Feather,
  Scissors,
  Star,
  Gem,
  AlertCircle,
  UserCheck,
  Crosshair,
  ShieldAlert,
  Siren,
  Check,
  ChevronRight,
  
} from 'lucide-react';
import { Treatment } from '../types';

interface TreatmentCardProps {
  treatment: Treatment;
  onSelectTreatment: (treatment: Treatment) => void;
  onBookTreatment: (treatmentId: string) => void;
}

const getLucideIcon = (name: string, props: { className?: string }) => {
  switch (name) {
    case 'FileText': return <FileText {...props} />;
    case 'Sparkles': return <Sparkles {...props} />;
    case 'Shield': return <Shield {...props} />;
    case 'Activity': return <Activity {...props} />;
    case 'HeartPulse': return <HeartPulse {...props} />;
    case 'ShieldCheck': return <ShieldCheck {...props} />;
    case 'Smile': return <Smile {...props} />;
    case 'CheckCircle2': return <CheckCircle2 {...props} />;
    case 'Layers': return <Layers {...props} />;
    case 'Grid': return <Grid {...props} />;
    case 'EyeOff': return <EyeOff {...props} />;
    case 'Zap': return <Zap {...props} />;
    case 'Maximize2': return <Maximize2 {...props} />;
    case 'CheckSquare': return <CheckSquare {...props} />;
    case 'SmilePlus': return <SmilePlus {...props} />;
    case 'Sliders': return <Sliders {...props} />;
    case 'RefreshCw': return <RefreshCw {...props} />;
    case 'Infinity': return <InfinityIcon {...props} />;
    case 'Crown': return <Crown {...props} />;
    case 'Clock': return <Clock {...props} />;
    case 'PlusCircle': return <PlusCircle {...props} />;
    case 'Lock': return <Lock {...props} />;
    case 'Compass': return <Compass {...props} />;
    case 'Wand2': return <Wand2 {...props} />;
    case 'Sun': return <Sun {...props} />;
    case 'Feather': return <Feather {...props} />;
    case 'Scissors': return <Scissors {...props} />;
    case 'Star': return <Star {...props} />;
    case 'Gem': return <Gem {...props} />;
    case 'AlertCircle': return <AlertCircle {...props} />;
    case 'UserCheck': return <UserCheck {...props} />;
    case 'Crosshair': return <Crosshair {...props} />;
    case 'ShieldAlert': return <ShieldAlert {...props} />;
    case 'Siren': return <Siren {...props} />;
    default: return <Sparkles {...props} />;
  }
};

export const TreatmentCard: React.FC<TreatmentCardProps> = ({
  treatment,
  onSelectTreatment,
  onBookTreatment,
}) => {
  return (
    <div className="bg-white p-6 sm:p-5 rounded-2xl border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_35px_-4px_rgba(0,71,141,0.12)] hover:border-sky-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full">
      <div>
        {/* Top Header with Icon, Duration and Popular Badge */}
        <div className="flex items-start justify-between gap-2 mb-4">
          <div className="w-12 h-12 rounded-xl bg-sky-50/90 border border-sky-100 flex items-center justify-center text-[#00478d] group-hover:bg-[#00478d] group-hover:text-white transition-all duration-300 shrink-0 shadow-2xs">
            {getLucideIcon(treatment.iconName, { className: 'w-6 h-6' })}
          </div>

          <div className="flex flex-col items-end gap-1.5">
            {treatment.popular && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-sky-50 border border-sky-200/80 text-sky-800 px-2.5 py-0.5 rounded-full shadow-2xs">
                <Sparkles className="w-3 h-3 text-sky-600" />
                Popular
              </span>
            )}
            {treatment.duration && (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                <Clock className="w-3 h-3 text-slate-400" />
                {treatment.duration}
              </span>
            )}
          </div>
        </div>

        {/* Treatment Title */}
        <h3 className="font-outfit text-xl font-bold text-[#0a2540] mb-2 group-hover:text-[#00478d] transition-colors leading-snug">
          {treatment.name}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-5 font-normal">
          {treatment.description}
        </p>

        {/* Feature List */}
        <ul className="space-y-2 mb-6">
          {treatment.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <span className="w-4 h-4 rounded-full bg-teal-50 text-[#006970] flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Action Footer */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
        <button
          onClick={() => onSelectTreatment(treatment)}
          className="text-xs font-bold text-[#006970] hover:text-[#00478d] transition-colors flex items-center gap-1 group/btn py-1"
        >
          <span>View Details</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>

        <button
          onClick={() => onBookTreatment(treatment.id)}
          className="bg-[#00478d] hover:bg-[#003870] text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-xs hover:shadow-sm active:scale-95"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};
