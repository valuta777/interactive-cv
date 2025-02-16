import React from 'react';
import Typography from '@mui/material/Typography';
import { Experience } from 'models/Experience';
import { motion } from 'framer-motion';
import { ExpandableResponsibilities } from 'components/ExpandableResponsibilities/ExpandableResponsibilities.tsx';
import Stack from '@mui/material/Stack';
import { TechItem } from 'components/TechItem/TechIcon.tsx';

interface Props {
  experience: Experience;
  index: number;
}

export const ExperienceItem: React.FC<Props> = ({ experience, index }) => {
  const formatDate = (date: Date | null) => {
    if (!date) return 'Present';
    return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <Stack
      gap={1}
      component={motion.div}
      key={experience.role}
      whileHover={{
        x: index % 2 === 0 ? 10 : -10,
        transition: { type: 'spring', stiffness: 100 },
      }}
    >
      <Typography variant="h6">{experience.role}</Typography>
      <Typography variant="body2" color="textSecondary">
        {experience.company} • {formatDate(experience.startDate)} -{' '}
        {formatDate(experience.endDate)}
      </Typography>

      <Typography variant="body2" mt={1}>
        {experience.description}
      </Typography>
      {experience.responsibilities &&
        experience.responsibilities.length > 0 && (
          <ExpandableResponsibilities
            position={index % 2 === 0 ? 'left' : 'right'}
            responsibilities={experience.responsibilities}
          />
        )}
      <Stack
        direction="row"
        spacing={1}
        mt={1}
        justifyContent={index % 2 === 0 ? 'flex-start' : 'flex-end'}
      >
        {experience.tech?.map((tech, idx) => (
          <TechItem
            key={idx}
            icon={tech.icon}
            name={tech.name}
            experience={tech.experience}
            proficiency={tech.proficiency}
            timeSpent={tech.timeSpent}
          />
        ))}
      </Stack>
    </Stack>
  );
};
