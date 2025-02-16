import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Masonry from '@mui/lab/Masonry';
import LinearProgress from '@mui/material/LinearProgress';
import CodeIcon from '@mui/icons-material/Code';
import { motion } from 'framer-motion';

const skills = [
  { id: 1, name: 'JavaScript', level: 90, icon: <CodeIcon /> },
  { id: 2, name: 'React', level: 85, icon: <CodeIcon /> },
  { id: 3, name: 'Node.js', level: 80, icon: <CodeIcon /> },
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
        <motion.div
          key={skill.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Card sx={{ padding: 2 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar>{skill.icon}</Avatar>
              <Typography variant="h6">{skill.name}</Typography>
            </Stack>
            <CardContent>
              <LinearProgress variant="determinate" value={skill.level} />
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </Masonry>
  </Stack>
);
