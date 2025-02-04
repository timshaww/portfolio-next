import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const DB_PATH = './visits.db';

async function openDb() {
	return open({
		filename: DB_PATH,
		driver: sqlite3.Database,
	});
}

export async function GET() {
	try {
		const db = await openDb();
		await db.exec('CREATE TABLE IF NOT EXISTS counter (id INTEGER PRIMARY KEY, count INTEGER)');

		const cookieStore = await cookies();
		const visitCookie = cookieStore.get('visited')?.value;
		const currentMonth = new Date().toISOString().slice(0, 7); // "YYYY-MM"

		if (visitCookie === currentMonth) {
			return NextResponse.json({ message: 'Already counted this month' });
		}

		await db.run('UPDATE counter SET count = count + 1 WHERE id = 1');

		// Set a cookie for 30 days
		cookieStore.set('visited', currentMonth, {
			maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'strict',
		});

		const countRow = await db.get('SELECT count FROM counter WHERE id = 1');
		return NextResponse.json({ count: countRow?.count || 0 });
	} catch {
		return NextResponse.json({ error: 'Database error' }, { status: 500 });
	}
}
