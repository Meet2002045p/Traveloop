import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import tripRoutes from './routes/trips.js';

const app = express();
app.use(cors()); app.use(express.json());
app.get('/health', (_,res)=>res.json({status:'ok', service:'traveloop-api'}));
app.use('/api/auth', authRoutes);
app.use('/api/trips', tripRoutes);
app.listen(4000, ()=>console.log('API running on :4000'));
