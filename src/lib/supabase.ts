
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dtsymmazklqzcluubvjm.supabase.co';
const supabaseAnonKey = 'sb_publishable_ALcrleYaXD0S-oh0cMEZyw_0ghO0EOH';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Project = {
    id: string;
    title_fa: string;
    title_en: string;
    description: string;
    image_url: string;
    github_url?: string;
    live_url?: string;
    tech_stack: string[];
    created_at: string;
};

export type BlogPost = {
    id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    cover_image: string;
    author: string;
    tags: string[];
    created_at: string;
};

export type ContactRequest = {
    id: string;
    name: string;
    email: string;
    message: string;
    status: 'pending' | 'reviewed' | 'completed';
    created_at: string;
};
