import { NextResponse } from 'next/server';
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
        const countRow = await db.get('SELECT count FROM counter WHERE id = 1');

        return NextResponse.json({ count: countRow?.count || 0 });
    } catch {
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}
