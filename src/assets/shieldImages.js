const shieldImages = {
  Java: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
  Python:
    "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
  HTML: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
  CSS: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  JavaScript:
    "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  Markdown:
    "https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white",
  Spring:
    "https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white",
  Thymeleaf:
    "https://img.shields.io/badge/Thymeleaf-%23005C0F.svg?style=for-the-badge&logo=Thymeleaf&logoColor=white",
  JUnit:
    "https://img.shields.io/badge/Junit5-25A162?style=for-the-badge&logo=junit5&logoColor=white",
  Nodejs:
    "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
  Mocha:
    "https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white",
  Chai: "https://img.shields.io/badge/chai-A30701?style=for-the-badge&logo=chai&logoColor=white",
  NumPy:
    "https://img.shields.io/badge/Numpy-777BB4?style=for-the-badge&logo=numpy&logoColor=white",
  SciPy:
    "https://img.shields.io/badge/SciPy-654FF0?style=for-the-badge&logo=SciPy&logoColor=white",
  SimPy:
    "https://img.shields.io/badge/SimPy-3776AB?style=for-the-badge&logoColor=white",
  Pandas:
    "https://img.shields.io/badge/Pandas-2C2D72?style=for-the-badge&logo=pandas&logoColor=white",
  Django:
    "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white",
  Flask:
    "https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white",
  React:
    "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
  MySQL:
    "https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white",
  MongoDB:
    "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
  SQLite:
    "https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white",
  Sequelize:
    "https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white",
  Maven:
    "https://img.shields.io/badge/apache_maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white",
  Swing:
    "https://img.shields.io/badge/java%20swing-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
  UDP: "",
  Threads: "",
  JavaFX:
    "https://img.shields.io/badge/java%20fx-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
  discordjs:
    "https://img.shields.io/badge/discord.js-7289DA?style=for-the-badge&logo=discordjs&logoColor=white",
  CircleCI:
    "https://img.shields.io/badge/CIRCLECI-02303A.svg?style=for-the-badge&logo=CIRCLECI&logoColor=white&color=%23343434",
  GithubActions:
    "https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white",
  Snyk: "https://img.shields.io/badge/Snyk-4C4A73?style=for-the-badge&logo=snyk&logoColor=white",
  NPM: "https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white",
  pip: "https://img.shields.io/badge/pip-3776AB?style=for-the-badge&logo=python&logoColor=white",
  Git: "https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white",
  Github:
    "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",
  GithubDesktop:
    "https://img.shields.io/badge/GitHub%20Desktop-800080?style=for-the-badge&logo=github&logoColor=white",
  Postman:
    "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white",
  ESLint:
    "https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white",
  Prettier:
    "https://img.shields.io/badge/prettier-100000?style=for-the-badge&logo=prettier&logoColor=white",
  IntelliJ:
    "https://img.shields.io/badge/IntelliJ_IDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white",
  Eclipse:
    "https://img.shields.io/badge/Eclipse-2C2255?style=for-the-badge&logo=eclipse&logoColor=white",
  VSCode:
    "https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white",
  GithubPages:
    "https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white",
  Heroku:
    "https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white",
  Render:
    "https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white",
  Windows:
    "https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white",
  Ubuntu:
    "https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white",
};

export default shieldImages;
