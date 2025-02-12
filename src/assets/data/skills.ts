type SkillsData = {
    database: string[];
    devops: string[];
    editor: string[];
    frameworks: string[];
    hosting: string[];
    ide: string[];
    languages: string[];
    libraries: string[];
    os: string[];
    tools: string[];
};

const skillsData: SkillsData = {
    database: ['MySQL', 'SQLite', 'MongoDB', 'Sequelize', 'Mongoose'],
    devops: ['CircleCI', 'GitHub Actions', 'Snyk'],
    editor: ['VS Code'],
    frameworks: [
        'Spring',
        'JUnit',
        'Mocha',
        'Express.js',
        'React',
        'React Router',
        'Django',
        'Flask',
    ],
    hosting: [
        'GitHub Pages',
        'Heroku',
        'Render',
        'Vercel',
        'Firebase',
        'Fl0',
        'Surge.sh',
    ],
    ide: ['IntelliJ', 'Eclipse'],
    languages: ['Java', 'Python', 'HTML', 'CSS', 'JavaScript'],
    libraries: [
        'NumPy',
        'SciPy',
        'SimPy',
        'Pandas',
        'Sinon',
        'Chai',
        'DaisyUI',
    ],
    os: ['Windows', 'Ubuntu'],
    tools: [
        'Maven',
        'Node.js',
        'npm',
        'pip',
        'git',
        'GitHub',
        'GitHub Desktop',
        'Postman',
    ],
};

export default skillsData;
