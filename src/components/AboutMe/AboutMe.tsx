import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const AboutMe: React.FC = () => {
  return (
    <Card elevation={1} sx={{ maxWidth: 1000, mx: 'auto', p: 2 }}>
      <CardContent>
        <Stack spacing={2} alignItems={'center'}>
          {/* Section Title */}
          <Typography variant="h5" fontWeight={600} textAlign="center">
            👋 About Me
          </Typography>

          {/* Introduction */}
          <Typography variant="body1" textAlign="center">
            I am a results-driven <strong>Front-End Engineer</strong> with over
            8 years of experience specializing in modern web development, UI
            architecture, and performance optimization.
          </Typography>

          {/* Key Expertise */}
          <Typography variant="h6" fontWeight={600}>
            💡 What I Do Best
          </Typography>
          <Stack spacing={1}>
            <Typography variant="body1">
              ⚛️ <strong>React & Redux:</strong> Building scalable and
              maintainable applications
            </Typography>
            <Typography variant="body1">
              🎨 <strong>Beautiful UI & UX:</strong> Passionate about Material
              UI & Tailwind
            </Typography>
            <Typography variant="body1">
              🚀 <strong>Performance Optimization:</strong> Making web apps
              faster, smoother, and efficient
            </Typography>
            <Typography variant="body1">
              🏆 <strong>Leadership & Mentorship:</strong> Guiding teams,
              reviewing code, and improving processes
            </Typography>
            <Typography variant="body1">
              🎯 <strong>Testing & Quality:</strong> Ensuring high test coverage
              with Jest, Playwright & Testing Library
            </Typography>
            <Typography variant="body1">
              🔄 <strong>Full-Stack Experience:</strong> Bridging the gap with
              .NET, Angular, SQL, Node.js and more
            </Typography>
          </Stack>

          {/* Current Role */}
          <Typography variant="h6" fontWeight={600}>
            👨‍💻 Current Role
          </Typography>
          <Typography variant="body1">
            At <strong>my current position</strong>, I lead front-end
            engineering, ensuring best-in-class user experiences through
            cutting-edge technologies and modern best practices.
          </Typography>

          {/* Learning & Innovation */}
          <Typography variant="h6" fontWeight={600}>
            📌 Always Learning & Innovating!
          </Typography>
          <Typography variant="body1">
            I thrive on <strong>new challenges</strong>, love{' '}
            <strong>mentoring developers</strong>, and constantly push for{' '}
            <strong>better code quality</strong> and{' '}
            <strong>scalable architectures</strong>.
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
