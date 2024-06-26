'use server';

import createSupabaseClient, {
  createSupabaseAdmin,
} from '@/lib/supabase/supabase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// LOGIN SUCCESS
export async function login(formData: FormData) {
  const supabase = await createSupabaseClient();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };
  console.log('Data', { data });

  const result = await supabase.auth.signInWithPassword(data);
  const { error } = JSON.parse(JSON.stringify(result));

  if (error) {
    console.log(JSON.stringify(error));
    return JSON.stringify(error);
  }

  console.log('Result', { result });
  revalidatePath('/');
  redirect('/');
}

// SIGN UP SUCCESS
export async function signup(formData: FormData) {
  const supabase = await createSupabaseAdmin();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };
  console.log('Data', { data });

  const result = await supabase.auth.admin.createUser({
    email: data.email,
    password: data.password,
    email_confirm: true,
  });

  const { error } = JSON.parse(JSON.stringify(result));

  if (error) {
    console.log(JSON.stringify(error));
    return JSON.stringify(error);
  }

  console.log('Result', { result });

  revalidatePath('/');
  redirect('/');
}

// READ USER SESSION SUCCESS
export async function readUserSession() {
  const supabase = await createSupabaseClient();

  return supabase.auth.getSession();;
}

// LOG OUT SUCCESS
export async function logout() {
  console.log('Logout');
  const supabase = await createSupabaseClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(JSON.stringify(error));
  }
  revalidatePath('/auth-server');
  redirect('/auth-server');
}
