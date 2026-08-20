type SkillsCategory = {
  data: string[];
  title: string;
};

type SkillsData = {
  languages: SkillsCategory;
  frameworks: SkillsCategory;
  libraries: SkillsCategory;
  database: SkillsCategory;
  tools: SkillsCategory;
  devops: SkillsCategory;
  hosting: SkillsCategory;
  os: SkillsCategory;
};

const skillsData: SkillsData = {
  languages: {
    data: ['TypeScript/JavaScript', 'Java', 'Python', 'HTML', 'CSS'],
    title: 'Languages',
  },
  frameworks: {
    data: [
      'TanStack Start',
      'Next.js',
      'Astro',
      'React Native',
      'React Router',
      'TanStack Router',
      'Express.js',
      'Spring',
      'Django',
      'Flask',
    ],
    title: 'Frameworks',
  },
  libraries: {
    data: ['React', 'TanStack Query', 'Zustand', 'Zod', 'NumPy', 'SciPy', 'SimPy', 'Pandas', 'Polars'],
    title: 'Libraries',
  },
  database: {
    data: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'Prisma', 'Drizzle', 'Sequelize', 'Mongoose'],
    title: 'Database',
  },
  tools: {
    data: ['Maven', 'Node.js', 'npm', 'pip', 'uv', 'git', 'GitHub', 'GitHub Desktop', 'Postman'],
    title: 'Tools',
  },
  devops: {
    data: ['CircleCI', 'GitHub Actions'],
    title: 'DevOps',
  },
  hosting: {
    data: ['GitHub Pages', 'Heroku', 'Render', 'Vercel', 'Firebase', 'Fl0', 'Surge.sh'],
    title: 'Hosting',
  },
  os: {
    data: ['Windows', 'Ubuntu'],
    title: 'Operating Systems',
  },
};

export { skillsData };
