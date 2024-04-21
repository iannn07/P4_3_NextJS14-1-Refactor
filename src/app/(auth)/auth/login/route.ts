import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const url = new URL(req.url);
  const cookieStore = cookies();
  const formData = await req.formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  console.log(email, password);

  const supabase = createRouteHandlerClient({
    cookies: () => cookieStore,
  });

  const {data, error} = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log('AUTH/LOGIN')
  if (data) {
    console.log(data);
  }
  if (error) {
    console.log(error);
  }

  return NextResponse.redirect(url.origin, { status: 301 });
};
