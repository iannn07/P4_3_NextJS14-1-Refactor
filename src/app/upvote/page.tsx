'use client';

import ArticleItem from '@/components/ArticleItem';
import { useArticle } from '@/hooks/useArticle';
import { useEffect } from 'react';

const Article = () => {
  const { article, getArticle, subscribeToVotes } = useArticle();

  useEffect(() => {
    getArticle();
  }, [getArticle]);

  return (
    <div>
      <h1 className='text-3xl font-bold'>Articles</h1>
      <ul className='flex flex-col gap-5 mt-5'>
        {article.map((article: any, index: number) => (
          <div key={index}>
            <ArticleItem article={article} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Article;
