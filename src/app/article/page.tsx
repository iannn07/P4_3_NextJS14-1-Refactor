'use client';

import { useArticle } from '@/hooks/useArticle';
import { supabase } from '@/lib/supabase';
import { useEffect } from 'react';

const Article = () => {
  const { article, getArticle, subscribeArticle } = useArticle();

  const unsubscribeFromArticle = () => {
    supabase.removeChannel(subscribeArticle);
  };

  useEffect(() => {
    getArticle();
  }, [getArticle]);

  return (
    <div>
      <h1 className='text-3xl font-bold'>Articles</h1>
      <ul className='flex flex-col gap-5 mt-5'>
        {article.map((item: any, index: number) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
      <button
        onClick={unsubscribeFromArticle}
        type='button'
        className='text-white p-2 rounded mt-5 w-full bg-blue-500 hover:bg-blue-600'
      >
        Unsubscribe
      </button>
    </div>
  );
};

export default Article;
