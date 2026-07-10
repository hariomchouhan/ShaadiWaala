export type ServiceCategory = 'core' | 'bride' | 'groom'

export interface Service {
  id: string
  title: string
  description: string
  category: ServiceCategory
  image: string
  featured?: boolean
}

export const services: Service[] = [
  {
    id: 'personal-matchmaking',
    title: 'Personal Matchmaking',
    description:
      'One-on-one matrimonial service tailored to your family\'s values, preferences, and expectations — handled privately, never on a public platform.',
    category: 'core',
    image: 'https://firebasestorage.googleapis.com/v0/b/shaadiwaala-5f8be.firebasestorage.app/o/website%2FPersonal%20Matchmaking%20S1.jpg?alt=media&token=7c5d7496-1a65-4483-a9a9-0b99517b7243',
    featured: true,
  },
  {
    id: 'elite-nri',
    title: 'Elite & NRI Matrimony',
    description:
      'Exclusively for Elite-class families and NRIs. We understand the unique expectations of high-profile and overseas clients and match accordingly.',
    category: 'core',
    image: 'https://firebasestorage.googleapis.com/v0/b/shaadiwaala-5f8be.firebasestorage.app/o/website%2FElite%20%20%26%20NRI%20S2.jpg?alt=media&token=68cd29d2-8552-49e9-8bf2-3daa75a305a6',
    featured: true,
  },
  {
    id: 'background-verification',
    title: 'Background Verification',
    description:
      'Comprehensive verification of both parties — financial background, personal history, family reputation, and every detail that matters in an Indian marriage alliance.',
    category: 'core',
    image: 'https://firebasestorage.googleapis.com/v0/b/shaadiwaala-5f8be.firebasestorage.app/o/website%2FBackground%20Verification%20S3.jpg?alt=media&token=fa867f71-c0d9-4bdc-a8c2-2351adc47a09',
    featured: true,
  },
  {
    id: 'profile-sharing',
    title: 'Confidential Profile Sharing',
    description:
      'Profiles are shared selectively with essential personal details only — no contact information. Complete privacy until both sides approve a meeting.',
    category: 'core',
    image: 'https://firebasestorage.googleapis.com/v0/b/shaadiwaala-5f8be.firebasestorage.app/o/website%2FProfile%20Sharing.jpg?alt=media&token=2841b4af-3c36-43bd-8f16-b70b280d445f',
    featured: true,
  },
  {
    id: 'requirement-profiling',
    title: 'Requirement Profiling',
    description:
      'Detailed documentation of partner preferences — age, height, caste, education, profession, financial status, location, and family values — for precision matching.',
    category: 'core',
    image: 'https://firebasestorage.googleapis.com/v0/b/shaadiwaala-5f8be.firebasestorage.app/o/website%2FRecurement%20Pofiling%20S5.jpg?alt=media&token=1b026d20-46db-4e48-84fa-64f3db6f8244',
    featured: true,
  },
  {
    id: 'meetup-coordination',
    title: 'Personal Meetup Coordination',
    description:
      'We personally arrange and coordinate face-to-face meetings between matched families in a comfortable, private setting.',
    category: 'core',
    image: 'https://firebasestorage.googleapis.com/v0/b/shaadiwaala-5f8be.firebasestorage.app/o/website%2FPersonal%20Meeting%20S6.jpg?alt=media&token=bba2ec1f-768a-4e7c-b9c1-d4d496ebb001',
    featured: true,
  },
  {
    id: 'financial-verification',
    title: 'Financial Verification',
    description:
      'Independent verification of financial standing, assets, and earning capacity — ensuring transparency and trust before any alliance proceeds.',
    category: 'core',
    image: 'https://firebasestorage.googleapis.com/v0/b/shaadiwaala-5f8be.firebasestorage.app/o/website%2FFinancial%20S7.jpg?alt=media&token=a3f777b4-1687-406e-9509-8698ac56aeee',
    featured: true,
  },
  {
    id: 'privacy-first',
    title: 'Privacy-First Service',
    description:
      'Your data stays entirely private within our system. No public listings, no shared databases — only our team accesses your information.',
    category: 'core',
    image: 'https://firebasestorage.googleapis.com/v0/b/shaadiwaala-5f8be.firebasestorage.app/o/website%2FPrivacy%20S8.jpg?alt=media&token=fddb4013-adce-43e8-9cd4-e970909e9360',
    featured: true,
  },
  // {
  //   id: 'bride-registration',
  //   title: 'Bride Family Consultation',
  //   description:
  //     'Dedicated consultation for bride families — understanding her preferences, family expectations, and the qualities she seeks in a life partner.',
  //   category: 'bride',
  //   image: images.mehndi,
  // },
  // {
  //   id: 'bride-preferences',
  //   title: 'Partner Preference Matching',
  //   description:
  //     'We match based on the bride\'s specific requirements — groom\'s age, height, education, profession, financial background, caste, and family values.',
  //   category: 'bride',
  //   image: images.bridalStyling,
  // },
  // {
  //   id: 'bride-verification',
  //   title: 'Groom Background Check',
  //   description:
  //     'Every prospective groom is thoroughly verified before his profile is shared — financial, personal, family, and professional background included.',
  //   category: 'bride',
  //   image: images.haldi,
  // },
  // {
  //   id: 'groom-registration',
  //   title: 'Groom Family Consultation',
  //   description:
  //     'Personal consultation for groom families — understanding his preferences, career goals, and the qualities he seeks in a life partner.',
  //   category: 'groom',
  //   image: images.baraat,
  // },
  // {
  //   id: 'groom-preferences',
  //   title: 'Partner Preference Matching',
  //   description:
  //     'We match based on the groom\'s specific requirements — bride\'s age, education, family background, caste, lifestyle, and personal values.',
  //   category: 'groom',
  //   image: images.sangeet,
  // },
  // {
  //   id: 'groom-verification',
  //   title: 'Bride Background Check',
  //   description:
  //     'Every prospective bride is thoroughly verified before her profile is shared — family background, education, personal history, and all relevant details.',
  //   category: 'groom',
  //   image: images.pheras,
  // },
]

export const categoryLabels: Record<ServiceCategory, string> = {
  core: 'Core Services',
  bride: 'For Bride Families',
  groom: 'For Groom Families',
}
