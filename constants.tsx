
import { Project, PricingPlan, Benefit } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Love Letters',
    description: 'Emotional scroll storytelling & digital gift experiences.',
    imageUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=1200',
    category: 'Interaction',
    url: 'https://loveletters-kappa.vercel.app'
  },
  {
    id: '2',
    title: 'TempMail AI',
    description: 'Secure, disposable email service with AI-powered protection.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
    category: 'Tech & Security',
    url: 'https://tempmail-ai-secure-disposable-email-336910878147.us-west1.run.app/'
  },
  {
    id: '3',
    title: 'Product Catalog',
    description: 'Efficient, minimalist catalog system for high-end commerce.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    category: 'Commerce',
    url: 'https://katalog-produk1.vercel.app'
  },
  {
    id: '4',
    title: 'BoostUp',
    description: 'Professional business presence and growth acceleration.',
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200',
    category: 'Corporate',
    url: 'https://boostup.id/'
  }
];

export const PRICING: PricingPlan[] = [
  {
    title: 'Landing Page',
    description: 'For business & personal brand',
    price: 'Start from 500K',
    cta: 'Select Basic'
  },
  {
    title: 'Invitation Website',
    description: 'Wedding • Love Letters • Digital Cards',
    price: 'Start from 100K',
    cta: 'Select Digital',
    featured: true
  },
  {
    title: 'Custom Website',
    description: 'Need something special?',
    price: 'Consult Now',
    cta: 'Contact Admin'
  }
];

export const BENEFITS: Benefit[] = [
  { title: 'Custom Design', description: 'Tailored precisely to your brand DNA.' },
  { title: 'Free Consultation', description: 'We strategize before we build.' },
  { title: 'Revision Friendly', description: 'Perfecting until it feels just right.' },
  { title: 'Responsive & Clean Code', description: 'Flawless performance on all devices.' },
  { title: 'AI-Assisted Workflow', description: 'Faster delivery with smarter insights.' },
  { title: 'Long-Term Growth', description: 'Scalable architecture for the future.' }
];
