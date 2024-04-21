import ArticleItem from '@/components/ArticleItem';
import { readUserSession } from '@/lib/action/action';
import { getArticle } from '@/lib/action/action-hooks';

export default async function Upvote() {
  const { data: articles } = await getArticle();
  const { data: userSession } = await readUserSession();

  return (
    <div>
      <h1 className='text-3xl font-bold'>Article</h1>
      {userSession.session != null ? (
        <>
          <ul className='flex flex-col gap-5 mt-5'>
            {articles?.map((item: any, index: number) => (
              <div key={index}>
                <ArticleItem article={item} />
              </div>
            ))}
          </ul>
        </>
      ) : (
        <h2 className='mt-5 text-xl'>Login to see article</h2>
      )}
    </div>
  );
}
