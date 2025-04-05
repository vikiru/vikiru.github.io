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
        data: ['Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
        title: 'Languages',
    },
    frameworks: {
        data: [
            'Spring',
            'JUnit',
            'Mocha',
            'Express.js',
            'React Router',
            'Django',
            'Flask',
        ],
        title: 'Frameworks',
    },
    libraries: {
        data: [
            'React',
            'NumPy',
            'SciPy',
            'SimPy',
            'Pandas',
            'Sinon',
            'Chai',
            'DaisyUI',
        ],
        title: 'Libraries',
    },
    database: {
        data: ['MySQL', 'SQLite', 'MongoDB', 'Prisma', 'Sequelize', 'Mongoose'],
        title: 'Database',
    },
    tools: {
        data: [
            'Maven',
            'Node.js',
            'npm',
            'pip',
            'git',
            'GitHub',
            'GitHub Desktop',
            'Postman',
        ],
        title: 'Tools',
    },
    devops: {
        data: ['CircleCI', 'GitHub Actions', 'Snyk'],
        title: 'DevOps',
    },
    hosting: {
        data: [
            'GitHub Pages',
            'Heroku',
            'Render',
            'Vercel',
            'Firebase',
            'Fl0',
            'Surge.sh',
        ],
        title: 'Hosting',
    },
    os: {
        data: ['Windows', 'Ubuntu'],
        title: 'Operating Systems',
    },
};

export default skillsData;
