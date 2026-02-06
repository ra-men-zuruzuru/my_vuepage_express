import { neon } from '@neondatabase/serverless';


const sql = neon(`${process.env.DATABASE_URL}`);

export async function insertComments(data: string) {
    'use server';
    // Connect to the Neon database
    const comment = data;
    // Insert the comment from the form into the Postgres database
    await sql`INSERT INTO comments (comment) VALUES (${comment})`;
}

