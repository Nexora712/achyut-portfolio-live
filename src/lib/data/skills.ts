export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number; // 1-100
  icon?: string;
}

export const skills: Skill[] = [
  {
    id: '1',
    name: 'Next.js',
    category: 'Frontend',
    level: 90,
  },
  {
    id: '2',
    name: 'TypeScript',
    category: 'Language',
    level: 85,
  },
  {
    id: '3',
    name: 'UI/UX Design',
    category: 'Design',
    level: 80,
  },
  {
    id: '4',
    name: 'AI Integration',
    category: 'Specialty',
    level: 75,
  },
];