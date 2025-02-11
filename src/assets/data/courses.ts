import { CourseData } from "~types/CourseData";

const courseData: CourseData = {
  years: [
    {
      title: "First Year",
      courses: [
        {
          name: "Introductory Mechanics and Thermodynamics",
          courseCode: "PHYS1003",
          description:
            "Mechanics, gravitation, oscillations, and thermodynamics. The application of calculus to solve problems in these areas of physics is introduced. This course is intended for students in the physical sciences and engineering.",
        },
        {
          name: "Introduction to Engineering",
          courseCode: "ECOR1010",
          description:
            "Technology, society and the environment. Graphical design communication: sketching, graphical projections; CAD. Managing data: statistical methods; spreadsheets. Design analysis: matrix programming software; symbolic computer algebra systems. Design process: proposals; reports; presentations; reporting software.",
        },
        {
          name: "Calculus for Engineering or Physics",
          courseCode: "MATH1004",
          description:
            "Limits. Differentiation of the elementary functions. Rules of differentiation. Inverse trigonometric functions. Applications of differentiation: max-min problems, curve sketching, approximations. Definite and indefinite integrals, techniques of integration. Applications to areas and volumes.",
        },
        {
          name: "Linear Algebra I",
          courseCode: "MATH1107",
          description:
            "Systems of linear equations; vector space of n-tuples, subspaces, bases; matrix transformations, kernel, range; matrix algebra and determinants. Dot product. Complex numbers (including de Moivre's Theorem, and n-th roots). Eigenvalues, diagonalization and applications.",
        },
        {
          name: "Introduction to Software Development",
          courseCode: "SYSC1005",
          description:
            "Software development as an engineering discipline, using a modern programming language, Language syntax. Algorithm design. Tracing and visualizing program execution. Testing and debugging. Program style, documentation, reliability. Lab projects are drawn from a variety of application domains: digital image manipulation, computer games, robotics.",
        },
        {
          name: "Chemistry for Engineering Students",
          courseCode: "CHEM1101",
          description:
            "Topics include stoichiometry, atomic and molecular structure, thermodynamics and chemical equilibrium, acid-base chemistry, carbon dioxide in water, alkalinity, precipitation, electrochemistry, kinetics and basic organic chemistry. Laboratory component emphasizes techniques and methods of basic experimental chemistry.",
        },
        {
          name: "Introductory Electromagnetism and Wave Motion",
          courseCode: "PHYS1004",
          description:
            "This calculus-based course introduces potential energy, work, electricity, magnetism, oscillations and waves.",
        },
        {
          name: "Differential Equations and Infinite Series for Engineering or Physics",
          courseCode: "MATH1005",
          description:
            "First-order differential equations. Second-order linear equations with constant coefficients, undetermined coefficients, variation of parameters. Sequences and series, convergence tests, estimation of sums. Power series, Taylor series, remainders. Fourier series.",
        },
        {
          name: "Mechanics I",
          courseCode: "ECOR1101",
          description:
            "Introduction to mechanics. Scalars and vectors. Concurrent forces: resultant and components. Statics of particles. Moments and couples. Force system resultants. Rigid body equilibrium. Frames and machines. Internal forces. Kinematics and kinetics of particles. Conservation theorems: work-energy; impulse-momentum. Centroids and centres of gravity.",
        },
        {
          name: "Foundations of Imperative Programming",
          courseCode: "SYSC2006",
          description:
            "The imperative programming paradigm: assignment and state, types and variables, static and dynamic typing. Memory management and object lifetimes: static allocation, automatic allocation in activation frames, dynamic allocation. Function argument passing. Recursion. Data structures: dynamic arrays, linked lists. Encapsulation and information hiding.",
        },
      ],
    },
    {
      title: "Second Year",
      courses: [
        {
          name: "Multivariable Calculus for Engineering or Physics",
          courseCode: "MATH2004",
          description:
            "Curves and surfaces. Polar, cylindrical and spherical coordinates. Partial derivatives, gradients, extrema and Lagrange multipliers. Exact differentials. Multiple integrals over rectangular and general regions. Integrals over surfaces. Line integrals. Vector differential operators. Green’s Theorem, Stokes’ theorem, Divergence Theorem. Applications.",
        },
        {
          name: "Circuits and Signals",
          courseCode: "ELEC2501",
          description:
            "Properties of signals. Basic circuit elements: voltage and current sources. Kirchhoff's laws, linearity, superposition. Thevenin and Norton's theorems. Circuit simplification. AC steady-state analysis: impedance, admittance, phasors, frequency response. Transient response of RL and RC circuits: form of response, initial and final conditions. RLC circuits: resonance.",
        },
        {
          name: "Introduction to Digital Signals",
          courseCode: "SYSC2310",
          description:
            "Number systems: binary, decimal, hexadecimal. Digital representation of information. Computer arithmetic: integer, floating point, fixed point. Boolean logic, realization as basic digital circuits. Applications: simple memory circuits, synchronous sequential circuits for computer systems. Finite state machines, state graphs, counters, adders. Asynchronous sequential circuits. Races.",
        },
        {
          name: "Object-Oriented Software Development",
          courseCode: "SYSC2004",
          description:
            "Designing and implementing small-scale programs as communities of collaborating objects, using a dynamically-typed or statically-typed programming language. Fundamental concepts: classes, objects, encapsulation, information hiding, inheritance, polymorphism. Iterative, incremental development and test-driven development.",
        },
        {
          name: "Communication Skills for Eng. Students",
          courseCode: "CCDP2100",
          description:
            "Development of competence in professional written and oral communication in engineering. Focus on written documents (proposals, technical explanations, research reports, summaries) and oral presentations.",
        },
        {
          name: "Discrete Structures I",
          courseCode: "COMP1805",
          description:
            "Introduction to discrete mathematics and discrete structures. Topics include: propositional logic, predicate calculus, set theory, complexity of algorithms, mathematical reasoning and proof techniques, recurrences, induction, finite automata and graph theory. Material is illustrated through examples from computing.",
        },
        {
          name: "Programming Languages",
          courseCode: "SYSC3101",
          description:
            "Principles underlying different kinds of programming languages (procedural, functional, logic programming) and their semantics. Overview of machinery needed for language support (compilers, interpreters and run-time systems).",
        },
        {
          name: "Introduction to Computer Organization and Architecture",
          courseCode: "SYSC2320",
          description:
            "Computer organization: processor, memory, input/output, system bus. Microarchitecture. Instruction set architecture. Assembly language programming: addressing modes, instruction encoding, execution. Assembler. Simple digital I/O, programmable timer. Input/output methods: polling, hardware interrupts.",
        },
        {
          name: "Algorithms and Data Structures",
          courseCode: "SYSC2100",
          description:
            "Thorough coverage of fundamental abstract collections: stacks, queues, lists, priority queues, dictionaries, sets, graphs. Data structures: review of arrays and linked lists; trees, heaps, hash tables. Specification, design, implementation of collections, complexity analysis of operations. Sorting algorithms.",
        },
        {
          name: "Introduction to Digital Humanities",
          courseCode: "DIGH2001",
          description:
            "An introduction to the principal debates in and approaches to the Digital Humanities.",
        },
        {
          name: "Writing Essays about Literature",
          courseCode: "ENGL1010",
          description:
            "An intensive writing course focusing on the formulation and construction of a literary essay.",
        },
      ],
    },
    {
      title: "Third Year",
      courses: [
        {
          name: "Design and Analysis of Engineering Experiments",
          courseCode: "ECOR2050",
          description:
            "Statistics and the design of engineering experiments. Basic exploratory data analysis. Central limit theorem. Hypothesis testing: t-test, chi-square test, type-I and type-II errors, multiple-comparison problem. Statistical bias. Design of experiments: randomization, blocking and replication, randomized blocking designs, factorial design. Statistical software packages.",
        },
        {
          name: "Database Management Systems",
          courseCode: "COMP3005",
          description:
            "Introduces students to concepts of database management systems, database design and file structures. Topics include: entity-relationship modeling and object oriented database design, data models (relational, network and object oriented), the relational algebra, SQL, normalization theory, physical data organization, object oriented databases and OQL.",
        },
        {
          name: "Introduction to Real-Time Systems",
          courseCode: "SYSC3310",
          description:
            "Principles of event-driven systems. Microcontroller organization. Development of embedded applications. Programming external interfaces, programmable timer. Input/output methods: polling, interrupts. Real-time issues: concurrency, mutual exclusion, buffering.",
        },
        {
          name: "Software Development Project",
          courseCode: "SYSC3110",
          description:
            "Development of expertise in designing, implementing and testing maintainable, reusable software through team projects. Applying modern programming languages, design patterns, frameworks, UML and modern development processes (detection of olfactible source code defects, refactoring, iterative and incremental development, version control techniques) to medium-scale projects.",
        },
        {
          name: "Engineering Economics",
          courseCode: "ECOR3800",
          description:
            "Introduction to engineering economics; cash flow calculations; methods of comparison of alternatives; structural analysis; replacement analysis; public projects; depreciation and income tax; effects of inflation; sensitivity analysis; break-even analysis; decision making under risk and uncertainty.",
        },
        {
          name: "Operating Systems",
          courseCode: "SYSC4001",
          description:
            "Introduction to operating system principles. Processes and threads. CPU scheduling. Managing concurrency: mutual exclusion and synchronization, deadlock and starvation. Managing memory and input/output. Concurrent programming, including interprocess communication in distributed systems.",
        },
        {
          name: "Real-Time Concurrent Systems",
          courseCode: "SYSC3303",
          description:
            "Principles and practice of a systems engineering approach to the development of software for real-time, concurrent, distributed systems. Designing to achieve concurrency, performance, and robustness, using visual notations. Converting designs into programs. Introduction to hard real-time systems. Team project.",
        },
        {
          name: "Software Requirements Engineering",
          courseCode: "SYSC3120",
          description:
            "Current techniques, notations, methods, processes and tools used in Requirements Engineering. Requirements elicitation, negotiation, modeling requirements, management, validation. Skills needed for Requirements Engineering and the many disciplines on which it draws. Requirements analysis: domain modeling, modeling object interactions; UML modeling. Introduction to software development processes.",
        },
        {
          name: "The Software Economy and Project Management",
          courseCode: "SYSC4106",
          description:
            "Introduction to software project management and economics; Return on software investments; Software life cycle; Work breakdown structure, scheduling and planning; Risk analysis and management; Product size and cost estimation; Earn value management; Statistical process control; Managing project team and process improvement; Bidding and contract types.",
        },
        {
          name: "Fundamentals of Web Development",
          courseCode: "SYSC4504",
          description:
            "WWW architecture, web servers and browsers, core protocols. Web pages, their structure, interpretation and internal representation. Client-side and server-side programming. Data representation. Interfacing with databases and other server-side services. Cookies, state management, and privacy issues. Security. Web services.",
        },
      ],
    },
    {
      title: "Fourth Year",
      courses: [
        {
          name: "Electronic Materials, Devices and Transmission Media",
          courseCode: "ELEC4705",
          description:
            "Review of solid-state theory, conductors, semiconductors, superconductors, insulators, and optical and magnetic properties. Devices used in modern high speed electronic and communication systems: transistors, lasers, photodiodes, fiber optics, Josephson junctions. Implications of material properties on fabrication and operation of devices and circuits.",
        },
        {
          name: "Software Architecture and Design",
          courseCode: "SYSC4120",
          description:
            "Introduction and importance of software architectures and software system design in software engineering. Current techniques, modeling notations, methods, processes and tools used in software architecture and system design. Software architectures, architectural patterns, design patterns, software qualities, software reuse.",
        },
        {
          name: "Engineering Project",
          courseCode: "SYSC4907",
          description:
            "Student teams develop professional-level experience by applying previously acquired knowledge to a major design project. Lectures discuss project-related issues and student presentations. A project proposal, interim report, oral presentations, and a comprehensive final report are required.",
        },
        {
          name: "Software Validation",
          courseCode: "SYSC4101",
          description:
            "Techniques for the systematic testing of software systems. Software validation and verification, software debugging, quality assurance, measurement and prediction of software reliability. Emphasis on the treatment of these topics in the context of real-time and distributed systems.",
        },
        {
          name: "Introduction to Network and Software Security",
          courseCode: "SYSC4810",
          description:
            "Fundamental concepts, terminologies, and theories of computer security; principles underlying common security controls; various types of threats and attacks on networks and software systems, how they work, and controls for dealing with them; security risk assessment and management; legal and ethical aspects of computer security.",
        },
        {
          name: "Discrete Simulation/Modeling",
          courseCode: "SYSC4005",
          description:
            "Simulation as a problem solving tool. Random variable generation, general discrete simulation procedure: event table and statistical gathering. Analyses of simulation data: point and interval estimation. Confidence intervals. Overview of modeling, simulation, and problem solving using SIMSCRIPT, MODSIM, and other languages.",
        },
        {
          name: "Software Engineering Lab",
          courseCode: "SYSC4806",
          description:
            "Applying the full spectrum of engineering and programming knowledge acquired in the program through team projects in the laboratory. Practice in doing presentations and reviews. Lectures will discuss software engineering issues as they relate to the projects, from a mature point of view.",
        },
        {
          name: "Professional Practice",
          courseCode: "ECOR4995",
          description:
            "Presentations by faculty and external lecturers on the Professional Engineers Act, professional ethics and responsibilities, practice within the discipline and its relationship with other disciplines and to society, health and safety, environmental stewardship, principles and practice of sustainable development. Communication skills are emphasized.",
        },
        {
          name: "Formal Methods in Software Engineering",
          courseCode: "SYSC4111",
          description:
            "Introduction to formal methods in software engineering with coverage of propositional and first-order logic (syntax, semantics, proof theory), formal specification languages, bounded analysis and validation, formal specification tools, and model checking with finite-state machines, temporal logic, and model checking tools.",
        },
        {
          name: "Communications Software",
          courseCode: "SYSC4502",
          description:
            "Communications software architectures, protocols and operating systems. Application layer protocols, APIs and socket programming. P2P algorithms, network virtualization, SDN. Reliable data transfer algorithms, FSM, MSC. Network security. Multimedia applications, RTSP, CDN, DASH, RTP, RTCP. Packet scheduling algorithms, DiffServ, IntServ, RSVP. Traffic classification, cross-layer optimization.",
        },
        {
          name: "Computer Communications",
          courseCode: "SYSC4602",
          description:
            "Layered network architectures, TCP/IP suite, circuit switching, packet switching. Physical media, data transmission, multiplexing. Data link controls, MAC protocols, random access, polling, IEEE 802 standards. Bridges, switched Ethernet, VLANs. Routing algorithms, Internet routing protocols, datagram networks, virtual circuit networks. Transport protocols.",
        },
      ],
    },
  ],
};

export default courseData;
