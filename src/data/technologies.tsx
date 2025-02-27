import {
  SiReact,
  SiRedux,
  SiGraphql,
  SiMui,
  SiJest,
  SiTestinglibrary,
  SiDotnet,
  SiTypescript,
  SiAngular,
  SiSharp,
  SiHtml5,
  SiSass,
  SiJavascript,
  SiBackbonedotjs,
} from 'react-icons/si';
import { PlaywrightIcon } from 'components/Icons/PlaywrightIcon';
import { SQLIcon } from 'components/Icons/SqlIcon.tsx';
import { TbBrandAngular } from 'react-icons/tb';

export const technologies = {
  html: {
    icon: <SiHtml5 size={24} name="HTML" color="#E34F26" />,
    name: 'HTML',
    experience: '6 years',
    proficiency: 'Expert',
    timeSpent: '100% of projects',
  },
  scss: {
    icon: <SiSass size={24} name="SCSS" color="#CC6699" />,
    name: 'SCSS',
    experience: '6 years',
    proficiency: 'Expert',
    timeSpent: '100% of projects',
  },
  react: {
    icon: <SiReact size={24} color="#61DAFB" />,
    name: 'React',
    experience: '5+ years',
    proficiency: 'Expert',
    timeSpent: '80% of projects',
  },
  redux: {
    icon: <SiRedux size={24} color="#764ABC" />,
    name: 'Redux',
    experience: '4 years',
    proficiency: 'Advanced',
    timeSpent: '70% of projects',
  },
  graphql: {
    icon: <SiGraphql size={24} color="#E10098" />,
    name: 'GraphQL',
    experience: '3 years',
    proficiency: 'Advanced',
    timeSpent: '50% of projects',
  },
  mui: {
    icon: <SiMui size={24} color="#007FFF" />,
    name: 'Material UI',
    experience: '5 years',
    proficiency: 'Expert',
    timeSpent: '90% of projects',
  },
  jest: {
    icon: <SiJest size={24} color="#C21325" />,
    name: 'Jest',
    experience: '4 years',
    proficiency: 'Advanced',
    timeSpent: '60% of projects',
  },
  testingLibrary: {
    icon: <SiTestinglibrary size={24} color="#E33332" />,
    name: 'Testing Library',
    experience: '4 years',
    proficiency: 'Advanced',
    timeSpent: '60% of projects',
  },
  playwright: {
    icon: <PlaywrightIcon size={24} />,
    name: 'Playwright',
    experience: '2 years',
    proficiency: 'Intermediate',
    timeSpent: '30% of projects',
  },
  angular: {
    icon: <TbBrandAngular size={24} color="#DD0031" />,
    name: 'Angular',
    experience: '3 years',
    proficiency: 'Intermediate',
    timeSpent: '50% of projects',
  },
  angularJs: {
    icon: <SiAngular size={24} color="#DD0031" />,
    name: 'Angular.js',
    experience: '2 years',
    proficiency: 'Intermediate',
    timeSpent: '40% of projects',
  },
  typescript: {
    icon: <SiTypescript size={24} color="#3178C6" />,
    name: 'TypeScript',
    experience: '6 years',
    proficiency: 'Advanced',
    timeSpent: '60% of projects',
  },
  javascript: {
    icon: <SiJavascript size={24} color="#F7DF1E" />,
    name: 'JavaScript',
    experience: '8 years',
    proficiency: 'Advanced',
    timeSpent: '100% of projects',
  },
  backbone: {
    icon: <SiBackbonedotjs size={24} color="#0071B5" />,
    name: 'Backbone.js',
    experience: '2 years',
    proficiency: 'Intermediate',
    timeSpent: '40% of projects',
  },
  dotnet: {
    icon: <SiDotnet size={24} color="#512BD4" />,
    name: '.NET',
    experience: '3 years',
    proficiency: 'Intermediate',
    timeSpent: '40% of projects',
  },
  sqlServer: {
    icon: <SQLIcon size={24} />,
    name: 'SQL Server',
    experience: '3 years',
    proficiency: 'Advanced',
    timeSpent: '60% of projects',
  },
  csharp: {
    icon: <SiSharp size={24} color="#239120" />,
    name: 'C#',
    experience: '3 years',
    proficiency: 'Advanced',
    timeSpent: '70% of projects',
  },
};
