import type { NavItem, ResumeData } from '@/types';
import { Code, Layers, DatabaseIcon, Cloud, Container, GitMerge, TerminalSquare, CheckCircle2, BookOpenCheck, Linkedin, Mail, Phone, Briefcase, GraduationCap, Award, Lightbulb, Send, Settings2, Brain } from 'lucide-react';

export const resumeData: ResumeData = {
  name: 'Jyothsna Kondapalli',
  title: 'Senior Full-Stack Engineer | Cloud & Microservices Specialist',
  contact: {
    email: 'jyothsnasai13@gmail.com',
    phone: '+1 469-607-5775',
    linkedin: 'https://www.linkedin.com/in/jyothsna-kondapalli-profile/', // Assuming a generic profile URL structure
    linkedinDisplay: 'linkedin.com/in/jyothsna-kondapalli',
  },
  summary:
    '8+ years of experience designing and developing full-stack applications with strong focus on scalable microservices, responsive UIs, and cloud-native deployments. Proven ability to build dynamic user interfaces with Angular and React, develop robust RESTful microservices with Spring Boot, and implement event-driven architectures using Kafka and RabbitMQ. Expertise in leveraging diverse database technologies (SQL & NoSQL) and deploying applications on AWS and Azure. Passionate about Agile methodologies, TDD, and CI/CD practices to deliver high-quality software.',
  technicalSkills: [
    {
      name: 'Languages',
      icon: Code,
      skills: [
        { name: 'Java (17, 11, 8)' },
        { name: 'JavaScript (ES6+)' },
        { name: 'SQL' },
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'SCSS' },
      ],
    },
    {
      name: 'Frameworks & Libraries',
      icon: Layers,
      skills: [
        { name: 'Spring Boot' },
        { name: 'Spring MVC' },
        { name: 'Spring Security' },
        { name: 'Angular (5–17)' },
        { name: 'React' },
        { name: 'RxJS' },
        { name: 'Bootstrap' },
      ],
    },
    {
      name: 'Messaging',
      icon: Send,
      skills: [{ name: 'Kafka' }, { name: 'RabbitMQ' }],
    },
    {
      name: 'Databases',
      icon: DatabaseIcon,
      skills: [
        { name: 'Oracle' },
        { name: 'MySQL' },
        { name: 'PostgreSQL' },
        { name: 'MongoDB' },
        { name: 'AWS DynamoDB' },
      ],
    },
    {
      name: 'Cloud Platforms',
      icon: Cloud,
      skills: [
        { name: 'Microsoft Azure (App Services, APIM, Blob Storage, Logic Apps, Container Service)' },
        { name: 'AWS (S3, ECS, ALB, Route 53, CloudWatch)' },
      ],
    },
    {
      name: 'Containerization & Orchestration',
      icon: Container,
      skills: [{ name: 'Docker' }, { name: 'Kubernetes' }],
    },
    {
      name: 'Build & CI/CD Tools',
      icon: Settings2,
      skills: [{ name: 'Jenkins' }, { name: 'GitHub Actions' }, { name: 'GitLab CI/CD' }],
    },
    {
      name: 'Version Control',
      icon: GitMerge,
      skills: [{ name: 'Git' }, { name: 'GitHub' }, { name: 'GitLab' }, { name: 'Bitbucket' }],
    },
    {
      name: 'Testing Frameworks',
      icon: CheckCircle2,
      skills: [{ name: 'JUnit 4/5' }, { name: 'Mockito' }, { name: 'Spring Test' }],
    },
    {
      name: 'Logging & Monitoring',
      icon: TerminalSquare,
      skills: [
        { name: 'Logback' },
        { name: 'Log4j' },
        { name: 'ELK Stack (Elasticsearch, Logstash, Kibana)' },
        { name: 'AWS CloudWatch' },
      ],
    },
    {
      name: 'Development Practices',
      icon: BookOpenCheck,
      skills: [
        { name: 'Agile (Scrum, Kanban)' },
        { name: 'Test-Driven Development (TDD)' },
        { name: 'Continuous Integration & Delivery (CI/CD)' },
        { name: 'GitFlow' },
      ],
    },
  ],
  professionalExperience: [
    {
      company: 'Dell',
      location: 'Austin, TX',
      projectImage: '/dell-experience.png',
      duration: 'Aug 2023 – Present',
      title: 'Senior Java Developer',
      projectDescription:
        'Worked on a cloud-based platform designed to help enterprise customers manage and analyze large amounts of data. My team created a smooth and easy-to-use web application that allowed users to access and interact with their data in real-time. I was responsible for ensuring the system was secure, efficient, and always up-to-date, which involved using modern technologies to manage data and integrate with cloud services. The project helped improve the way businesses interacted with their data, making it easier to manage large amounts of information.',
      techStack: [
        'Angular 17',
        'RxJS',
        'Java 17/11/8',
        'Spring Boot',
        'Spring Security',
        'Kafka',
        'Oracle DB',
        'MongoDB',
        'Azure (App Services, APIM, Blob Storage, Logic Apps, Container Service)',
        'GitHub Actions',
        'JUnit 5',
        'Mockito',
        'ELK Stack',
      ],
      responsibilities: [
        'Built scalable, component-based front-end architecture using Angular 17, reactive forms, RxJS, and custom\n        pipes for high-performance UI and seamless user interactions.',

        'Implemented Angular Router with lazy loading and route guards for client-side navigation and access control.',
        'Crafted responsive layouts and dynamic interactions using HTML5, CSS3 (SCSS), and JavaScript (ES6+), ensuring cross-browser compatibility and accessibility.',
        'Optimized DOM performance using trackBy, ChangeDetectionStrategy.OnPush, and async pipes in Angular templates.',
        'Created and managed RESTful microservices using Spring Boot and secured them with Spring Security (JWT).',
        'Utilized Java 17 features including sealed classes, pattern matching for instanceof, records, and enhanced switch expressions to write concise, maintainable, and type-safe code.',
        'Utilized Java 8/11 features including Streams, Optional, CompletableFuture to write clean, efficient code.',
        'Integrated microservices with Kafka for event-driven communication and high-throughput data streaming.',
        'Developed and optimized SQL queries and stored procedures in Oracle DB, handling large volumes of transactional data.',
        'Integrated MongoDB for flexible, schema-less storage in reporting and analytics modules.',
        'Designed and implemented centralized logging using Logback and ELK stack for observability and incident tracking.',
        'Applied JUnit 5 and Mockito for comprehensive unit and integration testing with automated pipeline coverage.',
        'Deployed and managed applications on Azure App Services, APIM and configured Azure Blob Storage for asset management.',
        'Used Azure Logic Apps to schedule and automate jobs, integrating with a Java microservice deployed to Azure Container Service for seamless task execution and scaling.',
        'Managed CI/CD lifecycle using GitHub Actions, integrating static code analysis and quality gates into the pipeline.',
      ],
      projectImageHint: "data analytics platform"

    },
    {
      company: 'Bristol Myers Squibb',
      location: 'Tampa, FL',
      projectImage: '/bms-experience.png',
      duration: 'Apr 2021 – July 2023',
      title: 'Senior Java Developer',
      projectDescription:
        'Worked on a platform designed to help improve the company’s internal processes and team collaboration. The platform provided real-time data that helped teams make quick, informed decisions, which was especially important for the healthcare sector. I was involved in both creating the front-end user interface and building the back-end systems, making sure the platform worked smoothly and securely. The platform was built to handle large amounts of healthcare data, ensuring it was both secure and scalable as the company grew. This project was crucial in changing how teams within the company accessed and used important healthcare data.',
      techStack: [
        'Angular 15',
        'RxJS',
        'Java 11',
        'Spring Boot',
        'Spring Security',
        'Spring Retry',
        'Resilience4j',
        'Kafka',
        'MySQL',
        'AWS DynamoDB',
        'AWS (CloudWatch, S3, ECS, ALB, Route 53)',
        'Jenkins',
        'GitHub',
        'JUnit',
        'Mockito',
        'Logback',
        'projectImage: "/bms-experience.png"'
      ],
      responsibilities: [
        'Built scalable, component-based front-end architecture using Angular 15, reactive forms, RxJS, and custom pipes for high-performance UI and seamless user interactions.',
        'Built dynamic and reusable components with Angular CLI, optimizing load time using Ahead-of-Time (AOT) compilation.',
        'Implemented pixel-perfect UI with HTML5, Bootstrap, and JavaScript, adhering to WCAG guidelines and responsive design standards.',
        'Implemented custom structural directives and dynamic component loading in Angular to enable flexible, on-the-fly UI rendering based on user roles and application state.',
        'Engineered back-end microservices in Spring Boot, implementing RESTful APIs and handling concurrency with Java 11 constructs.',
        'Utilized Spring Retry and Resilience4j to implement fault tolerance and retry logic for backend microservices communicating with external systems.',
        'Enabled real-time data exchange across services using Kafka topics, partitions, and consumer groups.',
        'Designed and optimized relational schemas in MySQL, applying indexing and normalization for faster query execution.',
        'Integrated AWS DynamoDB for high-speed NoSQL access in latency-sensitive modules.',
        'Used SLF4J and Logback for application logging, with logs shipped to CloudWatch for centralized analysis.',
        'Ensured test coverage with JUnit, Mockito, and Spring Test, automating regression testing in CI pipelines.',
        'Orchestrated deployment workflows via Jenkins, integrating with GitHub and performing artifact management with S3.',
        'Deployed containerized services to Amazon ECS and managed application load balancing through ALB and Route 53.',
        'Participated in Scrum-based Agile process, ensuring continuous delivery with bi-weekly sprint reviews and demos.',
        'Adopted TDD and CI best practices, enabling fast feedback loops and reducing post-deployment issues.',
      ],
      projectImageHint: "healthcare collaboration platform"
    },
    {
      company: 'Casey’s General Store',
      location: 'Ankey, IA',
      projectImage: '/cgs-experience.png',
      duration: 'Feb 2020 – March 2021',
      title: 'J2EE Developer',
      projectDescription:
        'Worked on a platform that helped store managers and customers by streamlining store operations and order processing. The system was designed to handle everything from inventory management to customer orders, all while providing a smooth and responsive user experience. I was involved in ensuring that the platform could handle large amounts of data, especially for reports and analytics, and that it could easily scale to accommodate future growth as the business expanded.',
      techStack: [
        'Angular 5',
        'Java 8',
        'Spring Boot',
        'Spring Security',
        'PostgreSQL',
        'MongoDB',
        'Docker',
        'Kubernetes',
        'GitLab',
        'JUnit 4',
        'Mockito',
        'ELK Stack',
        'Helm',
        'ConfigMaps',
        'Secrets',
        'projectImage: "/cgs-experience.png"'
      ],
      responsibilities: [
        'Designed and developed interactive web interfaces using Angular 5, with reusable components, services, and observables for reactive UI.',
        'Used Angular Router, reactive forms, and two-way data binding to create responsive and modular SPAs.',
        'Developed responsive and cross-browser compatible UIs using HTML, CSS, and JavaScript, ensuring seamless user experience across devices.',
        'Built backend microservices with Spring Boot and Java 8, leveraging Streams, Optional, Lambdas, and Functional Interfaces for cleaner code.',
        'Applied Spring Security for authentication/authorization and implemented RESTful APIs for cross-platform integrations.',
        'Developed data models and stored procedures using PostgreSQL, with optimized indexing and query tuning.',
        'Incorporated MongoDB for flexible schema design in reporting modules and handling semi-structured data.',
        'Managed source code and collaborative workflows with GitLab, including merge requests, code reviews, and tagging for releases.',
        'Containerized microservices using Docker, managed dependencies in multi-stage builds, and published images to GitLab Registry.',
        'Deployed services into Kubernetes clusters, authored Helm charts, and configured deployments with readiness/liveness probes and autoscaling.',
        'Managed configuration and secrets via Kubernetes ConfigMaps and Secrets, segregating environment-specific parameters.',
        'Implemented unit and integration tests using JUnit 4 and Mockito, ensuring reliability before each deployment.',
        'Set up centralized logging using Logstash, Elasticsearch, and Kibana to track and troubleshoot across containers.',
        'Worked in an Agile team using Kanban methodology, adhering to TDD principles with JUnit for backend and manual UI validations.',
      ],
      projectImageHint: "retail operations system"
    },
    {
      company: 'The Bank of Missouri',
      location: 'Perryville, MO',
      duration: 'June 2018 – Dec 2019',
      title: 'J2EE Developer',
      projectDescription:
        'Helped build a secure banking platform that allowed both customers and internal teams to easily access and manage financial data. My work involved ensuring that users could check account balances, process transactions, and interact with other banking services in a seamless and secure manner. The system was designed to handle large numbers of transactions, and I helped implement features that made the platform more reliable and scalable.',
      techStack: [
        'React',
        'Java 7/8',
        'Spring MVC',
        'RabbitMQ',
        'Oracle SQL',
        'Azure (Web Apps, Blob Storage)',
        'GitHub',
        'JUnit 4',
        'Log4j',
        'Axios',
      ],
      responsibilities: [
        'Developed single-page applications using React, with custom hooks, context API, and Axios for RESTful\n        communication.',
        'Created dynamic, accessible web pages with clean semantic markup, custom styles, and interactive elements using vanilla JavaScript and DOM manipulation.',
        'Implemented backend business logic using Java 7/early Java 8 and Spring MVC, integrating REST endpoints with validation and exception handling.',
        'Integrated RabbitMQ for asynchronous messaging between distributed modules, ensuring reliable and decoupled processing.',
        'Optimized complex queries, designed indexed tables, and implemented stored procedures for efficient data retrieval and processing in Oracle SQL databases.',
        'Maintained source control with GitHub, following feature branching and pull request workflows in a collaborative team environment.',
        'Deployed web applications to Azure Web Apps, configured blob storage, and handled environment-specific properties through Azure settings.',
        'Wrote unit tests using JUnit 4, with log tracking through Log4j and manual test validation as part of early CI workflows.',
        'Delivered features in a Scrum-based Agile environment with iterative planning, daily standups, and story-based development.',
      ],
      projectImage: '/bom-experience.png',
      projectImageHint: "banking platform interface"
    },
    {
      company: 'Pronix, IT',
      location: 'India', // Assuming based on context, resume doesn't specify Pronix location
      duration: 'May 2016 – Apr 2018',
      title: 'Java Developer',
      projectDescription:
        'Contributed to creating customized web applications for clients across various industries. The goal of the project was to build systems that would support business processes and manage data more efficiently. I worked with teams to develop both the user-facing part of the application and the backend systems, ensuring the platform was fast, easy to use, and could handle large amounts of data while being scalable for future growth.',
      techStack: [
        'AngularJS',
        'Java',
        'Spring MVC',
        'Servlets',
        'JSP',
        'MySQL',
        'Git',
        'Jenkins',
        'JUnit 4',
        'Mockito',
      ],
      responsibilities: [
        'Developed dynamic single-page applications using AngularJS, creating custom directives, controllers, and services to build modular UI components.',
        'Built backend services using Java and Spring MVC, implementing RESTful APIs and handling complex business logic with servlets and JSPs.',
        'Designed and implemented data models and optimized queries in MySQL, using joins, indexing, and complex transactions.',
        'Utilized Git for version control, following GitFlow and ensuring proper branching strategies for production and feature releases.',
        'Automated build and deployment processes using Jenkins, setting up jobs for continuous integration, automated testing, and deployment to legacy environments.',
        'Developed unit tests using JUnit 4 and Mockito, ensuring code coverage and reliability through manual testing workflows.',
      ],
      projectImage: "/pro-experience.png",
      projectImageHint: "custom web application"
    },
  ],
  education: [
    {
      institution: 'Southern Arkansas University',
      location: 'Magnolia, AR',
      degree: 'Master of Computer and Information Sciences',
      duration: 'May 2022 – Dec 2023',
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Solutions Architect - Associate',
      issuer: 'Amazon Web Services'
    }
  ],
};

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
