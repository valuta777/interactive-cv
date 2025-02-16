import React, { useMemo, useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { motion } from 'framer-motion';
import { TechItem } from 'components/TechItem/TechIcon.tsx';
import { experiences } from 'data/experiences';
import { ExpandableResponsibilities } from 'components/ExpandableResponsibilities/ExpandableResponsibilities.tsx';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export const Experience: React.FC = () => {
  const formatDate = (date: Date | null) => {
    if (!date) return 'Present';
    return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
  };

  const [showAll, setShowAll] = useState(false);

  const visibleExperiences = useMemo(
    () => (showAll ? experiences : experiences.slice(0, 4)),
    [showAll]
  );

  return (
    <Stack spacing={2} alignItems="center">
      <Typography variant="h4">Work Experience</Typography>
      <Timeline position="alternate">
        {visibleExperiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {index < experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Stack
                gap={1}
                component={motion.div}
                key={exp.role}
                whileHover={{
                  x: index % 2 === 0 ? 10 : -10,
                  transition: { type: 'spring', stiffness: 100 },
                }}
              >
                <Typography variant="h6">{exp.role}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {exp.company} • {formatDate(exp.startDate)} -{' '}
                  {formatDate(exp.endDate)}
                </Typography>
                <Typography variant="body2" mt={1}>
                  {exp.description}
                </Typography>
                {/* Expandable Responsibilities */}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ExpandableResponsibilities
                    position={index % 2 === 0 ? 'left' : 'right'}
                    responsibilities={exp.responsibilities}
                  />
                )}
                <Stack
                  direction="row"
                  spacing={1}
                  mt={1}
                  justifyContent={index % 2 === 0 ? 'flex-start' : 'flex-end'}
                >
                  {exp.tech?.map((tech, idx) => (
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
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      {experiences.length > 4 && (
        <Tooltip title={showAll ? 'Show less' : 'Show more'} arrow>
          <IconButton size={'large'} onClick={() => setShowAll(!showAll)}>
            {showAll ? (
              <KeyboardArrowUp width={50} />
            ) : (
              <KeyboardArrowDown width={50} />
            )}
          </IconButton>
        </Tooltip>
      )}
    </Stack>
  );
};
