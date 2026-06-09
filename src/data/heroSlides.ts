import { images } from './images'

export interface HeroSlide {
  id: string
  image: string
  title: string
  subtitle: string
}

export const heroSlides: HeroSlide[] = [
  {
    id: '1',
    image: images.hero1,
    title: 'Personal Matchmaking',
    subtitle: 'For Elite Families & NRIs',
  },
  {
    id: '2',
    image: images.hero3,
    title: '100% Private',
    subtitle: 'Your Details Never Go Public',
  },
  {
    id: '3',
    image: images.hero2,
    title: 'Verified Backgrounds',
    subtitle: 'Financial, Personal & Family Checks',
  },
  {
    id: '4',
    image: images.hero4,
    title: 'Curated Meetings',
    subtitle: 'Face-to-Face, On Your Terms',
  },
]
