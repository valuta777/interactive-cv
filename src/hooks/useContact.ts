import { useQuery } from '@tanstack/react-query';
import { Contact } from '../models';
import { config } from '../config.ts';

export const useContact = () => {
  return useQuery<Contact>({
    queryKey: ['contact'],
    queryFn: async () => {
      const res = await fetch(`${config.API_BASE_URL}/contact`);
      if (!res.ok) throw new Error('Failed to fetch contact information');
      return res.json();
    },
  });
};
