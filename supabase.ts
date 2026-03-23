import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wdvrbjvrubsvybalzdwy.supabase.co';
const supabaseKey = 'sb_publishable_6r9oNTHeGmLb4FGsRmS8iQ_9DPXBDj5';

export const supabase = createClient(supabaseUrl, supabaseKey);
