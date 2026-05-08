const SUPABASE_URL = 'https://xeugngazneqaemamzzmb.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhldWduZ2F6bmVxYWVtYW16em1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyNTQ5MTAsImV4cCI6MjA5MzgzMDkxMH0.EMoZTfmN1S6re92YZOugm_3mkcb_x6UUpNESCKY9G90';

// Initialize Supabase Client
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
