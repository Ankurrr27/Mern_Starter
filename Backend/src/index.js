import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 👇 MIDDLEWARES (order matters)
app.use(cors({
  origin: 'http://localhost:5173',
}));
app.use(express.json());

const startServer = async () => {
  await connectDB(); // wait for DB

  app.get('/', (req, res) => {
    res.send('Hab-Track backend running');
  });

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer();
