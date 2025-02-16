import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Masonry from '@mui/lab/Masonry';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import {
  SiReact,
  SiBackbone,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiRedux,
  SiNodedotjs,
  SiAngular,
  SiMui,
  SiJest,
  SiTestinglibrary,
  SiGraphql,
} from 'react-icons/si';
import { TbBrandAngular } from 'react-icons/tb';
import { RxJsIcon } from 'components/Icons/RxJsIcon.tsx';
import { PlaywrightIcon } from 'components/Icons/PlaywrightIcon.tsx'; // For AngularX

const skills = [
  {
    name: 'JavaScript',
    Icon: SiJavascript,
    size: 120,
    color: '#F7DF1E',
    level: 65,
  },
  { name: 'React', Icon: SiReact, size: 120, color: '#61DAFB', level: 99 },
  {
    name: 'TypeScript',
    Icon: SiTypescript,
    size: 120,
    color: '#3178C6',
    level: 75,
  },
  { name: 'Material UI', Icon: SiMui, size: 120, color: '#007FFF', level: 98 },
  { name: 'Redux', Icon: SiRedux, size: 120, color: '#764ABC', level: 90 },
  { name: 'Sass', Icon: SiSass, size: 120, color: '#CC6699', level: 80 },
  {
    name: 'Jest',
    Icon: SiJest,
    size: 120,
    color: '#C21325',
    level: 80,
  },
  {
    name: 'Testing Library',
    Icon: SiTestinglibrary,
    size: 120,
    color: '#E33332',
    level: 80,
  },
  {
    name: 'Playwright',
    Icon: PlaywrightIcon,
    size: 120,
    color: '#00AEEF',
    level: 70,
  },
  { name: 'CSS3', Icon: SiCss3, size: 120, color: '#1572B6', level: 70 },
  { name: 'HTML5', Icon: SiHtml5, size: 120, color: '#E34F26', level: 70 },
  {
    name: 'Angular',
    Icon: TbBrandAngular,
    size: 120,
    color: '#DD0031',
    level: 65,
  },
  {
    name: 'Apollo GraphQL',
    Icon: SiGraphql,
    size: 120,
    color: '#E10098',
    level: 60,
  },
  {
    name: 'RxJS',
    Icon: RxJsIcon,
    size: 120,
    color: '#61DAFB',
    level: 60,
  },
  {
    name: 'AngularJS',
    Icon: SiAngular,
    size: 120,
    color: '#B52E31',
    level: 25,
  },
  {
    name: 'Backbone.js',
    Icon: SiBackbone,
    size: 120,
    color: '#0071B5',
    level: 20,
  },
  {
    name: 'Node.js',
    Icon: SiNodedotjs,
    size: 120,
    level: 35,
    color: '#68A063',
  },
];

export const Skills: React.FC = () => (
  <Stack spacing={3} alignItems="center">
    <Typography variant="h4" fontWeight={700}>
      Skills
    </Typography>
    <Masonry
      columns={{ xs: 1, sm: 2, md: 3 }}
      spacing={2}
      sx={{ width: '100%', maxWidth: 900 }}
    >
      {skills.map((skill) => (
        <Box
          component={motion.div}
          key={skill.name}
          whileHover={{
            scale: 1.05,
            boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.3)',
          }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Card
            sx={{
              padding: 2,
            }}
          >
            <Stack key={skill.name} alignItems="center">
              <skill.Icon
                size={skill.size * (skill.level / 100)}
                color={skill.color}
              />
              <Typography variant="body1">{skill.name}</Typography>
            </Stack>
          </Card>
        </Box>
      ))}
    </Masonry>
  </Stack>
);
