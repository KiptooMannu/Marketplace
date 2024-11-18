

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import * as schema from './Schema';

const sql = neon(import.meta.env.VITE_DATABASE_URL);
console.log('Database URL:', import.meta.env.VITE_DATABASE_URL);


const db = drizzle(sql, { schema });

// Function to test the database connection
async function testConnection() {
  try {
    await db.select().from(schema.CarListing).limit(1);
    console.log("Connection successful!");
  } catch (error) {
    console.error("Error testing connection:", error);
  }
}


testConnection();

export default db; 
