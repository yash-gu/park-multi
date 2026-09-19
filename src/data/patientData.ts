import { Testimonial, FAQ } from '../types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    patientName: 'Akash Gwalior (A.kay07)',
    location: 'Jaipur (Google Verified Review)',
    treatmentName: 'Orthodontic Teeth Realignment',
    rating: 5,
    review: 'Had my orthodontics treatment here with Dr. Pulkit Sharma. I am highly satisfied! After my accident my teeth went inside and unaligned, now it is corrected and my smile is completely restored. Please go and visit Dr. Pulkit Sharma for best dental treatment!',
    date: '4 months ago',
    avatar: '',
    verified: true,
  },
  {
    id: 't-2',
    patientName: 'Sarika Mishra',
    location: 'Manyawas, Jaipur (Google Review)',
    treatmentName: 'Pain-Free Dental Care',
    rating: 5,
    review: 'I am extremely thankful to Dr. Nidhee for the outstanding dental treatment I received. She treated my tooth with great care and professionalism, and my recovery was very smooth. The clinic staff is warm and accommodating.',
    date: '5 months ago',
    avatar: '',
    verified: true,
  },
  {
    id: 't-3',
    patientName: 'Vedika Mallik',
    location: 'Ajmer Road, Jaipur (Google Review)',
    treatmentName: 'Painless Root Canal (RCT)',
    rating: 5,
    review: 'I had an excellent experience at Park Dental Multi-Speciality Clinic for my painless Root Canal Treatment. From the moment I walked in, the staff was extremely welcoming and professional. The clinic is well-maintained with state-of-the-art equipment.',
    date: '1 year ago',
    avatar: '',
    verified: true,
  },
  {
    id: 't-4',
    patientName: 'Deepak Jain',
    location: 'Mansarovar, Jaipur (Google Review)',
    treatmentName: 'Gentle Dental Consultation',
    rating: 5,
    review: 'I used to be scared of visiting the dentist, but Park Dental Multispeciality Clinic changed that completely! Dr. Nidhee is very kind, patient, and genuinely cares about her patients. They take time to explain what’s happening, and the results are amazing.',
    date: '9 months ago',
    avatar: '',
    verified: true,
  },
  {
    id: 't-5',
    patientName: 'Dr. Anil Choudhary',
    location: 'Jaipur (Google Verified Doctor Review)',
    treatmentName: 'Orthodontic Braces Treatment',
    rating: 5,
    review: 'Very nice experience & clean dental clinic in Jaipur! Must visit for best dental treatment especially Orthodontic treatment with Dr Pulkit Sharma. He is a very experienced & amazing orthodontist in town!',
    date: '5 months ago',
    avatar: '',
    verified: true,
  },
  {
    id: 't-6',
    patientName: 'Vishal',
    location: 'Ajmer Rd, Jaipur (Google Review)',
    treatmentName: 'Teeth Alignment & Cleaning',
    rating: 5,
    review: 'Exceptional experience! The staff at Park Dental is friendly and professional, and the clinic is enriched with trees and nature. Dr. Pulkit is a fantastic dentist who made my teeth alignment quick and completely painless. Highly recommend checking out this place!',
    date: '9 months ago',
    avatar: '',
    verified: true,
  },
  {
    id: 't-7',
    patientName: 'Ashwini Soni',
    location: 'Jaipur (Google Review)',
    treatmentName: 'Comprehensive Dental Checkup',
    rating: 5,
    review: 'Visited this clinic recently and had a genuinely pleasant experience. The doctor was patient, listened to all my concerns, and explained the treatment in simple language without rushing. The clinic was clean, and the staff was polite.',
    date: '7 months ago',
    avatar: '',
    verified: true,
  },
  {
    id: 't-8',
    patientName: 'Gaytri Sain',
    location: 'Jaipur (Google Review)',
    treatmentName: 'MDS Orthodontic Care',
    rating: 5,
    review: 'Amazing Clinic! Best treatment done by Dr. Pulkit Sharma MDS Orthodontist. Always available for patient treatment and very polite in nature.',
    date: '5 months ago',
    avatar: '',
    verified: true,
  }
];

export const FAQS: FAQ[] = [
  {
    question: 'Are dental treatments at Park Dental really pain-free?',
    answer: 'Yes! We use computerized local anesthesia delivery systems, ultra-fine needles, and gentle micro-surgical techniques that ensure virtually pain-free procedures. For anxious patients, we also offer soothing ambient music and extra time to relax before starting.',
    category: 'Patient Comfort',
  },
  {
    question: 'How do I book a consultation or checkup?',
    answer: 'You can book directly through our website using the "Book Appointment" button, call our front desk at +91-98290-12345, or message us on WhatsApp. We offer flexible slots between 11:00 AM and 05:00 PM every day.',
    category: 'Appointments',
  },
  {
    question: 'Do you offer 0% EMI or flexible payment plans for implants & aligners?',
    answer: 'Yes! We believe quality dental care should be accessible to everyone. We partner with leading healthcare finance providers to offer 0% interest EMI options for major treatments like Dental Implants, Full Mouth Reconstruction, and Clear Aligners.',
    category: 'Pricing & EMI',
  },
  {
    question: 'What safety and sterilization standards do you follow?',
    answer: 'We strictly follow Class-B Autoclave 6-stage hospital sterilization protocols. All handpieces, burs, and instruments are individually vacuum-sealed and sterilized before every single patient. Disposable items are strictly single-use.',
    category: 'Safety',
  },
  {
    question: 'Where is Park Dental Clinic located in Jaipur?',
    answer: 'We are conveniently located at Plot No. 36, Dr. Rajendra Prasad Nagar CS Block, Ajmer Road, Jaipur, Rajasthan (302006) with easy ground floor access and free patient parking.',
    category: 'Location',
  },
];

export const COMFORT_AMENITIES = [
  {
    title: 'Fear-Free Gentle Anesthesia',
    desc: 'Wand computerized anesthesia for painless numbing before any procedure.',
    icon: 'ShieldCheck',
  },
  {
    title: '0% Interest Easy EMIs',
    desc: 'Flexible monthly installment options for aligners, implants, and cosmetic care.',
    icon: 'CreditCard',
  },
  {
    title: 'Warm & Cozy Waiting Lounge',
    desc: 'Enjoy complimentary herbal teas, soothing music, and a calm environment.',
    icon: 'Coffee',
  },
  {
    title: '100% Price Transparency',
    desc: 'Detailed treatment plan with zero hidden fees before starting any procedure.',
    icon: 'FileText',
  },
];
