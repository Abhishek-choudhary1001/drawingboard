import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://srnfisstrzknhlyjnspm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNybmZpc3N0cnprbmhseWpuc3BtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIzMTU5MTYsImV4cCI6MjA2Nzg5MTkxNn0.67mkqyjVsNbwkxLyNQ2YoKMnjHjHdDOM_Ou2s8OCP7w'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;