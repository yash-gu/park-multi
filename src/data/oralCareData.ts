export interface OralCareTip {
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  iconName: string;
  badge?: string;
}

export interface CareCategory {
  id: 'kids' | 'adults' | 'seniors' | 'emergency';
  label: string;
  targetAudience: string;
  iconName: string;
  description: string;
  tips: OralCareTip[];
}

export const ORAL_CARE_CATEGORIES: CareCategory[] = [
  {
    id: 'kids',
    label: 'Pediatric Care (Kids)',
    targetAudience: 'Infants, Toddlers & Children (Ages 0 - 12)',
    iconName: 'Baby',
    description: 'Building lifelong healthy smile habits from milk teeth to permanent teeth.',
    tips: [
      {
        title: 'First Dental Visit by 1st Birthday',
        subtitle: 'Early Prevention & Comfort',
        description: 'The American Academy of Pediatric Dentistry recommends bringing your child for their first checkup when their first tooth sprouts or by age 1.',
        keyPoints: [
          'Prevents early childhood cavities (nursing bottle caries)',
          'Helps children feel relaxed around dentists early',
          'Free guidance on teething pain relief & finger habit management',
        ],
        iconName: 'Smile',
        badge: 'Essential',
      },
      {
        title: 'Pit & Fissure Sealants',
        subtitle: 'Cavity Shield for Molars',
        description: 'Pits and deep grooves in back molars trap 80% of food particles. Dental sealants coat these grooves with a thin protective layer.',
        keyPoints: [
          'Painless & non-invasive application in under 15 minutes',
          'Reduces molar decay risk by up to 80%',
          'Lasts for years with routine 6-month checks',
        ],
        iconName: 'ShieldCheck',
        badge: 'Top Preventive',
      },
      {
        title: 'Fluoride Toothpaste Guidelines',
        subtitle: 'Right Quantity for Right Age',
        description: 'Fluoride strengthens tooth enamel against acidic attacks from sugars and snacks.',
        keyPoints: [
          'Ages 0–3: A tiny grain-of-rice sized smear of fluoride toothpaste',
          'Ages 3–6: A pea-sized amount under parent supervision',
          'Encourage spitting out paste rather than swallowing',
        ],
        iconName: 'Sparkles',
      },
      {
        title: 'Thumb Sucking & Pacifiers',
        subtitle: 'Protecting Jaw Growth',
        description: 'Thumb sucking is natural for babies, but prolonged habits past age 3-4 can affect palate shape and alignment of front teeth.',
        keyPoints: [
          'Gentle positive reinforcement works better than criticism',
          'Our pediatric dentist offers custom habit-breaking appliances if needed',
          'Early intervention prevents complex orthodontic treatments later',
        ],
        iconName: 'HeartHandshake',
      },
    ],
  },
  {
    id: 'adults',
    label: 'Adult Oral Hygiene',
    targetAudience: 'Teens, Adults & Busy Professionals',
    iconName: 'UserCheck',
    description: 'Daily maintenance routines to preserve natural enamel and prevent gum disease.',
    tips: [
      {
        title: 'The 2x2 Rule (Brush Twice for 2 Minutes)',
        subtitle: 'Optimal Plaque Removal',
        description: 'Most people brush for only 45 seconds! Brushing for 2 full minutes twice daily ensures thorough cleaning of all tooth surfaces.',
        keyPoints: [
          'Use soft or extra-soft bristles with gentle circular strokes',
          'Hold brush at a 45-degree angle toward the gum line',
          'Replace your toothbrush or brush head every 3 months',
        ],
        iconName: 'Clock',
        badge: 'Daily Core',
      },
      {
        title: 'Daily Flossing & Interdental Cleaning',
        subtitle: 'Cleaning Where Brushes Can’t Reach',
        description: 'Toothbrushes clean only 60% of tooth surfaces. Flossing removes plaque and trapped food between teeth where decay and gum disease start.',
        keyPoints: [
          'Floss once a day, preferably before bedtime',
          'Gently glide floss up and down following the tooth curve',
          'Water flossers or interdental brushes are great for braces & bridges',
        ],
        iconName: 'CheckCircle2',
      },
      {
        title: 'Recognizing Early Gum Disease (Gingivitis)',
        subtitle: 'Reversible Gum Protection',
        description: 'Bleeding gums when brushing is NOT normal—it is the first warning sign of gum inflammation caused by plaque buildup.',
        keyPoints: [
          'Swollen, tender, or red gums need professional evaluation',
          'Professional scaling every 6 months completely reverses gingivitis',
          'Prevents progression to periodontitis (bone loss & loose teeth)',
        ],
        iconName: 'AlertCircle',
        badge: 'Warning Sign',
      },
      {
        title: 'Diet & Enamel Acid Erosion',
        subtitle: 'Smart Snacking Habits',
        description: 'Frequent sipping on sodas, citrus juices, or sweet tea creates continuous acid attacks on enamel.',
        keyPoints: [
          'Rinse with plain water immediately after consuming acidic foods',
          'Wait 30 minutes before brushing after acidic meals (enamel is softened)',
          'Chew sugar-free gum with Xylitol to stimulate protective saliva',
        ],
        iconName: 'Apple',
      },
    ],
  },
  {
    id: 'seniors',
    label: 'Senior & Restorative Care',
    targetAudience: 'Seniors (Ages 60+) & Denture Wearers',
    iconName: 'Users',
    description: 'Specialized oral health strategies for healthy aging, dentures, and implants.',
    tips: [
      {
        title: 'Managing Dry Mouth (Xerostomia)',
        subtitle: 'Protecting Aging Teeth',
        description: 'Many prescription medications reduce saliva flow. Saliva is essential for washing away food debris and neutralizing cavity-causing acids.',
        keyPoints: [
          'Sip water frequently throughout the day',
          'Use alcohol-free fluoride mouth rinses to protect roots',
          'Ask our dentists about artificial saliva sprays & moisturizing gels',
        ],
        iconName: 'Droplets',
      },
      {
        title: 'Denture & Removable Appliance Care',
        subtitle: 'Hygiene & Comfort',
        description: 'Proper cleaning prevents fungal infections (thrush) and keeps gums healthy and firm under dentures.',
        keyPoints: [
          'Clean dentures daily with a soft denture brush (avoid hot water)',
          'Remove dentures overnight to allow gums to rest and breathe',
          'Soak in specialized cleansing solution overnight',
        ],
        iconName: 'Shield',
      },
      {
        title: 'Caring for Dental Implants & Bridges',
        subtitle: 'Ensuring Lifetime Success',
        description: 'While dental implants cannot decay, the surrounding gums and bone require strict hygiene to prevent peri-implantitis.',
        keyPoints: [
          'Use super-floss or interdental brushes around implant posts',
          'Schedule regular checkups for bite adjustments & cleaning',
          'Avoid biting on extremely hard objects like ice or hard candy',
        ],
        iconName: 'Award',
      },
    ],
  },
  {
    id: 'emergency',
    label: 'Dental First Aid',
    targetAudience: 'Immediate Action Steps for Emergencies',
    iconName: 'Zap',
    description: 'Crucial steps to save teeth and relieve pain before reaching our clinic.',
    tips: [
      {
        title: 'Knocked-Out Permanent Tooth (Avulsion)',
        subtitle: 'Golden Hour (60 Mins)',
        description: 'A knocked-out tooth can often be successfully replanted if treated within 1 hour!',
        keyPoints: [
          'Pick up the tooth by the top crown ONLY—do not touch the root!',
          'Gently rinse with cold milk or saline if dirty (do not scrub)',
          'Store tooth in a cup of fresh cold milk or inside the cheek',
          'Call our hotline (+91-98290-12345) and visit immediately!',
        ],
        iconName: 'Zap',
        badge: 'CRITICAL 60 MINS',
      },
      {
        title: 'Severe Toothache or Swelling',
        subtitle: 'Immediate Pain Relief',
        description: 'Continuous throbbing pain indicates nerve inflammation or an abscess.',
        keyPoints: [
          'Rinse mouth thoroughly with warm salt water',
          'Gently use dental floss to remove trapped food between teeth',
          'Apply a cold ice pack to the outside of your cheek',
          'Never place aspirin directly against gums (causes tissue burns)',
        ],
        iconName: 'Activity',
      },
      {
        title: 'Chipped or Broken Tooth',
        subtitle: 'Protecting Sharp Edges',
        description: 'Save any broken tooth fragments if possible.',
        keyPoints: [
          'Rinse mouth with warm water to clean the area',
          'Cover sharp edges with clean sugarless gum or wax to protect tongue',
          'Visit our clinic for smooth resin bonding or protective ceramic crown',
        ],
        iconName: 'FileText',
      },
    ],
  },
];

export const DAILY_CHECKLIST = [
  { step: '01', title: 'Morning Brush', desc: '2 minutes with soft bristles & fluoride paste' },
  { step: '02', title: 'Tongue Cleaning', desc: 'Gently scrape back-to-front for fresh breath' },
  { step: '03', title: 'Night Flossing', desc: 'Clean between all teeth before bedtime' },
  { step: '04', title: 'Rinse & Protect', desc: 'Swish with alcohol-free fluoride mouthwash' },
];
