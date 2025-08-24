export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    content: 'Achyut delivered our project ahead of schedule and exceeded our expectations in every way.',
  },
  {
    id: '2',
    name: 'Sarah Williams',
    role: 'Product Manager',
    company: 'Innovate Corp',
    content: 'Working with Achyut was a game-changer for our product. His AI expertise brought tremendous value.',
  },
];