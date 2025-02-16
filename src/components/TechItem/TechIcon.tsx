import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

interface TechItemProps {
  icon: React.ReactNode;
  name: string;
  experience: string;
  proficiency: string;
  timeSpent: string;
}

export const TechItem: React.FC<TechItemProps> = ({
  icon,
  name,
  experience,
  proficiency,
  timeSpent,
}) => {
  return (
    <Tooltip
      title={
        <Stack spacing={1} sx={{ textAlign: 'center' }}>
          <Typography variant="subtitle1" fontWeight="bold">
            {name}
          </Typography>
          <Typography variant="body2">Experience: {experience}</Typography>
          <Typography variant="body2">Proficiency: {proficiency}</Typography>
          <Typography variant="body2">Time Spent: {timeSpent}</Typography>
        </Stack>
      }
      arrow
    >
      <Typography
        component={motion.div}
        key={name}
        whileHover={{
          scale: 1.5,
        }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {icon}
      </Typography>
    </Tooltip>
  );
};
