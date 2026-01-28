
export interface Brand {
  id: string;
  name: string;
  slogan: string;
  accent: string;
  logo?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  company: string;
  content: string;
  image: string;
}
