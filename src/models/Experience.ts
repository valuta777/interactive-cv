import { ReactNode } from 'react';

export interface Experience {
  role: string;
  company: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
  responsibilities: string[];
  tech: {
    icon: ReactNode;
    name: string;
    experience: string;
    proficiency: string;
    timeSpent: string;
  }[];
}
