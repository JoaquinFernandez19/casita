import { createClient } from '@supabase/supabase-js';
import { SUPABASE_KEY } from '$env/static/private';

export const supabase = createClient('https://bodpejwognygcjhaedmh.supabase.co', SUPABASE_KEY);
