'use client';

import { useVotes } from '@/hooks/useVotes';
import { UP } from './icons/UP';
import { useArticle } from '@/hooks/useArticle';

export type Article = {
  id: number;
  created_at?: string;
  title?: string;
  votes?: any[];
};

const ArticleItem = ({ article: { title, id, votes } }: { article: Article }) => {
  const { newVote } = useArticle();

  return (
    <div className='border px-4 py-3 cursor-pointer hover:bg-gray-500 flex justify-between items-center'>
      <h2>{title}</h2>
      <div className='ml-5 grid'>
        <div onClick={() => newVote(id)}>
          <UP />
        </div>
        <div>{votes?.length} Votes</div>
        <div className='rotate-180' onClick={() => newVote(id, true)}>
          <UP />
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
