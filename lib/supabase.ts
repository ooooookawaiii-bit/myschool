import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://zxznmeqqryqumppchxha.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4em5tZXFxcnlxdW1wcGNoeGhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ5NzM1NDQsImV4cCI6MjExMDU0OTU0NH0.-2UV1zo7j058QtI52Hnn3480N_uC73FtYMqfz92lzt4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
