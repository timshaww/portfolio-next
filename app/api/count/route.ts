import { NextResponse } from 'next/server';
import { supabase } from '@/supabase';

export async function GET() {
    try {
        // Ensure the counter table exists
        const { data: counter, error } = await supabase
            .from('counter')
            .select('count')
            .eq('id', 1)
            .single();

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ count: counter?.count || 0 });
    } catch (error) {
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}
