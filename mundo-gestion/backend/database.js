import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
});

export async function getUsersService() {
  
    const result = await pool.query('SELECT * FROM usuarios '); 
    console.log(result.rows);
   
}

export async function getOrdenesEnviadas() {
  
    const result = await pool.query('SELECT * FROM ordenes WHERE estado = $1', ['Enviado']); 
    console.log(result.rows);
  
}

export async function getOrdenesService() {
  
    const result = await pool.query('SELECT * FROM ordenes '); 
    return result.rows;
   
}

