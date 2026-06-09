export interface ProcessStep {
  id: string
  step: number
  title: string
  description: string
}

export const howItWorks: ProcessStep[] = [
  {
    id: 'register',
    step: 1,
    title: 'Submit Your Enquiry',
    description:
      'Fill our confidential contact form with your basic details. Your information is sent privately to our team — it is never visible to any other user on this website.',
  },
  {
    id: 'consultation',
    step: 2,
    title: 'Personal Consultation',
    description:
      'Our team contacts you directly to understand your requirements — age, community, education, profession, financial expectations, lifestyle, and partner preferences.',
  },
  {
    id: 'profiling',
    step: 3,
    title: 'Detailed Profiling',
    description:
      'We document every requirement in depth — from caste and family background to height, weight, location, and NRI-specific needs — ensuring nothing is overlooked.',
  },
  {
    id: 'verification',
    step: 4,
    title: 'Background Verification',
    description:
      'Both bride and groom profiles undergo thorough verification — financial standing, personal history, family background, and all details relevant to a trusted Indian matrimonial alliance.',
  },
  {
    id: 'matching',
    step: 5,
    title: 'Confidential Profile Sharing',
    description:
      'When a potential match is found, we share curated profile summaries — without any contact details. The bride does not know the groom, and the groom does not know the bride, until a meeting is mutually approved.',
  },
  {
    id: 'meetup',
    step: 6,
    title: 'Personal Meetup',
    description:
      'Once both families agree, we arrange a private, in-person meeting. Our team coordinates every detail so you can focus on making the right decision for your future.',
  },
]
