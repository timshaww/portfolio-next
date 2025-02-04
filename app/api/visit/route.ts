import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { supabase } from '@/supabase';

export async function GET() {
	try {
		const cookieStore = await cookies();
		const visitCookie = cookieStore.get('visited')?.value;
		const currentMonth = new Date().toISOString().slice(0, 7); // "YYYY-MM"

		if (visitCookie === currentMonth) {
			return NextResponse.json({ message: 'Already counted this month' });
		}

		// Update the count in the database
		const { data: counter, error } = await supabase
			.from('counter')
			.select('count')
			.eq('id', 1)
			.single();

		if (error) {
			return NextResponse.json({ error: error.message }, { status: 500 });
		}

		const newCount = (counter?.count || 0) + 1;

		// Upsert count
		const { error: updateError } = await supabase
			.from('counter')
			.upsert([{ id: 1, count: newCount }]);

		if (updateError) {
			return NextResponse.json({ error: updateError.message }, { status: 500 });
		}

		// Set a cookie for 30 days
		cookieStore.set('visited', currentMonth, {
			maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'strict',
		});

		return NextResponse.json({ count: newCount });
	} catch (error) {
		return NextResponse.json({ error: 'Database error' }, { status: 500 });
	}
}
