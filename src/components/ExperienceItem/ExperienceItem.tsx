import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Experience } from 'models/Experience';

interface Props {
  experience: Experience;
}

export const ExperienceItem: React.FC<Props> = ({ experience }) => (
  <Card sx={{ maxWidth: 600, width: '100%' }}>
    <CardContent>
      <Typography variant="h6">{experience.title}</Typography>
      <Typography variant="subtitle1" color="text.secondary">
        {experience.company} • {experience.date}
      </Typography>
      <Typography variant="body2">{experience.description}</Typography>
    </CardContent>
  </Card>
);
