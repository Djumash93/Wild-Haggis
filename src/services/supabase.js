import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://quwweramyrbpukyinyuy.supabase.co";

//Row level security enabled, therefore key can be exposed
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1d3dlcmFteXJicHVreWlueXV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg2MDg2OTQsImV4cCI6MjAxNDE4NDY5NH0.0-Tg9B_AjikAzyRW-RrKlryGOkHFC8wz0jJXvpe-wgE";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
