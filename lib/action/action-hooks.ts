'use server';

import createSupabaseClient from '../supabase/supabase';
import { unstable_noStore as no_store, revalidatePath } from 'next/cache';
import { readUserSession } from './action';

export const getViews = async () => {
  no_store();
  const supabase = await createSupabaseClient();
  const result = await supabase.from('views').select('*');

  return result;
};

export const getArticle = async () => {
  no_store();
  const supabase = await createSupabaseClient();
  const result = await supabase.from('articles').select('*, votes(*)');

  return result;
};

export const vote = async (article_id: number, remove: boolean = false) => {
  no_store();
  const supabase = await createSupabaseClient();
  const { data: userSession } = await readUserSession();

  const user_id = userSession.session?.user?.id;

  if (remove) {
    const { data, error } = await supabase
      .from('votes')
      .delete()
      .eq('article_id', article_id)
      .select();

    console.log({ data, error });
    revalidatePath('/upvote');
    return;
  }

  const { data, error } = await supabase
    .from('votes')
    .insert({ article_id, user_id: user_id })
    .select()
    .single();

  console.log({ data, error });
  revalidatePath('/upvote');
};
