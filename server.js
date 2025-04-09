import express from 'express';
import dotenv from 'dotenv';

import jobRoutes from './routes/jobs.js';
import { startProcessor } from './queue/processor.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/jobs', jobRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  startProcessor();
});


