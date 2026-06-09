import { images } from './images'

export interface JourneyStep {
  id: string
  name: string
  description: string
  image: string
}

export const weddingJourney: JourneyStep[] = [
  {
    id: 'haldi',
    name: 'Haldi',
    description:
      'A vibrant turmeric ceremony blessing the couple with prosperity and joy.',
    image: images.haldi,
  },
  {
    id: 'mehndi',
    name: 'Mehndi',
    description:
      'Intricate henna artistry and celebration with the bride\'s closest loved ones.',
    image: images.mehndi,
  },
  {
    id: 'sangeet',
    name: 'Sangeet',
    description:
      'An evening of music, dance, and performances from both families.',
    image: images.sangeet,
  },
  {
    id: 'baraat',
    name: 'Baraat',
    description:
      'A grand procession celebrating the groom\'s arrival in royal style.',
    image: images.baraat,
  },
  {
    id: 'pheras',
    name: 'Wedding Pheras',
    description:
      'Sacred vows around the holy fire, uniting two souls for eternity.',
    image: images.pheras,
  },
  {
    id: 'reception',
    name: 'Reception',
    description:
      'A grand celebration welcoming the newlyweds with elegance and festivity.',
    image: images.reception,
  },
]
