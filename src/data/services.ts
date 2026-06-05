export type ServiceCategory = 'bride' | 'groom' | 'planning'

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
    id: 'wedding-planning',
    title: 'Wedding Planning',
    description:
      'End-to-end wedding coordination from concept to execution, ensuring every detail aligns with your vision.',
    category: 'planning',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    featured: true,
  },
  {
    id: 'venue-selection',
    title: 'Venue Selection',
    description:
      'Curated venue recommendations across India — from heritage palaces to modern luxury resorts.',
    category: 'planning',
    image:
      'https://images.unsplash.com/photo-1519167758481-83f29da8c2f2?w=600&q=80',
    featured: true,
  },
  {
    id: 'design-decor',
    title: 'Design & Decor',
    description:
      'Bespoke floral arrangements, stage design, and thematic decor that transforms your venue into a dreamscape.',
    category: 'planning',
    image:
      'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&q=80',
    featured: true,
  },
  {
    id: 'photography',
    title: 'Photography',
    description:
      'Capture every precious moment with our network of award-winning wedding photographers and cinematographers.',
    category: 'planning',
    image:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80',
    featured: true,
  },
  {
    id: 'catering',
    title: 'Catering',
    description:
      'Exquisite multi-cuisine menus crafted by top chefs, from traditional Indian feasts to global gourmet spreads.',
    category: 'planning',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    featured: true,
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    description:
      'Seamless guest management, welcome kits, accommodation coordination, and concierge services.',
    category: 'planning',
    image:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80',
    featured: true,
  },
  {
    id: 'entertainment',
    title: 'Entertainment',
    description:
      'Live bands, DJs, performers, and celebrity appearances to keep your celebrations alive all night.',
    category: 'planning',
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80',
    featured: true,
  },
  {
    id: 'destination-wedding',
    title: 'Destination Weddings',
    description:
      'Full destination wedding planning across India\'s most breathtaking locations with complete logistics support.',
    category: 'planning',
    image:
      'https://images.unsplash.com/photo-1519167758481-83f29da8c2f2?w=600&q=80',
    featured: true,
  },
  {
    id: 'mehndi',
    title: 'Mehndi Ceremony',
    description:
      'Beautiful mehndi setups with artists, decor, and entertainment for an unforgettable pre-wedding celebration.',
    category: 'bride',
    image:
      'https://images.unsplash.com/photo-1522673604730-dc317f1a51f2?w=600&q=80',
  },
  {
    id: 'haldi',
    title: 'Haldi Ceremony',
    description:
      'Vibrant haldi setups with traditional elements, floral decor, and coordinated rituals for both families.',
    category: 'bride',
    image:
      'https://images.unsplash.com/photo-1606800052052-a08af8348865?w=600&q=80',
  },
  {
    id: 'sangeet',
    title: 'Sangeet Night',
    description:
      'Grand sangeet productions with choreography, stage design, lighting, and sound for a spectacular show.',
    category: 'bride',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
  },
  {
    id: 'styling',
    title: 'Bridal Styling',
    description:
      'Complete bridal and groom styling — outfits, jewellery coordination, makeup artists, and personal shoppers.',
    category: 'bride',
    image:
      'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&q=80',
  },
  {
    id: 'baraat',
    title: 'Baraat Arrangement',
    description:
      'Royal baraat processions with horses, vintage cars, bands, and lawazma for a majestic groom\'s entry.',
    category: 'groom',
    image:
      'https://images.unsplash.com/photo-1591604466109-e907867ebdca?w=600&q=80',
  },
  {
    id: 'lawazma',
    title: 'Lawazma Procession',
    description:
      'Traditional royal processions with elephants, horses, and ceremonial elements for a regal baraat.',
    category: 'groom',
    image:
      'https://images.unsplash.com/photo-1583939009759-593c5c8743c4?w=600&q=80',
  },
  {
    id: 'vintage-car',
    title: 'Vintage Car',
    description:
      'Classic vintage and luxury car rentals for the groom\'s grand arrival in true royal Rajasthani style.',
    category: 'groom',
    image:
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80',
  },
  {
    id: 'welcome-host',
    title: 'Welcome Host',
    description:
      'Professional hosts and ushers to warmly receive and guide every guest throughout your celebrations.',
    category: 'groom',
    image:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80',
  },
  {
    id: 'valet-parking',
    title: 'Valet Parking',
    description:
      'Organised valet and parking management ensuring a smooth arrival experience for all your guests.',
    category: 'groom',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80',
  },
  {
    id: 'security',
    title: 'Security',
    description:
      'Professional security personnel and crowd management for safe, worry-free celebrations.',
    category: 'planning',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    id: 'honeymoon',
    title: 'Honeymoon Packages',
    description:
      'Curated honeymoon getaways to exotic destinations, perfectly planned for the newlyweds.',
    category: 'planning',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
  },
]

export const categoryLabels: Record<ServiceCategory, string> = {
  bride: "Bride's Journey",
  groom: "Groom's Journey",
  planning: 'Full Planning & Services',
}
