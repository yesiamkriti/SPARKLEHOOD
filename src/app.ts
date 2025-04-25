import express from 'express';
import incidentRoutes from './routes/incident.routes';
import errorHandler from './middleware/errorHandler';

const app = express();
app.use(express.json());

app.use('/incidents', incidentRoutes);

// Error handler
app.use(errorHandler);

export default app;
