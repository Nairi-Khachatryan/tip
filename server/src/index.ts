import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5052;

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
  res.send('Server works');
});

app.listen(PORT, () => {
  console.log(`Server listening at Port ${PORT}`);
  // connectDb();
});
