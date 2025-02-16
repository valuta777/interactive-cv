import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Masonry from '@mui/lab/Masonry';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import CodeIcon from '@mui/icons-material/Code';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A personal website built with React.',
    techStack: 'React, TypeScript, Material-UI',
    link: 'https://yourportfolio.com',
  },
  {
    id: 2,
    title: 'E-Commerce App',
    description: 'A full-stack e-commerce app with Stripe.',
    techStack: 'React, Node.js, MongoDB',
    link: 'https://ecommerce.com',
  },
  {
    id: 3,
    title: 'Task Manager',
    description: 'A productivity tool for tracking tasks.',
    techStack: 'React, Redux, Firebase',
    link: 'https://taskmanager.com',
  },
];

export const Projects: React.FC = () => (
  <Stack spacing={3} alignItems="center">
    <Typography variant="h4" fontWeight={700}>
      Projects
    </Typography>
    <Masonry
      columns={{ xs: 1, sm: 2, md: 3 }}
      spacing={2}
      sx={{ width: '100%', maxWidth: 900 }}
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          whileHover={{
            scale: 1.05,
            boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.3)',
          }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Card sx={{ padding: 2 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar>
                <CodeIcon />
              </Avatar>
              <Typography variant="h6">{project.title}</Typography>
            </Stack>
            <CardContent>
              <Typography variant="body2">{project.description}</Typography>
              <Typography variant="caption" color="text.secondary">
                {project.techStack}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                component="a"
                href={project.link}
                target="_blank"
              >
                View Project
              </Button>
            </CardActions>
          </Card>
        </motion.div>
      ))}
    </Masonry>
  </Stack>
);
