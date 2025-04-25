import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app';
import connectDB from './config/db';

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
