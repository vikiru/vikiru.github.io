type SkillsCategory = {
    title: string;
    data: string[];
};

type SkillsData = {
    database: SkillsCategory;
    devops: SkillsCategory;
    frameworks: SkillsCategory;
    hosting: SkillsCategory;
    languages: SkillsCategory;
    libraries: SkillsCategory;
    os: SkillsCategory;
    tools: SkillsCategory;
};


const skillsData: SkillsData = {
    database: {
        title: 'Database',
        data: ['MySQL', 'SQLite', 'MongoDB', 'Sequelize', 'Mongoose'],
    },
    devops: {
        title: 'DevOps',
        data: ['CircleCI', 'GitHub Actions', 'Snyk'],
    },
    frameworks: {
        title: 'Frameworks',
        data: [
            'Spring',
            'JUnit',
            'Mocha',
            'Express.js',
            'React Router',
            'Django',
            'Flask',
        ],
    },
    hosting: {
        title: 'Hosting',
        data: [
            'GitHub Pages',
            'Heroku',
            'Render',
            'Vercel',
            'Firebase',
            'Fl0',
            'Surge.sh',
        ],
    },
    languages: {
        title: 'Languages',
        data: ['Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
    },
    libraries: {
        title: 'Libraries',
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
    },
    os: {
        title: 'Operating Systems',
        data: ['Windows', 'Ubuntu'],
    },
    tools: {
        title: 'Tools',
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
    },
};

export default skillsData;
