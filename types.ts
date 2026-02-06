
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  url?: string;
}

export interface PricingPlan {
  title: string;
  description: string;
  price: string;
  cta: string;
  featured?: boolean;
}

export interface Benefit {
  title: string;
  description: string;
}
