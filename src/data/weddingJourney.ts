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
    image:
      'https://images.unsplash.com/photo-1606800052052-a08af8348865?w=600&q=80',
  },
  {
    id: 'mehndi',
    name: 'Mehndi',
    description:
      'Intricate henna artistry and celebration with the bride\'s closest loved ones.',
    image:
      'https://images.unsplash.com/photo-1522673604730-dc317f1a51f2?w=600&q=80',
  },
  {
    id: 'sangeet',
    name: 'Sangeet',
    description:
      'An evening of music, dance, and performances from both families.',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
  },
  {
    id: 'baraat',
    name: 'Baraat',
    description:
      'A grand procession celebrating the groom\'s arrival in royal style.',
    image:
      'https://images.unsplash.com/photo-1591604466109-e907867ebdca?w=600&q=80',
  },
  {
    id: 'pheras',
    name: 'Wedding Pheras',
    description:
      'Sacred vows around the holy fire, uniting two souls for eternity.',
    image:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80',
  },
  {
    id: 'reception',
    name: 'Reception',
    description:
      'A grand celebration welcoming the newlyweds with elegance and festivity.',
    image:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80',
  },
]
