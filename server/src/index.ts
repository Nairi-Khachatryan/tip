import { connectDb } from './config/db';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5052;

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
  res.send('Server works')
});

app.listen(PORT, () => {
  console.log(PORT, 'PORT');
  console.log(`Server listening at Port ${PORT}`);
  connectDb();
});
