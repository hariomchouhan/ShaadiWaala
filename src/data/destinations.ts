import { images } from './images'

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
    image: images.jaipur,
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    tagline: 'City of Lakes & Romance',
    image: images.udaipur,
  },
  {
    id: 'jodhpur',
    name: 'Jodhpur',
    tagline: 'The Blue City Heritage',
    image: images.jodhpur,
  },
  {
    id: 'goa',
    name: 'Goa',
    tagline: 'Beachside Bliss',
    image: images.goa,
  },
  {
    id: 'mtabu',
    name: 'Mount Abu',
    tagline: 'Hill Station Serenity',
    image: images.mountAbu,
  },
  {
    id: 'agra',
    name: 'Agra',
    tagline: 'Monumental Love',
    image: images.agra,
  },
]
