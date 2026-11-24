//created to avoid many instances
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import {PrismaClient} from '../generated/prismabuild/client.js';
import dotenv from 'dotenv'

dotenv.config()

const adapter = new PrismaMariaDb({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 2,     
    connectTimeout: 20000,    
    acquireTimeout: 20000,  
    idleTimeout: 10000,
    allowPublicKeyRetrieval: true,
    ssl: false

});

const prisma = new PrismaClient({adapter});

prisma.$connect()
  .then(() => console.log('Connected to FreeDB successfully'))
  .catch((err) => console.error('DB Connection Cause:', JSON.stringify(err, null, 2)));

export default prisma;
