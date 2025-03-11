import codeSmellDemo from '~images/CodeSmell/CodeSmell-demo.mp4';
import elevatorDemo from '~images/Concurrent-Elevator/Concurrent-Elevator-demo.mp4';
import digitalRiskDemo from '~images/digitalRisk/digitalRisk-demo.mp4';
import discreteSimDemo from '~images/discrete-sim/discrete-sim-demo.mp4';
import kelbrumDemo from '~images/Kelbrum/kelbrum-demo.mp4';
import surveyMonkeyDemo from '~images/Mini-SurveyMonkey/Mini-SurveyMonkey-demo.mp4';
import parseumDemo from '~images/Parseum/parseum-demo.mp4';
import restasaurusDemo from '~images/restasaurus/restasaurus-demo.mp4';
import urvoDemo from '~images/Urvo/Urvo-demo.mp4';
import { Project } from '~types/index';

type ProjectData = {
    projects: Project[];
};

const projectData: ProjectData = {
    projects: [
        {
            name: 'Kelbrum',
            description:
                'An anime recommendation system designed to recommend anime that is similar to user-selected anime.',
            startDate: 'Feb 2024',
            endDate: 'Mar 2024',
            technologiesUsed: [
                'JavaScript',
                'Node.js',
                'React',
                'React Router',
                'TailwindCSS',
                'DaisyUI',
                'Tensorflow.js',
            ],
            featured: true,
            contributors: 'This project was completed individually',
            githubUrl: 'https://github.com/vikiru/kelbrum',
            documentationUrl: 'https://vikiru.github.io/kelbrum',
            projectPageUrl: '/projects/Kelbrum',
            videoPath: kelbrumDemo,
            accomplishments: [
                'Leveraged Tensorflow.js and additional npm packages to apply k-means clustering, utilizing a custom weighted distance function to group anime based on similarity and allowing for prioritization of anime properties based on weights',
                'Designed the recommendation system to be adaptable and scalable, capable of expanding with input from k-means clustering and feature tensors. This approach allows for future handling of various content types',
                'Created a simple and easy to use UI for users to browse anime and view recommendations using React, TailwindCSS and DaisyUI',
                'Utilized React Router to create static and dynamic routes, displayed as individual pages',
                'Deployed a live version of the website using Firebase Hosting',
                'Utilized GitHub Actions to create a CI pipeline to lint and prettier format files',
                'Developed a script to initialize data files and supplement missing data through the JikanAPI',
                'Created user friendly and comprehensive documentation for the project using Docusaurus and hosted it via GitHub Pages',
            ],
        },
        {
            name: 'Parseum',
            description:
                'A markdown to HTML parser and editor built using Peggy.js, React, TailwindCSS and DaisyUI.',
            startDate: 'Feb 2024',
            endDate: 'Mar 2024',
            technologiesUsed: [
                'JavaScript',
                'Node.js',
                'Peggy.js',
                'React',
                'TailwindCSS',
                'DaisyUI',
                'Mocha',
                'Chai',
            ],
            featured: true,
            contributors: 'This project was completed individually',
            githubUrl: 'https://github.com/vikiru/parseum',
            documentationUrl: 'https://vikiru.github.io/parseum/',
            projectPageUrl: '/projects/Parseum',
            videoPath: parseumDemo,
            accomplishments: [
                'Created a Markdown parser by using Peggy.js to generate a parser from a defined Parsing Expression Grammar (PEG) file, allowing for the potential to grow by defining further grammar rules',
                'Created a simple and easy to use editor for users to write Markdown and view rendered HTML using React, TailwindCSS and DaisyUI',
                'Developed tests for supported syntax to ensure that the parser was returning correct HTML for input Markdown using Mocha and Chai',
                'Utilized GitHub Actions to create a CI pipeline for running tests, linting files and prettier formatting them',
                'Deployed a live version of the website using Surge.sh',
                'Created user friendly and comprehensive documentation for the project using Docusaurus and hosted it via GitHub Pages',
            ],
        },
        {
            name: 'RESTasaurus',
            description:
                'A dinosaur REST API built using Express, MongoDB and Mongoose with comprehensive data for almost 1200 dinosaurs.',
            startDate: 'Jan 2024',
            endDate: 'Feb 2024',
            technologiesUsed: [
                'JavaScript',
                'Node.js',
                'Express.js',
                'MongoDB',
                'Mongoose',
                'Sinon',
                'Mocha',
                'Chai',
            ],
            featured: true,
            contributors: 'This project was completed individually',
            githubUrl: 'https://github.com/vikiru/restasaurus',
            documentationUrl: 'https://vikiru.github.io/restasaurus/',
            projectPageUrl: '/projects/RESTasaurus',
            videoPath: restasaurusDemo,
            accomplishments: [
                'Developed a fully functional dinosaur REST API using Express, MongoDB, and Mongoose and hosted it via Render',
                'Designed MongoDB schemas for Dinosaur, ClassificationInfo, DinosaurImage, and DinosaurSource info, and created a JavaScript class, MongooseData for use in data retrieval and processing prior to converting to schemas',
                'Achieved 100% test coverage with over 200 tests using Sinon, Mocha, Chai and Istanbul, and showcased this with badges in the README',
                'Built a comprehensive and user-friendly documentation website with Docusaurus, hosted via GitHub pages',
                'Utilized Swagger Editor to create OpenAPI specification for all routes and MongoDB schemas',
                'Utilized GitHub Actions to create a CI pipeline for running tests, linting files and prettier formatting them',
                'Developed scripts to retrieve and process data from Wikipedia articles via its API, and save the data to the MongoDB database',
            ],
        },
        {
            name: 'Urvo',
            description:
                'A multi-purpose Discord bot with over 65 commands across 8 categories, aiming to enhance user experience and interactivity.',
            startDate: 'June 2021',
            endDate: 'Nov 2023',
            technologiesUsed: [
                'JavaScript',
                'Node.js',
                'discord.js',
                'SQLite',
                'Sequelize',
                'Mocha',
                'Chai',
            ],
            featured: true,
            contributors: 'This project was completed individually',
            githubUrl: 'https://github.com/vikiru/Urvo',
            documentationUrl: 'https://vikiru.github.io/Urvo/',
            projectPageUrl: '/projects/Urvo',
            videoPath: urvoDemo,
            accomplishments: [
                'Developed a Discord bot that leveraged 25 external REST APIs to fetch and display JSON data in rich embeds, enhancing user engagement and interactivity',
                'Utilized Sequelize with SQLite to design and manage a database for a Discord-based economy and game-like system',
                'Authored comprehensive and user-friendly documentation for the Discord bot project using Docusaurus, and deployed it on GitHub Pages for easy access and maintenance',
                'Verified external API functionality by developing tests using Mocha and Chai',
            ],
        },
        {
            name: 'CodeSmell',
            description:
                'A tool for detection and visualization of code smells for object-oriented languages.',
            startDate: 'Sept 2022',
            endDate: 'Apr 2023',
            technologiesUsed: [
                'Java',
                'Python',
                'Maven',
                'JUnit',
                'JavaFX',
                'HTML',
                'CSS',
                'JavaScript',
            ],
            featured: true,
            contributors:
                'This project was completed as a group, with 3 co-authors',
            githubUrl: 'https://github.com/vikiru/CodeSmell',
            documentationUrl: 'https://github.com/vikiru/CodeSmell/wiki',
            projectPageUrl: '/projects/CodeSmell',
            videoPath: codeSmellDemo,
            accomplishments: [
                'Integrated Maven and Joern, an existing external static analysis tool via Python',
                'Optimized data retrieval from local Joern server instance by 80%, reducing time to 180s from 840s (or less depending on hardware and os)',
                "Contributed to the development and enhancement of a collection of classes representing Java's OOP Model",
                'Contributed to the development of a Parser class to convert JSON data from Joern to Java objects',
                'Designed classes for UML relationship assignment and code smell detection statistics',
                'Implemented and tested algorithms for three specific code smells (Inappropriate Intimacy, Refused Bequest, and Orphan Variable)',
                'Created a wiki that traces the project’s milestone-wise evolution, team member contributions, and setup procedures, paired with explanatory gifs and screenshots',
            ],
        },
        {
            name: 'Portfolio Website',
            description:
                'A personal portfolio website showcasing my skills and projects.',
            startDate: 'Nov 2023',
            endDate: 'Jan 2024',
            technologiesUsed: [
                'JavaScript',
                'React',
                'React Router',
                'TailwindCSS',
            ],
            featured: false,
            contributors: 'This project was completed individually',
            githubUrl: 'https://github.com/vikiru/vikiru.github.io',
            documentationUrl: '',
            projectPageUrl: '/projects/Portfolio',
            videoPath: '',
            accomplishments: [
                'Developed a portfolio website using React and TailwindCSS and hosted it via Vercel',
                'Utilized Chrome Dev Tools and TailwindCSS utility classes to achieve a responsive design across various screen sizes',
                'Utilized React Router to create static and dynamic routes, displayed as individual pages',
                'Utilized GitHub Actions to create a CI pipeline to lint and format files',
                'Utilized Figma to create mockups of components and pages',
            ],
        },
        {
            name: 'discrete-sim',
            description: 'Manufacturing facility simulation.',
            startDate: 'Jan 2022',
            endDate: 'Apr 2022',
            technologiesUsed: ['Python', 'NumPy', 'SciPy', 'SimPy'],
            featured: false,
            contributors: 'This project was completed individually',
            githubUrl: 'https://github.com/vikiru/discrete-sim',
            documentationUrl: 'https://vikiru.github.io/discrete-sim/',
            projectPageUrl: '/projects/discrete-sim',
            videoPath: discreteSimDemo,
            accomplishments: [
                'Used SimPy to model the facility and its operations based on a given problem statement',
                'Used SciPy and NumPy to perform statistical analysis on the simulation output data and compare different operating policies',
                'Used MkDocs to create a professional documentation website and hosting it on GitHub Pages',
            ],
        },
        {
            name: 'Mini-SurveyMonkey',
            description:
                'A SurveyMonkey clone built as a Spring Boot CRUD Web Application, enabling survey creation, modification, and PDF export of results.',
            startDate: 'Mar 2022',
            endDate: 'Apr 2022',
            technologiesUsed: [
                'Java',
                'Maven',
                'Spring',
                'Thymeleaf',
                'JUnit',
                'HTML',
                'CSS',
                'JavaScript',
            ],
            featured: false,
            contributors:
                'This project was completed as a group, with 2 co-authors',
            githubUrl: 'https://github.com/vikiru/Mini-SurveyMonkey',
            documentationUrl:
                'https://github.com/vikiru/Mini-SurveyMonkey/wiki',
            projectPageUrl: '/projects/Mini-SurveyMonkey',
            videoPath: surveyMonkeyDemo,
            accomplishments: [
                'Contributed to the development of a model for survey creation (questions, answers, survey and different users)',
                'Created Thymeleaf pages for key endpoints such as creating and displaying surveys (including survey results)',
                'Integrated Spring Security, Google Charts, and html2pdf for security, visualization, and export of survey results',
                'Integrated CircleCI for CI/CD and developed JUnit tests',
                'Constructed a wiki detailing the project’s milestone-based advancements',
            ],
        },
        {
            name: 'Elevator Simulator',
            description:
                'A simulation of an elevator transporting passengers among floors, with the capability to introduce and handle errors that may arise during operation. ',
            startDate: 'Jan 2021',
            endDate: 'Apr 2021',
            technologiesUsed: ['Java', 'Maven', 'JUnit', 'UDP', 'Threads'],
            featured: false,
            contributors:
                'This project was completed as a group, with 3 co-authors',
            githubUrl: '',
            documentationUrl: '',
            projectPageUrl: '/projects/Elevator-Simulator',
            videoPath: elevatorDemo,
            accomplishments: [
                'Developed UML Class diagrams representing the system design',
                'Added the ability to inject and handle errors that can occur within an elevator such as doors not closing',
                'Added JUnit tests to test the performance of the elevator’s error handling and the ability to run multiple elevators at once',
                'Contributed to the development and enhancement of the overall system',
            ],
        },
        {
            name: 'Digital Risk',
            description:
                'Digital Risk is a re-creation of the board game Risk: Global Domination using Java Swing and following the MVC design pattern.',
            startDate: 'Oct 2020',
            endDate: 'Dec 2020',
            technologiesUsed: ['Java', 'Maven', 'JUnit', 'Swing'],
            featured: false,
            contributors:
                'This project was completed as a group, with 3 co-authors',
            githubUrl: 'https://github.com/flavji/digitalRisk',
            documentationUrl: 'https://github.com/flavji/digitalRisk/wiki',
            projectPageUrl: '/projects/digitalRisk',
            videoPath: digitalRiskDemo,
            accomplishments: [
                'Contributed to the development of a Swing GUI ',
                'Contributed to the development of classes representing aspects of the model, view, and controller of a Risk game',
            ],
        },
    ],
};

const featuredProjects = projectData.projects.filter(
    (project) => project.featured,
);

const otherProjects = projectData.projects.filter(
    (project) => !project.featured,
);

export { featuredProjects, otherProjects, projectData };
