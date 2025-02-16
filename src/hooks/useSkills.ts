import { useQuery } from '@tanstack/react-query';
import { Skill } from '../models';
import { config } from '../config';

export const useSkills = () => {
  return useQuery<Skill[]>({
    queryKey: ['skills'],
    queryFn: async () => {
      const res = await fetch(`${config.API_BASE_URL}/skills`);
      if (!res.ok) throw new Error('Failed to fetch skills');
      return res.json();
    },
  });
};
