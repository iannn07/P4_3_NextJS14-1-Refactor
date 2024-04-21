import { readUserSession } from '@/lib/action/action';
import { getArticle } from '@/lib/action/action-hooks';
import createSupabaseClient from '@/lib/supabase/supabase';

export default async function Article() {
  const { data: articles } = await getArticle();
  const { data: userSession } = await readUserSession();

  return (
    <div>
      <h1 className='text-3xl font-bold'>Article</h1>
      {userSession.session != null ? (
        <>
          <ul className='flex flex-col gap-5 mt-5'>
            {articles?.map((item: any, index: number) => (
              <li key={index}>{item.title}</li>
            ))}
          </ul>
        </>
      ) : (
        <h2 className='mt-5 text-xl'>Login to see article</h2>
      )}
    </div>
  );
}
