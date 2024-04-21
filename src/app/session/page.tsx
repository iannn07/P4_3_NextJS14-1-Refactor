'use client';

import { useSupabase } from '@/hooks/useSupabase';
import React, { useEffect } from 'react';

const Session = () => {
  const { getSession } = useSupabase();

  useEffect(() => {
    getSession();
  }, [getSession]);

  return <div>Session</div>;
};

export default Session;
