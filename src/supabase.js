// supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rjvxvhjtahbeusvjvzkr.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqdnh2aGp0YWhiZXVzdmp2emtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxMTE0MTMsImV4cCI6MjA3NDY4NzQxM30.avy-UQFJq51C_xZgGbBVrO_VOgVKMIt6p2-TCJw_GZE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
