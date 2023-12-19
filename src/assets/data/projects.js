const projectData = {
  projects: [
    {
      name: "Portfolio Website",
      githubUrl: "https://github.com/vikiru/vikiru.github.io",
      documentationUrl: "",
      description: "Personal portfolio website.",
      startDate: "Nov 2023",
      endDate: "Dec 2023",
      accomplishments: [
        "Developed a portfolio website using React and TailwindCSS",
        "Utilized Chrome Dev Tools and TailwindCSS utility classes to achieve a responsive design",
      ],
      technologiesUsed: ["React", "TailwindCSS"],
    },
    {
      name: "Urvo",
      githubUrl: "https://github.com/vikiru/Urvo",
      documentationUrl: "https://vikiru.github.io/Urvo/",
      description: "A multi-purpose Discord bot.",
      startDate: "June 2021",
      endDate: "July 2023",
      accomplishments: [
        "Developed a Discord bot that leveraged 25 external REST APIs to fetch and display JSON data in rich embeds, enhancing user engagement and interactivity",
        "Utilized Sequelize with SQLite to design and manage a database for a Discord-based economy and game-like system",
        "Authored comprehensive and user-friendly documentation for the Discord bot project using Docusaurus, and deployed it on GitHub Pages for easy access and maintenance",
        "Verified external API functionality by developing tests using Mocha and Chai",
      ],
      technologiesUsed: [
        "Node.js",
        "discord.js",
        "SQLite",
        "Sequelize",
        "Mocha",
        "Chai",
      ],
    },
    {
      name: "CodeSmell",
      githubUrl: "https://github.com/vikiru/CodeSmell",
      documentationUrl:
        "https://vikiru.github.io/CodeSmell/jfx/module-summary.html",
      description:
        "A tool for detection and visualization of code smells for object-oriented languages.",
      startDate: "Sept 2022",
      endDate: "Apr 2023",
      accomplishments: [
        "Integrated Maven and Joern, an existing external static analysis tool via Python",
        "Optimized data retrieval from local Joern server instance by 80%, reducing time to 180s from 840s (or less depending on hardware and os)",
        "Contributed to the development and enhancement of a collection of classes representing Java's OOP Model",
        "Contributed to the development of a Parser class to convert JSON data from Joern to Java objects",
        "Designed classes for UML relationship assignment and code smell detection statistics",
        " Implemented and tested algorithms for three specific code smells (Inappropriate Intimacy, Refused Bequest, and Orphan Variable)",
      ],
      technologiesUsed: [
        "Java",
        "Maven",
        "JUnit",
        "Python",
        "JavaFX",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
    {
      name: "discrete-sim",
      githubUrl: "https://github.com/vikiru/discrete-sim",
      documentationUrl: "",
      description: "Manufacturing facility simulation.",
      startDate: "Jan 2022",
      endDate: "Apr 2022",
      accomplishments: [
        "Used SimPy to model the facility and its operations based on a given problem statement",
        "Used SciPy and NumPy to perform statistical analysis on the simulation output data and compare different operating policies",
        "Used MkDocs to create a professional documentation website and hosting it on GitHub Pages",
      ],
      technologiesUsed: ["Python", "NumPy", "SciPy", "SimPy"],
    },
    {
      name: "Mini-SurveyMonkey",
      githubUrl: "https://github.com/vikiru/Mini-SurveyMonkey",
      documentationUrl: "",
      description:
        "A SurveyMonkey clone built as a Spring Boot CRUD Web Application.",
      startDate: "Mar 2022",
      endDate: "Apr 2022",
      accomplishments: [
        "Contributed to the development of a model for survey creation (questions, answers, survey and different users)",
        "Created Thymeleaf pages for key endpoints such as creating and displaying surveys (including survey results)",
        "Integrated Spring Security, Google Charts, and html2pdf for security, visualization, and export of survey results",
        "Integrated CircleCI for CI/CD and developed JUnit tests",
      ],
      technologiesUsed: [
        "Java",
        "Maven",
        "Spring",
        "Thymeleaf",
        "JUnit",
        "HTML",
        "CSS",
      ],
    },
    {
      name: "Concurrent Elevator Simulator",
      githubUrl: "",
      documentationUrl: "",
      description:
        "The aim of this project was to create a simulation of an elevator transporting passengers among floors, with the capability to introduce and handle errors that may arise during operation. ",
      startDate: "Jan 2021",
      endDate: "Apr 2021",
      accomplishments: [
        "Developed UML Class diagrams representing the system design",
        "Added the ability to inject and handle errors that can occur within an elevator such as doors not closing",
        "Added JUnit tests to test the performance of the elevator's error handling and the ability to run multiple elevators at once",
        "Contributed to the development and enhancement of the overall system",
      ],
      technologiesUsed: ["Java", "Maven", "JUnit", "UDP", "Threads"],
    },
    {
      name: "digitalRisk",
      githubUrl: "https://github.com/flavji/digitalRisk",
      documentationUrl: "",
      description:
        "Digital Risk is a re-creation of the board game Risk: Global Domination using Java Swing and following the MVC design pattern.",
      startDate: "Oct 2020",
      endDate: "Dec 2020",
      accomplishments: [
        "Contributed to the development of a Swing GUI ",
        "Contributed to the development of classes representing aspects of the model, view, and controller of a Risk game",
      ],
      technologiesUsed: ["Java", "Maven", "JUnit", "Swing"],
    },
  ],
};

export default projectData;
