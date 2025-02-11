type SkillsData = {
  languages: string[];
  frameworks: string[];
  libraries: string[];
  tools: string[];
  database: string[];
  devops: string[];
  hosting: string[];
  ide: string[];
  editor: string[];
  os: string[];
};

const skillsData: SkillsData = {
  languages: ["Java", "Python", "HTML", "CSS", "JavaScript"],
  frameworks: [
    "Spring",
    "JUnit",
    "Mocha",
    "Express.js",
    "React",
    "React Router",
    "Django",
    "Flask",
  ],
  libraries: ["NumPy", "SciPy", "SimPy", "Pandas", "Sinon", "Chai", "DaisyUI"],
  tools: [
    "Maven",
    "Node.js",
    "npm",
    "pip",
    "git",
    "GitHub",
    "GitHub Desktop",
    "Postman",
  ],
  database: ["MySQL", "SQLite", "MongoDB", "Sequelize", "Mongoose"],
  devops: ["CircleCI", "GitHub Actions", "Snyk"],
  hosting: [
    "GitHub Pages",
    "Heroku",
    "Render",
    "Vercel",
    "Firebase",
    "Fl0",
    "Surge.sh",
  ],
  ide: ["IntelliJ", "Eclipse"],
  editor: ["VS Code"],
  os: ["Windows", "Ubuntu"],
};

export default skillsData;
