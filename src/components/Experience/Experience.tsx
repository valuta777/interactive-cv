import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'TechCorp',
    date: '2020 - Present',
    description: 'Developing scalable web applications.',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'WebSolutions',
    date: '2018 - 2020',
    description: 'Built responsive UI with React and Material-UI.',
  },
];

export const Experience: React.FC = () => {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  return (
    <Stack spacing={3} alignItems="center">
      <Typography variant="h4" fontWeight={700}>
        Experience
      </Typography>
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Card sx={{ maxWidth: 600, width: '100%' }}>
            <CardContent>
              <Typography variant="h6" fontWeight={600}>
                {exp.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {exp.company} • {exp.date}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                onClick={() =>
                  setExpanded((prev) => ({ ...prev, [exp.id]: !prev[exp.id] }))
                }
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded[exp.id]} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="body2">{exp.description}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </motion.div>
      ))}
    </Stack>
  );
};
