export type TreatmentCategory =
  | 'General Dentistry'
  | 'Orthodontics & Aligners'
  | 'Dental Implants & Prosthetics'
  | 'Cosmetic Dentistry'
  | 'Oral Surgery';

export interface Treatment {
  id: string;
  name: string;
  category: TreatmentCategory;
  description: string;
  features: string[];
  iconName: string;
  duration?: string;
  recommendedFor?: string;
  popular?: boolean;
}

export interface AppointmentFormData {
  patientName: string;
  phone: string;
  email: string;
  treatmentId: string;
  date: string;
  timeSlot: string;
  notes: string;
}

export interface Doctor {
  name: string;
  role: string;
  qualification: string;
  experience: string;
  specialties: string[];
  image: string;
  quote?: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  location: string;
  treatmentName: string;
  rating: number;
  review: string;
  date: string;
  avatar: string;
  verified: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

