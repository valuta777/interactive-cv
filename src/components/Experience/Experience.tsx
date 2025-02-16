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
  timelineItemClasses,
} from '@mui/lab';
import { experiences } from 'data/experiences';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { ExperienceItem } from 'components/ExperienceItem/ExperienceItem.tsx';

export const Experience: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [showAll, setShowAll] = useState(false);

  const visibleExperiences = useMemo(
    () => (showAll ? experiences : experiences.slice(0, 4)),
    [showAll]
  );

  return (
    <Stack spacing={2} alignItems="center">
      <Typography variant="h4">Work Experience</Typography>
      <Timeline
        position={isMobile ? 'right' : 'alternate'}
        sx={
          isMobile
            ? {
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }
            : {}
        }
      >
        {visibleExperiences.map((experience, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {index < experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <ExperienceItem experience={experience} index={index} />
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
