import type { NavigationItem } from '@/types/NavigationItem';

const navData: NavigationItem[] = [
  {
    navDesc: 'View my homepage',
    navLink: '/',
    navHash: 'hero',
    navTitle: 'Home',
  },
  {
    navDesc: 'View my skills',
    navLink: '/',
    navHash: 'skills',
    navTitle: 'Skills',
  },
  {
    navDesc: 'View my education',
    navLink: '/',
    navHash: 'education',
    navTitle: 'Education',
  },
  {
    navDesc: 'View my courses',
    navLink: '/education/courses',
    navHash: '',
    navTitle: 'Courses',
  },
  {
    navDesc: 'View my work',
    navLink: '/',
    navHash: 'projects',
    navTitle: 'Projects',
  },
];

export { navData };
