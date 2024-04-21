import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const useArticle = () => {
  const route = useRouter();
  const [article, setArticle] = useState([]) as any;

  const getArticle = async () => {
    const { data, error } = await supabase
      .from('article')
      .select('*, votes(*)');
    if (data) {
      setArticle(data);
    }
    if (error) {
      console.log(error);
    }
  };

  const subscribeArticle = supabase
    .channel('article-realtime')
    .on(
      'postgres_changes',
      { schema: 'public', table: 'article', event: '*' },
      (payload: any) => {
        console.log(payload);
      }
    )
    .subscribe();

  const subscribeToArticles = async () => {
    subscribeArticle;
  };

  const subscribeVotes = supabase
    .channel('votes-realtime')
    .on(
      'postgres_changes',
      { schema: 'public', table: 'votes', event: '*' },
      (payload: any) => {
        console.log(payload);
      }
    )
    .subscribe();

  const subscribeToVotes = async () => {
    subscribeVotes;
  };

  const newVote = async (article_id: number, remove: boolean = false) => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      route.push('/login');
      return alert('You must be logged in to vote');
    }

    const {
      user: { id },
    } = session;

    if (remove) {
      const { data, error } = await supabase
        .from('votes')
        .delete()
        .eq('article_id', article_id)
        .eq('user_id', id);

      console.log(data);
      return;
    }

    const { data, error } = await supabase
      .from('votes')
      .insert({ article_id, user_id: id })
      .select()
      .single();

    console.log(data);
  };

  return {
    article,
    getArticle,
    subscribeToArticles,
    subscribeArticle,
    subscribeToVotes,
    subscribeVotes,
    newVote,
  };
};
