import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Phone, Mail, FileText, AlertCircle, MessageCircle, Send } from 'lucide-react';
import { TREATMENTS, CLINIC_INFO } from '../data/treatments';
import { AppointmentFormData } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTreatmentId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  selectedTreatmentId,
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    patientName: '',
    phone: '',
    email: '',
    treatmentId: selectedTreatmentId || TREATMENTS[0].id,
    date: new Date().toISOString().split('T')[0],
    timeSlot: '11:30 AM',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string>('');

  useEffect(() => {
    if (selectedTreatmentId) {
      setFormData((prev) => ({ ...prev, treatmentId: selectedTreatmentId }));
    }
  }, [selectedTreatmentId]);

  if (!isOpen) return null;

  const selectedTreatment = TREATMENTS.find((t) => t.id === formData.treatmentId);

  const triggerWhatsAppMessage = () => {
    const treatmentName = selectedTreatment?.name || 'General Dental Consultation';
    const message = `Namaste Park Dental Clinic (Dr. Pulkit & Dr. Nidhee Sharma),\n\nI would like to book a dental consultation.\n\n📋 *Patient Details:*\n• *Name:* ${formData.patientName}\n• *Phone:* ${formData.phone}${formData.email ? `\n• *Email:* ${formData.email}` : ''}\n• *Treatment:* ${treatmentName}\n• *Preferred Date:* ${formData.date}\n• *Time Slot:* ${formData.timeSlot}${formData.notes ? `\n• *Notes/Symptoms:* ${formData.notes}` : ''}\n\nPlease confirm my appointment booking. Thank you!`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/918287417016?text=${encoded}`;
    setWhatsappUrl(url);

    // Open WhatsApp directly in new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Trigger WhatsApp message redirect
    triggerWhatsAppMessage();

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const timeSlots = [
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '01:00 PM',
    '02:00 PM',
    '02:30 PM',
    '03:00 PM',
    '03:30 PM',
    '04:00 PM',
    '04:30 PM',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col my-auto">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0a2540] via-[#00478d] to-[#005fb8] text-white p-6 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 text-sky-300 text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 text-sky-300" />
              <span>Online Reservation</span>
            </div>
            <h3 className="font-outfit text-xl font-bold text-white mt-1">
              Book Your Dental Consultation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-teal-50 border border-teal-200 text-[#006970] rounded-2xl flex items-center justify-center mx-auto shadow-2xs">
                <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
              </div>
              <h4 className="font-outfit text-2xl font-bold text-[#0a2540]">
                Appointment Request Received!
              </h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed font-normal">
                Thank you, <strong>{formData.patientName}</strong>! We have scheduled your consultation for{' '}
                <strong className="text-[#00478d]">{formData.date}</strong> at{' '}
                <strong className="text-[#00478d]">{formData.timeSlot}</strong> for{' '}
                <strong>{selectedTreatment?.name}</strong>.
              </p>

              <div className="p-4 bg-sky-50/60 rounded-2xl border border-sky-100 text-xs text-slate-700 text-left space-y-1 max-w-sm mx-auto font-normal">
                <p className="font-bold text-[#0a2540]">Clinic Location:</p>
                <p>{CLINIC_INFO.addressShort}</p>
                <p className="text-slate-500 pt-1">Your details have been sent to Park Dental Clinic on WhatsApp (+91 8287417016).</p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
                <a
                  href={whatsappUrl || `https://wa.me/918287417016?text=Hello%20Park%20Dental%20Clinic%2C%20I%20would%20like%20to%20confirm%20my%20dental%20appointment.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Open WhatsApp Message</span>
                </a>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-3 rounded-xl font-bold text-xs transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Select Treatment */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Select Procedure / Treatment
                </label>
                <select
                  value={formData.treatmentId}
                  onChange={(e) => setFormData({ ...formData, treatmentId: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00478d]"
                  required
                >
                  {TREATMENTS.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.category} — {t.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Patient Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={formData.patientName}
                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00478d]"
                    required
                  />
                </div>
              </div>

              {/* Phone & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Mobile number"
                      className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00478d]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00478d]"
                    />
                  </div>
                </div>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00478d]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Time Slot (11:00 - 17:00)
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00478d]"
                      required
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Symptoms / Medical Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Describe any tooth pain, sensitivity, or specific questions..."
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00478d]"
                />
              </div>

              {/* Operating Hours Note */}
              <div className="p-3 bg-sky-50/70 border border-sky-100 rounded-xl text-xs text-[#00478d] flex items-center gap-2 font-medium">
                <AlertCircle className="w-4 h-4 shrink-0 text-[#006970]" />
                <span>Operating Hours: Mon - Sun: 11:00 AM - 05:00 PM</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00478d] hover:bg-[#003870] text-white py-3.5 rounded-xl font-bold text-sm shadow-[0_4px_14px_rgba(0,71,141,0.25)] transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                {isSubmitting ? (
                  <span>Processing Appointment...</span>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    <span>Confirm Consultation Request</span>
                  </>
                )}
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
