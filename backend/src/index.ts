import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';

// Load environment variables from .env file
dotenv.config();

// Prisma client setup
const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT || 3003;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Health check endpoint
app.get('/health', async (req: Request, res: Response) => {
  // Try connecting to the DB as a health check
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.status(200).json({ status: 'ok', db: 'connected' });
  } catch {
    res.status(500).json({ status: 'fail', db: 'not_connected' });
  }
});

// Root endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found' });
});

// Error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Make sure to close Prisma on process exit for clean shutdown
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit();
});
process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});