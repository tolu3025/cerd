import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://jztlklfteddfahxmcuqp.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6dGxrbGZ0ZWRkZmFoeG1jdXFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg1NjAwMDQsImV4cCI6MjEwNDEzNjAwNH0.nrTlTNvVuUn9Sr91o5Kd9o1bGtaIiJWm0mrc5yXY_go';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export type PostRow = {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  content: string;
  location: string;
  image: string;
  created_at?: string;
};
