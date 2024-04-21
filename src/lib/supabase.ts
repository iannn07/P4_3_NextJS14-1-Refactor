import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
export const supabase = createClientComponentClient();

import { createClient } from '@supabase/supabase-js';
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!
);
