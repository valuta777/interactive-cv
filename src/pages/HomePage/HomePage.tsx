import React from 'react';
import Stack from '@mui/material/Stack';
import { ProfileHeader } from 'components/ProfileHeader/ProfileHeader.tsx';
import { AboutMe } from 'components/AboutMe/AboutMe.tsx';
import { Experience } from 'components/Experience/Experience.tsx';
import { Skills } from 'components/Skills/Skills.tsx';
import { Contact } from 'components/Contact/Contact.tsx';
import { AnimatedSection } from 'components/AnimatedSection/AnimatedSection.tsx';
import { FloatingContactButton } from 'components/FloatingContactButton/FloatingContactButton.tsx';

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
      {/*<AnimatedSection>*/}
      {/*  <div id="projects">*/}
      {/*    <Projects />*/}
      {/*  </div>*/}
      {/*</AnimatedSection>*/}
      <AnimatedSection>
        <div id="contact">
          <Contact />
        </div>
      </AnimatedSection>
    </Stack>
    <FloatingContactButton />
  </>
);
