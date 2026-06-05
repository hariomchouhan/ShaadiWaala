export type PortfolioCategory =
  | 'all'
  | 'mehndi'
  | 'sangeet'
  | 'baraat'
  | 'reception'
  | 'decor'

export interface PortfolioItem {
  id: string
  title: string
  category: Exclude<PortfolioCategory, 'all'>
  image: string
  venue: string
}

export const portfolioCategories: { id: PortfolioCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'mehndi', label: 'Mehndi' },
  { id: 'sangeet', label: 'Sangeet' },
  { id: 'baraat', label: 'Baraat' },
  { id: 'reception', label: 'Reception' },
  { id: 'decor', label: 'Decor' },
]

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Royal Mehndi Setup',
    category: 'mehndi',
    image:
      'https://images.unsplash.com/photo-1522673604730-dc317f1a51f2?w=800&q=80',
    venue: 'Chomu Palace, Jaipur',
  },
  {
    id: '2',
    title: 'Floral Mandap Decor',
    category: 'decor',
    image:
      'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80',
    venue: 'Taj Lake Palace, Udaipur',
  },
  {
    id: '3',
    title: 'Sangeet Night Extravaganza',
    category: 'sangeet',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    venue: 'The Leela, Udaipur',
  },
  {
    id: '4',
    title: 'Grand Baraat Procession',
    category: 'baraat',
    image:
      'https://images.unsplash.com/photo-1591604466109-e907867ebdca?w=800&q=80',
    venue: 'Rambagh Palace, Jaipur',
  },
  {
    id: '5',
    title: 'Elegant Reception Dinner',
    category: 'reception',
    image:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
    venue: 'JW Marriott, Raipur',
  },
  {
    id: '6',
    title: 'Traditional Pheras',
    category: 'decor',
    image:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
    venue: 'The Lalit, Delhi',
  },
  {
    id: '7',
    title: 'Mehndi Garden Party',
    category: 'mehndi',
    image:
      'https://images.unsplash.com/photo-1606800052052-a08af8348865?w=800&q=80',
    venue: 'Mount Abu',
  },
  {
    id: '8',
    title: 'Bollywood Sangeet',
    category: 'sangeet',
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    venue: 'Fairmont, Jaipur',
  },
  {
    id: '9',
    title: 'Vintage Car Baraat',
    category: 'baraat',
    image:
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    venue: 'City Palace, Jaipur',
  },
  {
    id: '10',
    title: 'Luxury Reception Setup',
    category: 'reception',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    venue: 'Oberoi Udaivilas',
  },
  {
    id: '11',
    title: 'Palace Wedding Decor',
    category: 'decor',
    image:
      'https://images.unsplash.com/photo-1519167758481-83f29da8c2f2?w=800&q=80',
    venue: 'Umaid Bhawan, Jodhpur',
  },
  {
    id: '12',
    title: 'Beachside Reception',
    category: 'reception',
    image:
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
    venue: 'Goa',
  },
]
