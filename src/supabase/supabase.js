import { createClient } from '@supabase/supabase-js'

const _url = import.meta.env.VITE_URL
const _key = import.meta.env.VITE_ANON_KEY

export const supabase = createClient(_url, _key)
