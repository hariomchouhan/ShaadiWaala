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
    couple: 'Rahul & Monika',
    venue: 'Chomu Palace, Jaipur',
    date: 'December 2024',
    quote:
      'ShaadiWaala helped us organize every ceremony exactly as we envisioned. We had a wonderful time and enjoyed all the celebrations. I have no hesitation recommending them to anyone.',
    rating: 5,
  },
  {
    id: '2',
    couple: 'Subhash & Payal',
    venue: 'The Leela, Udaipur',
    date: 'November 2024',
    quote:
      'A big thanks to the team for all the efforts and planning. All events went as per schedule. The decor and theme were perfect, especially the floral arrangements.',
    rating: 5,
  },
  {
    id: '3',
    couple: 'Plash & Lavi',
    venue: 'Mount Abu',
    date: 'April 2019',
    quote:
      'Thanks for the great effort to make our wedding a success. We truly appreciate all the hard work and will definitely plan all our family functions with ShaadiWaala.',
    rating: 5,
  },
  {
    id: '4',
    couple: 'Rohan & Surbhi',
    venue: 'The Lalit, Delhi',
    date: 'January 2019',
    quote:
      'I would like to extend my sincere thanks for making my son\'s wedding memorable. The decor was exactly what we desired, and the final outcome exceeded our expectations.',
    rating: 5,
  },
  {
    id: '5',
    couple: 'Sant & Shrishti',
    venue: 'JW Marriott, Raipur',
    date: 'February 2019',
    quote:
      'A royal Indian theme for the wedding and an international theme for the reception — everything was so well conceptualised. It would have been impossible without the ShaadiWaala team.',
    rating: 5,
  },
  {
    id: '6',
    couple: 'Vikram & Ananya',
    venue: 'Taj Lake Palace, Udaipur',
    date: 'March 2025',
    quote:
      'From the first consultation to the last dance, every detail was flawless. ShaadiWaala turned our destination wedding into a fairy tale we will cherish forever.',
    rating: 5,
  },
]
