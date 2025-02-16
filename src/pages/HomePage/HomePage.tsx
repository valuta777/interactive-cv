import React from 'react';
import Stack from '@mui/material/Stack';
import { ProfileHeader } from '../../components/ProfileHeader/ProfileHeader';
import { AboutMe } from '../../components/AboutMe/AboutMe';
import { Experience } from '../../components/Experience/Experience';
import { Skills } from '../../components/Skills/Skills';
import { Projects } from '../../components/Projects/Projects';
import { Contact } from '../../components/Contact/Contact';
import { AnimatedSection } from '../../components/AnimatedSection/AnimatedSection';
import { FloatingContactButton } from '../../components/FloatingContactButton/FloatingContactButton';

export const HomePage: React.FC = () => (
  <>
    <Stack spacing={6} sx={{ padding: 3 }}>
      <ProfileHeader />
      <AnimatedSection>
        <div id="about">
          <AboutMe />
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div id="experience">
          <Experience />
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div id="skills">
          <Skills />
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div id="projects">
          <Projects />
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div id="contact">
          <Contact />
        </div>
      </AnimatedSection>
    </Stack>
    <FloatingContactButton />
  </>
);
