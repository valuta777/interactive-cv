import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';

export const ExpandableResponsibilities: React.FC<{
  responsibilities: string[];
  position?: 'left' | 'right';
}> = ({ responsibilities, position }) => {
  return (
    <Stack spacing={1} mt={1}>
      <Stack spacing={0.5}>
        {responsibilities.map((res, idx) => (
          <Typography key={idx} variant="body2" color="text.secondary">
            {position === 'left' && '•'} {res} {position === 'right' && '•'}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
};
