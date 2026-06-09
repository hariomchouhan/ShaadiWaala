import { images } from './images'

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
    image: images.mehndi,
    venue: 'Chomu Palace, Jaipur',
  },
  {
    id: '2',
    title: 'Floral Mandap Decor',
    category: 'decor',
    image: images.weddingDecor,
    venue: 'Taj Lake Palace, Udaipur',
  },
  {
    id: '3',
    title: 'Sangeet Night Extravaganza',
    category: 'sangeet',
    image: images.sangeet,
    venue: 'The Leela, Udaipur',
  },
  {
    id: '4',
    title: 'Grand Baraat Procession',
    category: 'baraat',
    image: images.baraat,
    venue: 'Rambagh Palace, Jaipur',
  },
  {
    id: '5',
    title: 'Elegant Reception Dinner',
    category: 'reception',
    image: images.reception,
    venue: 'JW Marriott, Raipur',
  },
  {
    id: '6',
    title: 'Traditional Pheras',
    category: 'decor',
    image: images.pheras,
    venue: 'The Lalit, Delhi',
  },
  {
    id: '7',
    title: 'Mehndi Garden Party',
    category: 'mehndi',
    image: images.haldi,
    venue: 'Mount Abu',
  },
  {
    id: '8',
    title: 'Bollywood Sangeet',
    category: 'sangeet',
    image: images.entertainment,
    venue: 'Fairmont, Jaipur',
  },
  {
    id: '9',
    title: 'Vintage Car Baraat',
    category: 'baraat',
    image: images.vintageCar,
    venue: 'City Palace, Jaipur',
  },
  {
    id: '10',
    title: 'Luxury Reception Setup',
    category: 'reception',
    image: images.catering,
    venue: 'Oberoi Udaivilas',
  },
  {
    id: '11',
    title: 'Palace Wedding Decor',
    category: 'decor',
    image: images.palaceVenue,
    venue: 'Umaid Bhawan, Jodhpur',
  },
  {
    id: '12',
    title: 'Beachside Reception',
    category: 'reception',
    image: images.goa,
    venue: 'Goa',
  },
]
