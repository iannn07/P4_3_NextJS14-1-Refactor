import { supabase } from '@/lib/supabase';
import { useState } from 'react';

export const useViews = () => {
  const [views, setViews] = useState([]) as any;

  const getViews = async () => {
    const { data, error } = await supabase.from('views').select('*');
    if (data) {
      setViews(data);
    }
    if (error) {
      console.log(error);
    }
  };

  return {
    views,
    setViews,
  };
};
