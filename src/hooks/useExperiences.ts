import { useQuery } from '@tanstack/react-query';
import { Experience } from '../models';
import { config } from '../config';

export const useExperiences = () => {
  return useQuery<Experience[]>({
    queryKey: ['experiences'],
    queryFn: async () => {
      const res = await fetch(`${config.API_BASE_URL}/experiences`);
      if (!res.ok) throw new Error('Failed to fetch experiences');
      return res.json();
    },
  });
};
