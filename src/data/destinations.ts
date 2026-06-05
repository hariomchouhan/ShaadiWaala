export interface Destination {
  id: string
  name: string
  tagline: string
  image: string
}

export const destinations: Destination[] = [
  {
    id: 'jaipur',
    name: 'Jaipur',
    tagline: 'The Pink City of Palaces',
    image:
      'https://images.unsplash.com/photo-1477587451663-34a8b456f10f?w=600&q=80',
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    tagline: 'City of Lakes & Romance',
    image:
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80',
  },
  {
    id: 'jodhpur',
    name: 'Jodhpur',
    tagline: 'The Blue City Heritage',
    image:
      'https://images.unsplash.com/photo-1599669309269-5badc0f0027a?w=600&q=80',
  },
  {
    id: 'goa',
    name: 'Goa',
    tagline: 'Beachside Bliss',
    image:
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80',
  },
  {
    id: 'mtabu',
    name: 'Mount Abu',
    tagline: 'Hill Station Serenity',
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
  },
  {
    id: 'agra',
    name: 'Agra',
    tagline: 'Monumental Love',
    image:
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80',
  },
]
