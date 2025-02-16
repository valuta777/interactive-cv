import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';

const fullText =
  "I'm a passionate software developer with a strong background in building scalable and efficient web applications. I specialize in modern frontend frameworks like React, and I'm always exploring new technologies to improve my skills. I thrive in collaborative environments and enjoy solving complex problems.";

export const AboutMe: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (index < fullText.length && typing) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
    setTyping(false);
  }, [index, typing]);

  return (
    <Stack spacing={2} alignItems="center">
      <Typography variant="h4" fontWeight={700}>
        About Me
      </Typography>
      <Typography
        component={motion.p}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        variant="body1"
        textAlign="center"
        maxWidth={600}
        sx={{ minHeight: '3rem' }}
      >
        {typing ? displayText : fullText}
      </Typography>
      {typing && (
        <Button onClick={() => setTyping(false)}>Skip Animation</Button>
      )}
    </Stack>
  );
};
