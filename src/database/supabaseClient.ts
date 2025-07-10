import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lezboyuujfnwcnhmydob.supabase.co'; // من الرابط بتاعك
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlemJveXV1amZud2NuaG15ZG9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwNjI1MTUsImV4cCI6MjA2NzYzODUxNX0.Z-XphaZ_cCX7B47QWPWHuALHDEEcErwgqZh5dZUKpAU"

export const supabase = createClient(supabaseUrl, supabaseKey);
