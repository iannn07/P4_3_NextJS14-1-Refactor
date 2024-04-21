import { vote } from '@/lib/action/action-hooks';
import VoteButton from './VoteButton';

export type Article = {
  id: number;
  created_at?: string;
  title?: string;
  votes?: any[];
};

const ArticleItem = ({
  article: { title, id, votes },
}: {
  article: Article;
}) => {
  return (
    <div className='border px-4 py-3 cursor-pointer hover:bg-gray-500 flex justify-between items-center'>
      <h2>{title}</h2>
      <div className='ml-5 grid'>
        <VoteButton id={id} unvote={false} />
        <div>{votes?.length} Votes</div>
        <VoteButton id={id} unvote={true} />
      </div>
    </div>
  );
};

export default ArticleItem;
