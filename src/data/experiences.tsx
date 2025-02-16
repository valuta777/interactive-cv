import { responsibilities as res } from './responsibilities';
import { technologies as tech } from './technologies';

export const experiences = [
  {
    role: 'Lead Front-End Engineer',
    company: 'JetSoftPro',
    startDate: new Date(2024, 6), // July 2023
    endDate: null, // Present
    description:
      'Leading front-end architecture, developing scalable React-Redux applications, optimizing GraphQL APIs with Apollo, and enhancing testing coverage with Jest and Playwright.',
    responsibilities: [res.interviewing, res.mentoring, res.performance],
    tech: [
      tech.typescript,
      tech.react,
      tech.redux,
      tech.graphql,
      tech.mui,
      tech.jest,
      tech.testingLibrary,
      tech.playwright,
    ],
  },
  {
    role: 'Team Lead | Senior Front-End Developer',
    company: 'JetSoftPro',
    startDate: new Date(2020, 6), // July 2022
    endDate: new Date(2023, 6), // July 2024
    description:
      'Managed a team of front-end developers, implemented best coding practices, optimized React-Redux architecture, and improved testing workflows.',
    responsibilities: [
      res.interviewing,
      res.mentoring,
      res.codeQuality,
      res.performance,
    ],
    tech: [
      tech.javascript,
      tech.react,
      tech.redux,
      tech.graphql,
      tech.mui,
      tech.jest,
      tech.testingLibrary,
    ],
  },
  {
    role: 'Senior Front-End Engineer',
    company: 'JetSoftPro',
    startDate: new Date(2018, 6), // July 2018
    endDate: new Date(2020, 6), // July 2022
    description:
      'Developed performant front-end applications, implemented reusable components, and improved application maintainability using React and Redux.',
    responsibilities: [res.mentoring, res.componentReuse, res.performance],
    tech: [
      tech.javascript,
      tech.typescript,
      tech.backbone,
      tech.react,
      tech.redux,
      tech.html,
      tech.scss,
      tech.angular,
      tech.typescript,
    ],
  },
  {
    role: 'Software Engineer',
    company: 'JetSoftPro',
    startDate: new Date(2017, 6), // July 2017
    endDate: new Date(2018, 6), // July 2020
    description:
      'Developed full-stack applications with Angular and TypeScript, improved UI responsiveness, and worked with .NET for back-end integration.',
    responsibilities: [res.fullStackDev, res.backendCollab],
    tech: [
      tech.javascript,
      tech.typescript,
      tech.angularJs,
      tech.angular,
      tech.backbone,
      tech.html,
      tech.scss,
      tech.dotnet,
      tech.sqlServer,
    ],
  },
  {
    role: '.NET/Angular2 Developer',
    company: 'MagicPost.co',
    startDate: new Date(2016, 10), // November 2016
    endDate: new Date(2017, 5), // June 2017
    description:
      'Developed and maintained Angular 2 and .NET applications, built RESTful APIs, and optimized UI performance.',
    responsibilities: [res.angularMaintenance, res.restApiDevelopment],
    tech: [
      tech.angular,
      tech.dotnet,
      tech.typescript,
      tech.html,
      tech.scss,
      tech.sqlServer,
      tech.csharp,
    ],
  },
  {
    role: 'Freelance Software Developer',
    company: 'Self-Employed',
    startDate: new Date(2015, 7), // August 2015
    endDate: new Date(2016, 10), // November 2016
    location: 'Lviv, Ukraine',
    description:
      'Developed WinForms and WPF applications, integrated SQL Server databases with Entity Framework, and optimized application performance.',
    responsibilities: [
      res.winFormsDev,
      res.sqlIntegration,
      res.legacySystemOptimization,
    ],
    tech: [tech.csharp, tech.dotnet, tech.sqlServer],
  },
];
