export interface Testimonial {
  id: string
  couple: string
  venue: string
  date: string
  quote: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    couple: 'Elite Family, Indore',
    venue: 'NRI Groom Match',
    date: '2024',
    quote:
      'The discretion and thoroughness impressed us immediately. They understood our family\'s expectations and found a match that aligned perfectly — without ever exposing our details publicly.',
    rating: 5,
  },
  {
    id: '2',
    couple: 'Business Family, Mumbai',
    venue: 'Elite Bride Match',
    date: '2024',
    quote:
      'Background verification gave us complete peace of mind. Every detail was checked before we even met the other family. The personal meetup was arranged flawlessly.',
    rating: 5,
  },
  {
    id: '3',
    couple: 'NRI Family, USA',
    venue: 'Cross-border Match',
    date: '2023',
    quote:
      'As an NRI family, we needed someone who understood both Indian traditions and international expectations. ShaadiWaala handled everything with utmost professionalism and privacy.',
    rating: 5,
  },
  {
    id: '4',
    couple: 'Industrialist Family, Delhi',
    venue: 'Elite Alliance',
    date: '2023',
    quote:
      'We appreciated that neither family knew about the other until we both approved. The profile sharing was detailed enough to decide, yet completely confidential.',
    rating: 5,
  },
  {
    id: '5',
    couple: 'Doctor Family, Bhopal',
    venue: 'Professional Match',
    date: '2025',
    quote:
      'From the first call to the final meeting, everything was handled personally. No portals, no public listings — just genuine, curated matchmaking for families like ours.',
    rating: 5,
  },
  {
    id: '6',
    couple: 'NRI Family, UK',
    venue: 'Elite Groom Match',
    date: '2025',
    quote:
      'The financial and family verification process was thorough and transparent. We felt confident proceeding because every detail had been personally verified by their team.',
    rating: 5,
  },
]
