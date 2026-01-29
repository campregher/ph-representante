
export type Brand = {
  id: string;
  name: string;
  slogan: string;
  accent: string;
  logo: string;
  dropshipping?: boolean;
  atacado?: boolean;
};


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
