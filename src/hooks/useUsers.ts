import { useState, useEffect } from 'react';

export interface User {
  id: number;
  name: string;
  email: string;
  company: { name: string };
  address: { city: string };
}

export const useUsers = () => {
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    // Native fetch here is sufficient. No need for React Query overhead for a static directory payload.
    const fetchDirectory = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error('API request failed');
        setData(await res.json());
      } catch (err: any) {
        setErrorMsg(err.message || 'Failed to load directory');
      } finally {
        setIsLoading(false);
      }
    };

    fetchDirectory();
  }, []);

  return { users: data, loading: isLoading, error: errorMsg };
};
